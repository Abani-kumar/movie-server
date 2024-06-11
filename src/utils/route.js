import express from "express";
import { createMovie, getAllMovies, getMoviesById } from "./controller.js";
const router = express.Router();

router.post("/createMovie", createMovie);
router.get("/getAllMovies", getAllMovies);
router.get("/getMoviesById/:id", getMoviesById);

export default router;
