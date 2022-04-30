import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import { MovieState } from '../movieState';
// ANIMATIONS 
import { motion } from "framer-motion"
import { PageAnimation } from "../animation"

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
        <>
          {movie && (
            <Details variants={PageAnimation} initial="hidden" animate="show" exit="exit">
                <HeadLine>
                  <h2>{movie.title}</h2>
                  <img src={movie.mainImg} alt="movie img" />
                </HeadLine>
                <Awards>
                   {movie.awards.map((award) => (
                       <Award 
                            title={award.title}
                            description={award.description}
                            key={award.title}
                        />
                   ))}
                </Awards>
                <ImageDisplay>
                    <img src={movie.secondaryImg} alt="movie" />
                </ImageDisplay>
            </Details>
          )
         }
        </>
    )
}

const Details = styled(motion.div)`
   color: white;
`
const HeadLine = styled.div`
   min-height: 90vh;
   padding-top:20vh;
   position: relative;
   h2{
       position: absolute;
       top: 10%;
       left: 50%;
       transform: translate(-50%, -10%);
   }
   img{
       width: 100%;
       height: 70vh;
       object-fit: cover;
   }
`;

const Awards = styled.div`
   min-height: 80vh;
   display: flex;
   margin: 5rem 10rem;
   align-items: center;
   justify-content: space-around;
   @media (max-width: 1500px){
      margin: 2rem 2rem;
      display:block;
   }
`;

const AwardStyled = styled.div`
  padding: 5rem;
  h3{
      font-size: 2rem;
  }
  .line{
      width: 100%;
      background: #23d997;
      height: 0.5rem;
      margin: 1rem 0;
  }
  p{
      padding: 2rem 0;

  }
`

const ImageDisplay = styled.div`
  min-height: 50vh;
  img{
      width: 100%;
      height: 100vh;
      object-fit: cover;
  }
`


// AWARD COMPONENT 

const Award = ({title, description}) => {
    return(
        <AwardStyled>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyled>
    )
}


export default MovieDetail