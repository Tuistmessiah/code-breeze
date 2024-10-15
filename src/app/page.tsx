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
        <HeaderSection
          title="Make your business website or app </>"
          text="Small or big, meet your business goals with us. No Wordpress or web builders, 100% custom made quality websites. Fast, light, SEO 100/100."
          buttonLabel="What we offer"
          buttonHref="/services"
          imageSrc="/images/code-breeze-3.webp"
        />
        <ServicesSection />
        <ImageTextSection
          title={'Simplicity and efficiency!'}
          subTitle={'Our Services'}
          text={`Specializing in web development, we also provide mobile services, and software solutions.
            We are a small scale operation, meaning our closeness with the client and customization
            capabilities will deliver a high-quality and suitable solution for you!
          `}
          image={{
            width: 700,
            height: 700,
            url: '/images/nordwood-themes-1.jpg',
          }}
          imageToLeft={true}
        />
        <ImageTextSection
          title={'Tech with Business'}
          subTitle={'Our Work'}
          text={`We are developers and get the best of both worlds: an engineer way of thinking for our tech solutions, 
            making them manageable, scalable, efficient... and
            a business mindset to your needs! Hand in hand, they both bring trust and results.
          `}
          image={{
            url: '/images/jakub-zerdzicki-1.jpg',
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
