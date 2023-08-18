import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import { selectMovies, getAllMovies, setCurrentPage, selectSearch, searchMovies } from '../../../redux/reducers/moviesSlice';
import PageLoader from '../../layout/PageLoader';
import { useDispatch } from 'react-redux';

function ListingPage() {
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);
    const searchQuery = useSelector(selectSearch);

    const renderPagination = () => {
        const totalPages = movies.totalPages;
        const currentPage = movies.currentPage;

        const maxVisiblePages = 5; // Maximum number of visible page buttons
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            // Show up to maxVisiblePages pages around the current page
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - Math.floor(maxVisiblePages / 2) && i <= currentPage + Math.floor(maxVisiblePages / 2))
            ) {
                pages.push(
                    <button
                        key={i}
                        className={`join-item btn-sm btn ${currentPage === i ? 'btn-neutral' : 'btn-light'}`}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </button>
                );
            } else if (
                (i === currentPage - Math.floor(maxVisiblePages / 2) - 1) ||
                (i === currentPage + Math.floor(maxVisiblePages / 2) + 1)
            ) {
                pages.push(
                    <button
                        key={i}
                        className="join-item w-4 btn-sm btn btn-light btn-disabled"
                        disabled
                    >
                        ...
                    </button>
                );
            }
        }
        return pages;
    };

    const handlePageClick = (p) => {
        if (searchQuery) {
            dispatch(searchMovies({ query: searchQuery, page: p }));
        } else {
            dispatch(getAllMovies(p));
        }

        dispatch(setCurrentPage(p));
    };

    return (
        <>
            {movies?.isLoading && <PageLoader />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
                {movies?.moviesList?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <div className="flex items-center justify-center md:justify-between border-t border-gray-200 bg-white py-3">
                <div className="join">
                    {renderPagination()}
                </div>
            </div>
        </>
    );
}

export default ListingPage;
