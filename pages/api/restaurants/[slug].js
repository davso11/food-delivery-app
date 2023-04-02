const restaurants = require('@/data/restaurants');

export default function handler(req, res) {
  const { slug } = req.query;
  res.json(restaurants[slug.toLowerCase()]);
}
