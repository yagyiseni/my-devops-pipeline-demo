const express = require('express');
const path = require('path');
const { getWelcomeMessage } = require('./utils');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/welcome', (req, res) => {
  res.json({ message: getWelcomeMessage() });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
