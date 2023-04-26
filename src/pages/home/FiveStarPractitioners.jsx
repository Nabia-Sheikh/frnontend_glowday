import React from "react"
import { useEffect } from "react"
import JsxParser from "react-jsx-parser"
import { Link, useNavigate } from "react-router-dom"
import { Rating } from "react-simple-star-rating"
import Slider from "react-slick"
import { practicioners } from "./CardPractitioners"

const FiveStarPractitioners = () => {
  const navigate = useNavigate()
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    prevArrow: (
      <div class=" slick-prev custom-arrow" style="display: block">
        <button type="button" class="prev-arrow">
          <span class="sr-only">previous</span>
        </button>
      </div>
    ),

    // <div
    //             className="slick-arrow slick-prev slick-disabled custom-arrow"
    //             style={{ display: "block" }}
    //           >
    //             <button type="button" className="prev-arrow">
    //               <span className="sr-only">previous</span>
    //             </button>
    //           </div>

    nextArrow: (
      <div class=" slick-next custom-arrow " style="display: block">
        <button type="button" class="next-arrow">
          <span class="sr-only">next</span>
        </button>
      </div>
    ),
    slidesToShow: 4,
    slidesToScroll: 4,
    className: "custom-arrow",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="section padding-top-1 padding-bottom-2 margin-bottom-1 dark-slider-dots">
      <div className="featured-wrapper container">
        <div className="column top-padding text-center">
          <div className="text-center">
            <span className="uppercase golden bold">TAKE A LOOK</span>
          </div>
          <div className="column margin-bottom-2">
            <div className="cms-content undefined">
              <h2>Five Star Practitioners</h2>
              <p>
                Read Glowday verified reviews from real people who have enjoyed
                aesthetic treatments including&nbsp;lip fillers, Botox and
                chemical peels!
              </p>
            </div>
          </div>
        </div>
        <div className="featured-wrapper__slider padding-left-2 padding-right-2 column--relative">
          <Slider {...settings}>
            {practicioners.map((practicioner, index) => (
              <div key={index}>
                <div
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                  onClick={() => {
                    navigate(`/${practicioner.practitionerUrl}`)
                  }}
                >
                  <article className="featured-clinic margin-left-1 margin-right-1 margin-bottom-1 shadow__utility clickable margin-top-1">
                    <div className="practitioner-result__images">
                      <img
                        src={practicioner.image}
                        alt={practicioner.name}
                        className="lazyautosizes lazyloading"
                        loading="lazy"
                        decoding="async"
                        data-sizes="auto"
                        width={640}
                        height={574}
                        sizes="252px"
                      />
                    </div>
                    <div className="margin-top-1 padding-bottom-1 padding-left-1 padding-right-1 column--relative row">
                      <div className="column-m-12">
                        <div className="featured-clinic__header">
                          <h3 className="featured-clinic capitalise margin-bottom-0">
                            {practicioner.name}
                          </h3>
                          <div className="undefined Star_ratingArea__-YeoN">
                            <Rating
                              initialValue={
                                // Convert percentage to 5 star value
                                Math.round(
                                  (parseInt(
                                    practicioner.rating.replace("%", "")
                                  ) /
                                    100) *
                                    5
                                )
                              }
                              size="20"
                              fillColor="#d2ae76"
                              readonly
                            />
                            <span className="bold">{practicioner.reviews}</span>
                          </div>
                        </div>
                      </div>
                      {/* Parse string jsx */}
                      <JsxParser
                        bindings={{
                          Link,
                        }}
                        components={{
                          Link,
                        }}
                        jsx={practicioner.comment}
                      />

                      <div
                        className="featured-clinic__logo"
                        onClick={() => {
                          navigate(`/${practicioner.clinicUrl}`)
                        }}
                      >
                        <div className="avatar">
                          <img
                            src={practicioner.logo}
                            className="lazyloaded"
                            alt={practicioner.name}
                            width={128}
                            height={128}
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default FiveStarPractitioners
