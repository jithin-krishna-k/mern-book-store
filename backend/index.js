import express, { response } from "express";
import mongoose from "mongoose";
import { PORT, MONGO } from "./config.js";
import bookRouter from "./routes/booksRoute.js";
import cors from "cors"

const app = express();

//middleware for parsing request body
app.use(express.json());
//middleware for routing
app.use(cors());
app.use("/books", bookRouter);
//middleware for allow custom origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

mongoose
  .connect(MONGO)
  .then(() => {
    console.log("mongoDB connected");
    app.listen(PORT, () => {
      console.log(`server run on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
