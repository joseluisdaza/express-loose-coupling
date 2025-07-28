const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Imports when using layers architecture
//const petRoutes = require("./layers/routes/pets");
// const storeRoutes = require("./layers/routes/store");

//Imports when using hexagonal architecture
// const petRoutes = require("../infrastructure/routes/pets");
const petRoutes = require("./infrastructure/routes/Pets");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pets", petRoutes);
// app.use("/api/store", storeRoutes);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });
