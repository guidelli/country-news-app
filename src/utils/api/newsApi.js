const baseUrl = 'https://newsapi.org/v2/top-headlines';
const apiKey = process.env.REACT_APP_API_KEY;

export const getArticles = async (countryCode) => {
  const res = await fetch(`${baseUrl}?country=${countryCode}&apiKey=${apiKey}`);
  const json = await res.json();

  return json.articles;
};
