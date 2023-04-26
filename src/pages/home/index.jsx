import React, { useState } from "react"
import { Link } from "react-router-dom"
import FiveStarPractitioners from "./FiveStarPractitioners"
import FromTheBlog from "./FromTheBlog"
import SearchHome from "./SearchHome"
import TreatmentGuides from "./TreatmentGuides"
const HomePage = () => {
  // Make isMobile state true, if the screen width is less than 768px
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Add event listener to window to listen for resize event
  window.addEventListener("resize", () => {
    // Set isMobile state to true, if the screen width is less than 768px
    setIsMobile(window.innerWidth < 768)
  })

  return (
    <div id="__next">
      <main id="main_content">
        <main id="main_content">
          <div>
            <section className="section__charcoal top-message">
              <div className="container padding-left-1 padding-right-1 padding-top-1 padding-bottom-1">
                <span className="bold medium">
                  All Glowday practitioners are medically qualified, trained and
                  insured
                </span>
              </div>
            </section>
            <div className="hero column--relative">
              <div className="hero__image">
                <picture>
                  <source
                    media="screen and (max-width: 767px)"
                    srcSet="
                https://cdn.sanity.io/images/iy559jeo/production/718775a7fda8471ccfd8f821500bedbcb918befe-6000x1913.jpg?rect=1962,0,2410,1913&w=320&h=254&auto=format           1x,
                https://cdn.sanity.io/images/iy559jeo/production/718775a7fda8471ccfd8f821500bedbcb918befe-6000x1913.jpg?rect=1962,0,2410,1913&w=320&h=254&auto=format&dpr=2 2x,
                https://cdn.sanity.io/images/iy559jeo/production/718775a7fda8471ccfd8f821500bedbcb918befe-6000x1913.jpg?rect=1962,0,2410,1913&w=320&h=254&auto=format&dpr=3 3x
              "
                  />
                  <source
                    media="screen and (min-width: 767px) and (max-width: 1024px)"
                    srcSet="
                https://cdn.sanity.io/images/iy559jeo/production/718775a7fda8471ccfd8f821500bedbcb918befe-6000x1913.jpg?rect=661,101,4295,1812&w=768&h=324&auto=format           1x,
                https://cdn.sanity.io/images/iy559jeo/production/718775a7fda8471ccfd8f821500bedbcb918befe-6000x1913.jpg?rect=661,101,4295,1812&w=768&h=324&auto=format&dpr=2 2x,
                https://cdn.sanity.io/images/iy559jeo/production/718775a7fda8471ccfd8f821500bedbcb918befe-6000x1913.jpg?rect=661,101,4295,1812&w=768&h=324&auto=format&dpr=3 3x
              "
                  />
                  <source
                    media="screen and (min-width: 1024px)"
                    srcSet="
                https://cdn.sanity.io/images/iy559jeo/production/718775a7fda8471ccfd8f821500bedbcb918befe-6000x1913.jpg?rect=436,181,4520,1632&w=1440&h=520&auto=format           1x,
                https://cdn.sanity.io/images/iy559jeo/production/718775a7fda8471ccfd8f821500bedbcb918befe-6000x1913.jpg?rect=436,181,4520,1632&w=1440&h=520&auto=format&dpr=2 2x,
                https://cdn.sanity.io/images/iy559jeo/production/718775a7fda8471ccfd8f821500bedbcb918befe-6000x1913.jpg?rect=436,181,4520,1632&w=1440&h=520&auto=format&dpr=3 3x
              "
                  />
                  <img
                    src="https://cdn.sanity.io/images/iy559jeo/production/718775a7fda8471ccfd8f821500bedbcb918befe-6000x1913.jpg?rect=661,101,4295,1812&w=768&h=324&auto=format&dpr=2"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="hero__content">
                <div className="container padding-bottom__l-3">
                  <div className="row">
                    <div className="column">
                      <div className="column-d-7 column-lg-6">
                        <h1>Discover and book amazing aesthetic treatments</h1>
                      </div>
                      {!isMobile && <SearchHome />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isMobile && <SearchHome />}
          {/* {isMobile && (
            <div className="fresnel-container fresnel-lessThan-md">
              <div className="homepage-search column--relative">
                <div className="row">
                  <div className="search-widget__navigation row--middle">
                    <div className="margin-right__t-1 margin-right__l-0 current">
                      <button className="button button--pill" type="button">
                        Treatment
                      </button>
                    </div>
                    <div className="margin-right__t-1 margin-right__l-0 false">
                      <button className="button button--pill" type="button">
                        Practitioner
                      </button>
                    </div>
                    <div className="margin-right__t-1 margin-right__l-0 false">
                      <button className="button button--pill" type="button">
                        Clinic
                      </button>
                    </div>
                  </div>
                  <form className="search-widget__form column--relative">
                    <div className="column-t-5">
                      <div className="field result_dropdown field--search">
                        <div className="field">
                          <div className="column-m-12">
                            <label
                              className="sr-only"
                              htmlFor="home__sticky_search_for_treatment"
                            >
                              Treatment
                            </label>
                            <input
                              type="text"
                              autoComplete="off"
                              name="treatment"
                              className="search"
                              id="home__sticky_search_for_treatment"
                              data-testid="treatment-input"
                              placeholder="Find treatments"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column-t-5">
                      <div className="field result_dropdown">
                        <div className="column-m-12">
                          <div className="field">
                            <div className="column-m-12">
                              <label
                                className="sr-only"
                                htmlFor="home__sticky_search_for_location"
                              >
                                Type a location
                              </label>
                              <input
                                type="text"
                                autoComplete="off"
                                name="location"
                                className="location"
                                id="home__sticky_search_for_location"
                                placeholder="Type a location"
                                data-testid="location-input"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column-t-2">
                      <button
                        className="button button--fullwidth button--small button--flat button--gold"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )} */}
          <section className="section__light-gray glowdaypro-top">
            <div className="fresnel-container fresnel-greaterThanOrEqual-md">
              <div className="row container row row--no-margin row--middle">
                <div className="column-m-5 padding-top-1 padding-bottom-1">
                  <div className="column">
                    <div className="column-m-12">
                      <div>
                        <h2>Aesthetic Practitioner?</h2>
                        <p>
                          Grow your business with GlowdayPRO and access new
                          patients, forms, diary, reminders and no show/late
                          cancellation protection.
                        </p>
                      </div>
                      <div>
                        <a
                          className="button text-center button--flat button--gold"
                          href="https://www.pro.glowday.com/"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column-m-7">
                  <div className="glowdaypro-top__image">
                    <img
                      srcSet="
                  https://cdn.sanity.io/images/iy559jeo/production/df3556d65c98369fc13b4864d1eabe3048f145ac-3298x1788.png?rect=345,0,2253,1788&w=320&h=254&auto=format&dpr=3  768w,
                  https://cdn.sanity.io/images/iy559jeo/production/df3556d65c98369fc13b4864d1eabe3048f145ac-3298x1788.png?rect=345,0,2253,1788&w=320&h=254&auto=format&dpr=2  896w,
                  https://cdn.sanity.io/images/iy559jeo/production/df3556d65c98369fc13b4864d1eabe3048f145ac-3298x1788.png?rect=0,274,2941,1241&w=768&h=324&auto=format&dpr=3 1024w
                "
                      src="https://cdn.sanity.io/images/iy559jeo/production/df3556d65c98369fc13b4864d1eabe3048f145ac-3298x1788.png?rect=0,274,2941,1241&w=768&h=324&auto=format"
                      alt="GlowdayPRO"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section__charcoal">
            <div className="container">
              <div className="row content-center">
                <div className="column">
                  <div className="text-center">
                    <span className="uppercase golden bold">
                      Getting started
                    </span>
                  </div>
                  <div className="text-center">
                    <h2>Treatment Guides</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <TreatmentGuides />
            </div>
            <div
              className="column column-t-5 column-d-4 column-lg-3 text-center"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <Link
                className="button text-center button--fullwidth button--flat button--gold"
                to="/guide"
              >
                Click here to Find the right treatment for you
              </Link>
            </div>
          </section>

          <FiveStarPractitioners />

          <FromTheBlog />

          <section className="section section__light-gray">
            <div className="container">
              <div className="row column">
                <div className="column-m-12 column-t-6 text-center text-left__t">
                  <h2>Aesthetics Practitioner?</h2>
                  <p>
                    Grow your business with GlowdayPRO and access new patients,
                    forms, diary, reminders and no show/late cancellation
                    protection.
                  </p>
                </div>
                <div className="column-m-12 column-t-6 row row--no-margin row--end row--middle">
                  <div className="column-m-12 column-t-6">
                    <a
                      className="button text-center button--fullwidth button--flat button--gold"
                      href="https://www.pro.glowday.com/"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </main>
    </div>
  )
}

export default HomePage
