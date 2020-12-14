import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")};
  white-space: nowrap;
  padding: 14px 32px;
  color: #fff;
  font-size: 0.9rem;
  outline: none;
  border: none;
  min-width: 100px;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background: ${({ primary }) => (primary ? "#077BF1" : "#F26A2E")};
    transform: translateY(-5px);
  }
`
