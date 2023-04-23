import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
import { useParams } from "react-router-dom";
import { GlobalContext } from '../../../context/GlobalState';
import ProductionCompanies from '../../ProductionCompanies';

const PodCastSummary = () => {
    const { watchlist, addToWatchList, removeFromWatchList } = useContext(GlobalContext);

    const [movieSummary, setMovieSummary] = useState([]);

    const match = useParams();
    console.log(match);

    const fetchMovie = () => {
        // console.log(match.id);
        fetch(`https://api.themoviedb.org/3/movie/${match.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
            .then((res) => res.json())
            .then(specificMovie => {
                console.log(specificMovie);
                if (!specificMovie.errors) {
                    setMovieSummary(specificMovie);
                } else {
                    setMovieSummary([]);
                }
            })
            .catch((e) => console.log(e))

    }

    useEffect(() => {
        fetchMovie();
    }, [match.id])   //putted match.id here, so that when we click on different movies from recommendations list it updated automatically as movie id changes so it re-renders the page with the new id and data


    let storedMovieInWatchlist = watchlist.find((obj) => obj.id === movieSummary.id);  // if movie present then will return the object(movie object), otherwise null (means new movie)
    let alreadyInWatchlist = storedMovieInWatchlist ? true : false;
    // console.log("before func: " + alreadyInWatchlist);
    const watchlistHandler = () => {
        if (!alreadyInWatchlist) {
            addToWatchList(movieSummary);
        } else {
            removeFromWatchList(movieSummary.id)
        }
        // console.log("inside func: " + alreadyInWatchlist);
    }
    // console.log("oustide and after func: " + alreadyInWatchlist);


    const convertLargeNumbers = (num) => {
        if (num < 1000) {
            return num;
        } else if (num >= 1000 && num < 1000000) {
            num = num / 1000 + "K";
            return (num);
        } else if (num >= 1000000 && num < 1000000000) {
            num = num / 1000000 + "M";
            return (num);
        } else if (num >= 1000000000 && num < 1000000000000) {
            num = num / 1000000000 + "B";
            return (num);
        } else if (num > 1000000000000) {
            num = num / 1000000000000 + "T";
            return num;
        }
    }
    const calcNetProfit = (budget, revenue) => {
        let profit = Math.abs(budget - revenue);
        // console.log(profit);
        return convertLargeNumbers(profit);
    }

    return (
        <>
            <div className="movie-details-wrapper">
                <div className="movie-container">
                    <div className="movie-image">
                        <img src={`https://image.tmdb.org/t/p/w200${movieSummary.poster_path}`} alt={`${movieSummary.title} Poster`} />
                    </div>

                    <div className="movie-details">
                        <div className="movie-details-title">
                            <h1>{movieSummary.title}<span className='spanSmall'> ({movieSummary.status})</span></h1>
                            {alreadyInWatchlist ?
                                (
                                    <button className="btn"
                                        // disabled={watchlistDisabled}
                                        onClick={() => removeFromWatchList(movieSummary.id)}
                                    >
                                        <i className="fas fa-star" style={{ color: "gold" }} title='Add To ListenList'></i>
                                    </button>
                                )
                                :
                                (
                                    <button className="btn"
                                        onClick={() => addToWatchList(movieSummary)}
                                    >
                                        <i class="far fa-star" style={{ color: "#fff" }}></i>
                                    </button>
                                )
                            }

                            {/* <button
                                className={alreadyInWatchlist ? "btn btn-check" : "btn btn-uncheck"}
                                title={alreadyInWatchlist ? "Remove From ListenList" : "Add To ListenList"}
                                onClick={() => watchlistHandler()}
                            >
                                <i className="fas fa-check"></i>
                                <p>{alreadyInWatchlist ? "Remove" : "Add"}</p>
                            </button> */}
                            {/* {movieSummary.tagline ? <h3>{movieSummary.tagline}</h3> : null} */}
                        </div>

                        <div className="movie-details-grp1">
                            <div className="movie-details-grp1-1">
                                <p>{movieSummary.release_date ? movieSummary.release_date.substring(0, 4) : "-"}</p><span></span>
                                <p>{movieSummary.runtime}min</p><span></span>
                            </div>
                            <p>{movieSummary.genres ? movieSummary.genres.map((itm) => itm.name + ", ") : "-"}</p>
                        </div>

                        <div className="movie-details-summary">
                            {movieSummary.overview}
                        </div>

                        <div className="movie-details-grp2">
                            {movieSummary.homepage ?
                                (
                                    <div className="movie-details-homepage">
                                        <a href={`${movieSummary.homepage}`} target="_blank" title='Link To Official Site'>Homepage <i class="fas fa-link"></i></a>
                                    </div>
                                )
                                :
                                (null)
                            }
                            <div className="movie-details-rating-grp">
                                <div className="movie-details-vote">
                                    <span title='Score'>{movieSummary.vote_average !== 0 ? movieSummary.vote_average : "?"}/<span className='spanSmall'>10</span></span>
                                    <span className='spanSmall' title='No of people voted'>⭐{movieSummary.vote_count !== 0 ? movieSummary.vote_count : "?"}</span>
                                </div>
                                <div className="movie-details-rating">
                                    <span style={{ width: `${movieSummary.vote_average * 10}px` }}></span>
                                </div>
                            </div>
                        </div>

                        <div className="movie-details-grp3">
                            <p>Budget: <span>{convertLargeNumbers(movieSummary.budget)}</span></p>
                            <p>Revenue: <span>{convertLargeNumbers(movieSummary.revenue)}</span></p>
                            <p>Net Profit: <span>{calcNetProfit(movieSummary.budget, movieSummary.revenue)}</span></p>
                        </div>

                        <div className="movie-details-grp4">
                            <h2>Production Companies:</h2>
                            <div className="movie-collection">
                                {movieSummary.production_companies ?
                                    (
                                        movieSummary.production_companies.map((proCompanies) => {
                                            return <ProductionCompanies key={proCompanies.id} proCompanies={proCompanies} />
                                        })
                                    )
                                    :
                                    (null)
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PodCastSummary
