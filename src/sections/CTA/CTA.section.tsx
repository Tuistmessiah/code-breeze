'use client';

import Section from '@components-wrapper/Section/Section.component';
import Button, { ButtonVariants } from '@components/Button/Button.component';

import StyleUtils from '@utils/style.utils';
import styles from './CTA.module.scss';
const s = StyleUtils.styleMixer(styles);

export interface CTASectionProps {
  title: string;
  description: string;
  buttonLabel: string;
}

export default function CTASection({ title, description, buttonLabel }: CTASectionProps) {
  return (
    <Section className={s('container')} innerClassName={s('inner-container')} useBgColor="primary">
      <h2>{title}</h2>
      <p>{description}</p>
      <Button label={buttonLabel} href={'/contact'} variant={ButtonVariants.TERTIARY} />
    </Section>
  );
}
