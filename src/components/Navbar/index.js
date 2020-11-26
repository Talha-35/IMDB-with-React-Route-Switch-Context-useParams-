import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/imdb1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faInfo, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  StyledNavbar,
  StyledLogoLeft,
  StyledLogoDivRight,
  StyledLinks,
  StyledLogoDiv,
} from "./NavBar.style";

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledLogoDiv>
        <StyledLogoLeft src={Logo} alt={"Movie Poster"} />
      </StyledLogoDiv>
      <StyledLinks>
        <Link
          to="/"
          style={{
            color: "white",
            fontSize: "0.7rem",
            padding: 7,
            textDecorationLine: "none",
          }}
        >
          Home
        </Link>

        <a
          style={{
            color: "white",
            fontSize: "0.7rem",
            padding: 7,
            textDecorationLine: "none",
          }}
          target="_blank"
          href="https://www.themoviedb.org/about"
        >
          About
        </a>

        <a
          style={{
            color: "white",
            fontSize: "0.7rem",
            padding: 7,
            textDecorationLine: "none",
          }}
          target="_blank"
          href="https://www.themoviedb.org/documentation/api"
        >
          Api
        </a>
        <a
          style={{
            color: "white",
            fontSize: "0.7rem",
            padding: 7,
            textDecorationLine: "none",
          }}
          target="_blank"
          href="https://www.themoviedb.org/about/staying-in-touch"
        >
          Contact
        </a>
      </StyledLinks>
      <StyledLogoDivRight>
        <a
          style={{ color: "white", fontSize: "0.7rem", padding: 7 }}
          target="_blank"
          href="https://twitter.com/themoviedb"
        >
          <FontAwesomeIcon icon={faSearch} color="white" />
        </a>
        <a
          style={{ color: "white", fontSize: "0.7rem", padding: 7 }}
          target="_blank"
          href="https://twitter.com/themoviedb"
        >
          <FontAwesomeIcon icon={faInfo} color="white" />
        </a>
        <a
          style={{ color: "white", fontSize: "0.7rem", padding: 7 }}
          target="_blank"
          href="https://twitter.com/themoviedb"
        >
          <FontAwesomeIcon icon={faBars} color="white" />
        </a>
      </StyledLogoDivRight>
    </StyledNavbar>
  );
}
