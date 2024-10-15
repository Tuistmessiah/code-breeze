import ContactSection from '@sections/Contact/Contact.section';
import MapViewSection from '@sections/MapView/MapView.section';

import StyleUtils from '@utils/style.utils';
import styles from './page.module.scss';
const s = StyleUtils.styleMixer(styles);
import cn from 'classnames';

export default function ContactPage() {
  return (
    <main className={cn(s('container-contact'), 'page')}>
      <ContactSection />
      <MapViewSection />
    </main>
  );
}
