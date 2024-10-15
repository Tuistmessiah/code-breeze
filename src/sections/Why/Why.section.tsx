import Image from 'next/image';

import { Asset } from '@interfaces/assets.interface';

import Section from '@components-wrapper/Section/Section.component';

import StyleUtils from '@utils/style.utils';
import styles from './Why.module.scss';
const s = StyleUtils.styleMixer(styles);

export interface WhySectionProps {
  title: string;
  subTitle?: string;
  text?: string;
  image: Asset;
  imageToLeft?: boolean;
}

export default function WhySection(props: WhySectionProps) {
  const {} = props;

  return (
    <Section className={s('container')} innerClassName={s('inner-container')}>
      <h2>Why Us</h2>
      <div className={s('content')}>
        <div className={s('pair')}>
          <Image src="https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg" alt="Background" layout="fill" objectFit="cover" objectPosition="center" />
          <div className={s('info')}>
            <h4>Our Services</h4>
            <h2>Simplicity and efficiency!</h2>
            <p>
              We specialize in web development, mobile app development, and software solutions. Our team of experts works closely with clients to understand their unique
              needs and deliver high-quality services.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className={s('pair')}>B</div>
      </div>
    </Section>
  );
}
