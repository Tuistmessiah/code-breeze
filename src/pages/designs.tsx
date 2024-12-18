import { useTranslation } from '../utils/translation-context';

import CarouselSection from '../sections/Carousel/Carousel.section';
import StageSection from '../sections/Stage/Stage.section';
import ImageTextSection, { VariantsITSection } from '../sections/ImageText/ImageText.section';
import TitleSvgSection from '../sections/TitleSvg/TitleSvg.section';
import CTASection from '../sections/CTA/CTA.section';
import DisclaimerSection from '../sections/Disclaimer/Disclaimer.section';

import Card from '../components/Card/Card.component';

import { CheckIcon, StarIcon } from '@radix-ui/react-icons';

import cn from 'classnames';
import styles from './page.module.scss';
import StyleUtils from '../utils/style.utils';
const s = StyleUtils.styleMixer(styles);

export default function DesignsPage() {
  const { translations } = useTranslation();

  const simpleCards = translations.designs.simpleCards.map((card: any, index: number) => (
    <Card key={index} image={card.image} title={card.title} description={card.description} href={card.href} buttonText={card.buttonText} />
  ));

  const modernCards = translations.designs.modernCards.map((card: any, index: number) => (
    <Card key={index} image={card.image} title={card.title} description={card.description} href={card.href} buttonText={card.buttonText} />
  ));

  const dynamicCards = translations.designs.dynamicCards.map((card: any, index: number) => (
    <Card key={index} image={card.image} title={card.title} description={card.description} href={card.href} buttonText={card.buttonText} />
  ));

  const themeBusinessCards = translations.designs.themeBusinessCards.map((card: any, index: number) => (
    <Card key={index} image={card.image} title={card.title} description={card.description} href={card.href} buttonText={card.buttonText} />
  ));

  const themeCreativeCards = translations.designs.themeCreativeCards.map((card: any, index: number) => (
    <Card key={index} image={card.image} title={card.title} description={card.description} href={card.href} buttonText={card.buttonText} />
  ));

  const themeCommerceCards = translations.designs.themeCommerceCards.map((card: any, index: number) => (
    <Card key={index} image={card.image} title={card.title} description={card.description} href={card.href} buttonText={card.buttonText} />
  ));

  const themeEventsCards = translations.designs.themeEventsCards.map((card: any, index: number) => (
    <Card key={index} image={card.image} title={card.title} description={card.description} href={card.href} buttonText={card.buttonText} />
  ));

  return (
    <main className={cn(s('container-designs'), 'page')}>
      <StageSection
        title={translations?.designs.stage.title}
        image={{
          url: '/images/growtika-MHqhLm2_QGk-unsplash.jpg',
          width: 700,
          height: 700,
        }}
        text={translations?.designs.stage.text}
      >
        <>
          @ <span>Code Breeze</span>, {translations?.designs.stage.content}
        </>
      </StageSection>
      <TitleSvgSection
        title={translations?.designs.titleSvgPremium.title}
        subTitle={translations?.designs.titleSvgPremium.subTitle}
        icon={<StarIcon />}
        iconToLeft={true}
      />
      <>
        <CarouselSection title={translations.designs.carousel.premium.business} cards={themeBusinessCards} isHalfScreen={true} />
        <CarouselSection title={translations.designs.carousel.premium.creative} cards={themeCreativeCards} isHalfScreen={true} />
        <CarouselSection title={translations.designs.carousel.premium.commerce} cards={themeCommerceCards} isHalfScreen={true} />
        <CarouselSection title={translations.designs.carousel.premium.events} cards={themeEventsCards} isHalfScreen={true} />
      </>
      <DisclaimerSection title={translations.designs.disclaimer.title}>
        <p>{translations.designs.disclaimer.paragraph1}</p>
        <p>
          <a href={translations.designs.disclaimer.paragraph2.link} target="_blank">
            {translations.designs.disclaimer.paragraph2.text}
          </a>{' '}
          <span>{translations.designs.disclaimer.paragraph2.note}</span>
        </p>
      </DisclaimerSection>
      <TitleSvgSection title={translations?.designs.titleSvgPortfolio.title} subTitle={translations?.designs.titleSvgPortfolio.subTitle} icon={<CheckIcon />} />
      <>
        <CarouselSection title={translations.designs.carousel.portfolio.simple} cards={simpleCards} />
        <CarouselSection title={translations.designs.carousel.portfolio.modern} cards={modernCards} />
        <CarouselSection title={translations.designs.carousel.portfolio.dynamic} cards={dynamicCards} />
      </>
      <ImageTextSection
        title={translations?.designs.imgTextSection.title}
        subTitle={translations?.designs.imgTextSection.subTitle}
        text={`${translations?.designs.imgTextSection.text}`}
        image={{
          url: '/images/catalog.jpg',
          width: 700,
          height: 700,
        }}
        variant={VariantsITSection.SECONDARY}
      />

      <CTASection title={translations?.designs.cta.title} description={translations?.designs.cta.description} buttonLabel={translations?.designs.cta.buttonLabel} />
    </main>
  );
}
