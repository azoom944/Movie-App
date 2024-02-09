// pages/MovieDetailsPage.js
import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from '../../Components/DetailsCard';
// import DetailsCard from '/../../components/DetailsCard';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9e4e9d1fa393192fe1238beb783e831a`)
      .then((Response)=>{
        setMovie(Response.data)
      })
  }, []);
  console.log(movieId)
  return (
    <div>
       <DetailsCard
         name={movie.title}
         overview={movie.overview}
         average= {movie.vote_average}
         img={movie.poster_path}
         views={movie.vote_count}
         date={movie.release_date}
       />
        
         <p></p>
    </div>
  );
};

export default MovieDetailsPage;
