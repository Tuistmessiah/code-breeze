import React from 'react';
import Image from 'next/image';

import styles from './Card.module.scss';
import StyleUtils from '../../utils/style.utils';
import Link from 'next/link';
const s = StyleUtils.styleMixer(styles);

export interface CardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  buttonText?: string;
}

export default function Card({ image, title, description, href, buttonText }: CardProps) {
  return (
    <div className={s('container')}>
      <div className={s('image-container')}>
        <Link href={href} target="_blank" className={s('button')}>
          <Image src={image} alt={title} layout="fill" objectFit="cover" className={s('image')} priority />
        </Link>
      </div>
      <div className={s('content')}>
        <h2 className={s('title')}>{title}</h2>
        <p className={s('description')}>{description}</p>
        {/* {buttonText && (
          <Link href={href} target="_blank" className={s('button')}>
            {buttonText}
          </Link>
        )} */}
      </div>
    </div>
  );
}
