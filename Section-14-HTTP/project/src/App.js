import React, {useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {


    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandlerCallback = useCallback(() => {
        asyncFetchMoviesHandler();
    }, []);

     useEffect(() => {
         fetchMoviesHandlerCallback();
     }, [fetchMoviesHandlerCallback]);

    /*
    function fetchMoviesHandler() {
        console.log(isLoading)

        setIsLoading(true);
        setError((prevStatus) => {
            setError(null);
        })


        fetch("https://swapi.dev/api/films/", {method: 'GET'})
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(JSON.stringify(data))
                const transformedMovies =
                    data.results.map((movieData) => {
                        return {
                            id: movieData.episode_id,
                            title: movieData.title,
                            openingText: movieData.opening_crawl,
                            releaseDate: movieData.release_date
                        }
                    });

                setMovies(transformedMovies);

                setIsLoading(false);

            });
    }
    */


    async function asyncFetchMoviesHandler() {
        setMovies([])
        setIsLoading((prevState => {
            setIsLoading(true)
        }));
        setIsLoading((prevState => {
            setError(null)
        }));

        try {


            const response = await fetch("https://swapi.dev/api/films/", {method: 'GET'});

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            //console.log(JSON.stringify(data))
            const transformedMovies =
                data.results.map((movieData) => {
                    return {
                        id: movieData.episode_id,
                        title: movieData.title,
                        openingText: movieData.opening_crawl,
                        releaseDate: movieData.release_date
                    }
                });

            setMovies(transformedMovies);

        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading((prevState) => {
                setIsLoading(false);
            });
        }

    }


    return (
        <React.Fragment>
            <section>
                <button onClick={asyncFetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                <MoviesList movies={movies}/>
                {!isLoading && movies.length > 0 && <MoviesList movies={movies}/>}
                {!isLoading && movies.length === 0 && !error && <p>Found no movies!</p>}
                {isLoading && <p>loading ...</p>}
                {!isLoading && error && <p>{error} ...</p>}
            </section>
        </React.Fragment>
    );
}

export default App;
