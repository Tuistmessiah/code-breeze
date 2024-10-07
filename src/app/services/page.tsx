import styles from './page.module.scss';
import cx from 'classnames';

export interface ServicesPageProps {}

export default function ServicesPage(props: ServicesPageProps) {
  const {} = props;

  return <main className={cx(styles['container'], 'page')}></main>;
}
