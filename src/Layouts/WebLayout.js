import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import AppearOnScroll from "../components/AppearOnScroll"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Search from "../components/Search"

const WebLayout = (props) => {
  // When scroll to the id (glowday), make state glowday to true and if scroll up, make it false
  const [glowday, setGlowday] = useState(false)
  const location = useLocation()

  const handleScroll = () => {
    if (window.scrollY > 800) {
      setGlowday(true)
    } else {
      setGlowday(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const notIncluded = [
    "/",
    "/aesthetic",
    "/site-map",
    "/login",
    "/register",
    "/forgot-password",
    "/reset",
    "/client",
    "/client/history",
    "/client/preferences",
    "/search",
  ]
  const headerNotIncluded = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset",
  ]

  const isNotIncluded = notIncluded.includes(location.pathname)
  const isHeaderNotIncluded = headerNotIncluded.includes(location.pathname)

  return (
    <>
      {!isHeaderNotIncluded && <Header />}
      {glowday && !isHeaderNotIncluded && <AppearOnScroll />}
      {!isNotIncluded && <Search />}
      <Outlet />

      {!isHeaderNotIncluded && <Footer />}
    </>
  )
}

export default WebLayout
