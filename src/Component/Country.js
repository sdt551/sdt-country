import React from "react";
import { Button, Col } from "react-bootstrap";
import "./Country.css";

function Country(props) {
  // console.log(props.country.name.common);
  const { country } = props;
  const { name, flags, capital, population, area } = country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <Col md={4} sm={6} lg={3} className="text-center">
      <div className="border border-danger rounded my-2 px-5 py-2 bg-success country">
        <img
          className="w-100"
          style={{ height: "7rem" }}
          src={flags.png}
          alt={name.com}
        />
        <h3>Name: {name.common}</h3>
        <h3>Population: {population}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
        <Button
          variant="info"
          size="lg"
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
        >
          Remove
        </Button>
      </div>
    </Col>
  );
}

export default Country;
