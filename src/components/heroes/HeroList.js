import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  //const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="row">
        {heroes.map((hero, heroIndex) => (
          <HeroCard key={hero.id} heroIndex={heroIndex} {...hero} />
        ))}
      </div>
    </div>
  );
};
