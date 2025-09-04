import styled, { css } from "styled-components";

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  text-decoration: underline;

  ${(props) =>
    props.theme === "dark" &&
    css`
      background-color: Gray;
      color: Red;
      &:hover {
        background-color: LightGray;
        color: black;
      }
    `}
`;
