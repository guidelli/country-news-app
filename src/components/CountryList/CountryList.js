import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CountryList.module.scss';

const CountryList = ({ countries }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {countries.map((country) => (
          <Link
            className={styles.imageContainer}
            key={country.id}
            to={`/countries/${country.id}`}
          >
            <img src={`${country.information.flag}`} alt='' />
            <p className={styles.overlayName}>{country.information.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
