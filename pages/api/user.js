const user = require('@/data/user');

export default function handler(req, res) {
  res.json(user);
}
