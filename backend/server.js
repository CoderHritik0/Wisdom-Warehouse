const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const noteRoutes = require("./routes/notes");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/notes", noteRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
