'use client';

import { useInView } from 'react-intersection-observer';

import Section from '../../components-wrapper/Section/Section.component';

import StyleUtils from '@utils/style.utils';
import style from './Services.module.scss';
const s = StyleUtils.styleMixer(style);

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServicesSectionProps {
  services: ServiceItem[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const scrolledInView1 = useInView({ threshold: 0.6, delay: 100, triggerOnce: true });
  const scrolledInView2 = useInView({ threshold: 0.6, delay: 400, triggerOnce: true });
  const scrolledInView3 = useInView({ threshold: 0.6, delay: 800, triggerOnce: true });
  const scrolledInViews = [scrolledInView1, scrolledInView2, scrolledInView3];

  return (
    <Section className={s('section', 'section')} useBgColor={'primary'}>
      <div className={s('container')}>
        <div className={s('content')}>
          {services.map((service, index) => {
            const { inView, ref } = scrolledInViews[index];
            return (
              <div key={index} className={s('service', 'fade-in', inView ? 'fade-in-visible' : '')} ref={ref}>
                <div className={s('icon-wrapper')}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
