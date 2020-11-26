import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  StyledMovieDetailsImage,
  StyledMovieDetailsWrapper,
  StyledMovieDetailsTitle,
  StyledMovieDetailsOverview,
} from "./MovieDetails.style";

const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = "write your own key here";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl + id, {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => setMovieDetails(res?.data))
      .catch()
      .finally();
  }, []);

  return (
    <StyledMovieDetailsWrapper>
      <StyledMovieDetailsTitle>
        {movieDetails?.original_title}
      </StyledMovieDetailsTitle>
      <StyledMovieDetailsImage
        src={baseImageUrl + movieDetails?.poster_path}
        alt={"Movie Poster"}
      />
      <StyledMovieDetailsOverview>
        {movieDetails?.overview}
      </StyledMovieDetailsOverview>
    </StyledMovieDetailsWrapper>
  );
}
