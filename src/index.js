const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/product");
const app = express();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use("/api", userRoutes);

//routes
app.get("/", (req, res) => {
  res.send("welcome to my api");
});

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("🟢 mongodb connection was successful 🟢"))
  .catch((error) =>
    console.error("🔴 mongodb connection failed: " + error + " 🔴")
  );

app.listen(PORT, () => console.log("server listening on port", PORT));
