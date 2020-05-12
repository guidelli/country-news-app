import React, { useState, useEffect } from 'react';
import styles from './ArticleList.module.scss';
import { getArticles } from '../../utils/api/newsApi';

import Spinner from '../Spinner/Spinner';
import { ArticleCard } from '../ArticleCard/ArticleCard';

const ArticleList = ({ countryCode }) => {
  const [topStories, setTopStories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles(countryCode).then((data) => setTopStories(data));
    setLoading(false);
  }, [countryCode]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}>
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardGridContainer}>
        {topStories.map((story) => (
          <ArticleCard key={story.author} story={story} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
