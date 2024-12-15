import ContactSection from '@sections/Contact/Contact.section';
import MapViewSection from '@sections/MapView/MapView.section';

import { useTranslation } from '../utils/translation-context';

import StyleUtils from '@utils/style.utils';
import styles from './page.module.scss';
const s = StyleUtils.styleMixer(styles);
import cn from 'classnames';

export default function ContactPage() {
  const { translations } = useTranslation();

  return (
    <main className={cn(s('container-contact'), 'page')}>
      <ContactSection title={translations?.contact.title} contactForm={translations?.contact.contactForm} contactDetails={translations?.contact.contactDetails} />
      <MapViewSection />
    </main>
  );
}
