'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import styles from './Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
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
          {'</> Code Breeze'}
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
            <Link href="/">Home</Link>
          </li>
          <li className={`${pathName === '/services' ? styles['active'] : ''}`}>
            <Link href="/services">Services</Link>
          </li>
          <li className={`${pathName === '/about' ? styles['active'] : ''}`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`${pathName === '/contact' ? styles['active'] : ''}`}>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
