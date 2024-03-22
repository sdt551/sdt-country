import { useEffect } from "react";
import { useState } from "react";
import Countries from "./Component/Countries";
import Search from "./Component/Search";

const url = "https://restcountries.com/v3.1/all";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  // const [filteredCountry, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      // setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = countries.filter((country) => country.name.common !== name);
    setCountries(filter);
  };

  const handleSearch = (searchValue) => {
    const value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setCountries(newCountries);
  };

  // console.log(countries);
  return (
    <>
      <h1 className="text-center py-3">Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Loading...</h2>}
      {error && <h1>retry</h1>}
      {countries && (
        <Countries
          countries={countries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </>
  );
}

export default App;
