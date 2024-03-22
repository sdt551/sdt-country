import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

function Countries({ countries, onRemoveCountry }) {
  //   console.log(countries);
  return (
    <section className="container">
      <div className="row d-flex">
        {countries.map((country) => {
          const countryNew = { country, id: uuidv4() };
          return (
            <Country
              {...countryNew}
              key={countryNew.id}
              onRemoveCountry={onRemoveCountry}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Countries;
