'use client';

import CTASection from '@sections/CTA/CTA.section';
import ImageTextFullSection from '@sections/ImageTextFull/ImageTextFull.section';
import StageSection from '@sections/Stage/Stage.section';
import { useTranslation } from '../utils/translation-context';

export default function ServicesPage() {
  const { translations } = useTranslation();

  return (
    <main className={'page'}>
      {/* Stage Section */}
      <StageSection
        title={translations?.services.stage.title}
        image={{
          url: '/images/hazel-z-1.jpg',
          width: 700,
          height: 700,
        }}
        text={translations?.services.stage.text}
      >
        <>
          @ <span>Code Breeze</span>, {translations?.services.stage.content}
        </>
      </StageSection>

      {/* Web Development Section */}
      <ImageTextFullSection
        image={{
          url: '/images/growtika-website.jpg',
          width: 1500,
          height: 800,
        }}
      >
        <>
          <h1>{translations?.services.webDevelopment.title}</h1>
          {translations?.services.webDevelopment.content.map((section: any, index: number) =>
            Array.isArray(section) ? (
              <ul key={index}>
                {section.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.split(': ')[0]}: </strong>
                    {item.split(': ')[1]}
                  </li>
                ))}
              </ul>
            ) : (
              <p key={index}>{section}</p>
            )
          )}
        </>
      </ImageTextFullSection>

      {/* Web App Section */}
      <ImageTextFullSection
        imageToRight
        image={{
          url: '/images/jakub-zerdzicki-mobile.jpg',
          width: 1500,
          height: 1500,
        }}
      >
        <>
          <h1>{translations?.services.webApp.title}</h1>
          {translations?.services.webApp.content.map((section: any, index: number) =>
            Array.isArray(section) ? (
              <ul key={index}>
                {section.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.split(': ')[0]}: </strong>
                    {item.split(': ')[1]}
                  </li>
                ))}
              </ul>
            ) : (
              <p key={index}>{section}</p>
            )
          )}
        </>
      </ImageTextFullSection>

      {/* Cloud Solutions Section */}
      <ImageTextFullSection
        image={{
          url: '/images/growtika-cloud-dev.jpg',
          width: 1500,
          height: 1500,
        }}
      >
        <>
          <h1>{translations?.services.cloudSolutions.title}</h1>
          {translations?.services.cloudSolutions.content.map((section: any, index: number) =>
            Array.isArray(section) ? (
              <ul key={index}>
                {section.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.split(': ')[0]}: </strong>
                    {item.split(': ')[1]}
                  </li>
                ))}
              </ul>
            ) : (
              <p key={index}>{section}</p>
            )
          )}
        </>
      </ImageTextFullSection>

      {/* CTA Section */}
      <CTASection title={translations?.services.cta.title} description={translations?.services.cta.description} buttonLabel={translations?.services.cta.buttonLabel} />
    </main>
  );
}
