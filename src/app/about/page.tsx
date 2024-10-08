'use client';

import ImageTextSection, { VariantsITSection } from '../sections/ImageText/ImageText.section';
import StageSection from '../sections/Stage/Stage.section';
import TextSection from '../sections/Text/Text.section';
import styles from './page.module.scss';
import cx from 'classnames';

export default function AboutPage() {
  return (
    <main className={cx(styles['container'], 'page')}>
      <StageSection
        title={'About us'}
        image={{
          url: 'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg',
          width: 700,
          height: 700,
        }}
        text={`Our developers are experts who actively engage in the fields they work in, 
        leveraging real-world experience to deliver fast and efficient solutions. 
        With our hands-on approach, we ensure that the technology we build is tailored to your needs, 
        empowering your business with the tools necessary for success.`}
      >
        <>
          <span>Code Breeze</span> is a small and dynamic company that hires experienced developers. We are mostly
          portuguese, but based in Utrecht, NL.
        </>
      </StageSection>
      <TextSection />
      <ImageTextSection
        title={'Transparent, innovative, dependable'}
        subTitle={'Our Services'}
        text={`At CodeBreeze, we believe in transparency and innovation. 
        Our team is dedicated to providing top-notch coding services with clear terms and exceptional customer support. 
        We are available 24/7 to assist you with any coding needs, making your experience hassle-free.
      `}
        image={{
          url: 'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg',
          width: 700,
          height: 700,
        }}
        variant={VariantsITSection.PRIMARY}
      />
    </main>
  );
}
