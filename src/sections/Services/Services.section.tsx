'use client';

import { useInView } from 'react-intersection-observer';

import { RocketIcon } from '@radix-ui/react-icons';
import { GlobeIcon } from '@radix-ui/react-icons';
import { LayersIcon } from '@radix-ui/react-icons';

import StyleUtils from '@utils/style.utils';
import style from './Services.module.scss';
const s = StyleUtils.styleMixer(style);

// div bg
// transformar esta DIV. transofrm L translateY 100% -> X%
// ou maior ou repeat
// scroll magic

export interface ServicesSectionProps {
  empty?: '';
}

export default function ServicesSection(props: ServicesSectionProps) {
  const {} = props;

  const scrolledInView1 = useInView({ threshold: 0.6, delay: 100, triggerOnce: true });
  const scrolledInView2 = useInView({ threshold: 0.6, delay: 400, triggerOnce: true });
  const scrolledInView3 = useInView({ threshold: 0.6, delay: 800, triggerOnce: true });

  /**
     * Services Section: List core services you ofdfer:
            Digital Solutions
            Consulting
            Project Management
     */
  return (
    <section className={s('section', 'section')}>
      <div className={s('container')}>
        {/* <h2 className={s('fade-in', inView ? 'fade-in-visible' : '')} ref={ref}>
          Our Services
        </h2> */}
        <div className={s('content')}>
          <div className={s('service', 'fade-in', scrolledInView1.inView ? 'fade-in-visible' : '')} ref={scrolledInView1.ref}>
            <div className={s('icon-wrapper')}>
              <GlobeIcon />
            </div>
            <h3>Web Development</h3>
            <p>Building scalable and efficient websites tailored for your needs</p>
          </div>
          <div className={s('service', 'fade-in', scrolledInView2.inView ? 'fade-in-visible' : '')} ref={scrolledInView2.ref}>
            <div className={s('icon-wrapper')}>
              <RocketIcon />
            </div>
            <h3>Mobile Apps</h3>
            <p>Building scalable and efficient websites tailored for your needs</p>
          </div>
          <div className={s('service', 'fade-in', scrolledInView3.inView ? 'fade-in-visible' : '')} ref={scrolledInView3.ref}>
            <div className={s('icon-wrapper')}>
              <LayersIcon />
            </div>
            <h3>Cloud Solutions</h3>
            <p>Building scalable and efficient websites tailored for your needs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
