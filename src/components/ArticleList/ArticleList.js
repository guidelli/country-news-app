import React, { useState, useEffect } from "react";
import { fakeNews } from "./data";
import styles from "./ArticleList.module.scss";

import { ArticleCard } from "../ArticleCard/ArticleCard";

const ArticleList = () => {
  const [topStories, setTopStories] = useState(fakeNews);

  // useEffect(() => {
  //   getArticles('us').then((data) => setTopStories(data));
  // }, []);

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardGridContainer}>
        {topStories.map((story) => (
          <ArticleCard story={story} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
