'use client';

import { useInView } from 'react-intersection-observer';

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
  const scrolledInViews = services.map((_, index) => useInView({ threshold: 0.6, delay: index * 300, triggerOnce: true }));

  return (
    <section className={s('section', 'section')}>
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
    </section>
  );
}
