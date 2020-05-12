const baseUrl = 'https://newsapi.org/v2/top-headlines';
const apiKey = process.env.REACT_APP_API_KEY;

export const getArticles = async (countryCode) => {
  const res = await fetch(
    `${baseUrl}?country=${countryCode}&apiKey=580fb6680fa2448ca2c768c5c10215c7`
  );
  const json = await res.json();

  return json.articles;
};
