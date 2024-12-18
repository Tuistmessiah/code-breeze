'use client';

import { useEffect, useState } from 'react';

import Section from '../../components-wrapper/Section/Section.component';

import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import StyleUtils from '../../utils/style.utils';
import styles from './Carousel.module.scss';
const s = StyleUtils.styleMixer(styles);

export interface CarouselSectionProps {
  title: string;
  cards: React.ReactNode[];
  isHalfScreen?: boolean;
}

export default function CarouselSection(props: CarouselSectionProps) {
  const { title, cards, isHalfScreen } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(StyleUtils.breakpoint('l', 'max'));
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <Section className={s('container')} innerClassName={s('inner-container')} useBgColor="primary">
      <h2>{title}</h2>
      <div className={s('carousel')} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cards.map((card, index) => (
          <div key={index} className={s('item', { 'half-screen': !!isHalfScreen })}>
            {card}
          </div>
        ))}
      </div>
      {cards.length > 1 && (
        <>
          {currentIndex != 0 && (
            <div className={s('button', 'left')} onClick={handlePrev}>
              <ArrowLeftIcon />
            </div>
          )}
          {/* In the css, after breakpoint "l", cards are displayed as 100% width which affects display of the Arrow Right */}
          {currentIndex < (isHalfScreen && !isMobile ? cards.length / 2 : cards.length) - 1 && (
            <div className={s('button', 'right')} onClick={handleNext}>
              <ArrowRightIcon />
            </div>
          )}
        </>
      )}
    </Section>
  );
}
