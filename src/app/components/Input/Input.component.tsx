'use client';

import { ComponentPropsWithoutRef } from 'react';

import StyleUtils from '../../utils/style.utils';
import styles from './Input.module.scss';
const s = StyleUtils.styleMixer(styles);

export enum VariantsInput {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export type InputComponentProps = ComponentPropsWithoutRef<'input'> & {
  isTextarea?: boolean;
  onChange?: (value: string | number) => void;
  variant?: VariantsInput;
};

export default function Input(props: InputComponentProps) {
  const { id, placeholder, type, required, defaultValue, isTextarea, onChange, variant = VariantsInput.PRIMARY, children } = props;

  const Tag = isTextarea ? 'textarea' : 'input';

  return (
    <div className={s('wrapper')}>
      {children && (
        <label htmlFor={id} className={s('label', variant)}>
          {children}
          {required && '*'}
        </label>
      )}
      <Tag
        className={s('input', isTextarea ? Tag : '')}
        id={id}
        name={id}
        placeholder={placeholder}
        type={isTextarea ? undefined : type}
        rows={isTextarea ? 5 : undefined}
        defaultValue={defaultValue}
        required={required}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
}
