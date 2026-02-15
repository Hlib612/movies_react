import MovieItem from "./MovieItem";
import MovieInfo from "./MovieInfo";

export default function Movies({movies}){
    return(
        <ul className="movie_list">
            {movies.map((movie) => {
                return(
                    <MovieItem
                    title={movie.title}
                    duration={movie.duration}
                    rating={<MovieInfo rating={movie.rating}/>}
                    year={movie.year}
                    genre={movie.genre}
                    src={movie.poster}
                    alt={movie.title}
                    />
                )
            })}
        </ul>
    )
}