'use client';

import Section from '@components-wrapper/Section/Section.component';

import StyleUtils from '@utils/style.utils';
import styles from './Text.module.scss';
const s = StyleUtils.styleMixer(styles);
// import cn from 'classnames';

export interface TextSectionProps {
  empty?: '';
}

export default function TextSection(props: TextSectionProps) {
  const {} = props;

  return (
    <Section className={s('container')} innerClassName={s('inner-container')}>
      <h2>Who We Are</h2>
      <p>
        {`At our small but dynamic company based in Utrecht, we bring together a talented team of five remote web developers from Portugal, each with expertise in different areas of web development. Our team thrives on collaboration, working across borders to create innovative and effective digital solutions tailored to the unique needs of our clients. Despite being a small company, we believe in delivering big results by harnessing the skills and creativity of our diverse team.`}
      </p>
      <p>
        {`Our developers specialize in various areas of web development, from front-end design and user experience to backend engineering and database management. This range of expertise allows us to handle projects holistically, ensuring that every aspect of a web application is carefully crafted and optimized. We take pride in staying current with the latest technologies and frameworks to deliver scalable and efficient solutions that meet the evolving demands of the digital landscape.`}
      </p>
      <p>
        {`Although we work remotely, we are committed to maintaining strong communication and collaboration. Our base in Utrecht serves as the hub of our operations, while our Portuguese team members bring their unique perspectives and skills to each project. Together, we create seamless, high-quality web experiences for businesses, whether it’s building a new platform or enhancing an existing digital presence.`}
      </p>
    </Section>
  );
}
