'use client';

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import { Asset } from '@interfaces/assets.interface';

import Section from '@components-wrapper/Section/Section.component';
import Button, { ButtonVariants } from '@components/Button/Button.component';

import StyleUtils from '@utils/style.utils';
import styles from './ImageText.module.scss';
const s = StyleUtils.styleMixer(styles);

export enum VariantsITSection {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export interface ImageTextSectionProps {
  title: string;
  image: Asset;
  imageToLeft?: boolean;
  subTitle?: string;
  text?: string;
  variant?: VariantsITSection;
  buttonLabel?: string;
  buttonAction?: () => void;
}

export default function ImageTextSection(props: ImageTextSectionProps) {
  const { title, variant = VariantsITSection.SECONDARY, subTitle, text, image, imageToLeft, buttonLabel, buttonAction } = props;

  const { ref, inView } = useInView({ threshold: 0.6, delay: 300, triggerOnce: true });

  return (
    <Section className={s('container', variant)} innerClassName={s('inner-container', 'fade-in', inView ? 'fade-in-visible' : '')} ref={ref}>
      {image?.url && (
        <div className={s('image-wrapper', imageToLeft ? 'image-left' : '')}>
          <Image src={image.url} alt={((image?.title || image?.description) ?? title) as string} width={image.width} height={image.height} className={s('image')} />
        </div>
      )}

      <div className={s('content')}>
        <div className={s('header')}>
          {subTitle && <h4 className={s('subTitle')}> {subTitle}</h4>}
          <h2 className={s('title')}>{title}</h2>
        </div>

        {text && <p>{text}</p>}

        {buttonLabel && (
          <Button
            label={buttonLabel}
            variant={ButtonVariants.TERTIARY}
            onClick={() => {
              if (buttonAction) buttonAction();
            }}
          />
        )}
      </div>
    </Section>
  );
}
