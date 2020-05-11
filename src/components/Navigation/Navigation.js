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
            <Link>Home</Link>
          </li>
          <li className={styles.navLink}>
            <Link>Countries</Link>
          </li>
          <li className={styles.navLink}>
            <Link>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
