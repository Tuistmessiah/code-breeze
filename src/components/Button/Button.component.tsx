'use client';

import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

import StyleUtils from '@utils/style.utils';
import styles from './Button.module.scss';
const s = StyleUtils.styleMixer(styles);
import cn from 'classnames';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export interface ButtonComponentProps extends ComponentPropsWithoutRef<'button'> {
  label: string;
  href?: string;
  variant?: ButtonVariants;
}

export default function Button(props: ButtonComponentProps) {
  const { label, href, variant = ButtonVariants.PRIMARY, className, ...restProps } = props;

  if (href) {
    return (
      <Link className={cn(s('container', variant), className)} href={href}>
        {label}
      </Link>
    );
  }

  return (
    <button className={cn(s('container', variant), className)} {...restProps}>
      {label}
    </button>
  );
}
