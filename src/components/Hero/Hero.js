import React from 'react';
import styles from './Hero.module.scss';
import hero from '../../images/hero_image.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroPositionedContainer}>
        <div className={styles.heroContent}>
          <p className={styles.heroContentTitle}>We bring the news to you.</p>
          <p className={styles.heroContentBody}>
            The top headlines from 54 countries, <br />
            instantly accessible.
          </p>
          <Link to='/countries'>
            <button className={styles.buttonToCountries}>
              Go to countries
            </button>
          </Link>
        </div>
        <img className={styles.heroImage} src={hero} alt='' />
      </div>
      <div className={styles.clipPathBackground}></div>
    </div>
  );
};

export default Hero;
