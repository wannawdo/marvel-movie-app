import * as React from "react";

export default function ActorCard(actor) {
  let actorPoster = `https://image.tmdb.org/t/p/original/${actor.profile_path}`;

  return (
    <div className="card-actor">
      <img className="card-photo" src={actorPoster} alt={actor.name} />
      <p className="card-name">{actor.name}</p>
      <p className="card-text">{actor.character}</p>
    </div>
  );
}
