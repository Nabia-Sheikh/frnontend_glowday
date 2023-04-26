import React, { useState } from "react"
import ClinicMap from "./clinicMap.jpeg"

import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "../../utils/axios"
import { useEffect } from "react"
import cheerio from "cheerio"
import MapClinic from "./ClinicMap.jsx"
const ClinicPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [clinic, setClinic] = useState(null)
  const [html, setHtml] = useState(null)
  const [clampLines, setClampLines] = useState(true)
  const [rightSec, setRightSec] = useState(null)

  const getClinic = async () => {
    try {
      const { data } = await axios.get("/clinics/getClinic", {
        params: {
          name: slug,
        },
      })

      const clinicDetails = cheerio.load(data.mainContent)
      // const detailsContainer = clinicDetails(
      //   ".clinic-details-container.column-d-6.column-t-4.column-m-12.padding-right__t-1.column-t-order-1"
      // )
      // const rightSec = detailsContainer.html()
      // setRightSec(rightSec)

      const sectionToRemove = clinicDetails(
        ".column-d-6.column-t-8.column-m-12.column-t-order-2.padding-bottom-1"
      )

      sectionToRemove.remove()
      const targetDiv = clinicDetails(
        ".column-d-6.column-t-8.column-m-12.column-t-order-2.padding-bottom-1"
      )
      clinicDetails(targetDiv).data(
        "MapClinic",
        data.clinicData?.address?.geocode
      )
      // targetDiv.replaceWith(
      //   <MapClinic location={"data.clinicData?.address?.geocode"} />
      // )

      const mainContent = clinicDetails.html()
      setHtml(mainContent)

      setClinic(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getClinic()
  }, [slug])

  const contentClickHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()

    // Check if click on button class name having button--text class, then toggle the clampLines state
    if (
      e.target.classList.contains("button") &&
      e.target.classList.contains("button--text")
    ) {
      // Also change it's parent class e.g. clamp-lines to full-height
      const parent = e.target.parentElement

      // Check if parent first child is a article tag then toggle the class
      if (parent.firstElementChild.tagName === "ARTICLE") {
        if (clampLines) {
          parent.firstElementChild.classList.remove("clamp-lines")
          parent.firstElementChild.classList.add("full-height")
        } else {
          parent.firstElementChild.classList.remove("full-height")
          parent.firstElementChild.classList.add("clamp-lines")
        }
      }

      if (clampLines) {
        parent.classList.remove("clamp-lines")
        parent.classList.add("full-height")
      } else {
        parent.classList.remove("full-height")
        parent.classList.add("clamp-lines")
      }

      setClampLines(!clampLines)

      if (e.target.innerText === "READ MORE") {
        e.target.innerText = "READ LESS"
      } else {
        e.target.innerText = "READ MORE"
      }

      return
    }

    const href = e.target.getAttribute("href")
    if (href) {
      e.preventDefault()
      return navigate(href)
    }
    // Check if clicked element parent has href, if yes then navigate to that href
    if (e.target.parentElement.tagName === "A") {
      return navigate(e.target.parentElement.getAttribute("href"))
    }

    if (e.target.tagName === "IMG") {
      let parent = e.target.parentElement
      if (parent.tagName === "A") {
        return navigate(parent.getAttribute("href"))
      }
    }

    if (
      e.target.classList.contains("clickable") ||
      e.target.classList.contains("Star_columnStack__1lHbT") ||
      e.target.classList.contains("Star_rating__WroDB") ||
      e.target.classList.contains("Star_ratingInfo__1igKL") ||
      e.target.classList.contains("bold")
    ) {
      let parent = e.target.parentElement
      while (parent.tagName !== "A") {
        parent = parent.parentElement
      }
      return navigate(parent.getAttribute("href"))
    }
  }

  return (
    <div id="__next">
      <main id="main_content">
        <main id="main_content">
          {loading ? (
            <div
              className="padding-left-15 padding-top-3"
              style={{
                //  Center the spinner using flex
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="spinner">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          ) : (
            <div className="margin-top-1">
              {clinic && (
                <>
                  <div
                    onClick={contentClickHandler}
                    dangerouslySetInnerHTML={{
                      __html: html,
                      // __html: clinic.mainContent,
                    }}
                  />
                </>
              )}
            </div>
          )}
        </main>
      </main>
    </div>
  )
}

export default ClinicPage
