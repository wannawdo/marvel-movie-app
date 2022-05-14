import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

export default function MovieCard(movieItem) {
  let moviePoster = `https://image.tmdb.org/t/p/original/${movieItem.poster_path}`;
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {movieItem.popularity} popularity
          </Typography>
          <Typography variant="h5" component="div">
            {movieItem.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {movieItem.release_date}
          </Typography>
          <CardMedia
            component="img"
            height="194"
            image={moviePoster}
            alt="Paella dish"
          />
          <Typography variant="body2">{movieItem.overview}</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/movie/${movieItem.id}`} className="btn-details">
            <Button>View More</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
