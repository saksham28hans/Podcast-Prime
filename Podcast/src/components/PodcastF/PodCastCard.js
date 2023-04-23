import React from 'react'
import MovieControls from '../MovieControls'

import { Link } from "react-router-dom";

const PodCastCard = ({ movie, type }) => {
    return (
        <div className='movie-card-wrapper'>
            <Link to={`/movie/${movie.id}`}>
                <div className="movie-card">
                    <div className="overlay"></div>

                    {movie.poster_path ?
                        (
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                        )
                        :
                        (
                            <div className="filler-poster"></div>
                        )
                    }
                </div>
            </Link>
            <div className="movie-control-wrapper">
                <MovieControls type={type} movie={movie} />
            </div>
        </div>
    )
}

export default PodCastCard
