import React from "react";
import "./styles/NotFound.css";
import astro from "../images/astro.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="e404">
      <div className="container m-auto notFound__container">
        <img className="img-fluid img__notFound" src={astro} alt="Logo" />
        <div className="d-flex flex-column align-items-center">
          <h1>Houston, we have a problem</h1>
          <Link to="/" className="btn btn-primary btn-lg">
            Get me out of here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
