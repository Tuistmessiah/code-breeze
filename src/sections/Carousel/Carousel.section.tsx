'use client';

import { useState } from 'react';

import Section from '../../components-wrapper/Section/Section.component';
import Button from '../../components/Button/Button.component';

import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import StyleUtils from '../../utils/style.utils';
import styles from './Carousel.module.scss';
const s = StyleUtils.styleMixer(styles);

export interface CarouselSectionProps {
  title: string;
  cards: React.ReactNode[];
}

export default function CarouselSection(props: CarouselSectionProps) {
  const { title, cards } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <Section className={s('container')} innerClassName={s('inner-container')}>
      <h2>{title}</h2>
      <div className={s('carousel')} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cards.map((card, index) => (
          <div key={index} className={s('item')}>
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
          {currentIndex != cards.length - 1 && (
            <div className={s('button', 'right')} onClick={handleNext}>
              <ArrowRightIcon />
            </div>
          )}
        </>
      )}
    </Section>
  );
}
