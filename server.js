const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Verbindung zu MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/tech-evangelism';
mongoose.connect(mongoURI, {
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