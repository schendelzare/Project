import React from "react";
import classes from "./index.module.css";
import video from "../../assets/movie/black-clover.mp4";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/anime-crazy.png";

const Home = React.memo(() => {
  const navigate = useNavigate();

  function navigateToHomeHandler() {
    navigate("/anime");
  }

  return (
    <div>
      <div className={classes.container}>
        <video src={video} autoPlay muted loop className={classes.video} />
        <header>
          <img src={logo} alt="logo" />
          <h3>Watch Anime for FREE!</h3>
        </header>
        <button onClick={navigateToHomeHandler}>Get Started!</button>
      </div>
    </div>
  );
});

export default Home;
