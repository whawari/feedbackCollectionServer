const express = require("express");
const app = express();

// route handler with req and res arguments
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
