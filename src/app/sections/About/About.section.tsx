'use client';

import Button, { ButtonVariants } from '../../components/Button/Button.component';
import styles from './About.module.scss';
import cn from 'classnames';

export interface AboutSectionProps {
  empty?: '';
}

export default function AboutSection(props: AboutSectionProps) {
  const {} = props;

  return (
    <section className={cn(styles['section'], 'section')}>
      <div className={styles['container']}>
        <h2>About Us</h2>
        <div className={styles['content']}>
          <p>Whether you need a single expert or an extended team, we’re here to help. Built to scale, we deliver top-quality results—big or small.</p>
          <Button label="Read more" href={'/about'} variant={ButtonVariants.TERTIARY} />
        </div>
      </div>
    </section>
  );
}
