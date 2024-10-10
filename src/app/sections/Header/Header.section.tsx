'use client';

import Image from 'next/image';
import { CodeIcon } from '@radix-ui/react-icons';

import Section from '../../components-wrapper/Section/Section.component';
import Button, { ButtonVariants } from '../../components/Button/Button.component';

import StyleUtils from '../../utils/style.utils';
import style from './Header.module.scss';
const s = StyleUtils.styleMixer(style);

export interface HeaderSectionProps {
  empty?: '';
}

export default function HeaderSection(props: HeaderSectionProps) {
  const {} = props;

  return (
    <Section
      className={s('container')}
      innerClassName={s('inner-container')}
      bgNode={
        <div className={s('bg-container')}>
          <Image src="/images/code-breeze-3.webp" alt="Background" layout="fill" objectFit="cover" />
        </div>
      }
    >
      <h1>{'Make your business website or app </>'}</h1>
      <h3>Small or big, meet your business goals with us. No Wordpress or web builders, 100% custom made quality websites. Fast, light, SEO 100/100.</h3>
      {/* <div className={s('logo', 'fade-in-rotate')}>{'</>'}</div> */}
      {/* <CodeIcon className={s('icon')} /> */}
      <Button label={'What we offer'} variant={ButtonVariants.TERTIARY} href={'/services'} />
    </Section>
  );
}
