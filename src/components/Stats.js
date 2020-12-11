import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GiEarthAmerica } from "react-icons/gi"
import { MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"
import BackgroundImage from "gatsby-background-image"
import { Heading, Description } from "./HeadingsElements"

export const Stats = () => {
  const data = useStaticQuery(
    graphql`
      query BackgroundQuery {
        backgroundImage: file(relativePath: { eq: "bg-2.PNG" }) {
          childImageSharp {
            fluid {
              # copies all additional GatsbyImageSharpFluid props
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  // const imageData = data.background.childImageSharp.fluid

  return (
    <StatsContainer>
      <StatsBg>
        <BgImage
          src={data.backgroundImage.childImageSharp.fluid.src}
          fluid={data.backgroundImage.childImageSharp.fluid}
        ></BgImage>
      </StatsBg>
      <Content>
        <StatHeading>Why Choose Us?</StatHeading>
        <StatText>A brand name you can trust</StatText>
        <StatsWrapper>
          {StatsInfo.map((item, index) => {
            return (
              <StatsBox key={index}>
                <IconContainer>
                  <IconBackground>
                    <Icon>{item.icon}</Icon>
                  </IconBackground>
                </IconContainer>
                <StatTitle>{item.title}</StatTitle>
                <StatDes>{item.des}</StatDes>
              </StatsBox>
            )
          })}
        </StatsWrapper>
      </Content>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  width: 100%;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;
  position: relative;
`

const StatsBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  z-index: 12;
`

const StatHeading = styled(Heading)`
  color: #fff;
`

const StatText = styled(Description)`
  color: #fff;
`

const BgImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
`

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 calc((100vw - 1300px) / 2);
  max-width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  z-index: 10;
  max-width: 375px;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

const IconBackground = styled.div`
  height: 80px;
  width: 80px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  vertical-align: bottom;
  display: inline-block;
`

const Icon = styled.div`
  font-size: 3rem;
  text-align: center;
  margin: auto;
  vertical-align: middle;
  margin: 1rem;
`
const Earth = styled(GiEarthAmerica)`
  fill: #f26a2e;
`

const Timer = styled(MdTimer)`
  fill: #f26a2e;
`

const Wallet = styled(FaMoneyCheck)`
  fill: #f26a2e;
`

const StatTitle = styled.div`
  font-size: clamp(1.8rem, 2.5vw, 1.5rem);
  text-align: center;
  font-family: "PT Sans Caption", sans-serif;
  font-weight: bold;
  color: #fff;
  max-width: 327px;
  margin: 0.5rem 0 1rem 0;
`

const StatDes = styled.div`
  font-size: clamp(0.5rem, 6vw, 1rem);
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 0.3rem;
  color: #fff;
`

const StatsInfo = [
  {
    icon: <Earth />,
    title: "Wide Variety of Destinations",
    des: "Travel to a wide variety of destinations",
  },
  {
    icon: <Timer />,
    title: "Top World Class Service ",
    des: "24/7 global support at high speeds",
  },
  {
    icon: <Wallet />,
    title: "Affordable Price Guarantee",
    des: "We offer the best prices available ",
  },
]
