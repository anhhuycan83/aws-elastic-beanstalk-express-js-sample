const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) =>
  res.send(
    "Hello Huy Pham!\nFull pipeline test with manual approve on build stage."
  )
);

app.listen(port);
console.log(`App running on http://localhost:${port}`);
