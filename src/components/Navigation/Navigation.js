import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import { FaNewspaper } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarGrid}>
        <span className={styles.newsPaperIcon}>
          <FaNewspaper />
        </span>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.navLink}>
            <Link to='/countries'>Countries</Link>
          </li>
          <li className={styles.navLink}>
            <Link>About</Link>
          </li>
        </ul>
        <a
          href='https://github.com/SchusterJosh/country-news-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className={styles.button}>Github</button>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
