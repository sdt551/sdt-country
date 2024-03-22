import React, { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

function Search({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    onSearch(searchText);
  }, [searchText]);
  return (
    <div className="d-flex justify-content-center">
      <InputGroup size="md" className="mb-3 w-50 ">
        <InputGroup.Text id="inputGroup-sizing-md" className="bg-success">
          Search
        </InputGroup.Text>
        <Form.Control
          aria-label="large"
          aria-describedby="inputGroup-sizing-md"
          placeholder="Search country"
          value={searchText}
          onChange={handleChange}
        />
      </InputGroup>
    </div>
  );
}

export default Search;
