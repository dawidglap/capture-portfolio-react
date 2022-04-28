import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import { MovieState } from '../movieState';

const MovieDetail = () => {
    const url = useLocation();
    // const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    // use effect 
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url.pathname);
        setMovie(currentMovie[0]);
    }, [movies,url]);

    return(
        
        <Details>
            <HeadLine>
              <h2>{movie.title}</h2>
            </HeadLine>
        </Details>
    )
}

const Details = styled.div`

`
const HeadLine = styled.div`

`



export default MovieDetail