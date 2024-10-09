'use client';

import Image from 'next/image';

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
          <Image src="https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg" alt="Background" layout="fill" objectFit="cover" />
        </div>
      }
    >
      <h2>Innovative Solutions, Tailored for You.</h2>
      <h3>Delivering expertise and flexibility to meet your business goals.</h3>
      <Button label={'What we offer'} variant={ButtonVariants.TERTIARY} href={'/services'} />
    </Section>
  );
}
