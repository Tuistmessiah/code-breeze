import StyleUtils from '../../utils/style.utils';
import style from './Section.module.scss';
const s = StyleUtils.styleMixer(style);
import cn from 'classnames';

import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  innerClassName?: string;
  bgNode?: ReactNode;
}

// TODO: Improve Background addition.
/**
 * Section Wrapper component. Manages responsive padding.
 */
export default function Section(props: SectionProps) {
  const { children, className, innerClassName, bgNode, ...restProps } = props;

  return (
    <section className={cn(s('container'), className)} {...restProps}>
      <div className={cn(s('inner-container'), innerClassName)}>{children}</div>
      {bgNode}
    </section>
  );
}
