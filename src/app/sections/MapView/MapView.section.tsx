'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import Section from '../../components-wrapper/Section/Section.component';

import StyleUtils from '../../utils/style.utils';
import styles from './MapView.module.scss';
const s = StyleUtils.styleMixer(styles);

const markerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
});

export interface MapViewSectionProps {}

export default function MapViewSection(props: MapViewSectionProps) {
  const {} = props;

  return (
    <Section
      className={s('container')}
      innerClassName={s('inner-container')}
      bgNode={
        <MapContainer
          center={[52.0907, 5.1214]} // Coordinates for Utrecht
          zoom={13}
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[52.0986, 5.1355]} icon={markerIcon}>
            <Popup>Code Breeze</Popup>
          </Marker>
        </MapContainer>
      }
    ></Section>
  );
}
