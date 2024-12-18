'use client';

import Section from '@components-wrapper/Section/Section.component';

import StyleUtils from '@utils/style.utils';
import styles from './Text.module.scss';
const s = StyleUtils.styleMixer(styles);

export interface TextSectionProps {
  title: string;
  paragraphs: string[];
}

export default function TextSection({ title, paragraphs }: TextSectionProps) {
  return (
    <Section className={s('container')} innerClassName={s('inner-container')} useBgColor="secondary">
      <h2>{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </Section>
  );
}
