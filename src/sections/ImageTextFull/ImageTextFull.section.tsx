'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import Section from '@components-wrapper/Section/Section.component';

import StyleUtils from '@utils/style.utils';
import styles from './ImageTextFull.module.scss';
import { Asset } from '@interfaces/assets.interface';
const s = StyleUtils.styleMixer(styles);

export interface ImageTextFullSectionProps {
  children: ReactNode;
  image: Asset;
  imageToRight?: boolean;
}

export default function ImageTextFullSection(props: ImageTextFullSectionProps) {
  const { children, image, imageToRight } = props;

  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <Section className={s('container')} innerClassName={s('inner-container', 'fade-in', inView ? 'fade-in-visible' : '')} useBgColor="primary" ref={ref}>
      <div className={s('content', imageToRight ? 'image-right' : '')}>
        <div className={s('image-wrapper')}>
          {image?.url && <Image src={image.url} alt={(image?.title || image?.description) as string} width={image.width} height={image.height} className={s('image')} />}
        </div>
        <div className={s('text-content')}>{children}</div>
      </div>
    </Section>
  );
}
