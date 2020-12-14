import "./styles/GlobalStyles.js"
import styled from "styled-components"

export const Heading = styled.h1`
  font-size: clamp(1.8rem, 6vw, 2.3rem);
  text-align: center;
  font-family: "PT Sans Caption", sans-serif;
  font-weight: bold;
  color: #000;
  letter-spacing: -1px;
`

export const Description = styled.p`
  font-size: clamp(0.5rem, 6vw, 1.1rem);
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 0.3rem;
  color: #595959;
`
