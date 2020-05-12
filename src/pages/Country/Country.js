import React from 'react';
import styles from './Country.module.scss';

import ArticleList from '../../components/ArticleList/ArticleList';

const Country = ({ match, countries }) => {
  const country = countries.find((country) => country.id === match.params.id);
  return (
    <div className={styles.container}>
      <div className={styles.countryDisplayBanner}>
        <img src={country.information.flag} alt='' />
        <p>{country.information.name}</p>
      </div>
      <ArticleList countryCode={match.params.id} />
    </div>
  );
};

export default Country;
