import Movie from "../utils/schema.js";

export const createMovie = async (req, res) => {
  try {
    const { title, shortDescription, longDescription, imageUrl } = req.body;
    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    const movie = await Movie.create({
      title,
      shortDescription,
      longDescription,
      imageUrl,
    });

    return res.status(201).json({
      success: true,
      message: "Movie created successfully",
      data: movie,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Movie can't create. Please try again.",
    });
  }
};

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    return res.status(200).json({
      success: true,
      message: "All movies fetched successfully",
      data: movies,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Movies can't fetch. Please try again.",
    });
  }
};

export const getMoviesById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    return res.status(200).json({
      success: true,
      message: "Movie fetched successfully",
      data: movie,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Movie can't fetch. Please try again.",
    });
  }
};
