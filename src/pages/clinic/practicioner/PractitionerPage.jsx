import React from "react"
import BeforeAndAfters from "./BeforeAndAfters"
import BookingRightSide from "./BookingRightSide"
import ThingsToKnow from "./ThingsToKnow"
import VerifiedReviews from "./VerifiedReviews"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "../../../utils/axios"
import { useEffect } from "react"
import { useState } from "react"
import TreatmentsSection from "./TreatmentsSection"
import { Rating } from "react-simple-star-rating"

const PractitionerPage = () => {
  const { slug: clinic, name: pract } = useParams()
  const [selectedTreatments, setSelectedTreatments] = useState({})
  const [totalAmount, setTotalAmount] = useState(0)

  const [loading, setLoading] = useState(true)
  const [practitioner, setPractitioner] = useState(null)
  const [clampLines, setClampLines] = useState(true)

  const getPractitioner = async () => {
    try {
      const { data } = await axios.get("/practitioners/getpractitioner", {
        params: {
          clinic,
          practitioner: pract,
        },
      })
      console.log("Practitioner DAta", data)
      setPractitioner(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getPractitioner()
  }, [clinic, pract])

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
  }

  const removeTreatment = (v) => {
    setSelectedTreatments((prevState) => {
      const treatments = prevState[v.categoryName].filter(
        (t) => t.practitionerTreatmentId !== v.practitionerTreatmentId
      )
      return {
        ...prevState,
        [v.categoryName]: treatments,
      }
    })
  }

  return (
    <div id="__next">
      <main id="main_content">
        <main id="main_content">
          <div className="margin-top-1">
            <div className="breadcrumbs">
              <div className="container">
                <div className="row">
                  <div className="column">
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
                      <ul>
                        <li className>
                          <Link to="/">Home</Link>
                        </li>
                        <li className>
                          <Link to={`/clinic/${practitioner.clinicSlug}`}>
                            {practitioner.clinicName}
                          </Link>
                        </li>
                        <li className="active">
                          <Link
                            to={`/clinic/${practitioner.clinicSlug}${practitioner.practitionerSlug}`}
                          >
                            {practitioner.name}
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
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
                <div
                  dangerouslySetInnerHTML={{
                    __html: practitioner.pageData.heroSection,
                  }}
                ></div>
              )}
            </div>
            <div className="fresnel-container fresnel-lessThan-md ">
              <div className="canopy">
                <div className="canopy__slider padding-left-1 padding-right-1">
                  <div className="slick-slider slick-initialized">
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{ width: "0%", left: "NaN%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="column-d-8 column">
                  <div className="container margin-bottom-1 border-bottom padding-bottom-1">
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
                      <div className="row row--middle row--spaced">
                        <div className="column column-m-7  margin-right-1 column-t-9 margin-right__t-0">
                          <h1 className="medium margin-bottom-0 bold default-font">
                            {practitioner.name}
                          </h1>

                          {practitioner?.featuredCard && (
                            <div className="Star_rowFlex__ujZrv Star_ratingArea__-YeoN">
                              <Rating
                                initialValue={
                                  // Convert percentage to 5 star value
                                  Math.round(
                                    (parseInt(
                                      practitioner?.featuredCard
                                        ?.ratingPercentage
                                    ) /
                                      100) *
                                      5
                                  )
                                }
                                size="20"
                                fillColor="#d2ae76"
                                readonly
                              />
                              <span
                                className="bold"
                                style={{
                                  marginLeft: "15px",
                                }}
                              >
                                {practitioner?.featuredCard?.reviews}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="column column-m-4 column-t-3 column--flex row--end">
                          <div className="canopy__logo">
                            <img
                              src={practitioner.profileImageUrl}
                              alt={practitioner.name}
                              width={160}
                              height={160}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
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
                    <div
                      className="border-bottom margin-bottom-1"
                      onClick={contentClickHandler}
                      dangerouslySetInnerHTML={{
                        __html: practitioner.pageData.aboutSection,
                      }}
                    ></div>
                  )}

                  {loading ? (
                    <div className="spinner">
                      <div />
                      <div />
                      <div />
                      <div />
                    </div>
                  ) : (
                    <TreatmentsSection
                      selectedTreatments={selectedTreatments}
                      setSelectedTreatments={(v) => setSelectedTreatments(v)}
                      data={practitioner.practitionerCategoryTreatments}
                    />
                  )}

                  <div className="modal modal__tooltip" role="dialog">
                    <div className="modal__dialog ">
                      <button
                        className="button--modal__close round-button"
                        type="button"
                        title="close the modal"
                        data-testid
                      >
                        <img
                          src="../../../static/img/icons/white/close.svg"
                          alt="icon for close the modal"
                          width={24}
                          height={24}
                          className="round-image"
                        />
                      </button>
                    </div>
                  </div>

                  {/* <BeforeAndAfters /> */}

                  {/* <VerifiedReviews /> */}
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
                    <ThingsToKnow data={practitioner.pageData.thingsToKnow} />
                  )}
                </div>
                <BookingRightSide
                  practitioner={practitioner}
                  removeTreatment={(v) => removeTreatment(v)}
                  selectedTreatments={selectedTreatments}
                  totalAmount={totalAmount}
                  setTotalAmount={(v) => setTotalAmount(v)}
                />
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  )
}

export default PractitionerPage
