import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/postRoutes.js";

const app = express();

app.use(express.json());
app.use((cors()));

app.use(router);

mongoose
  .connect('mongodb+srv://doyaleldho:doyal3648@cluster0.ladkc.mongodb.net/Try?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => console.log("Something bad happened:"));
// Server setup
app.listen(5000, () => {
  console.log("Server is up and running on port 5000");
});