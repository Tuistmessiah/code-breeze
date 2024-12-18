'use client';

import Section from '../../components-wrapper/Section/Section.component';
import Button, { ButtonVariants } from '@components/Button/Button.component';

import styles from './About.module.scss';
import cn from 'classnames';

export interface AboutSectionProps {
  title: string;
  description: string;
  buttonLabel: string;
}

export default function AboutSection({ title, description, buttonLabel }: AboutSectionProps) {
  return (
    <Section className={cn(styles['section'], 'section')} useBgColor="primary">
      <div className={styles['container']}>
        <h2>{title}</h2>
        <div className={styles['content']}>
          <p>{description}</p>
          <Button label={buttonLabel} href={'/about'} variant={ButtonVariants.TERTIARY} />
        </div>
      </div>
    </Section>
  );
}
