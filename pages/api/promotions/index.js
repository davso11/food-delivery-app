const promotions = require('@/data/promotions');

export default function handler(req, res) {
  res.json(promotions);
}
