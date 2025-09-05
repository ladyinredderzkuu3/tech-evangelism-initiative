const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Verbindung zu MongoDB
mongoose.connect('mongodb://localhost:27017/tech-evangelism', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('Willkommen zur Tech Evangelism Initiative API!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});