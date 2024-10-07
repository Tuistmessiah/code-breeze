'use client';

import Section from '../../components-wrapper/Section/Section.component';
import Button, { ButtonVariants } from '../../components/Button/Button.component';

import { LockOpen1Icon, GearIcon, PlayIcon, UploadIcon, GitHubLogoIcon, CodeIcon, SymbolIcon } from '@radix-ui/react-icons';

import StyleUtils from '../../utils/style.utils';
import styles from './CTAIcons.module.scss';
const s = StyleUtils.styleMixer(styles);
import cn from 'classnames';

export interface CTAIconsSectionProps {}

export default function CTAIconsSection(props: CTAIconsSectionProps) {
  const {} = props;

  return (
    <Section className={s('container')} innerClassName={s('inner-container')}>
      <div className={s('text-content')}>
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
