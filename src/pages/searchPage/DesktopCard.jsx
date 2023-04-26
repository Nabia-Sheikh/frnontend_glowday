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

const DesktopCard = ({ practitioners, setPopupItem }) => {
  return (
    <>
      {practitioners.map((practitioner) => (
        <article
          key={practitioner._id}
          id={`search-result ${practitioner._id}`}
          className="practitioner-result shadow__utility--spread "
          data-testid="search-result"
          onMouseEnter={() => setPopupItem(practitioner)}
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
          <div className="practitioner-result__info ">
            <div className="practitioner-result__details">
              <div className="margin-right__t-1 cardFixFlex">
                <div
                  className="practitioner-result__details--clinic"
                  role="button"
                >
                  <Link
                    className="link link--unstyled"
                    to={practitioner.featuredCard.practitionerURL}
                  >
                    <h2 className="clickable">{practitioner.name}</h2>
                  </Link>

                  <Link
                    className="link link--unstyled"
                    to={practitioner.featuredCard.clinicURL}
                  >
                    <span className="golden golden--new clickable">
                      {practitioner.clinicName}
                    </span>
                  </Link>
                </div>
                <Link
                  className="link link--unstyled"
                  to={practitioner.featuredCard.clinicURL}
                  // to={`/clinic/${practitioner.clinicSlug}/${practitioner.practitionerSlug}`}
                >
                  <div className="practitioner-result__details--standout">
                    <div className="Star_columnStack__1lHbT Star_ratingArea__-YeoN">
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

                      <span className="bold">
                        {practitioner.featuredCard.reviews
                          ? practitioner.featuredCard.reviews
                          : null}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                <div className="practitioner-result__avatar">
                  <img
                    className="practitioner-result__logo lazyloaded"
                    alt={practitioner.name}
                    width={106}
                    height={106}
                    src={practitioner.featuredCard.profileImage}
                  />

                  {practitioner.featuredCard["Level 7"] && (
                    <div className="practitioner-result__avatar--level round-image shadow__utility">
                      <img
                        src={Level7}
                        alt="Level 7 badge"
                        width={29}
                        height={29}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="practitioner-result__description border-top">
              <div className="margin-bottom__t-1 padding-right__t-1">
                <span className="practitioner-result__price">
                  {practitioner.featuredCard.price}
                </span>
                <span className="practitioner-result__treatment">
                  {practitioner.featuredCard.belowPrice}
                </span>
              </div>
              <div className="margin-bottom-1">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                  <Link
                    className="button text-center button--fullwidth button--small button--flat button--gold"
                    data-testid="profile"
                    to={practitioner.featuredCard.practitionerURL}
                  >
                    View Profile
                  </Link>
                </div>
                <div className="fresnel-container fresnel-lessThan-md " />
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  )
}

export default DesktopCard
