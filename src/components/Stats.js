import React from "react"
import styled from "styled-components"
import { GiEarthAmerica } from "react-icons/gi"
import { MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"
import { Heading, Description } from "./HeadingsElements"
import { Button } from "./Button"
import StatBg from "../assets/images/bg-2.jpg"

export const Stats = () => {
  return (
    <StatsContainer>
      <StatHeading>Why Choose Us?</StatHeading>
      <StatText>A brand name you can trust</StatText>
      <Wrapper>
        {StatsInfo.map((item, index) => {
          return (
            <Box key={index}>
              <IconContainer>
                <IconBackground>
                  <Icon>{item.icon}</Icon>
                </IconBackground>
              </IconContainer>
              <Title>{item.title}</Title>
              <Des>{item.des}</Des>
            </Box>
          )
        })}
      </Wrapper>
      <ButtonContainer>
        <MyButton primary="true" to="/contact">
          CONTACT US
        </MyButton>
      </ButtonContainer>
    </StatsContainer>
  )
}

const StatsContainer = styled.div`
  color: #000;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;
  background: url(${StatBg}) center center/cover no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.35);
`

const StatHeading = styled(Heading)`
  color: #fff;
`

const StatText = styled(Description)`
  color: #fff;
`

export const Wrapper = styled.div`
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

export const Box = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  z-index: 10;
  max-width: 375px;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

export const IconBackground = styled.div`
  height: 80px;
  width: 80px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  vertical-align: bottom;
  display: inline-block;
`

export const Icon = styled.div`
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

export const Title = styled.div`
  font-size: clamp(1.8rem, 2.5vw, 1.5rem);
  text-align: center;
  font-family: "PT Sans Caption", sans-serif;
  font-weight: bold;
  color: #fff;
  max-width: 327px;
  margin: 0.5rem 0 1rem 0;
`

export const Des = styled.div`
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
const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
`

const MyButton = styled(Button)`
  transform: scale(1.2);
  width: 180px;
  text-align: center;
  min-width: 100px;
  font-weight: bold;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`

export default Stats
