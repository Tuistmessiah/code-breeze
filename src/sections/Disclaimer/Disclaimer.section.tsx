'use client';

import Section from '../../components-wrapper/Section/Section.component';

import StyleUtils from '../../utils/style.utils';
import styles from './Disclaimer.module.scss';
const s = StyleUtils.styleMixer(styles);

export interface DisclaimerSectionProps {
  title: string;
  children: React.ReactNode; // Updated to accept children
}

export default function DisclaimerSection(props: DisclaimerSectionProps) {
  const { title, children } = props;

  return (
    <Section className={s('container')} innerClassName={s('inner-container')} useBgColor="primary">
      <h3>{title}</h3>
      <div className={s('content')}>{children}</div>
    </Section>
  );
}
