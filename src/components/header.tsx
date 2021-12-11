import * as React from "react"
import PropTypes from "prop-types"
import logo from "../images/CactusLogo.svg"
import "./header.css"

const Header = ({ siteTitle }) => (
  <div className="header">
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100px",
        alignItems: "center",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "inline-flex", paddingTop: "35px" }}>
        <img src={logo} alt="" style={{ maxHeight: "50px" }} />
      </div>
      <div style={{ display: "inline-flex" }}>
        <input type="button" value="Learn More" className="btn-alt" />
        <input type="button" value="Sign Up" className="btn-main" />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
