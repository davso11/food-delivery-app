const restaurants = require('@/data/restaurants');

export default function handler(req, res) {
  return res.json(restaurants);
}
