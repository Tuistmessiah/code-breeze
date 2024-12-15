'use client';

import { FormEvent, useEffect, useState } from 'react';

import Section from '@components-wrapper/Section/Section.component';
import Button, { ButtonVariants } from '@components/Button/Button.component';
import Input, { VariantsInput } from '@components/Input/Input.component';

import StyleUtils from '@utils/style.utils';
import styles from './Contact.module.scss';
const s = StyleUtils.styleMixer(styles);

export interface ContactSectionProps {
  title: string;
  contactForm: {
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    buttonLabels: {
      idle: string;
      sending: string;
      error: string;
      sent: string;
      'sent-but': string; // Use quotes for keys with special characters
    };
  };
  contactDetails: {
    detailsTitle: string;
    office: { label: string; address: string; link: string };
    phone: { label: string; number: string };
    email: { label: string; address: string };
  };
}

export default function ContactSection({ title, contactForm, contactDetails }: ContactSectionProps) {
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
      <h1>{title}</h1>
      <div className={s('content')}>
        <div className={s('contact-form')}>
          <form onSubmit={handleSubmit}>
            <Input placeholder={contactForm.namePlaceholder} id="name" variant={VariantsInput.SECONDARY} />
            <Input placeholder={contactForm.emailPlaceholder} id="email" variant={VariantsInput.SECONDARY} />
            <Input isTextarea={true} placeholder={contactForm.messagePlaceholder} id="message" variant={VariantsInput.SECONDARY} />
            <Button className={s('button', status)} label={contactForm.buttonLabels[status]} variant={ButtonVariants.TERTIARY} type="submit" />
          </form>
        </div>
        <div className={s('contact-details')}>
          <h3>{contactDetails.detailsTitle}</h3>
          <div className={s('info')}>
            <p>{contactDetails.office.label}</p>
            <p>
              <strong>
                <a href={contactDetails.office.link} target="_blank" rel="noopener noreferrer">
                  {contactDetails.office.address}
                </a>
              </strong>
            </p>
          </div>
          <div className={s('info')}>
            <p>{contactDetails.phone.label}</p>
            <p>
              <strong>{contactDetails.phone.number}</strong>
            </p>
          </div>
          <div className={s('info')}>
            <p>{contactDetails.email.label}</p>
            <p>
              <strong>
                <a href={`mailto:${contactDetails.email.address}`}>{contactDetails.email.address}</a>
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
