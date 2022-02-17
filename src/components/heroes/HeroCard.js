import React from "react";
import { Link } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";
import "./hero-card.css";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
  heroIndex,
}) => {
  return (
    <div
      className="col-12 col-lg-6 col-xl-4 py-2 card-hero animate__animated animate__fadeInDown"
      style={{ animationDelay: heroIndex * 0.1 + "s" }}
    >
      <div className="row no-gutters bg-white rounded">
        <div className="col-md-4">
          <img
            src={heroImages(`./${id}.jpg`).default}
            className="card-img"
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="description">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {alter_ego !== characters && (
                <p className="card-text">{characters}</p>
              )}

              <p className="card-text">
                <small className="text-muter">{first_appearance}</small>
              </p>
            </div>

            <Link to={`./hero/${id}`}>More...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
