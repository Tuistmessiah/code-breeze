'use client';

import ImageTextSection, { VariantsITSection } from '@sections/ImageText/ImageText.section';
import StageSection from '@sections/Stage/Stage.section';
import TextSection from '@sections/Text/Text.section';
import { useTranslation } from '../utils/translation-context';

export default function AboutPage() {
  const { translations } = useTranslation();

  return (
    <main className={'page'}>
      <StageSection
        title={translations?.about.stage.title}
        image={{
          url: '/images/marvin-meyer-1.jpg',
          width: 1500,
          height: 1500,
        }}
        text={translations?.about.stage.text}
      >
        <>
          <span>Code Breeze</span>, {translations?.about.stage.content}
        </>
      </StageSection>
      <TextSection title={translations?.about.textSection.title} paragraphs={translations?.about.textSection.paragraphs} />
      <ImageTextSection
        title={translations?.about.imgTextSection.title}
        subTitle={translations?.about.imgTextSection.subTitle}
        text={`${translations?.about.imgTextSection.text}`}
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
