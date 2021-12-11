import React from "react"
import defence from "../images/logos/defence.webp"
import F45 from "../images/logos/F45.webp"
import lendlease from "../images/logos/lendlease.webp"
import mca from "../images/logos/mca.webp"
import sundance from "../images/logos/sundance.webp"
import westpac from "../images/logos/westpac.webp"
import telstra from "../images/logos/telstra.png"
import "./Clients.css"

export const Clients = () => {
  return (
    <>
      <div className="clients-wrapper">
        <div className="div-client">
          <img src={defence} alt="" className="img-client" />
        </div>
        <div className="div-client">
          <img src={F45} alt="" className="img-client" />
        </div>
        <div className="div-client">
          <img src={lendlease} alt="" className="img-client" />
        </div>
        <div className="div-client">
          <img src={sundance} alt="" className="img-client" />
        </div>
        <div className="div-client">
          <img src={westpac} alt="" className="img-client" />
        </div>
        <div className="div-client">
          <img src={mca} alt="" className="img-client" />
        </div>
        <div className="div-client">
          <img src={telstra} alt="" className="img-client" />
        </div>
      </div>
    </>
  )
}
