import React from "react"
import ArrowUpBlack from "../../static/img/icons/arrow-up.svg"
import Search from "../searchPage/Search"

const IndividualSiteMap = () => {
  return (
    <main id="main_content">
      <div className="hero column--relative hero__seo ">
        <div className="hero__image">
          <picture>
            <source
              media="screen and (max-width: 767px)"
              srcSet="https://cdn.sanity.io/images/iy559jeo/production/ace3e29661e97bb9713cca9f229308e83e48dacf-6000x1913.png?rect=1795,0,2410,1913&w=320&h=254&auto=format 1x,
  https://cdn.sanity.io/images/iy559jeo/production/ace3e29661e97bb9713cca9f229308e83e48dacf-6000x1913.png?rect=1795,0,2410,1913&w=320&h=254&auto=format&dpr=2 2x,
  https://cdn.sanity.io/images/iy559jeo/production/ace3e29661e97bb9713cca9f229308e83e48dacf-6000x1913.png?rect=1795,0,2410,1913&w=320&h=254&auto=format&dpr=3 3x"
            />
            <source
              media="screen and (min-width: 767px) and (max-width: 1024px)"
              srcSet="https://cdn.sanity.io/images/iy559jeo/production/ace3e29661e97bb9713cca9f229308e83e48dacf-6000x1913.png?rect=733,0,4535,1913&w=768&h=324&auto=format 1x,
  https://cdn.sanity.io/images/iy559jeo/production/ace3e29661e97bb9713cca9f229308e83e48dacf-6000x1913.png?rect=733,0,4535,1913&w=768&h=324&auto=format&dpr=2 2x,
  https://cdn.sanity.io/images/iy559jeo/production/ace3e29661e97bb9713cca9f229308e83e48dacf-6000x1913.png?rect=733,0,4535,1913&w=768&h=324&auto=format&dpr=3 3x"
            />
            <source
              media="screen and (min-width: 1024px)"
              srcSet="https://cdn.sanity.io/images/iy559jeo/production/ace3e29661e97bb9713cca9f229308e83e48dacf-6000x1913.png?rect=351,0,5298,1913&w=1440&h=520&auto=format 1x,
  https://cdn.sanity.io/images/iy559jeo/production/ace3e29661e97bb9713cca9f229308e83e48dacf-6000x1913.png?rect=351,0,5298,1913&w=1440&h=520&auto=format&dpr=2 2x,
  https://cdn.sanity.io/images/iy559jeo/production/ace3e29661e97bb9713cca9f229308e83e48dacf-6000x1913.png?rect=351,0,5298,1913&w=1440&h=520&auto=format&dpr=3 3x"
            />
            <img
              src="https://cdn.sanity.io/images/iy559jeo/production/ace3e29661e97bb9713cca9f229308e83e48dacf-6000x1913.png?rect=733,0,4535,1913&w=768&h=324&auto=format&dpr=2"
              alt
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
        <div className="hero__content">
          <div className="container padding-bottom__l-3">
            <div className="row">
              <div className="column">
                <div className="cms-content">
                  <h2>The best aesthetic practitioners in London</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Search />
      <section className="padding-top-4 padding-bottom-4 section__charcoal">
        <section className="section section__charcoal">
          <div className="container">
            <div className="row">
              <div className="column" id="at-a-glance" data-name="at-a-glance">
                <h2>Wrinkle Relaxing - At A Glance</h2>
              </div>
            </div>
            <div className="row overflowSlider">
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">Best Results</h3>
                        <h4 className="glance-card__description">
                          1 treatment
                        </h4>
                        <img
                          src="/static/img/icons/charcoal-dark/calendar.svg"
                          className="glance-card__icon"
                          alt="Best Results"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md " />
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">
                          Duration of Results
                        </h3>
                        <h4 className="glance-card__description">
                          12 - 16 weeks
                        </h4>
                        <img
                          src="/static/img/icons/charcoal-dark/hourglass.svg"
                          className="glance-card__icon"
                          alt="Duration of Results"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md " />
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">
                          Treatment recovery
                        </h3>
                        <h4 className="glance-card__description">None</h4>
                        <img
                          src="/static/img/icons/charcoal-dark/recovery.svg"
                          className="glance-card__icon"
                          alt="Treatment recovery"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md " />
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">
                          Risks &amp; complications
                        </h3>
                        <h4 className="glance-card__description">
                          Low to moderate
                        </h4>
                        <img
                          src="/static/img/icons/charcoal-dark/complication.svg"
                          className="glance-card__icon"
                          alt="Risks & complications"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md " />
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">Anaesthetic</h3>
                        <h4 className="glance-card__description">None</h4>
                        <img
                          src="/static/img/icons/charcoal-dark/syringe.svg"
                          className="glance-card__icon"
                          alt="Anaesthetic"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md " />
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">Procedure time</h3>
                        <h4 className="glance-card__description">15 - 30min</h4>
                        <img
                          src="/static/img/icons/charcoal-dark/stopwatch.svg"
                          className="glance-card__icon"
                          alt="Procedure time"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md " />
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">Skin specialist</h3>
                        <h4 className="glance-card__description">
                          Medically qualified
                        </h4>
                        <img
                          src="/static/img/icons/charcoal-dark/doctor.svg"
                          className="glance-card__icon"
                          alt="Skin specialist"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md " />
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">Back to work</h3>
                        <h4 className="glance-card__description">Same day</h4>
                        <img
                          src="/static/img/icons/charcoal-dark/briefcase.svg"
                          className="glance-card__icon"
                          alt="Back to work"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md " />
              </div>
            </div>
          </div>
          <div className="container top-questions">
            <div className="row">
              <div
                className="column-t-4 column"
                style={{ marginBottom: "1em" }}
              >
                <h2>Top Questions</h2>
              </div>
            </div>
            <div className="row">
              <div className="column-t-6 column question top-questions__border">
                <a href="/aesthetic-clinics/london#anti-wrinkle-injections-overview">
                  Anti-wrinkle Injections Overview
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="/aesthetic-clinics/london#how-do-wrinkle-relaxing-injections-work">
                  How do wrinkle relaxing injections work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="/aesthetic-clinics/london#what-are-wrinkle-relaxing-injections-used-for">
                  What are wrinkle relaxing injections used for?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="/aesthetic-clinics/london#how-should-i-prepare-for-wrinkle-relaxing-injections">
                  How should I prepare for wrinkle relaxing injections?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="/aesthetic-clinics/london#what-happens-during-a-wrinkle-relaxing-treatment">
                  What happens during a wrinkle relaxing treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="/aesthetic-clinics/london#what-happens-after-an-anti-wrinkle-treatment">
                  What happens after an anti-wrinkle treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="/aesthetic-clinics/london#what-are-the-side-effects-and-risks-of-anti-wrinkle-treatments">
                  What are the side effects and risks of anti-wrinkle
                  treatments?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="/aesthetic-clinics/london#how-much-do-wrinkle-relaxing-injections-cost">
                  How much do wrinkle relaxing injections cost?
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="padding-top-4 padding-bottom-4">
        <div className="container">
          <div className="blog-grid row--middle column--relative">
            <div className="prev-blog-article custom-arrow">
              <button type="button" className="prev-arrow">
                <span className="sr-only">previous</span>
              </button>
            </div>
            <div className="row--middle column--relative overflowSlider row--no-wrap filter-gradient  disable-scrollbars margin-left__l-2 margin-right__t-2">
              <div className="column column-t-6 column-d-3 slide no-style">
                <div className="blog-article-card null">
                  <div className="blog-article-card__image margin-bottom-1">
                    <a href="/blog/botox-is-for-christmas-not-for-life">
                      <div
                        style={{
                          display: "inline-block",
                          maxWidth: "100%",
                          overflow: "hidden",
                          position: "relative",
                          boxSizing: "border-box",
                          margin: 0,
                        }}
                      >
                        <div
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            alt
                            aria-hidden="true"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTU4IiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                            style={{
                              maxWidth: "100%",
                              display: "block",
                              margin: 0,
                              border: "none",
                              padding: 0,
                            }}
                          />
                        </div>
                        <img
                          alt
                          src="https://cdn.sanity.io/images/iy559jeo/production/73cb715772fa1ba854c00fa88796f5cef9478d81-1080x1080.png?rect=0,230,1080,619&w=558&h=320&auto=format"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                            filter: "none",
                            backgroundSize: "cover",
                            backgroundImage: "none",
                            backgroundPosition: "0% 0%",
                          }}
                        />
                        <noscript />
                      </div>
                    </a>
                  </div>
                  <div className="blog-article-card__body ">
                    <a href="/blog/botox-is-for-christmas-not-for-life">
                      <h3 className="margin-bottom__l-1">
                        Treatments In Time For Christmas
                      </h3>
                      <p className="blog-article-card__summary">
                        Only six weeks to go. Find out what treatments you might
                        want to book now before Mariah Carey peaks!{" "}
                      </p>
                    </a>
                    <a href="/blog/authors/kelly-davies">
                      <div className="author-details margin-bottom-1 margin-bottom__l-0 margin-right__l-0">
                        <img
                          className="author-details__image margin-right round-image ls-is-cached lazyloaded"
                          data-src="https://cdn.sanity.io/images/iy559jeo/production/25de9a483764beedb96876bd4203e490a7f830dd-800x919.png?rect=0,60,800,800&w=138&h=138&auto=format"
                          alt="Kelly Davies"
                          width={138}
                          height={138}
                          src="https://cdn.sanity.io/images/iy559jeo/production/25de9a483764beedb96876bd4203e490a7f830dd-800x919.png?rect=0,60,800,800&w=138&h=138&auto=format"
                        />
                        <div className="author-details__details">
                          <div className="author-details__name">
                            Kelly Davies
                          </div>
                          <div className="author-details__date">
                            Nov 14, 2022
                            <span className="blog-article-card__read-time">
                              6 min read
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="column column-t-6 column-d-3 slide no-style">
                <div className="blog-article-card null">
                  <div className="blog-article-card__image margin-bottom-1">
                    <a href="/blog/fillers-in-your-40s-how-to-look-natural-and-fabulous">
                      <div
                        style={{
                          display: "inline-block",
                          maxWidth: "100%",
                          overflow: "hidden",
                          position: "relative",
                          boxSizing: "border-box",
                          margin: 0,
                        }}
                      >
                        <div
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            alt
                            aria-hidden="true"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTU4IiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                            style={{
                              maxWidth: "100%",
                              display: "block",
                              margin: 0,
                              border: "none",
                              padding: 0,
                            }}
                          />
                        </div>
                        <img
                          alt
                          src="https://cdn.sanity.io/images/iy559jeo/production/276f182e6ed2dc3007f8efdcc1a34a6b5c73ae26-4752x3168.jpg?rect=0,221,4752,2725&w=558&h=320&auto=format"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                            filter: "none",
                            backgroundSize: "cover",
                            backgroundImage: "none",
                            backgroundPosition: "0% 0%",
                          }}
                        />
                        <noscript />
                      </div>
                    </a>
                  </div>
                  <div className="blog-article-card__body ">
                    <a href="/blog/fillers-in-your-40s-how-to-look-natural-and-fabulous">
                      <h3 className="margin-bottom__l-1">
                        Filler in Your 40s: How to Look Natural and Fabulous
                      </h3>
                      <p className="blog-article-card__summary">
                        Fancy getting filler in your 40s? Here's what you need
                        to know to stay looking natural and fresh-faced.
                      </p>
                    </a>
                    <a href="/blog/authors/victoria-palmer">
                      <div className="author-details margin-bottom-1 margin-bottom__l-0 margin-right__l-0">
                        <img
                          className="author-details__image margin-right round-image ls-is-cached lazyloaded"
                          data-src="https://cdn.sanity.io/images/iy559jeo/production/94d42bbebc4d08cd7c9d1db1cca563f6b4a5f406-4000x4000.jpg?rect=435,388,2891,2891&w=138&h=138&auto=format"
                          alt="Victoria Palmer"
                          width={138}
                          height={138}
                          src="https://cdn.sanity.io/images/iy559jeo/production/94d42bbebc4d08cd7c9d1db1cca563f6b4a5f406-4000x4000.jpg?rect=435,388,2891,2891&w=138&h=138&auto=format"
                        />
                        <div className="author-details__details">
                          <div className="author-details__name">
                            Victoria Palmer
                          </div>
                          <div className="author-details__date">
                            Nov 13, 2022
                            <span className="blog-article-card__read-time">
                              8 min read
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="column column-t-6 column-d-3 slide no-style">
                <div className="blog-article-card null">
                  <div className="blog-article-card__image margin-bottom-1">
                    <a href="/blog/what-is-the-botox-brow-lift">
                      <div
                        style={{
                          display: "inline-block",
                          maxWidth: "100%",
                          overflow: "hidden",
                          position: "relative",
                          boxSizing: "border-box",
                          margin: 0,
                        }}
                      >
                        <div
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            alt
                            aria-hidden="true"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTU4IiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                            style={{
                              maxWidth: "100%",
                              display: "block",
                              margin: 0,
                              border: "none",
                              padding: 0,
                            }}
                          />
                        </div>
                        <img
                          alt
                          src="https://cdn.sanity.io/images/iy559jeo/production/b2bc8e3092d2d16c64456df7c4e1b97754b4bafb-7000x4667.jpg?rect=0,326,7000,4014&w=558&h=320&auto=format"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                            filter: "none",
                            backgroundSize: "cover",
                            backgroundImage: "none",
                            backgroundPosition: "0% 0%",
                          }}
                        />
                        <noscript />
                      </div>
                    </a>
                  </div>
                  <div className="blog-article-card__body ">
                    <a href="/blog/what-is-the-botox-brow-lift">
                      <h3 className="margin-bottom__l-1">
                        Raising An Eyebrow: Everything You Need To Know About
                        The Non-Surgical Brow Lift
                      </h3>
                      <p className="blog-article-card__summary">
                        Sagging eyebrows? The non-surgical brow lift might be
                        your new best friend. Natalie Haswell explains how it
                        works. And how it's different to the Fox Eye lift.
                      </p>
                    </a>
                    <a href="/blog/authors/natalie-haswell">
                      <div className="author-details margin-bottom-1 margin-bottom__l-0 margin-right__l-0">
                        <img
                          className="author-details__image margin-right round-image ls-is-cached lazyloaded"
                          data-src="https://cdn.sanity.io/images/iy559jeo/production/ea019fcdf6fe41c2a5a528ef7b788908950780d8-320x213.jpg?rect=54,0,213,213&w=138&h=138&auto=format"
                          alt="Natalie Haswell"
                          width={138}
                          height={138}
                          src="https://cdn.sanity.io/images/iy559jeo/production/ea019fcdf6fe41c2a5a528ef7b788908950780d8-320x213.jpg?rect=54,0,213,213&w=138&h=138&auto=format"
                        />
                        <div className="author-details__details">
                          <div className="author-details__name">
                            Natalie Haswell
                          </div>
                          <div className="author-details__date">
                            Nov 13, 2022
                            <span className="blog-article-card__read-time">
                              3 min read
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="column column-t-6 column-d-3 slide no-style">
                <div className="blog-article-card null">
                  <div className="blog-article-card__image margin-bottom-1">
                    <a href="/blog/has-holly-willoughby-had-botox-or-fillers">
                      <div
                        style={{
                          display: "inline-block",
                          maxWidth: "100%",
                          overflow: "hidden",
                          position: "relative",
                          boxSizing: "border-box",
                          margin: 0,
                        }}
                      >
                        <div
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            alt
                            aria-hidden="true"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTU4IiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                            style={{
                              maxWidth: "100%",
                              display: "block",
                              margin: 0,
                              border: "none",
                              padding: 0,
                            }}
                          />
                        </div>
                        <img
                          alt
                          src="https://cdn.sanity.io/images/iy559jeo/production/bb99e1651fa658d42c8bd9dd9e5d296bd7d90fbb-750x904.jpg?rect=0,236,750,430&w=558&h=320&auto=format"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                            filter: "none",
                            backgroundSize: "cover",
                            backgroundImage: "none",
                            backgroundPosition: "0% 0%",
                          }}
                        />
                        <noscript />
                      </div>
                    </a>
                  </div>
                  <div className="blog-article-card__body ">
                    <a href="/blog/has-holly-willoughby-had-botox-or-fillers">
                      <h3 className="margin-bottom__l-1">
                        Has Holly Willoughby Had A Little Help?
                      </h3>
                      <p className="blog-article-card__summary">
                        How does Holly look so amazing at 41? Plastic surgery?
                        Wrinkle relaxers? Fillers? Glowday asks some of the UK's
                        top aesthetic experts.{" "}
                      </p>
                    </a>
                    <a href="/blog/authors/kelly-davies">
                      <div className="author-details margin-bottom-1 margin-bottom__l-0 margin-right__l-0">
                        <img
                          className="author-details__image margin-right round-image ls-is-cached lazyloaded"
                          data-src="https://cdn.sanity.io/images/iy559jeo/production/25de9a483764beedb96876bd4203e490a7f830dd-800x919.png?rect=0,60,800,800&w=138&h=138&auto=format"
                          alt="Kelly Davies"
                          width={138}
                          height={138}
                          src="https://cdn.sanity.io/images/iy559jeo/production/25de9a483764beedb96876bd4203e490a7f830dd-800x919.png?rect=0,60,800,800&w=138&h=138&auto=format"
                        />
                        <div className="author-details__details">
                          <div className="author-details__name">
                            Kelly Davies
                          </div>
                          <div className="author-details__date">
                            Oct 30, 2022
                            <span className="blog-article-card__read-time">
                              5 min read
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="next-blog-article custom-arrow">
              <button type="button" className="next-arrow">
                <span className="sr-only">next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="padding-top-4 padding-bottom-4 section__charcoal">
        <div className="container">
          <div className="row">
            <div
              data-name="anti-wrinkle-injections-overview"
              id="anti-wrinkle-injections-overview"
              className="column null"
            >
              <div className="row">
                <div className="column column-t-4">
                  <h2>Anti-wrinkle Injections Overview</h2>
                </div>
                <div className="cms-content column column-t-8">
                  <div className="cms-content undefined">
                    <p>
                      Anti-wrinkle injections, often called Botox® are often
                      used to relax muscles of the face, helping to reduce or
                      completely eliminate wrinkles, particularly those that
                      occur due to facial expressions.{" "}
                      <a href="/blog/what-are-the-different-types-of-lines-on-the-face-and-how-will-botox-help">
                        It is the treatment of choice for forehead lines, crow's
                        feet and lines between the eyebrows (11s)
                      </a>
                      . It can also be used to treat lines in the lower face,
                      such as smokers’ lines, and to lift e.g. the eyebrows or
                      the corners of the mouth. In addition to being used to
                      reduce the appearance of wrinkles,{" "}
                      <a href="/blog/8-ways-botox-is-used-other-than-removing-wrinkles">
                        it can also treat headaches and reduce a gummy smile,
                        teeth grinding and excess sweating.
                      </a>
                      ​{" "}
                    </p>
                    <p>
                      <a>Botox</a>®&nbsp;and other botulinum toxin drugs such as
                      Vistabel®,{" "}
                      <a href="https://www.dysportusa.com">Dysport</a>® and{" "}
                      <a href="https://www.galderma.com/azzalure">Azzalure</a>®
                      are potent neurotoxins derived from the bacterium{" "}
                      <em>Clostridium botulinum </em>and are all brand names for
                      the anti-wrinkle treatment we tend to call 'Botox'.
                    </p>
                    <p>
                      These drugs are all tried, tested and proven and are
                      licensed for use in the UK. They contain one common
                      substance, the botulinum toxin (produced by the bacterium
                      Clostridium botulinum).
                    </p>
                    <p>
                      This toxin is highly potent. Tiny amounts are injected
                      into the muscles identified as those causing the wrinkles.
                      The injections are just beneath the skin, making wrinkle
                      relaxing the most popular aesthetic treatment due to the
                      lack of downtime needed and proven results.
                    </p>
                    <p>In the UK, botulinum toxin is in two forms:</p>
                    <p>
                      Type A: found in Botox®, Vistabel®, Dysport®, Azzalure®.
                      There are other brands available, but not all have been
                      licensed for use in the UK.
                    </p>
                    <p>
                      Type B: Neurobloc® - this product is not approved for
                      cosmetic use and are rarely used.
                    </p>
                    <p>
                      This Glowday Treatment Guide has been edited and medically
                      verified by{" "}
                      <a href="/blog/guest-editor-andre-rankin">
                        Andrew Rankin
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="padding-top-4 padding-bottom-4">
        <div className="container guide__row">
          <div className="row row--spaced">
            <div
              data-name="how-do-wrinkle-relaxing-injections-work"
              id="how-do-wrinkle-relaxing-injections-work"
              className="column column-t-5"
            >
              <h2>How do wrinkle relaxing injections work?</h2>
              <div className="cms-content undefined">
                <p>
                  During an anti-wrinkle injection treatment, botulinum toxin is
                  safely injected into specific muscles, in extremely small
                  therapeutic quantities.
                </p>
                <p>
                  It works by prohibiting signals from the nerve cells reaching
                  muscles, therefore paralysing them. It does this by preventing
                  the release of a chemical transmitter called acetylcholine
                  from nerve endings onto muscle cells, reducing the contraction
                  of these muscles.
                </p>
                <p>
                  The muscle becomes temporarily paralysed and remains relaxed
                  until the toxin has been broken down by your body. This
                  reduces the movement of the skin above the treated muscle,
                  causing a reduction in the formation and appearance of
                  wrinkles.
                </p>
                <p>
                  "Baby Botox" is a term used to describe a treatment using
                  lower doses of botulinum toxin. This allows for some movement,
                  while reducing or even preventing the formation of deep,
                  static lines.
                </p>
                <p>
                  The effects of wrinkle relaxing treatments last between 3-6
                  months. How often you need anti-wrinkle injections can depend
                  on the dose administered but more often it’s about individual
                  responses to treatment and the rate at which your body breaks
                  down the toxin. Repeat treatments are required to maintain the
                  desired effect of any anti-wrinkle injections.
                </p>
              </div>
            </div>
            <div
              data-name="what-are-wrinkle-relaxing-injections-used-for"
              id="what-are-wrinkle-relaxing-injections-used-for"
              className="column column-t-5"
            >
              <h2>What are wrinkle relaxing injections used for?</h2>
              <div className="cms-content undefined">
                <p>
                  There are a number of uses of wrinkle relaxing treatments. It
                  can be used for:
                </p>
                <ul>
                  <li>Forehead lines</li>
                  <li>Bunny lines</li>
                  <li>Softening or defining the jaw angle</li>
                  <li>Crow’s feet (around your eyes)</li>
                  <li>Eyebrow lift</li>
                  <li>Frown lines/11s</li>
                </ul>
                <figure className="lightbox lightbox--transparent lightbox--auto-height">
                  <img
                    className=" lazyloaded"
                    data-src="https://cdn.sanity.io/images/iy559jeo/production/8624ac9d9c4e086b41c1f4324035d29fc7734b48-3508x2111.png?w=768&fit=max&auto=format"
                    loading="lazy"
                    decoding="async"
                    width={768}
                    height={432}
                    alt
                    src="https://cdn.sanity.io/images/iy559jeo/production/8624ac9d9c4e086b41c1f4324035d29fc7734b48-3508x2111.png?w=768&fit=max&auto=format"
                  />
                </figure>
                <p />
                <p />
                <ul>
                  <li>Marionette lines</li>
                  <li>Neck lines</li>
                  <li>Chin dimples</li>
                  <li>Gummy smile</li>
                  <li>Mouth droop</li>
                  <li>Lipstick lines</li>
                </ul>
                <p />
                <p>
                  Botulinum toxin can also be used to prevent excessive sweating
                  (hyperhydrosis) and it has also been reported to have a
                  positive effect on reducing headaches and migraines.
                </p>
                <p>
                  Ideal candidates for anti-wrinkle injections are those who
                  have dynamic wrinkles that are visible when their face is
                  moving. If you have deeper, static wrinkles (which are present
                  even when your face isn’t moving), you may require a
                  combination of dermal fillers and wrinkle relaxing to achieve
                  the desired outcome.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="padding-top-4 padding-bottom-4 section__charcoal">
        <div className="container">
          <div className="row">
            <div
              data-name="how-should-i-prepare-for-wrinkle-relaxing-injections"
              id="how-should-i-prepare-for-wrinkle-relaxing-injections"
              className="column null"
            >
              <div className="row">
                <div className="column column-t-4">
                  <h2>How should I prepare for wrinkle relaxing injections?</h2>
                </div>
                <div className="cms-content column column-t-8">
                  <div className="cms-content undefined">
                    <p>
                      A week before your anti-wrinkle treatment, avoid taking
                      aspirin, ibuprofen, vitamin E and fish oil supplements.
                      These may increase bleeding and bruising. However, you can
                      take paracetamol if needed.
                    </p>
                    <p>
                      If you are taking any prescribed medication, including
                      aspirin, do not stop taking it – consult your practitioner
                      or your GP first.
                    </p>
                    <p>
                      Avoid drinking alcohol 24 hours before your treatment, as
                      this also increases the risk of bruising.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="padding-top-4 padding-bottom-4">
        <div id="what-happens-during-a-wrinkle-relaxing-treatment">
          <div className="container">
            <div className="row">
              <div className="column">
                <h2>What happens during a wrinkle relaxing treatment?</h2>
              </div>
            </div>
            <div className="row overflowSlider">
              <div className="column column-t-4 slide margin-bottom-2 margin-bottom__d-0 column-t-offset-1">
                <div className="step-definition gray-step cms-content">
                  <p>
                    <strong>Step One - Consultation and Consent</strong>
                  </p>
                  <p>
                    It is important to understand that Botox® is a prescription
                    only medicine. It is a legal requirement that the
                    consultation is performed by a prescribing practitioner and
                    you should confirm this with them.
                  </p>
                  <button
                    className="button button--outline button--small"
                    type="button"
                  >
                    Read more
                  </button>
                </div>
              </div>
              <div className="column column-t-4 slide margin-bottom-2 margin-bottom__d-0 column-t-offset-2">
                <div className="step-definition gray-step cms-content">
                  <p>
                    <strong>
                      Step Two - Your Anti-wrinkle Injection Treatment
                    </strong>
                  </p>
                  <p>
                    Your anti-wrinkle treatment will take around 15 minutes. It
                    may be performed by the prescriber who undertook your
                    consultation, or they may delegate it to a competent
                    colleague.
                  </p>
                  <button
                    className="button button--outline button--small"
                    type="button"
                  >
                    Read more
                  </button>
                </div>
              </div>
              <div className="column column-t-4 slide margin-bottom-2 margin-bottom__d-0 column-t-offset-1">
                <div className="step-definition gray-step cms-content">
                  <p>
                    <strong>
                      Step Three - Your Anti-wrinkle Injection Follow-up
                    </strong>
                  </p>
                  <p>
                    It is a requirement that the prescriber is available to
                    review the treatment if necessary. This is usually done
                    after 2 weeks but should be sooner if there are any
                    problems. This allows them to check that the dose
                    administered was appropriate for the agreed outcome, and to
                    adjust if necessary.
                  </p>
                </div>
              </div>
              <div className="column column-t-4 slide margin-bottom-2 margin-bottom__d-0 column-t-offset-2">
                <div className="step-definition gray-step cms-content">
                  <p>
                    <strong>
                      Step Four - Your Anti-wrinkle Injection Repeat Treatment
                    </strong>
                  </p>
                  <p>
                    Depending on how quickly your body breaks down the toxin,
                    you will require a repeat treatment 12 - 16 weeks after your
                    initial treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="padding-top-4 padding-bottom-4 section__charcoal">
        <div className="container guide__row">
          <div className="row row--spaced">
            <div
              data-name="what-happens-after-an-anti-wrinkle-treatment"
              id="what-happens-after-an-anti-wrinkle-treatment"
              className="column column-t-5"
            >
              <h2>What happens after an anti-wrinkle treatment?</h2>
              <div className="cms-content undefined">
                <p>
                  After your treatment, you can go about your normal day. It is
                  important, however, that you follow the advice of your
                  practitioner carefully. This will help you gain maximum effect
                  from the procedure and reduce the risk of complications.
                </p>
                <p>
                  You may experience localised redness and pin-prick marks
                  around the injection sites.
                </p>
                <p>
                  To help get the best out of your anti-wrinkle treatment, you
                  need to:
                </p>
                <p />
                <ul>
                  <li>
                    Avoid rubbing or massaging the treated area and avoid
                    strenuous exercise for 24 – 48 hours after treatment, or as
                    your practitioner advises. Failure to do so may result in
                    the toxin moving into muscles it shouldn't.
                  </li>
                </ul>
                <p />
                <ul>
                  <li>
                    The treatment takes around 72 hours to begin working and 2
                    weeks for the effects to be fully visible, although you may
                    feel most of the effect after 7 to 10 days.
                  </li>
                </ul>
                <p />
                <ul>
                  <li>
                    Contact your practitioner if you have any unusual results
                    such as prolonged bruising, swelling, irritation, infection
                    or drooping.
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-name="what-are-the-side-effects-and-risks-of-anti-wrinkle-treatments"
              id="what-are-the-side-effects-and-risks-of-anti-wrinkle-treatments"
              className="column column-t-5"
            >
              <h2>
                What are the side effects and risks of anti-wrinkle treatments?
              </h2>
              <div className="cms-content undefined">
                <p>
                  Most clients find botulinum toxin injections to be relatively
                  painless and straightforward.
                </p>
                <p>
                  A small minority of clients choose to have a topical numbing
                  cream applied to the area 20-30 minutes prior to the
                  treatment. If you feel you have a low pain threshold, be sure
                  to put this on your medical history form, so your practitioner
                  can apply the cream early in your consultation.
                </p>
                <p>Some wrinkle relaxing side effects include:</p>
                <ul>
                  <li>Temporary bleeding/bruising</li>
                  <li>Mild swelling</li>
                  <li>Post-treatment headache</li>
                  <li>Drooping eyelids</li>
                  <li>Drooping eyebrows</li>
                </ul>
                <p />
                <p>
                  More serious side effects can occur for treatment of other
                  areas (e.g. double vision, drooping lip, difficulty swallowing
                  or breathing, change of voice or difficulty pronouncing some
                  words.
                </p>
                <p>
                  This list is not exhaustive and you should consult your
                  practitioner if you are concerned in any way.
                </p>
                <p>DO NOT have botulinum toxin injections if:</p>
                <ul>
                  <li>You are pregnant or breastfeeding</li>
                  <li>You are trying to get pregnant</li>
                </ul>
                <p />
                <p>You also need to let your practitioner know if:</p>
                <ul>
                  <li>You have a muscular disease (e.g. Bell's Palsy)</li>
                  <li>You have any blood or nervous system disorders</li>
                  <li>
                    You are taking any medications which affect blood clotting
                  </li>
                  <li>You are taking any medicines</li>
                  <li>You have any psychological concerns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="padding-top-4 padding-bottom-4">
        <div className="container">
          <div className="row">
            <div
              data-name="how-much-do-wrinkle-relaxing-injections-cost"
              id="how-much-do-wrinkle-relaxing-injections-cost"
              className="column null"
            >
              <div className="row">
                <div className="column column-t-4">
                  <h2>How much do wrinkle relaxing injections cost?</h2>
                </div>
                <div className="cms-content column column-t-8">
                  <div className="cms-content undefined">
                    <p>
                      Botulinum toxin injections are usually charged per area,
                      although your practitioner may offer discounts for
                      multiple areas.
                    </p>
                    <p>Expect to pay from £175 - £300 per area.</p>
                    <p>
                      Beware of very cheap prices. It may be that these
                      practitioners are not using licensed products of botulinum
                      toxin or they may not be appropriately medically
                      qualified.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fresnel-container fresnel-greaterThanOrEqual-bigmd ">
        <div className="float-button no-style">
          <div className="back-to-top">
            <span className="back-to-top">
              <img src={ArrowUpBlack} alt />
              <p>Back to top</p>
            </span>
          </div>
        </div>
      </div>
      <a href="#seo-search-results" className="sr-only">
        Back to top
      </a>
    </main>
  )
}

export default IndividualSiteMap
