'use client';

// import Image from 'next/image';

import Section from '@components-wrapper/Section/Section.component';
import Button, { ButtonVariants } from '@components/Button/Button.component';

import { TriangleUpIcon, CornerBottomLeftIcon, PlusIcon } from '@radix-ui/react-icons';
import LogoCompleteNegativeSvg from '../../assets/svg/logo-complete-negative.svg';

import StyleUtils from '@utils/style.utils';
import style from './Header.module.scss';
const s = StyleUtils.styleMixer(style);

// ? Was using a background image. Think of new design.

export interface HeaderSectionProps {
  empty?: '';
  text: string;
  buttonLabel: string;
  buttonHref: string;
  imageSrc: string;
}

const usedIcons = [TriangleUpIcon, CornerBottomLeftIcon, PlusIcon];
const arrayOfIcons = [...usedIcons, ...usedIcons, ...usedIcons, ...usedIcons, ...usedIcons, ...usedIcons, ...usedIcons];

function generateRandomStyles() {
  const randomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
  const range = 200;

  return [...arrayOfIcons, ...arrayOfIcons].map((Icon) => (
    <Icon
      style={{
        transform: `translate(${randomValue(-range, range)}vw, ${randomValue(-range, range)}vh) scale(${randomValue(1, 4)})`,
        color: `hsl(${randomValue(200, 240)}, ${randomValue(60, 100)}%, ${randomValue(60, 80)}%)`,
      }}
    />
  ));
}

export default function HeaderSection(props: HeaderSectionProps) {
  const { text, buttonLabel, buttonHref, imageSrc } = props;

  return (
    <Section
      className={s('container')}
      innerClassName={s('inner-container')}
      // bgNode={
      //   <div className={s('bg-container')}>
      //     <Image src={imageSrc} alt="Background" layout="fill" objectFit="cover" />
      //   </div>
      // }
    >
      <div className={s('loose-icons')}>{generateRandomStyles()}</div>
      <LogoCompleteNegativeSvg />
      <h3>{text}</h3>

      <Button label={buttonLabel} variant={ButtonVariants.TERTIARY} href={buttonHref} />
    </Section>
  );
}
