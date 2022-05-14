import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

import "../App.css";
import { Container } from "@mui/material";

import ActorCard from "../components/ActorCard";
import AppHeader from "../components/AppHeader";
import { deepOrange, indigo } from "@mui/material/colors";
import ReactToPrint from "react-to-print";
import { PrintComponent } from "../components/PrintComponent";

export const Movie = (props) => {
  const [movieDetails, setMovieDetails] = useState({});

  const [movieCast, setMovieCast] = useState([]);
  const [moviePoster, setMoviePoster] = useState("");
  const [movieGenre, setMovieGenre] = useState([]);
  const [translatedOverview, setTranslatedOverview] = useState("");
  const [translatedTitle, setTranslatedTitle] = useState("");
  const [translatedTagline, setTranslatedTagline] = useState("");
  const [textToTranslate, setTextToTranslate] = useState("");

  const { id } = props.params;
  const componentRef = useRef();

  const apiKey = process.env.REACT_APP_API_KEY;

  const linkMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
  const linkCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;

  const fetchMovieDetails = () => {
    fetch(linkMovie)
      .then((response) => {
        if (!response.status === 200) {
          throw Error(response.status);
        }
        return response.json();
      })
      .then((movieData) => {
        setMovieDetails(movieData);
        setMoviePoster(
          `https://image.tmdb.org/t/p/original/${movieData.poster_path}`
        );
        setMovieGenre(movieData.genres);
        const textext = `${movieData.title}(*)${movieData.tagline}(*)${movieData.overview}`;
        setTextToTranslate(textext);
        fetchMovieCast();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const fetchMovieCast = () => {
    fetch(linkCast)
      .then((response) => {
        if (!response.status === 200) {
          throw Error(response.status);
        }
        return response.json();
      })
      .then((castData) => {
        setMovieCast(castData.cast);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchMovieDetails(id);
  }, []);

  const actorList = movieCast.map((actor) => <ActorCard {...actor} />);
  const label = movieDetails.vote_count + " votes";
  const translatedObj = {
    translatedTitle,
    translatedTagline,
    translatedOverview,
  };
  return (
    <>
      <AppHeader />
      <div className="moviePage">
        <div className="leftHalf">
          <ImageListItem>
            <img src={moviePoster} alt={movieDetails.title} loading="lazy" />
          </ImageListItem>
        </div>
        <div className="rightHalf">
          <Container className="movieDetails">
            <ReactToPrint
              trigger={() => (
                <Button variant="contained">Print this out!</Button>
              )}
              content={() => componentRef.current}
            />
            <PrintComponent
              ref={componentRef}
              movieData={movieDetails}
              movieActors={movieCast}
              movieTranslated={translatedObj}
              textToTranslate={textToTranslate}
              linkMovie={linkMovie}
            />
            <Typography variant="h3" gutterBottom component="div">
              {movieDetails.title}
            </Typography>
            <Typography
              sx={{ color: indigo[500] }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              {movieDetails.tagline}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              <Box
                sx={{ color: indigo[500] }}
                component="span"
                display="inline"
                fontWeight="fontWeightBold"
              >
                Genres:
              </Box>
              {movieGenre?.map((movieItem) => `${movieItem.name} `)} |{" "}
              {movieDetails.release_date} | {movieDetails.runtime}mins
            </Typography>
            <div className="ratings" >
              <Typography
                variant="subtitle1"
                fontWeight="fontWeightBold"
                gutterBottom
                component="div"
              >
                Ratings:
              </Typography>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>
                {movieDetails.vote_average}
              </Avatar>
              / <Chip label={label} />
            </div>
            <Typography
              variant="subtitle1"
              fontWeight="fontWeightBold"
              gutterBottom
              component="div"
            >
              Cast:
            </Typography>
            <div className="row">{actorList}</div>

            <Typography
              variant="subtitle1"
              fontWeight="fontWeightBold"
              gutterBottom
              component="div"
            >
              Description:
            </Typography>
            <Typography variant="body2">{movieDetails.overview}</Typography>
          </Container>
        </div>
      </div>
    </>
  );
};

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <WrappedComponent {...props} params={params} navigate={navigate} />
    </>
  );
};

export default withRouter(Movie);
