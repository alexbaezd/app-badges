import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import platziConfLogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="container m-auto home__container">
        <div className="info__conf">
          <img className="img-fluid" src={platziConfLogo} alt="Logo" />
          <h1 className="mt-4">Print Your Badges</h1>
          <p className="font-weight-bold fs-2">
            The easiest way to manage your conference
          </p>
          <Link
            to="/badges"
            className="btn btn-primary btn-lg btn-shadow-primary"
          >
            Start Now
          </Link>
        </div>
        <img className="astro img-fluid" src={astronauts} alt="Logo" />
      </div>
    </div>
  );
};

export default Home;
