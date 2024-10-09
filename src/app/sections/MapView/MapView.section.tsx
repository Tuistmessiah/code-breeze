// src/app/sections/Contact/MapViewSection.tsx
'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import Section from '../../components-wrapper/Section/Section.component';

import StyleUtils from '../../utils/style.utils';
import styles from './MapView.module.scss';
const s = StyleUtils.styleMixer(styles);

// Dynamically import the MapComponent with SSR disabled
const MapComponent = dynamic(() => import('./leaflet/MapComponent'), { ssr: false });

export interface MapViewSectionProps {
  empty?: '';
}

export default function MapViewSection(props: MapViewSectionProps) {
  const {} = props;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <Section className={s('container')} innerClassName={s('inner-container')} bgNode={isClient ? <MapComponent /> : null}></Section>;
}
