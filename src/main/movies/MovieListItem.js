// MovieListItem.js

import React from "react";
import "./MovieListItem.css";

const MovieListItem = ({ movie }) => {
    const { title, poster_path } = movie;
    const imgURL = `https://image.tmdb.org/t/p/w342/${poster_path}`;

    return(
        <li className="movie-item">
            <img src={imgURL} alt=""/>
            <span>{title}</span>
        </li>
    )
}

export default MovieListItem;