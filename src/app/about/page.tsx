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
          url: '/images/marvin-meyer-1.jpg',
          width: 1500,
          height: 1500,
        }}
        text={`
          As a small but passionate tech company, we are driven by the principles of transparency, innovation, and freedom. 
          We believe that every idea, no matter how small, 
          has the potential to create real change, and we are committed to nurturing those ideas in an open and collaborative environment.
          `}
      >
        <>
          <span>Code Breeze</span> is a small and dynamic company that hires experienced developers. We are mostly portuguese, but based in Utrecht, NL.
        </>
      </StageSection>
      <TextSection />
      <ImageTextSection
        title={'Transparent, dedicated, free'}
        subTitle={'Our Work Ethic'}
        text={`Transparency and dedication. These are our core values. To provide top-notch coding services with clear terms
           and exceptional customer support. Available 24/7 to assist you with any coding needs, making your experience hassle-free.
           Apart from that, we believe all of us is free, to express what we want and how we want it. There is no space for censonring in
           Code Breeze and everyone is supported to speak their mind. In the end, its the relations we create that make us more that the sum of 
           each individual...
           at Code Breeze, we don’t just create technology – we build connections that last!
      `}
        image={{
          url: '/images/jud-mackrill-1.jpg',
          width: 700,
          height: 700,
        }}
        variant={VariantsITSection.PRIMARY}
      />
    </main>
  );
}
