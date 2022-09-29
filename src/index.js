const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

//routes
app.get("/", (req, res) => {
  res.send("welcome to my api");
});

app.listen(PORT, () => console.log("server listening on port", PORT));
