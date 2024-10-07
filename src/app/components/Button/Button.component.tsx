'use client';

import { ComponentPropsWithoutRef } from 'react';

import StyleUtils from '../../utils/style.utils';
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
  variant?: ButtonVariants;
}

export default function Button(props: ButtonComponentProps) {
  const { label, variant = ButtonVariants.PRIMARY, className, children, ...restProps } = props;

  return (
    <button className={cn(s('container', variant), className)} {...restProps}>
      {label}
    </button>
  );
}
