'use client'; // Optional: Only add if you need client-side functionality in the future

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-container']}>
        <p>&copy; 2024 Code Breeze. All rights reserved.</p>
        <ul className={styles['footerLinks']}>
          {/* <li><a href="#">Privacy Policy</a></li> */}
          {/* <li><a href="#">Terms of Service</a></li> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
