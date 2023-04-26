import React from "react"
import { Link } from "react-router-dom"

import Slider from "react-slick"
import { Rating } from "react-simple-star-rating"
import Level7 from "./../../static/img/icons/l7.svg"
import { useRef } from "react"
import { useEffect } from "react"

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const MobileCard = ({ practitioners }) => {
  console.log("Mobile Rendered")
  return (
    <>
      {practitioners.map((practitioner) => (
        <div
          key={practitioner._id}
          id={`search-result ${practitioner._id}`}
          className="practitioner-result shadow__utility--spread "
          data-testid="search-result"
        >
          <div className="practitioner-result__images clickable" role="button">
            <Slider {...settings}>
              {practitioner.clinicImages.map((image) => (
                <div key={image}>
                  <div
                    style={{
                      width: "100%",
                      display: "inline-block",
                    }}
                  >
                    <img src={image} alt="" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="fresnel-container fresnel-lessThan-md ">
            <div className="practitioner-result__avatar">
              <Link to={practitioner.featuredCard.clinicURL}>
                <img
                  className="practitioner-result__logo ls-is-cached lazyloaded"
                  alt="Kelsey Bailey"
                  src={practitioner.featuredCard.profileImage}
                />
                {practitioner.featuredCard["Level 7"] && (
                  <Link to={practitioner.featuredCard.practitionerURL}>
                    <div className="practitioner-result__avatar--level round-image shadow__utility">
                      <img
                        src={Level7}
                        alt="Level 7 badge"
                        width={29}
                        height={29}
                      />
                    </div>
                  </Link>
                )}
              </Link>
            </div>
          </div>
          <div className="practitioner-result__info">
            <div className="practitioner-result__details">
              <div className="margin-right__t-1">
                <div
                  className="practitioner-result__details--clinic"
                  role="button"
                >
                  <h2 className="clickable">{practitioner.name}</h2>
                  <span className="golden golden--new clickable">
                    {practitioner.clinicName}
                  </span>
                </div>
                <Link
                  className="link link--unstyled"
                  to={practitioner.featuredCard.practitionerURL}
                >
                  <div
                    className="practitioner-result__details--standout"
                    style={{
                      marginTop: "5px",
                    }}
                  >
                    <Rating
                      initialValue={
                        // Convert percentage to 5 star value
                        Math.round(
                          (parseInt(
                            practitioner.featuredCard.ratingPercentage
                          ) /
                            100) *
                            5
                        )
                      }
                      size="20"
                      fillColor="#d2ae76"
                      readonly
                    />
                    <br />
                    <span
                      className="bold"
                      style={{
                        marginTop: "5px",
                      }}
                    >
                      {practitioner.featuredCard.reviews
                        ? practitioner.featuredCard.reviews
                        : null}
                    </span>
                  </div>
                </Link>
              </div>
              <div className="fresnel-container fresnel-greaterThanOrEqual-md " />
            </div>
            <div className="fresnel-container fresnel-lessThan-md ">
              <div>
                <hr className="content-divider content-divider__super-small " />
              </div>
            </div>
            <div className="practitioner-result__description">
              <div className="margin-bottom__t-1 padding-right__t-1">
                <span className="practitioner-result__price">
                  {" "}
                  {practitioner.featuredCard.price}
                </span>
                <span className="practitioner-result__treatment">
                  {" "}
                  {practitioner.featuredCard.belowPrice}
                </span>
              </div>
              <div className="margin-bottom-1">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md " />
                <div className="fresnel-container fresnel-lessThan-md ">
                  <Link
                    to={practitioner.featuredCard.practitionerURL}
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <button
                      className="button button--fullwidth button--small button--flat button--gold"
                      type="button"
                      data-testid="profile"
                      title="View Profile"
                    >
                      View Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default MobileCard
