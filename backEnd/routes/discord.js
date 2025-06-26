const express = require("express");
const axios = require("axios");
const router = express.Router();
const User = require("../models/User");

const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_REDIRECT_URI } =
  process.env;

router.get("/login", (req, res) => {
  const scope = "identify";
  const redirectUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
    DISCORD_REDIRECT_URI
  )}&response_type=code&scope=${scope}`;
  res.redirect(redirectUrl);
});

router.get("/callback", async (req, res) => {
  const { code } = req.query;

  try {
    // Récupère le token
    const tokenRes = await axios.post(
      "https://discord.com/api/oauth2/token",
      new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: DISCORD_REDIRECT_URI,
        scope: "identify",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = tokenRes.data.access_token;

    // Récupère les infos de l’utilisateur
    const userRes = await axios.get("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const user = userRes.data;

    let existingUser = await User.findOne({ discordId: user.id });

    if (!existingUser) {
      // Crée un nouvel utilisateur
      existingUser = await User.create({
        discordId: user.id,
        username: user.username,
        avatar: user.avatar,
        accessToken: accessToken,
      });
    } else {
      // Met à jour les infos si nécessaire
      existingUser.username = user.username;
      existingUser.avatar = user.avatar;
      existingUser.accessToken = accessToken;
      await existingUser.save();
    }

    // Tu peux ici enregistrer l'utilisateur en DB si tu veux
    res.redirect(
      `http://localhost:3000/dashboard?username=${user.username}&id=${user.id}&avatar=${user.avatar}`
    );
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send("Erreur Discord");
  }
});

module.exports = router;
