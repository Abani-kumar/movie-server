import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/connectDb.js";
import router from "./utils/route.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//api
app.use("/api", router);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started at port no :${PORT}`);
});

connectDB();
