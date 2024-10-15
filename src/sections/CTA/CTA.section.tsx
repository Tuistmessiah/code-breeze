'use client';

import Section from '@components-wrapper/Section/Section.component';
import Button, { ButtonVariants } from '@components/Button/Button.component';

import StyleUtils from '@utils/style.utils';
import styles from './CTA.module.scss';
const s = StyleUtils.styleMixer(styles);

export interface CTASectionProps {
  empty?: '';
}

export default function CTASection(props: CTASectionProps) {
  const {} = props;

  return (
    <Section className={s('container')} innerClassName={s('inner-container')}>
      <h2>Still unsure?</h2>
      <p>Just give us a call or leave a quick message!</p>
      <Button label={'Quick Contact'} href={'/contact'} variant={ButtonVariants.TERTIARY} />
    </Section>
  );
}
