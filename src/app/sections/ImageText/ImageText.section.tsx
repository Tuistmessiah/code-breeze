'use client';

import Image from 'next/image';

import { Asset } from '../../interfaces/assets.interface';

import Section from '../../components-wrapper/Section/Section.component';
import Button, { ButtonVariants } from '../../components/Button/Button.component';

import StyleUtils from '../../utils/style.utils';
import styles from './ImageText.module.scss';
const s = StyleUtils.styleMixer(styles);

export interface ImageTextSectionProps {
  title: string;
  subTitle?: string;
  text?: string;
  image: Asset;
  imageToLeft?: boolean;
}

export default function ImageTextSection(props: ImageTextSectionProps) {
  const { title, subTitle, text, image, imageToLeft } = props;

  return (
    <Section className={s('container')} innerClassName={s('inner-container')}>
      {image?.url && (
        <div className={s('image-wrapper', imageToLeft ? 'image-left' : '')}>
          <Image src={image.url} alt={(image?.title || image?.description) as string} width={image.width} height={image.height} className={s('image')} />
        </div>
      )}

      <div className={s('content')}>
        <div className={s('header')}>
          {subTitle && <h4 className={s('subTitle')}> {subTitle}</h4>}
          <h2 className={s('title')}>{title}</h2>
        </div>

        {text && <p>{text}</p>}

        <Button
          label={'Learn More'}
          variant={ButtonVariants.TERTIARY}
          onClick={() => {
            console.log('do something!');
          }}
        />
      </div>
    </Section>
  );
}
