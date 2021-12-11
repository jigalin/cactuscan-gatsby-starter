import React, { useState, useEffect } from "react"
import "./Navbar.css"

export default function Navbar() {
  const [stickyClass, setStickyClass] = useState<String>("")

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar)
    return () => window.removeEventListener("scroll", stickNavbar)
  }, [])

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      // window height changed for the demo
      windowHeight > 920 ? setStickyClass("sticky-nav") : setStickyClass("")
    }
  }

  return (
    <>
      <div className={stickyClass === "sticky-nav" ? "spacer" : ""}></div>
      <div className={`navbar ${stickyClass}`}>
        <button
          style={{ color: "black", backgroundColor: "rgb(212, 255, 235)" }}
        >
          Home
        </button>
        <button>Services</button>
        <button>Media</button>
        <button>About</button>
        <button>Contact</button>
        <button>FAQ</button>
      </div>
    </>
  )
}
