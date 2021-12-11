import React from "react"
import "./HeroBanner.css"
import accent1 from "../images/home-green-accent-1.svg"
import Fade from "react-reveal/Fade"

export const HeroBanner = () => {
  return (
    <div classname="top">
      <div className="hero-banner">
        <div style={{ paddingTop: "90px" }}>
          <Fade top distance="40px">
            <h1>
              We're the future of <br></br>creative marketing.
            </h1>
          </Fade>
          <Fade left distance="40px">
            <div className="hero-subtitle" style={{ zIndex: "1" }}>
              <p className="p-subtext">
                Same Cactus you love, refreshed with a brand new GatsbyJs
                website made with love.
              </p>
            </div>
          </Fade>
        </div>
      </div>

      <div className="accent-1">
        <img src={accent1} alt="" />
      </div>
    </div>
  )
}
