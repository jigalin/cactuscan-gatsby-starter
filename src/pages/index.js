import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./index.css"
import img1 from "../images/cactus-image-1.jpeg"
import { HeroBanner } from "../components/HeroBanner"
import { Clients } from "../components/Clients"
import Pulse from "react-reveal/Pulse"
import accent2 from "../images/home-green-accent-2.svg"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroBanner />
    <div className="main-content">
      <Clients />
      <h2 className="header-1">We scale with your needs.</h2>
      <p className="sub-header-1">
        Big small, corporate, sole trader. CactusCan has teams ready to suit
        your individual business needs.
      </p>
      <Pulse>
        <div className="img-1-div">
          <img src={img1} alt="" className="img-round" />
        </div>
      </Pulse>
      <div className="content-wrapper-2-parent">
        <div className="content-wrapper-2">
          <div className="accent-2">
            <img src={accent2} alt="" />
          </div>
          <div className="accent-bottom"></div>
          <div className="green-content"></div>
        </div>
      </div>
    </div>

    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
