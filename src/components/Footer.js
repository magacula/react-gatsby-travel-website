import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinkWrapper>
        <FooterDes>
          <h1>XCAPE</h1>
          <p>We strive to create the best experiences for our customers</p>
        </FooterDes>
        <FooterLinkItems>
          <LinkTitle>Resources</LinkTitle>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/destinations">Destinations</FooterLink>
          <FooterLink to="/">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLinkItems>
          <LinkTitle>Videos</LinkTitle>
          <FooterLink to="/">Submit Videos</FooterLink>
          <FooterLink to="/">Ambassadors</FooterLink>
          <FooterLink to="/">Agency</FooterLink>
          <FooterLink to="/">Influencer</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <LinkTitle>Social Media</LinkTitle>
          <FooterLink to="/">Instagram</FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">YouTube</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinkWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 2.5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`

const FooterLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterDes = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    font-family: "PT Sans Caption", sans-serif;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const LinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 1rem;
  font-family: "PT Sans Caption", sans-serif;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.2s ease-out;
  }
`
