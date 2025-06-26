require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const discordRoutes = require('./routes/discord');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth/discord', discordRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connecté");
    app.listen(process.env.PORT, () => {
      console.log(`Serveur lancé sur http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error('Erreur MongoDB', err));
