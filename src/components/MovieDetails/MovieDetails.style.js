import styled from "styled-components";

export const StyledMovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color : #a3a3a3;
`;
export const StyledMovieDetailsImage = styled.img`
  width: auto;
  height: 20rem;
  color: white;
  border-radius: 10px;

  &:hover {
    transform: scale(0.99);
    // transform büyüyüp küçülme yapmaya sağlar
    box-shadow: 0.3rem 0.3rem 0.9rem rgba(0, 0, 0, 0.1);
  }
`;
export const StyledMovieDetailsTitle = styled.h2`
    color: red;
`;
export const StyledMovieDetailsOverview = styled.p`
    margin-top : 30px;
  padding-left: 20%;
  padding-right: 20%;
  text-align: justify;
  font-weight  : bold;
`;
