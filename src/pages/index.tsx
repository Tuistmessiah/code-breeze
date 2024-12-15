import { useTranslation } from '../utils/translation-context';

import AboutSection from '@sections/About/About.section';
import CTASection from '@sections/CTA/CTA.section';
import HeaderSection from '@sections/Header/Header.section';
import ServicesSection from '@sections/Services/Services.section';
import ImageTextSection from '@sections/ImageText/ImageText.section';
import CTAIconsSection from '@sections/CTAIcons/CTAIcons.section';

import { RocketIcon } from '@radix-ui/react-icons';
import { GlobeIcon } from '@radix-ui/react-icons';
import { LayersIcon } from '@radix-ui/react-icons';

export default function HomePage() {
  const { translations } = useTranslation();

  const services = translations?.home['services-header'].map((service: any) => ({
    title: service.title,
    description: service.description,
  }));

  return (
    <>
      <main className={'page'}>
        <HeaderSection
          text={translations?.home.header.description}
          buttonLabel={translations?.home.header.button}
          buttonHref="/services"
          imageSrc="/images/code-breeze-3.webp"
        />
        <ServicesSection
          services={[
            {
              ...services[0],
              icon: <GlobeIcon />,
            },
            {
              ...services[1],

              icon: <RocketIcon />,
            },
            {
              ...services[2],

              icon: <LayersIcon />,
            },
          ]}
        />
        <ImageTextSection
          title={translations?.home.services.title}
          subTitle={translations?.home.services.subtitle}
          text={translations?.home.services.description}
          image={{
            width: 700,
            height: 700,
            url: '/images/nordwood-themes-1.jpg',
          }}
          imageToLeft={true}
        />
        <ImageTextSection
          title={translations?.home.work.title}
          subTitle={translations?.home.work.subtitle}
          text={translations?.home.work.description}
          image={{
            url: '/images/jakub-zerdzicki-1.jpg',
            width: 700,
            height: 700,
          }}
        />
        <AboutSection title={translations?.home.about.title} description={translations?.home.about.description} buttonLabel={translations?.home.about.button} />
        <CTAIconsSection
          title={translations?.home.ctaIcons.title}
          description={translations?.home.ctaIcons.description}
          buttonLabel={translations?.home.ctaIcons.buttonLabel}
        />
        <CTASection title={translations?.home.cta.title} description={translations?.home.cta.description} buttonLabel={translations?.home.cta.buttonLabel} />
      </main>
    </>
  );
}
