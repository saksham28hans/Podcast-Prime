import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import { Link } from "react-router-dom";


 const MovieControls = ({ movie, type }) => {
    const { removeFromWatchList, addToWatchedList, addToWatchList, removeFromWatchedList } = useContext(GlobalContext)

    console.log(movie)
    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn" title='Listened' onClick={(e) => {e.stopPropagation(); console.log("from add movie to watchlist btn"); addToWatchedList(movie)}}>
                        <i className="fas fa-check"></i>
                    </button>
                    <button className="ctrl-btn" title='Remove From ListenList' onClick={(e) => {e.stopPropagation(); removeFromWatchList(movie.id)}}>
                        <i class="fas fa-trash"></i>
                    </button>
                    {/* <Link to={`/movie/${movie.id}`} style={{textDecoration: "none"}}><i class="far fa-eye"></i></Link> */}
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn" title='Move To ListenList' onClick={(e) => {e.stopPropagation(); addToWatchList(movie)}}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>
                    <button className="ctrl-btn" title='Remove' onClick={(e) => {e.stopPropagation(); removeFromWatchedList(movie.id)}}>
                        <i class="fas fa-trash"></i>
                    </button>
                </>
            )}

            {type === "trending" && (
                <>
                    {/* <button className="ctrl-btn" title='Add To ListenList' onClick={(e) => {e.stopPropagation(); addToWatchList(movie)}}>
                        <i className="far fa-star"></i>
                    </button> */}
                    <div className="details">
                        
                    </div>
                </>
            )}
        </div>
    )
}

export default MovieControls
