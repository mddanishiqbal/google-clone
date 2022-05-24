import { Button } from "@material-ui/core";
import { Mic, SearchOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Search.css";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hidebuttons }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchOutlined className="button_icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic className="button_icon" />
      </div>

      {!hidebuttons ? (
        <div className="search_button">
          <Button onClick={search} type="submit" variant="outlined">
            Google Search
          </Button>
          <Button type="submit" variant="outlined">
            I am feeling lucky
          </Button>
        </div>
      ) : (
        <div className="search_button" style={{ display: "none" }}>
          <Button onClick={search} type="submit" variant="outlined">
            Google Search
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
