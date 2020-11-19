const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new googleStrategy());

// route handler with req and res arguments
app.get("/", (req, res) => {
  res.send({ yo: "wazaaaaap" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);