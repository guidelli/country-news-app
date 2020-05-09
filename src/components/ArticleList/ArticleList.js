import React, { useState, useEffect } from 'react';
import useStyles from './Style';

const ArticleList = () => {
  const classes = useStyles();
  const [topStories, setTopStories] = useState({
    source: {
      id: null,
      name: 'Ctvnews.ca',
    },
    author: 'Rachel Aiello',
    title:
      'Emergency wage subsidy being extended beyond June: PM Trudeau - CTV News',
    description:
      "Prime Minister Justin Trudeau says that the emergency wage subsidy program is being extended beyond June, in an effort to encourage more employers to re-hire staff and 'help kick-start' the gradual economic reopening amid 'tough times.'",
    url:
      'https://www.ctvnews.ca/health/coronavirus/pm-says-employers-can-now-claim-emergency-wage-subsidy-beyond-june-1.4930655',
    urlToImage:
      'https://www.ctvnews.ca/polopoly_fs/1.4930975.1588956317!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg',
    publishedAt: '2020-05-08T15:47:00Z',
    content:
      'OTTAWA -- \r\nPrime Minister Justin Trudeau says that the emergency wage subsidy program is being extended beyond June, in an effort to encourage more employers to re-hire staff and help kick-start the gradual economic reopening amid tough times.\r\nThe extension… [+4371 chars]',
  });

  // useEffect(() => {
  //   getArticles('us').then((data) => setTopStories(data));
  // }, []);

  return <h1>{topStories.title}</h1>;
};

export default ArticleList;
