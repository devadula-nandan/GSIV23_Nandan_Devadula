import React from 'react'
import { useNavigate } from 'react-router-dom'

function MovieCard({ movie }) {
    // console.log(movie);
    const navigate = useNavigate()
    const renderRating = () => {
        const voteAverage = Math.round(movie?.vote_average * 10) / 10;
        if (voteAverage !== 0 && voteAverage !== undefined) {
          return (
            <div className="flex items-center gap-1" title={`${movie?.vote_count} ratings`}>
              <div className="bg-orange-500 mask mask-star-2 h-4 w-4"></div>
              <p className="contents text-sm font-medium text-gray-500">{voteAverage}/10</p>
            </div>
          );
        }
        return null;
      };
    return (
        <div onClick={() => { navigate(`/detail/${movie?.id}`) }} className=" cursor-pointer card rounded-lg w-full bg-base-100 shadow-md hover:shadow-lg hover:scale-[1.004] transition-all">
            <figure>
                <img className='w-full poster-img' src={movie?.poster_path ? `https://image.tmdb.org/t/p/w300${movie?.poster_path}` : "https://via.placeholder.com/400x600"} alt={`${movie?.title} (${movie?.release_date})`} title={`${movie?.title} (${movie?.release_date})`} />
            </figure>
            <div className="card-body p-2 gap-1">
                <div className="flex items-baseline justify-between">
                    <h2 className="card-title text-base line-clamp-1" title={`${movie?.title} (${movie?.release_date})`}>
                        {movie.title}
                    </h2>
                    {movie?.vote_average !== 0 &&
                        <div className="flex items-center gap-1" title={movie?.vote_count + " ratings"}>
                            <p className=' contents text-sm font-medium text-gray-500'>{renderRating()}</p>
                        </div>
                    }
                </div>
                <p className=' line-clamp-2 text-sm'>{movie?.overview}</p>
            </div>
        </div>
    )
}

export default MovieCard