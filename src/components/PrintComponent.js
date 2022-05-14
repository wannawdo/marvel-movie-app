import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

import "../App.css";
import { Container } from "@mui/material";

import ActorCard from "../components/ActorCard";
import AppHeader from "../components/AppHeader";
import { deepOrange, indigo } from "@mui/material/colors";

export const PrintComponent = React.forwardRef((props, ref) => {
  const movieCast = props.movieActors;
  const movieGenre = props.movieData.genres;

  const [moviePoster, setMoviePoster] = useState("");
  const [movieDetails, setMovieDetails] = useState({});


  const actorList = movieCast.map((actor) => <ActorCard {...actor} />);
  const label = movieDetails.vote_count + " voturi";

  const [translatedOverview, setTranslatedOverview] = useState("");
  const [translatedTitle, setTranslatedTitle] = useState("");
  const [translatedTagline, setTranslatedTagline] = useState("");
  const language = "ro";
  const url = "https://marvel-movie-api-cloud.herokuapp.com/utils/translate";


  const translateText = (text) => {
    const obj = {
      text,
      language,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        if (!response.status === 200) {
          throw Error(response.status);
        }
        return response.json();
      })
      .then((translatedData) => {
        let resp = translatedData.translatedText.split("(*)");
        console.log(resp);

        setTranslatedTitle(resp[0]);
        setTranslatedTagline(resp[1]);
        setTranslatedOverview(resp[2]);
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  };

  const fetchMovieDetails = () => {
    fetch(props.linkMovie)
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
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (props.textToTranslate) translateText(props.textToTranslate);
  }, [props.textToTranslate]);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <div className="printPage" ref={ref}>
      <AppHeader />
      <div className="moviePage">
        <div className="leftHalf">
          <ImageListItem>
            <img src={moviePoster} alt={movieDetails.title} loading="lazy" />
          </ImageListItem>
        </div>
        <div className="rightHalf">
          <Container className="movieDetails">
            <Typography variant="h3" gutterBottom component="div">
              {translatedTitle}
            </Typography>
            <Typography
              sx={{ color: indigo[500] }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              {translatedTagline}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              <Box
                sx={{ color: indigo[500] }}
                component="span"
                display="inline"
                fontWeight="fontWeightBold"
              >
                Gen:
              </Box>
              {movieGenre?.map((movieItem) => `${movieItem.name} `)} |{" "}
              {movieDetails.release_date} | {movieDetails.runtime}min
            </Typography>
            <div className="ratings">
              <Typography
                variant="subtitle1"
                fontWeight="fontWeightBold"
                gutterBottom
                component="div"
              >
                Rating:
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
              Distributie:
            </Typography>
            <div className="row">{actorList}</div>

            <Typography
              variant="subtitle1"
              fontWeight="fontWeightBold"
              gutterBottom
              component="div"
            >
              Descriere:
            </Typography>
            <Typography variant="body2">{translatedOverview}</Typography>
          </Container>
        </div>
      </div>
    </div>
  );
});
