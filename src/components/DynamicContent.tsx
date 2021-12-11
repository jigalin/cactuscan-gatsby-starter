import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import axios from "axios"
import "./DynamicContent.css"

type Nasa = {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

export const DynamicContent = () => {
  const [nasaData, setNasaData] = useState<Nasa>()
  const [imageUrl, setImageUrl] = useState<String>()
  const [showHd, setShowHd] = useState<Boolean>(false)
  let imgCss: string = "left-wrapper-default"

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=1om0B4gAcI9tZm9QPVfA4vhlLY60gTYKiw2M1CdT"
      )
      .then(response => {
        setNasaData(response.data)
        console.log(response.data)
      })
  }, [])

  const data = useStaticQuery(graphql`
    query MyQuery {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `)

  const hdBtnClick = () => {
    setShowHd(!showHd)
  }

  return (
    <div className="parent-wrapper">
      <div className="dynamic-wrapper">
        <div className={showHd ? "left-wrapper-large" : "left-wrapper-default"}>
          <img src={nasaData?.url} className="content-img" />
          {/* <button className="btn-hd" onClick={hdBtnClick}>
            {showHd ? "Show small image" : "Show large image"}
          </button> */}
        </div>
        <div className="dynamic-details">
          <h3 className="content-title">{nasaData?.title}.</h3>
          <h3 className="content-date">Taken on: {nasaData?.date}</h3>
          <p className="content-body">{nasaData?.explanation}</p>
        </div>
      </div>
    </div>
  )
}
