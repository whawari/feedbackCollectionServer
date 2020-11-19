const express = require("express");
const app = express();

// route handler with req and res arguments
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);
