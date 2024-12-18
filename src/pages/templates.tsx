import { useTranslation } from '../utils/translation-context';

import CarouselSection from '../sections/Carousel/Carousel.section';
import StageSection from '../sections/Stage/Stage.section';
import ImageTextSection, { VariantsITSection } from '../sections/ImageText/ImageText.section';

import Card from '../components/Card/Card.component';

import StyleUtils from '../utils/style.utils';
import styles from './page.module.scss';
import cn from 'classnames';
const s = StyleUtils.styleMixer(styles);

export default function TemplatesPage() {
  const { translations } = useTranslation();

  const simpleCards = translations.templates.simpleCards.map((card: any, index: number) => (
    <Card key={index} image={card.image} title={card.title} description={card.description} href={card.href} buttonText={card.buttonText} />
  ));

  const modernCards = translations.templates.modernCards.map((card: any, index: number) => (
    <Card key={index} image={card.image} title={card.title} description={card.description} href={card.href} buttonText={card.buttonText} />
  ));

  const dynamicCards = translations.templates.dynamicCards.map((card: any, index: number) => (
    <Card key={index} image={card.image} title={card.title} description={card.description} href={card.href} buttonText={card.buttonText} />
  ));

  return (
    <main className={cn(s('container-templates'), 'page')}>
      <StageSection
        title={translations?.templates.stage.title}
        image={{
          url: '/images/growtika-MHqhLm2_QGk-unsplash.jpg',
          width: 700,
          height: 700,
        }}
        text={translations?.templates.stage.text}
      >
        <>
          @ <span>Code Breeze</span>, {translations?.templates.stage.content}
        </>
      </StageSection>
      <ImageTextSection
        title={translations?.templates.imgTextSection.title}
        subTitle={translations?.templates.imgTextSection.subTitle}
        text={`${translations?.templates.imgTextSection.text}`}
        image={{
          url: '/images/catalog.jpg',
          width: 700,
          height: 700,
        }}
        variant={VariantsITSection.SECONDARY}
      />
      <CarouselSection title={'Simple'} cards={simpleCards} />
      <CarouselSection title={'Modern'} cards={modernCards} />
      {/* <CarouselSection title={'Premium'} cards={[]} /> */}
      <CarouselSection title={'Dynamic 3D'} cards={dynamicCards} />
    </main>
  );
}
