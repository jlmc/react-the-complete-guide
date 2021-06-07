import React, {useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {


    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    /* useEffect(() => {
         fetchMoviesHandler();
     }, []);*/

    function fetchMoviesHandler() {
        console.log(isLoading)

        setIsLoading(true);



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


    async function asyncFetchMoviesHandler() {
        setMovies([])
        setIsLoading((prevState => {

            setIsLoading(true);

        }));


        const response = await fetch("https://swapi.dev/api/films/", {method: 'GET'});
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
        setIsLoading((prevState => {

            setIsLoading(false);

        }));
    }


    return (
        <React.Fragment>
            <section>
                <button onClick={asyncFetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                <MoviesList movies={movies}/>
                {!isLoading && movies.length > 0 && <MoviesList movies={movies}/>}
                {!isLoading && movies.length === 0 && <p>Found no movies!</p>}}
                {isLoading && <p>loading ...</p>}
            </section>
        </React.Fragment>
    );
}

export default App;
