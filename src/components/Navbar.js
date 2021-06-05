import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import logo from '../assets/images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import pageLinks from '../constants/links'

const Navbar = ({ toggleSidebar }) => {
  const location = useLocation()
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="web dev" />
          </Link>
          <button type="button" className="toggle-btn" onClick={() => toggleSidebar()}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            const isCurrentSelected = location.pathname === link.url
            return (
              <Link to={link.url} key={link.id} className={isCurrentSelected ? 'nav-link--selected' : null}>
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
