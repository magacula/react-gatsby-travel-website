import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Video from "../assets/videos/bg_video2.mp4"
import BgImage from "../assets/images/hero.png"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          src={Video}
          type="video/mp4"
          poster={BgImage}
          autoPlay
          loop
          muted
          playsInline
        />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Take An Escape</HeroH1>
          <HeroP>Plan your next trip today</HeroP>
          <Button to="/" primary="true">
            GET STARTED
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  display: flex;
  /* background: #0c0c0c; */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.07);
  }
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.2;
  font-weight: bold;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroH1 = styled.h1`
  // clamp can help resize fonts instead of using media queries
  // clamp (smallest size font, amount to increase, max size font)
  font-size: clamp(1.8rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
  font-family: "PT Sans Caption", sans-serif;
`

const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 2rem);
  margin-bottom: 2rem;
  font-family: "PT Sans Caption", sans-serif;
`
