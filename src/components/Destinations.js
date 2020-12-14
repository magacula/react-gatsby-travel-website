import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"
import { Heading, Description } from "./HeadingsElements"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 */

const Destinations = () => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allDataJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  # copies all additional GatsbyImageSharpFluid props
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getData(data) {
    const tripsArray = []

    // iterating through our GraphQL query to retrieve properties of image
    // and push it to our array
    data.allDataJson.edges.forEach((item, index) => {
      tripsArray.push(
        <TripCard key={index}>
          <TripImg
            src={item.node.img.childImageSharp.fluid.src}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <TripInfo>
            <TextWrap>
              <ImLocation />
              <TripTitle>{item.node.name}</TripTitle>
            </TextWrap>
            {/* We can use css property to add an inline style to our custom component */}
            <MyButton to="/destinations" primary="true">
              {item.node.button}
            </MyButton>
          </TripInfo>
        </TripCard>
      )
    })
    return tripsArray
  }

  return (
    <TripsContainer>
      <Heading>Popular Destinations</Heading>
      <Description>World's best tourist destinations</Description>
      <TripsWrapper>{getData(data)}</TripsWrapper>
    </TripsContainer>
  )
}

/***********************************************************************************
 ****************** Trips Styled Components ****************************************
 ***********************************************************************************
 */

const TripsContainer = styled.div`
  padding: 4rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #fff;
`

const TripsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;
  max-width: 100%;
  height: 100%;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const TripCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.3s ease;

  &:hover {
    transform: scale(0.95);
    transition: 0.2s ease-in;
  }
`

const TripImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
    transition: 0.2s ease-in;
  }
`

const TripInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  font-weight: bold;

  @media screen and (max-width: 280px) {
    padding: 0 2rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const TripTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
const MyButton = styled(Button)`
  position: absolute;
  top: 420px;
  font-size: 14px;
`

export default Destinations
