'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { Asset } from '../../interfaces/assets.interface';

import Section from '../../components-wrapper/Section/Section.component';

import StyleUtils from '../../utils/style.utils';
import styles from './Stage.module.scss';
const s = StyleUtils.styleMixer(styles);

export interface StageSectionProps {
  image: Asset;
  title: string;
  text: string;
  children: ReactNode;
}

/**
 * @param children react node, where "span" had a different color
 */
export default function StageSection(props: StageSectionProps) {
  const { title, text, image, children } = props;

  return (
    <Section
      className={s('container')}
      innerClassName={s('inner-container')}
      bgNode={
        <div className={s('bg-container')}>
          <Image src={image.url + ''} alt="Background" layout="fill" objectFit="cover" objectPosition="center" />
        </div>
      }
    >
      <h1>{title}</h1>

      <h5>{children}</h5>
      <p>{text}</p>
    </Section>
  );
}
