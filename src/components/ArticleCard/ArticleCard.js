import React from "react";
import styles from "./ArticleCard.module.scss";

export const ArticleCard = ({ story }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.cardImage} src={story.urlToImage} alt="" />
      </div>
      <div className={styles.cardTitle}>
        <h3>{story.title}</h3>
      </div>
      <div className={styles.fixedFooter}>
        <p>{new Date(story.publishedAt).toDateString()}</p>
        <p>{story.source.name}</p>
      </div>
    </div>
  );
};
