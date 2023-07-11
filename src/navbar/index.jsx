import React, { useCallback, useContext } from "react";
import classes from "./index.module.css";
import { useState, useEffect } from "react";
import { ContextData } from "../context/context";
import { json, Link, useNavigate } from "react-router-dom";

const Navbar = React.memo(() => {
  const [search, setsearch] = useState("naruto");

  const navigate = useNavigate();

  const ctxData = useContext(ContextData);

  const { fetchData: getData } = ctxData;

  const fetchData = useCallback(async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=12`
    );

    if (!response) {
      throw json(
        {
          message: "Could not fetch events",
        },
        {
          status: 500,
        }
      );
    } else {
      const resData = await response.json();

      getData(resData.data);
    }
  }, [search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, [500]);

    return () => clearTimeout(timer);
  }, [search]);

  function onSubmitHandler(e) {
    e.preventDefault();

    navigate("/anime");
  }

  return (
    <div className={classes.container}>
      <nav>
        <Link to="/">
          <h1>AnimeCrazy</h1>
        </Link>
        <form onSubmit={onSubmitHandler} id="search-form">
          <input
            className={classes.input}
            placeholder="search"
            onChange={(e) => setsearch(e.target.value)}
          />
        </form>

        <ul>
          <Link to="anime">
            <li>Anime</li>
          </Link>

          <Link to="my-list">
            <li>My List</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
});

export default Navbar;
