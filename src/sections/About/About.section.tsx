'use client';

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
    <section className={cn(styles['section'], 'section')}>
      <div className={styles['container']}>
        <h2>{title}</h2>
        <div className={styles['content']}>
          <p>{description}</p>
          <Button label={buttonLabel} href={'/about'} variant={ButtonVariants.TERTIARY} />
        </div>
      </div>
    </section>
  );
}
