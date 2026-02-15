import MoviePoster from "./MoviePoster"
export default function MovieItem({
    title,
    duration,
    rating,
    year,
    genre,
    src,
    alt,
}){
    return(
        <div className="movie_card">
            <h1>{title}</h1>
            <p>Duration🕰️{duration} min</p>
            <h2>Rating: {rating}</h2>
            <h3>Year {year}</h3>
            <p>Genre {genre}</p>
            <MoviePoster src={src} alt={alt}/>
        </div>
    )
}