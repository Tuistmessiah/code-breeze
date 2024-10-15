import React, { forwardRef, ComponentPropsWithoutRef, ReactNode } from 'react';

import StyleUtils from '@utils/style.utils';
import style from './Section.module.scss';
const s = StyleUtils.styleMixer(style);
import cn from 'classnames';

export interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  innerClassName?: string;
  bgNode?: ReactNode;
}

// TODO: improve BGs

/** Section component with function-based forwardRef */
function Section(props: SectionProps, ref: React.Ref<HTMLElement>) {
  const { children, className, innerClassName, bgNode, ...restProps } = props;

  return (
    <section ref={ref} className={cn(s('container'), className)} {...restProps}>
      <div className={cn(s('inner-container'), innerClassName)}>{children}</div>
      {bgNode}
    </section>
  );
}

export default forwardRef(Section);
