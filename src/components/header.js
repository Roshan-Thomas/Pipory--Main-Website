import { Link } from "gatsby"

import React from "react"

const Header = () => (
  <header>
    <div className="continer">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Pipory</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/our-story">Our Story</Link>
            <Link to="/collab">Collab</Link>
            <Link to="/challenge">Challenge</Link>
            <Link to="/careers">Careers</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)



export default Header
