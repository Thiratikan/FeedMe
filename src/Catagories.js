import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./index.css";

const Catagories = ({ filterItems }) => {
  return (
    <Stack>
      <div className="btn-container">
        <Button
          className="filter-btn"
          color="secondary"
          onClick={() => filterItems("all")}
        >
          all
        </Button>
        <Button
          className="filter-btn"
          color="secondary"
          onClick={() => filterItems("drink")}
        >
          drink
        </Button>
      </div>
    </Stack>
  );
};

export default Catagories;
