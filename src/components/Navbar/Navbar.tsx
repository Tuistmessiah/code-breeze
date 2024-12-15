'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { useTranslation } from '../../utils/translation-context';

import LogoSvg from '../../assets/svg/logo.svg';
import LogoCompleteSvg from '../../assets/svg/logo-complete.svg';

import StyleUtils from '../../utils/style.utils';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { translations } = useTranslation();
  const pathName = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          {scrolled && StyleUtils.breakpoint('l') ? <LogoSvg /> : <LogoCompleteSvg />}
        </Link>

        {/* Hamburger Button */}
        <button className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Links */}
        <ul
          className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <li className={`${pathName === '/' ? styles['active'] : ''}`}>
            <Link href="/">{translations?.navbar.home}</Link>
          </li>
          <li className={`${pathName === '/services' ? styles['active'] : ''}`}>
            <Link href="/services">{translations?.navbar.services}</Link>
          </li>
          <li className={`${pathName === '/about' ? styles['active'] : ''}`}>
            <Link href="/about">{translations?.navbar.about}</Link>
          </li>
          <li className={`${pathName === '/contact' ? styles['active'] : ''}`}>
            <Link href="/contact">{translations?.navbar.contact}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
