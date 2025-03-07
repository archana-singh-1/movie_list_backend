import mongoose from "mongoose";

const movieListSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: [],
    poster: String,
    rating: Number,
});
const movie= mongoose.model("movieList", movieListSchema);
export default movie;