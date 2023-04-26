import React, { useState } from "react"
import logo from "../static/img/logo--full.svg"
import { Link } from "react-router-dom"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { useAuth } from "../hooks/useAuth"

const Header = () => {
  const { user, logout } = useAuth()

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const handleLogout = (e) => {
    e.preventDefault()
    e.stopPropagation()

    logout()
  }

  const listStyle = {
    margin: "0.5rem 0",
    display: "flex",
    padding: "0.5rem",
    borderBottom: "1px solid #eeeeef",
  }

  const listLinkStyle = {
    textTransform: "capitalize",
    textDecoration: "none",
    fontSize: "1.125rem",
    fontWeight: "800",
    lineHeight: "1",
  }

  return (
    <>
      <header
        className={`${navbarOpen ? "header header--NO_SEARCH" : "header"} `}
        style={{ minHeight: "5rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="fresnel-container  ">
                <div className="header__top">
                  <Link to="/">
                    <img
                      width="200"
                      height="55"
                      className="header__logo"
                      src={logo}
                      alt="Glowday Logo and home page link"
                    />
                  </Link>
                  <button
                    onClick={handleToggle}
                    style={{ background: "transparent", border: "none" }}
                    className="header__toggle"
                  >
                    {navbarOpen ? (
                      <MdClose
                        style={{
                          color: "#1e1f1d",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                    ) : (
                      <FiMenu
                        style={{
                          color: "#1e1f1d",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                    )}
                  </button>
                </div>
              </div>
              <div className="fresnel-container fresnel-greaterThanOrEqual-bigmd "></div>

              <nav className="header__menu">
                <span>
                  <Link to="/search">Search</Link>
                </span>
                <span>
                  <Link to="/guide">Treatment Guides</Link>
                </span>

                <span>
                  <Link to="/blog">Blog</Link>
                </span>
                {user && (
                  <span>
                    <Link to="/client">Client Area</Link>
                  </span>
                )}
                {user ? (
                  <span>
                    <Link to="/" onClick={handleLogout}>
                      Log out
                    </Link>
                  </span>
                ) : (
                  <>
                    <span>
                      <Link to="/login">Log in</Link>
                    </span>
                    <span>
                      <Link to="/register">Register</Link>
                    </span>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
        {navbarOpen && (
          <div
            // className="nav__links nav__links--open"
            style={{
              transition: "all .5s cubic-bezier(0,1,.5,1)",
              position: "absolute",
              zIndex: "5",
              top: "4rem",
              backgroundColor: "#fff",
              width: "100%",
              overflow: "auto",
              padding: "1rem",
              maxheight: "28.125rem",
              marginRight: "50px",
            }}
          >
            <ul
              className="margin-bottom-0 padding-left-0 unstyled"
              onClick={() => setNavbarOpen(false)}
            >
              <li style={listStyle}>
                <Link style={listLinkStyle} to="/">
                  Home
                </Link>
              </li>
              <li style={listStyle}>
                <Link style={listLinkStyle} to="/search">
                  Search
                </Link>
              </li>
              <li style={listStyle}>
                <Link style={listLinkStyle} to="/guide">
                  Treatment Guides
                </Link>
              </li>

              <li style={listStyle}>
                <Link style={listLinkStyle} to="/blog">
                  Blog
                </Link>
              </li>
              {user && (
                <li style={listStyle}>
                  <Link style={listLinkStyle} to="/client">
                    Client Area
                  </Link>
                </li>
              )}
              {user ? (
                <li style={listStyle}>
                  <Link style={listLinkStyle} to="/" onClick={handleLogout}>
                    Log out
                  </Link>
                </li>
              ) : (
                <>
                  <li style={listStyle}>
                    <Link style={listLinkStyle} to="/login">
                      Log In
                    </Link>
                  </li>
                  <li style={listStyle}>
                    <Link style={listLinkStyle} to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
