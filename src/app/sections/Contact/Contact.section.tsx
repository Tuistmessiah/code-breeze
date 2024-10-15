'use client';

import { FormEvent, useEffect, useState } from 'react';

import Section from '../../components-wrapper/Section/Section.component';
import Button, { ButtonVariants } from '../../components/Button/Button.component';
import Input, { VariantsInput } from '../../components/Input/Input.component';

import StyleUtils from '../../utils/style.utils';
import styles from './Contact.module.scss';
const s = StyleUtils.styleMixer(styles);

export interface ContactSectionProps {
  empty?: '';
}

export default function ContactSection(props: ContactSectionProps) {
  const {} = props;

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'sent-but' | 'error'>('idle');

  useEffect(() => {
    if (status === 'sent' || status === 'error' || status === 'sent-but') {
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  }, [status]);

  return (
    <Section className={s('container')} innerClassName={s('inner-container')}>
      <h1>Contact Us</h1>
      <div className={s('content')}>
        <div className={s('contact-form')}>
          <form onSubmit={handleSubmit}>
            <Input placeholder="Name" id="name" variant={VariantsInput.SECONDARY}></Input>
            <Input placeholder="Email" id="email" variant={VariantsInput.SECONDARY}></Input>
            <Input isTextarea={true} placeholder="Message" id="message" variant={VariantsInput.SECONDARY}></Input>
            <Button className={s('button', status)} label={buttonLabel(status)} variant={ButtonVariants.TERTIARY} type="submit" />
          </form>
        </div>
        <div className={s('contact-details')}>
          <h3>Details</h3>
          <div className={s('info')}>
            <p>Office Address</p>
            <p>
              <strong>
                <a href="https://www.google.com/maps?q=52.0986,5.1355" target="_blank" rel="noopener noreferrer">
                  Poortstraat, Utrecht, The Netherlands
                </a>
              </strong>
            </p>
          </div>
          <div className={s('info')}>
            <p>Phone</p>
            <p>
              <strong>+351 935886183</strong>
            </p>
          </div>
          <div className={s('info')}>
            <p>Email</p>
            <p>
              <strong>
                <a href="mailto:pedro.mpl.caetano@gmail.com">pedro.mpl.caetano@gmail.com</a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;

    const data = {
      name: (form as any).name.value,
      email: (form as any).email.value,
      message: (form as any).message.value,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setStatus('sent');
      } else {
        setStatus('sent-but');
      }
    } catch (error) {
      setStatus('error');
    }
  }
}

/** Labels for button based on status */
function buttonLabel(status: 'idle' | 'sending' | 'sent' | 'sent-but' | 'error') {
  switch (status) {
    case 'idle':
      return 'Send';
    case 'sending':
      return 'Sending';
    case 'error':
      return 'Try again!';
    case 'sent':
      return 'Thank you!';
    case 'sent-but':
      return 'Message sent! Is your email valid?';
    default:
      return 'idle';
  }
}
