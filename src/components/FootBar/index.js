import React from "react";
import Logo from "../../assets/movie.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  StyledFootBar,
  StyledLogoLeft,
  StyledLogoDivRight,
  StyledTitle,
  StyledLogoDiv,
} from "./FootBar.style";

export default function FootBar() {
  return (
    <StyledFootBar>
      <StyledLogoDiv>
        <StyledLogoLeft src={Logo} alt={"Movie Poster"} />
      </StyledLogoDiv>
      <StyledTitle>
        <p style={{color : "white" ,paddingLeft : '3rem'}}>The Movie Database Social Media </p>
      </StyledTitle>
      <StyledLogoDivRight>
        <a
          style={{ color: "white", fontSize: "1rem", padding: 7 }}
          target="_blank"
          href="https://twitter.com/themoviedb"
        >
          <FontAwesomeIcon icon={faTwitter} color="white" />
        </a>
        <a
          style={{ color: "white", fontSize: "1rem", padding: 7  }}
          target="_blank"
          href="https://facebook.com/"
        >
          <FontAwesomeIcon icon={faFacebook} color="white" />
        </a>
        <a
          style={{ color: "white", fontSize: "1rem", padding: 7 }}
          target="_blank"
          href="https://github.com/topics/themoviedb"
        >
          <FontAwesomeIcon icon={faGithub} size={50} color="white" />
        </a>
        <a
          style={{ color: "white", fontSize: "1rem", padding: 7 }}
          target="_blank"
          href="https://instagram.com/"
        >
          <FontAwesomeIcon icon={faInstagram} color="white" />
        </a>
      </StyledLogoDivRight>
    </StyledFootBar>
  );
}
