import styles from './page.module.scss';
import cx from 'classnames';

export interface PricingPageProps {}

export default function PricingPage(props: PricingPageProps) {
  const {} = props;

  return <main className={cx(styles['container'], 'page')}></main>;
}
