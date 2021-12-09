import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="hero-banner">
      <div style={{ paddingTop: "50px", paddingBottom: "80px" }}>
        <h1>
          We're the future of <br></br>creative marketing.
        </h1>
        <div className="hero-subtitle">
          <p className="p-subtext">
            Same Cactus you love, refreshed with a brand new GatsbyJs website
            made with love.
          </p>
        </div>
      </div>
    </div>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
