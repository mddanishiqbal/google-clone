import React from "react";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import GoogloLogo from "../assets/google-logo.png";
import Search from "./Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
  SearchOutlined,
} from "@material-ui/icons";
import FacebookLogo from "../assets/facebook-logo.png";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { ListItemSecondaryAction } from "@material-ui/core";

const SearchPage = () => {
  const [{ term }] = useStateValue();

  const { data } = useGoogleSearch(term);

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img src={GoogloLogo} alt="Google Logo" />
        </Link>

        <div className="searchPage_headerBody">
          <Search hidebuttons />

          <div className="searchPage_options">
            <div className="searchPage_optionLeft">
              <div className="searchPage_option">
                <SearchOutlined />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <Description />
                <Link to="/all">News</Link>
              </div>
              <div className="searchPage_option">
                <Image />
                <Link to="/all">Image</Link>
              </div>
              <div className="searchPage_option">
                <LocalOffer />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <Room />
                <Link to="/all">Maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVert />
                <Link to="/all">More</Link>
              </div>
            </div>

            <div className="searchPage_optionRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a href={item.link} className="searchPage_resultLink">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      alt="Facebook Logo"
                      className="searchPage_resultImage"
                    />
                  )}

                {item.displayLink}
              </a>

              <a href={item.link} className="searchPage_resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultDescription">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
