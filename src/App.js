import "./App.css";
import Container from "@mui/material/Container";
import * as React from "react";
import Typography from "@mui/material/Typography";
import MovieCard from "./components/MovieCard";
import Grid from "@mui/material/Grid";
import AppHeader from "./components/AppHeader";
import Box from "@mui/material/Box";

function App() {
  //movieUrl=https://api.themoviedb.org/3/discover/movie?api_key=51b3258aa0f7c5db9e22bb77f666162f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_keywords=180547
  const movieData = {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: "/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg",
        genre_ids: [14, 28, 12],
        id: 453395,
        original_language: "en",
        original_title: "Doctor Strange in the Multiverse of Madness",
        overview:
          "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
        popularity: 5007.839,
        poster_path: "/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg",
        release_date: "2022-05-04",
        title: "Doctor Strange in the Multiverse of Madness",
        video: false,
        vote_average: 7.5,
        vote_count: 1139,
      },
      {
        adult: false,
        backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
        genre_ids: [28, 12, 878],
        id: 634649,
        original_language: "en",
        original_title: "Spider-Man: No Way Home",
        overview:
          "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        popularity: 3933.964,
        poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        release_date: "2021-12-15",
        title: "Spider-Man: No Way Home",
        video: false,
        vote_average: 8.1,
        vote_count: 12602,
      },
      {
        adult: false,
        backdrop_path: "/eQN31P4IEhyp6NkdccvppJnyuJ4.jpg",
        genre_ids: [28, 12, 14, 878],
        id: 284052,
        original_language: "en",
        original_title: "Doctor Strange",
        overview:
          "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
        popularity: 2807.025,
        poster_path: "/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
        release_date: "2016-10-25",
        title: "Doctor Strange",
        video: false,
        vote_average: 7.4,
        vote_count: 18894,
      },
      {
        adult: false,
        backdrop_path: "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
        genre_ids: [878, 28, 12],
        id: 524434,
        original_language: "en",
        original_title: "Eternals",
        overview:
          "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
        popularity: 726.331,
        poster_path: "/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
        release_date: "2021-11-03",
        title: "Eternals",
        video: false,
        vote_average: 7.1,
        vote_count: 5488,
      },
      {
        adult: false,
        backdrop_path: "/zxWAv1A34kdYslBi4ekMDtgIGUt.jpg",
        genre_ids: [28, 12, 14, 878],
        id: 566525,
        original_language: "en",
        original_title: "Shang-Chi and the Legend of the Ten Rings",
        overview:
          "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
        popularity: 638.244,
        poster_path: "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
        release_date: "2021-09-01",
        title: "Shang-Chi and the Legend of the Ten Rings",
        video: false,
        vote_average: 7.7,
        vote_count: 6390,
      },
      {
        adult: false,
        backdrop_path: "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
        genre_ids: [12, 28, 878],
        id: 299536,
        original_language: "en",
        original_title: "Avengers: Infinity War",
        overview:
          "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        popularity: 376.076,
        poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        release_date: "2018-04-25",
        title: "Avengers: Infinity War",
        video: false,
        vote_average: 8.3,
        vote_count: 24523,
      },
      {
        adult: false,
        backdrop_path: "/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
        genre_ids: [28, 12, 878],
        id: 497698,
        original_language: "en",
        original_title: "Black Widow",
        overview:
          "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
        popularity: 279.81,
        poster_path: "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
        release_date: "2021-07-07",
        title: "Black Widow",
        video: false,
        vote_average: 7.5,
        vote_count: 7515,
      },
      {
        adult: false,
        backdrop_path: "/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg",
        genre_ids: [878, 28, 12],
        id: 24428,
        original_language: "en",
        original_title: "The Avengers",
        overview:
          "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
        popularity: 264.932,
        poster_path: "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        release_date: "2012-04-25",
        title: "The Avengers",
        video: false,
        vote_average: 7.7,
        vote_count: 26859,
      },
      {
        adult: false,
        backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        genre_ids: [12, 878, 28],
        id: 299534,
        original_language: "en",
        original_title: "Avengers: Endgame",
        overview:
          "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        popularity: 248.023,
        poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        release_date: "2019-04-24",
        title: "Avengers: Endgame",
        video: false,
        vote_average: 8.3,
        vote_count: 20966,
      },
      {
        adult: false,
        backdrop_path: "/xnqust9Li4oxfhXD5kcPi3UC8i4.jpg",
        genre_ids: [28, 12, 878],
        id: 99861,
        original_language: "en",
        original_title: "Avengers: Age of Ultron",
        overview:
          "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
        popularity: 192.084,
        poster_path: "/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
        release_date: "2015-04-22",
        title: "Avengers: Age of Ultron",
        video: false,
        vote_average: 7.3,
        vote_count: 19786,
      },
      {
        adult: false,
        backdrop_path: "/tTlAA0REGPXSZPBfWyTW9ipIv1I.jpg",
        genre_ids: [28, 12, 878, 18],
        id: 315635,
        original_language: "en",
        original_title: "Spider-Man: Homecoming",
        overview:
          "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
        popularity: 163.621,
        poster_path: "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        release_date: "2017-07-05",
        title: "Spider-Man: Homecoming",
        video: false,
        vote_average: 7.4,
        vote_count: 18516,
      },
      {
        adult: false,
        backdrop_path: "/7FWlcZq3r6525LWOcvO9kNWurN1.jpg",
        genre_ids: [12, 28, 878],
        id: 271110,
        original_language: "en",
        original_title: "Captain America: Civil War",
        overview:
          "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
        popularity: 160.935,
        poster_path: "/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
        release_date: "2016-04-27",
        title: "Captain America: Civil War",
        video: false,
        vote_average: 7.4,
        vote_count: 19755,
      },
      {
        adult: false,
        backdrop_path: "/7lmBufEG7P7Y1HClYK3gCxYrkgS.jpg",
        genre_ids: [12, 28, 878],
        id: 10138,
        original_language: "en",
        original_title: "Iron Man 2",
        overview:
          "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.",
        popularity: 157.893,
        poster_path: "/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
        release_date: "2010-04-28",
        title: "Iron Man 2",
        video: false,
        vote_average: 6.8,
        vote_count: 17879,
      },
      {
        adult: false,
        backdrop_path: "/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg",
        genre_ids: [12, 14, 28],
        id: 10195,
        original_language: "en",
        original_title: "Thor",
        overview:
          "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
        popularity: 157.47,
        poster_path: "/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
        release_date: "2011-04-21",
        title: "Thor",
        video: false,
        vote_average: 6.8,
        vote_count: 18138,
      },
      {
        adult: false,
        backdrop_path: "/ng6SSB3JhbcpKTwbPDsRwUYK8Cq.jpg",
        genre_ids: [28, 12, 878],
        id: 429617,
        original_language: "en",
        original_title: "Spider-Man: Far From Home",
        overview:
          "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
        popularity: 157.245,
        poster_path: "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
        release_date: "2019-06-28",
        title: "Spider-Man: Far From Home",
        video: false,
        vote_average: 7.5,
        vote_count: 12532,
      },
      {
        adult: false,
        backdrop_path: "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
        genre_ids: [28, 12, 14, 878],
        id: 284053,
        original_language: "en",
        original_title: "Thor: Ragnarok",
        overview:
          "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of a powerful new threat, the ruthless Hela.",
        popularity: 154.143,
        poster_path: "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
        release_date: "2017-10-24",
        title: "Thor: Ragnarok",
        video: false,
        vote_average: 7.6,
        vote_count: 17587,
      },
      {
        adult: false,
        backdrop_path: "/lSiKaU2cEB2np1m2nh2F8YXXEvR.jpg",
        genre_ids: [28, 12, 14],
        id: 616037,
        original_language: "en",
        original_title: "Thor: Love and Thunder",
        overview:
          "Thor goes on a journey unlike anything he’s ever faced — a quest for inner peace. But his retirement is interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who — to Thor’s surprise — inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor. Together, they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
        popularity: 143.842,
        poster_path: "/cOkx3uu5FVgC902Q6Y3MxLpBWbX.jpg",
        release_date: "2022-07-06",
        title: "Thor: Love and Thunder",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: "/uhYoytlNaq46dG81wLmHqaSuzWu.jpg",
        genre_ids: [28, 12, 14],
        id: 76338,
        original_language: "en",
        original_title: "Thor: The Dark World",
        overview:
          "Thor fights to restore order across the cosmos… but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
        popularity: 124.579,
        poster_path: "/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
        release_date: "2013-10-30",
        title: "Thor: The Dark World",
        video: false,
        vote_average: 6.6,
        vote_count: 14797,
      },
      {
        adult: false,
        backdrop_path: "/s6cQgJSkviamXAXBggT2xmj7JiG.jpg",
        genre_ids: [28, 878, 12],
        id: 1726,
        original_language: "en",
        original_title: "Iron Man",
        overview:
          "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        popularity: 116.448,
        poster_path: "/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
        release_date: "2008-04-30",
        title: "Iron Man",
        video: false,
        vote_average: 7.6,
        vote_count: 22681,
      },
      {
        adult: false,
        backdrop_path: "/tKa1gmGKAUVYnflYcadipeL3d9h.jpg",
        genre_ids: [28, 12, 878],
        id: 68721,
        original_language: "en",
        original_title: "Iron Man 3",
        overview:
          "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
        popularity: 116.072,
        poster_path: "/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
        release_date: "2013-04-18",
        title: "Iron Man 3",
        video: false,
        vote_average: 6.9,
        vote_count: 19408,
      },
    ],
    total_pages: 3,
    total_results: 54,
  };
  const movieList = movieData.results.map((movieItem) => (
    <Grid key={movieItem.title} item xs={2} sm={4} md={4}>
      <MovieCard {...movieItem} />
    </Grid>
  ));
  return (
    <>
      <AppHeader />

      <Container>
        <Typography
          color="primary"
          variant="h3"
          component="div"
          sx={{ flexGrow: 1 }}
          sx={{ m: 2 }}
        >
          Trending movies now
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {movieList}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
