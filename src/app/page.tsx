import AboutSection from './sections/About/About.section';
import CTASection from './sections/CTA/CTA.section';
import HeaderSection from './sections/Header/Header.section';
import ServicesSection from './sections/Services/Services.section';
import ImageTextSection from './sections/ImageText/ImageText.section';
import CTAIconsSection from './sections/CTAIcons/CTAIcons.section';

import styles from './page.module.scss';
import cx from 'classnames';

export default function HomePage() {
  return (
    <>
      <main className={cx(styles['container'], 'page')}>
        <HeaderSection />
        <ServicesSection />
        <ImageTextSection
          title={'Simplicity and efficiency!'}
          subTitle={'Our Services'}
          text={`We specialize in web development, mobile app development, and software solutions.
          Our team of experts works closely with clients to understand their unique needs and deliver high-quality services.
          `}
          image={{
            url: 'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg',
            width: 700,
            height: 700,
          }}
          imageToLeft={true}
        />
        <ImageTextSection
          title={'Simplicity and efficiency!'}
          subTitle={'Our Services'}
          text={`We specialize in web development, mobile app development, and software solutions.
          Our team of experts works closely with clients to understand their unique needs and deliver high-quality services.
          `}
          image={{
            url: 'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg',
            width: 700,
            height: 700,
          }}
        />
        <AboutSection />
        <CTAIconsSection />
        <CTASection />
      </main>
    </>
  );
}
