'use client';

import { useInView } from 'react-intersection-observer';

import Section from '@components-wrapper/Section/Section.component';

import StyleUtils from '../../utils/style.utils';
import styles from './TitleSvg.module.scss';
const s = StyleUtils.styleMixer(styles);

export enum VariantsITSection {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export interface TitleSvgSectionProps {
  title: string;
  iconToLeft?: boolean;
  subTitle?: string;
  variant?: VariantsITSection;
  icon?: React.ReactNode;
}

/** Section to introduce the content below. h1 and p container and optional big icon on the side. */
export default function TitleSvgSection(props: TitleSvgSectionProps) {
  const { title, variant = VariantsITSection.SECONDARY, subTitle, iconToLeft, icon } = props;

  const { ref, inView } = useInView({ threshold: 0.6, delay: 300, triggerOnce: true });

  return (
    <Section className={s('container', variant)} innerClassName={s('inner-container', 'fade-in', inView ? 'fade-in-visible' : '')} ref={ref}>
      {<div className={s('icon-wrapper', iconToLeft ? 'icon-left' : '')}>{icon ? icon : ''}</div>}

      <div className={s('content')}>
        <div className={s('header')}>
          <h2 className={s('title')}>{title}</h2>
          {subTitle && <p className={s('subTitle')}> {subTitle}</p>}
        </div>
      </div>
    </Section>
  );
}
