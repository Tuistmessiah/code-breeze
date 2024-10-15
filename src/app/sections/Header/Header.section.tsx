'use client';

import Image from 'next/image';

import Section from '../../components-wrapper/Section/Section.component';
import Button, { ButtonVariants } from '../../components/Button/Button.component';

import StyleUtils from '../../utils/style.utils';
import style from './Header.module.scss';
const s = StyleUtils.styleMixer(style);

export interface HeaderSectionProps {
  empty?: '';
  title: string;
  text: string;
  buttonLabel: string;
  buttonHref: string;
  imageSrc: string;
}

export default function HeaderSection(props: HeaderSectionProps) {
  const { title, text, buttonLabel, buttonHref, imageSrc } = props;

  return (
    <Section
      className={s('container')}
      innerClassName={s('inner-container')}
      bgNode={
        <div className={s('bg-container')}>
          <Image src={imageSrc} alt="Background" layout="fill" objectFit="cover" />
        </div>
      }
    >
      <h1>{title}</h1>
      <h3>{text}</h3>
      <Button label={buttonLabel} variant={ButtonVariants.TERTIARY} href={buttonHref} />
    </Section>
  );
}
