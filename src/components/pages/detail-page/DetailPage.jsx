import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMovies, getMovieDetails } from '../../../redux/reducers/moviesSlice';
import PageLoader from '../../layout/PageLoader';

function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(getMovieDetails(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  const movieDetails = movies.movieDetails;

  const renderRating = () => {
    const voteAverage = Math.round(movieDetails?.vote_average * 10) / 10;
    if (voteAverage !== 0 && voteAverage !== undefined) {
      return (
        <div className="flex items-center gap-1" title={`${movieDetails.vote_count} ratings`}>
          <div className="bg-orange-500 mask mask-star-2 h-4 w-4"></div>
          <p className="contents text-sm font-medium text-gray-500">{voteAverage}/10</p>
        </div>
      );
    }
    return null;
  };

  const renderCast = () => {
    return (
      <h6 className="mb-2 line-clamp-2">
        Cast: {movieDetails?.cast?.map((item, index) => {
          return item.known_for_department === "Acting" ? (
            <span key={index}>
              <a className="text-gray-400 hover:text-gray-700 transition-all" href={`https://image.tmdb.org/t/p/w300${item.profile_path}`}>
                {item.name}
              </a>,&nbsp;
            </span>
          ) : null;
        })}
      </h6>
    );
  };

  return (
    <>
      {movies?.isLoading && <PageLoader />}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="col-span-2">
          <figure>
            <img
              className="w-full min-w-[280px]"
              src={(movieDetails?.poster_path && !movies?.isLoading) ? `https://image.tmdb.org/t/p/w300${movieDetails?.poster_path}` : "https://via.placeholder.com/300x420"}
              alt={`${movieDetails?.title} (${movieDetails?.release_date})`}
              title={`${movieDetails?.title} (${movieDetails?.release_date})`}
            />
          </figure>
        </div>
        <div className="col-span-10">
          <div className="flex items-center gap-2 mb-3">
            <h1 className="card-title text-base">{movieDetails?.title}</h1>
            {renderRating()}
          </div>
          <div className="mb-2 flex gap-2 items-center text-gray-700 font-normal">
            <h6>{movieDetails?.release_date?.split("-")[0]}</h6>
            <div className="w-[2px] h-3 bg-gray-700 font-normal"></div>
            <h6>{movieDetails?.runtime} minutes</h6>
            <div className="w-[2px] h-3 bg-gray-700 font-normal"></div>
            <h6>{movieDetails?.crew?.filter((item) => item.job === "Director")[0]?.name}</h6>
          </div>
          {renderCast()}
          <h6>Description: {movieDetails?.overview}</h6>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
