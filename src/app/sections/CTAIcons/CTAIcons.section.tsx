'use client';

import { useInView } from 'react-intersection-observer';

import Section from '../../components-wrapper/Section/Section.component';
import Button, { ButtonVariants } from '../../components/Button/Button.component';

import { LockOpen1Icon, GearIcon, PlayIcon, UploadIcon, GitHubLogoIcon, CodeIcon, SymbolIcon } from '@radix-ui/react-icons';

import StyleUtils from '../../utils/style.utils';
import styles from './CTAIcons.module.scss';
const s = StyleUtils.styleMixer(styles);

export interface CTAIconsSectionProps {}

export default function CTAIconsSection(props: CTAIconsSectionProps) {
  const {} = props;

  const { ref, inView } = useInView({ threshold: 0.6, delay: 300, triggerOnce: true });

  return (
    <Section className={s('container')} innerClassName={s('inner-container')}>
      <div className={s('text-content', 'fade-in', inView ? 'fade-in-visible' : '')} ref={ref}>
        <h2>Interested in expanding your tools?</h2>
        <p>Discover how you can integrate more in your current toolstack.</p>
        <Button label="Contact Us" variant={ButtonVariants.PRIMARY} />
      </div>

      <div className={s('icons-content')}>
        <div className={s('icon')}>
          <LockOpen1Icon />
        </div>
        <div className={s('icon')}>
          <GearIcon />
        </div>
        <div className={s('icon')}>
          <PlayIcon />
        </div>
        <div className={s('icon')}>
          <UploadIcon />
        </div>
        <div className={s('icon')}>
          <GitHubLogoIcon />
        </div>
        <div className={s('icon')}>
          <CodeIcon />
        </div>
        <div className={s('icon')}>
          <SymbolIcon />
        </div>
        <div className={s('icon')}>
          <GitHubLogoIcon />
        </div>
        <div className={s('icon')}>
          <CodeIcon />
        </div>
        <div className={s('icon')}>
          <SymbolIcon />
        </div>
      </div>
    </Section>
  );
}
