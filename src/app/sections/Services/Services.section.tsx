'use client';

import { RocketIcon } from '@radix-ui/react-icons';
import { GlobeIcon } from '@radix-ui/react-icons';
import { LayersIcon } from '@radix-ui/react-icons';

import StyleUtils from '../../utils/style.utils';
import style from './Services.module.scss';
const s = StyleUtils.styleMixer(style);

export interface ServicesSectionProps {}

export default function ServicesSection(props: ServicesSectionProps) {
  const {} = props;

  /**
     * Services Section: List core services you offer:
            Digital Solutions
            Consulting
            Project Management
     */
  return (
    <section className={s('section', 'section')}>
      <div className={s('container')}>
        <h2>Our Services</h2>
        <div className={s('content')}>
          <div className={s('service')}>
            <div className={s('icon-wrapper')}>
              <GlobeIcon />
            </div>
            <h3>Web Development</h3>
            <p>Building scalable and efficient websites tailored for your needs</p>
          </div>
          <div className={s('service')}>
            <div className={s('icon-wrapper')}>
              <RocketIcon />
            </div>
            <h3>Mobile Apps</h3>
            <p>Building scalable and efficient websites tailored for your needs</p>
          </div>
          <div className={s('service')}>
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
