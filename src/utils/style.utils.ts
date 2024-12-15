import cx from 'classnames';
import { Styles } from '../styles/styles';

export type Breakpoint = 'xxs' | 'xs' | 'sm' | 'md' | 'l' | 'xl' | 'xxl' | 'large';

export default abstract class StyleUtils {
  /** className mixer ()
     * @example import style from './your.module.scss';
                import { StyleUtils } from '@utils/style.utils';
                const s = StyleUtils.cx(style);
                ...
                <div className={s('container', { 'some-if': true })}>
     */
  static styleMixer(styles: Record<string, string>) {
    return (...args: (string | Record<string, boolean>)[]) => {
      return cx(
        ...args.map((arg) => {
          if (typeof arg === 'string') {
            return styles[arg];
          }
          if (typeof arg === 'object') {
            const newObj: Record<string, boolean> = {};
            for (const key in arg) {
              newObj[styles[key]] = arg[key];
            }
            return newObj;
          }
          return arg;
        })
      );
    };
  }

  /** Device width breakpoint by pointType
   * @param minmax - min (all width bigger than "pointType"), max (all width smaller than "pointType")
   * @obs calling breakpoint(..., "min") OR breakpoint(..., "max") will include all devices (same values as in /styles/breakpoints.scss)
   * @return true/false if breakpoint checks out
   */
  static breakpoint(pointType: Breakpoint, minMax: 'min' | 'max' = 'min'): boolean {
    const innerWidth = window.innerWidth;
    switch (pointType) {
      case 'xxs':
        return minMax === 'max' ? innerWidth <= Styles.breakpoints.xxs : innerWidth > 0; // max: width <= 400px, min: width > 0px
      case 'xs':
        return minMax === 'max' ? innerWidth <= Styles.breakpoints.xs : innerWidth > Styles.breakpoints.xxs; // max: width <= 480px, min: width > 400px
      case 'sm':
        return minMax === 'max' ? innerWidth <= Styles.breakpoints.sm : innerWidth > Styles.breakpoints.xs; // max: width <= 640px, min: width > 480px
      case 'md':
        return minMax === 'max' ? innerWidth <= Styles.breakpoints.md : innerWidth > Styles.breakpoints.sm; // max: width <= 768px, min: width > 640px
      case 'l':
        return minMax === 'max' ? innerWidth <= Styles.breakpoints.l : innerWidth > Styles.breakpoints.md; // max: width <= 1024px, min: width > 768px
      case 'xl':
        return minMax === 'max' ? innerWidth <= Styles.breakpoints.xl : innerWidth > Styles.breakpoints.l; // max: width <= 1280px, min: width > 1024px
      case 'xxl':
        return minMax === 'max' ? innerWidth <= Styles.breakpoints.xxl : innerWidth > Styles.breakpoints.xl; // max: width <= 1536px, min: width > 1280px
      case 'large':
        return minMax === 'max' ? innerWidth <= Styles.breakpoints.large : innerWidth > Styles.breakpoints.xxl; // max: width <= Infinity, min: width > 1536px
    }
  }
}
