import "./App.css";
import { useState } from "react";

//**************************************************

export default function App() {
  // const names = ["Gims", "Stromae", "Soprano", "Soolking","M.Pokora"];

  const users = [
    {
      profile:
        "https://w0.peakpx.com/wallpaper/568/61/HD-wallpaper-black-panther-2018-marvel-movie-poster-war.jpg",
      name: "BLACK PANTHER (2018)",
      summary:
        "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place...",
      href: "https://www.rottentomatoes.com/m/black_panther_2018"
    },
    {
      profile:
        "https://d9nvuahg4xykp.cloudfront.net/8971784826531255966/-833069146022734809.jpg",
      name: "AVENGERS: ENDGAME (2019)",
      summary:
        "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply...",
      href: "https://www.rottentomatoes.com/m/avengers_endgame"
    },
    {
      profile:
        "https://m.media-amazon.com/images/M/MV5BZTc0OWQxOWQtNTNhNC00YWQ1LTlkMGEtZDMyNjA3NDcxYWU2XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_.jpg",
      name: "Black Widow",
      summary:
        "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place...",
      href: "https://www.rottentomatoes.com/m/black_widow_2021"
    },
    {
      profile:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg",
      name: "SPIDER-MAN: NO WAY HOME (2021)",
      summary:
        "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place...",
      href: "https://www.rottentomatoes.com/m/spider_man_no_way_home"
    },
    {
      profile:
        "https://www.themoviedb.org/t/p/original/beUKAkJE5gjjTMHYkaiE8uaZLEb.jpg",
      name: "THOR: RAGNAROK (2017)",
      summary:
        "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place...",
      href: "https://www.rottentomatoes.com/m/thor_ragnarok_2017"
    }
  ];

  return (
    <div className="App">
      {/*{names.map(nm=> <Msg name={nm}/>)}  */}
      <h1><u>Movie Review</u></h1>
      {users.map((usr) => (
        <Welcome
          name={usr.name}
          profile={usr.profile}
          summary={usr.summary}
          href={usr.href}
        />
      ))}
    </div>
  );
}

function Welcome({
  name,
  profile,
  summary,
  href,
  likes,
  setlikes,
  dislikes,
  setdislikes
}) {
  return (
    <div className="welcome">
      <img className="user-profile-pic" src={profile} alt="movie poster" />
      <h1>{name}</h1>
      <p>
        <b>Summary:</b> {summary}
        <a href="{href}" target="_blank">
          [More]
        </a>
      </p>
      <Counter />
    </div>
  );
}

//button for like and dislike:
function Counter() {
  const [likes, setlikes] = useState(0);
  const [dislikes, setdislikes] = useState(0);
  return (
    <div className="btn">
      <button
        className="b1"
        style={{ fontSize: "25px", fontWeight: "bold", color: "green" }}
        onClick={() => setlikes(likes + 1)}
      >
        👍 {likes}
      </button>

      <button
        className="b2"
        style={{ fontSize: "25px", fontWeight: "bold", color: "red" }}
        onClick={() => setdislikes(dislikes + 1)}
      >
        👎 {dislikes}
      </button>
    </div>
  );
}
