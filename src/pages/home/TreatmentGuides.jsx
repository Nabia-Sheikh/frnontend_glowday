import React from "react"
import { useRef } from "react"
import {Link} from "react-router-dom"

const TreatmentGuides = () => {
  const scrollContainer = useRef(null)

  const handlePrevArrowClick = () => {
    const cardWidth = scrollContainer.current.firstElementChild.clientWidth
    // scrollContainer.current.scrollLeft -= cardWidth
    scrollContainer.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    })
  }

  const handleNextArrowClick = () => {
    const cardWidth = scrollContainer.current.firstElementChild.clientWidth
    // scrollContainer.current.scrollLeft += cardWidth
    scrollContainer.current.scrollBy({
      left: +cardWidth,
      behavior: "smooth",
    })
  }

  return (
    <div className="column--relative blog-grid row--middle">
      <div
        className="prev-blog-article custom-arrow"
        onClick={handlePrevArrowClick}
      >
        <button type="button" className="prev-arrow">
          <span className="sr-only">previous</span>
        </button>
      </div>
      <div
        className="row--middle column--relative overflowSlider row--no-wrap filter-gradient disable-scrollbars margin-left__t-2 margin-right__t-2"
        ref={scrollContainer}
      >
        <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
          <div className="treatment-guide-illustration__image margin-bottom-1">
            <Link to="/anti-wrinkle-injection">
              <img
                src="https://cdn.sanity.io/images/iy559jeo/production/bd500564ddb9bc5a8d7c4cd5d68b228439e6c4a8-2048x2048.png?rect=131,133,1782,1782&w=162&h=162&auto=format&dpr=2"
                srcSet="
          https://cdn.sanity.io/images/iy559jeo/production/bd500564ddb9bc5a8d7c4cd5d68b228439e6c4a8-2048x2048.png?rect=131,133,1782,1782&w=162&h=162&auto=format 162w,
          https://cdn.sanity.io/images/iy559jeo/production/bd500564ddb9bc5a8d7c4cd5d68b228439e6c4a8-2048x2048.png?rect=131,133,1782,1782&w=162&h=162&auto=format&dpr=2 324w,
          https://cdn.sanity.io/images/iy559jeo/production/bd500564ddb9bc5a8d7c4cd5d68b228439e6c4a8-2048x2048.png?rect=131,133,1782,1782&w=162&h=162&auto=format&dpr=3 468w,       
          "
                loading="lazy"
                decoding="async"
                className="margin-bottom-1 ls-is-cached lazyloaded"
                alt=""
                width={324}
                height={324}
              />
            </Link>
          </div>
          <Link to="/anti-wrinkle-injection">
            <h3>Anti-wrinkle Injections </h3>
          </Link>
        </article>
        <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
          <div className="treatment-guide-illustration__image margin-bottom-1">
            <Link to="/chemicalPeels">
              <img
                src="https://cdn.sanity.io/images/iy559jeo/production/cbcaa05823529a8e53657d3b298287660152d578-2048x2048.png?rect=133,129,1775,1775&w=162&h=162&auto=format&dpr=2"
                srcSet="
          https://cdn.sanity.io/images/iy559jeo/production/cbcaa05823529a8e53657d3b298287660152d578-2048x2048.png?rect=133,129,1775,1775&w=162&h=162&auto=format 162w,
          https://cdn.sanity.io/images/iy559jeo/production/cbcaa05823529a8e53657d3b298287660152d578-2048x2048.png?rect=133,129,1775,1775&w=162&h=162&auto=format&dpr=2 324w,
          https://cdn.sanity.io/images/iy559jeo/production/cbcaa05823529a8e53657d3b298287660152d578-2048x2048.png?rect=133,129,1775,1775&w=162&h=162&auto=format&dpr=3 468w,       
          "
                loading="lazy"
                decoding="async"
                className="margin-bottom-1 lazyloaded"
                alt=""
                width={324}
                height={324}
              />
            </Link>
          </div>
          <Link to="/dermal-fillers">
            <h3>Dermal Fillers</h3>
          </Link>
        </article>
        <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
          <div className="treatment-guide-illustration__image margin-bottom-1">
            <Link to="/chemicalPeels">
              <img
                src="https://cdn.sanity.io/images/iy559jeo/production/f2f32ef053744b9cfd187a35f5043fae998f04cf-2048x2048.png?rect=133,135,1782,1782&w=162&h=162&auto=format&dpr=2"
                srcSet="
          https://cdn.sanity.io/images/iy559jeo/production/f2f32ef053744b9cfd187a35f5043fae998f04cf-2048x2048.png?rect=133,135,1782,1782&w=162&h=162&auto=format 162w,
          https://cdn.sanity.io/images/iy559jeo/production/f2f32ef053744b9cfd187a35f5043fae998f04cf-2048x2048.png?rect=133,135,1782,1782&w=162&h=162&auto=format&dpr=2 324w,
          https://cdn.sanity.io/images/iy559jeo/production/f2f32ef053744b9cfd187a35f5043fae998f04cf-2048x2048.png?rect=133,135,1782,1782&w=162&h=162&auto=format&dpr=3 468w,       
          "
                loading="lazy"
                decoding="async"
                className="margin-bottom-1 lazyloaded"
                alt=""
                width={324}
                height={324}
              />
            </Link>
          </div>
          <Link to="/chemicalPeels">
            <h3>Chemical Peels </h3>
          </Link>
        </article>
        <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
          <div className="treatment-guide-illustration__image margin-bottom-1">
            <Link to="/hydrafacial">
              <img
                src="https://cdn.sanity.io/images/iy559jeo/production/2fb3ad7fdeaad8c9c1aec847bb068a2f3f1f78d1-2048x2048.png?rect=117,119,1798,1798&w=162&h=162&auto=format&dpr=2"
                srcSet="
          https://cdn.sanity.io/images/iy559jeo/production/2fb3ad7fdeaad8c9c1aec847bb068a2f3f1f78d1-2048x2048.png?rect=117,119,1798,1798&w=162&h=162&auto=format 162w,
          https://cdn.sanity.io/images/iy559jeo/production/2fb3ad7fdeaad8c9c1aec847bb068a2f3f1f78d1-2048x2048.png?rect=117,119,1798,1798&w=162&h=162&auto=format&dpr=2 324w,
          https://cdn.sanity.io/images/iy559jeo/production/2fb3ad7fdeaad8c9c1aec847bb068a2f3f1f78d1-2048x2048.png?rect=117,119,1798,1798&w=162&h=162&auto=format&dpr=3 468w,       
          "
                loading="lazy"
                decoding="async"
                className="margin-bottom-1 lazyloaded"
                alt=""
                width={324}
                height={324}
              />
            </Link>
          </div>
          <Link to="/laser-hair-removal">
            <h3>Laser Hair Removal</h3>
          </Link>
        </article>
        <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
          <div className="treatment-guide-illustration__image margin-bottom-1">
            <Link to="/hydrafacial">
              <img
                src="https://cdn.sanity.io/images/iy559jeo/production/2cca79e50963a4730f9a3d9a41e633b11402bcb4-2048x2048.png?rect=137,131,1782,1782&w=162&h=162&auto=format&dpr=2"
                srcSet="
          https://cdn.sanity.io/images/iy559jeo/production/2cca79e50963a4730f9a3d9a41e633b11402bcb4-2048x2048.png?rect=137,131,1782,1782&w=162&h=162&auto=format 162w,
          https://cdn.sanity.io/images/iy559jeo/production/2cca79e50963a4730f9a3d9a41e633b11402bcb4-2048x2048.png?rect=137,131,1782,1782&w=162&h=162&auto=format&dpr=2 324w,
          https://cdn.sanity.io/images/iy559jeo/production/2cca79e50963a4730f9a3d9a41e633b11402bcb4-2048x2048.png?rect=137,131,1782,1782&w=162&h=162&auto=format&dpr=3 468w,       
          "
                loading="lazy"
                decoding="async"
                className="margin-bottom-1 lazyloaded"
                alt=""
                width={324}
                height={324}
              />
            </Link>
          </div>
          <Link to="/hydrafacial">
            <h3>HydraFacial™ </h3>
          </Link>
        </article>
        <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
          <div className="treatment-guide-illustration__image margin-bottom-1">
            <Link to="/hydrafacial">
              <img
                src="https://cdn.sanity.io/images/iy559jeo/production/b8ec084664737a1a57932dab47fe3888ec8accd6-2048x2048.png?rect=125,119,1798,1798&w=162&h=162&auto=format&dpr=2"
                srcSet="
          https://cdn.sanity.io/images/iy559jeo/production/b8ec084664737a1a57932dab47fe3888ec8accd6-2048x2048.png?rect=125,119,1798,1798&w=162&h=162&auto=format 162w,
          https://cdn.sanity.io/images/iy559jeo/production/b8ec084664737a1a57932dab47fe3888ec8accd6-2048x2048.png?rect=125,119,1798,1798&w=162&h=162&auto=format&dpr=2 324w,
          https://cdn.sanity.io/images/iy559jeo/production/b8ec084664737a1a57932dab47fe3888ec8accd6-2048x2048.png?rect=125,119,1798,1798&w=162&h=162&auto=format&dpr=3 468w,       
          "
                loading="lazy"
                decoding="async"
                className="margin-bottom-1 lazyloaded"
                alt=""
                width={324}
                height={324}
              />
            </Link>
          </div>
          <Link to="/microneedling">
            <h3>Microneedling</h3>
          </Link>
        </article>
        <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
          <div className="treatment-guide-illustration__image margin-bottom-1">
            <Link to="/hydrafacial">
              <img
                src="https://cdn.sanity.io/images/iy559jeo/production/8e6c6860bc34d42bcde3312bf3aeebb52469f4ae-2048x2048.png?rect=123,121,1798,1798&w=162&h=162&auto=format&dpr=2"
                srcSet="
          https://cdn.sanity.io/images/iy559jeo/production/8e6c6860bc34d42bcde3312bf3aeebb52469f4ae-2048x2048.png?rect=123,121,1798,1798&w=162&h=162&auto=format 162w,
          https://cdn.sanity.io/images/iy559jeo/production/8e6c6860bc34d42bcde3312bf3aeebb52469f4ae-2048x2048.png?rect=123,121,1798,1798&w=162&h=162&auto=format&dpr=2 324w,
          https://cdn.sanity.io/images/iy559jeo/production/8e6c6860bc34d42bcde3312bf3aeebb52469f4ae-2048x2048.png?rect=123,121,1798,1798&w=162&h=162&auto=format&dpr=3 468w,       
          "
                loading="lazy"
                decoding="async"
                className="margin-bottom-1 lazyloaded"
                alt=""
                width={324}
                height={324}
              />
            </Link>
          </div>
          <Link to="/profhilo">
            <h3>Profhilo® </h3>
          </Link>
        </article>
        <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
          <div className="treatment-guide-illustration__image margin-bottom-1">
            <Link to="/hydrafacial">
              <img
                src="https://cdn.sanity.io/images/iy559jeo/production/8b2776e49b6f172cd7637f1a8c47c6b336080e67-2048x2048.png?rect=144,141,1766,1766&w=162&h=162&auto=format&dpr=2"
                srcSet="
          https://cdn.sanity.io/images/iy559jeo/production/8b2776e49b6f172cd7637f1a8c47c6b336080e67-2048x2048.png?rect=144,141,1766,1766&w=162&h=162&auto=format 162w,
          https://cdn.sanity.io/images/iy559jeo/production/8b2776e49b6f172cd7637f1a8c47c6b336080e67-2048x2048.png?rect=144,141,1766,1766&w=162&h=162&auto=format&dpr=2 324w,
          https://cdn.sanity.io/images/iy559jeo/production/8b2776e49b6f172cd7637f1a8c47c6b336080e67-2048x2048.png?rect=144,141,1766,1766&w=162&h=162&auto=format&dpr=3 468w,       
          "
                loading="lazy"
                decoding="async"
                className="margin-bottom-1 lazyloaded"
                alt=""
                width={324}
                height={324}
              />
            </Link>
          </div>
          <Link to="/prp-therapy">
            <h3>PRP Therapy</h3>
          </Link>
        </article>
        <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
          <div className="treatment-guide-illustration__image margin-bottom-1">
            <Link to="/thread-lifts/guide">
              <img
                src="https://cdn.sanity.io/images/iy559jeo/production/6eead300b1f6a93a534f8f0e604734ed4a9c978e-2048x2048.png?rect=115,123,1806,1806&w=162&h=162&auto=format&dpr=2"
                srcSet="
          https://cdn.sanity.io/images/iy559jeo/production/6eead300b1f6a93a534f8f0e604734ed4a9c978e-2048x2048.png?rect=115,123,1806,1806&w=162&h=162&auto=format 162w,
          https://cdn.sanity.io/images/iy559jeo/production/6eead300b1f6a93a534f8f0e604734ed4a9c978e-2048x2048.png?rect=115,123,1806,1806&w=162&h=162&auto=format&dpr=2 324w,
          https://cdn.sanity.io/images/iy559jeo/production/6eead300b1f6a93a534f8f0e604734ed4a9c978e-2048x2048.png?rect=115,123,1806,1806&w=162&h=162&auto=format&dpr=3 468w,       
          "
                loading="lazy"
                decoding="async"
                className="margin-bottom-1 lazyloaded"
                alt=""
                width={324}
                height={324}
              />
            </Link>
          </div>
          <Link to="/threadlifts">
            <h3>Thread Lifts</h3>
          </Link>
        </article>
        <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
          <div className="treatment-guide-illustration__image margin-bottom-1">
            <Link to="/laser-skin-treatments/guides">
              <img
                src="https://cdn.sanity.io/images/iy559jeo/production/8ef60833b03c3cb0e5f6cfea3b5a66a1d3a883f5-2048x2048.png?rect=131,125,1782,1782&w=162&h=162&auto=format&dpr=2"
                srcSet="
          https://cdn.sanity.io/images/iy559jeo/production/8ef60833b03c3cb0e5f6cfea3b5a66a1d3a883f5-2048x2048.png?rect=131,125,1782,1782&w=162&h=162&auto=format 162w,
          https://cdn.sanity.io/images/iy559jeo/production/8ef60833b03c3cb0e5f6cfea3b5a66a1d3a883f5-2048x2048.png?rect=131,125,1782,1782&w=162&h=162&auto=format&dpr=2 324w,
          https://cdn.sanity.io/images/iy559jeo/production/8ef60833b03c3cb0e5f6cfea3b5a66a1d3a883f5-2048x2048.png?rect=131,125,1782,1782&w=162&h=162&auto=format&dpr=3 468w,       
          "
                loading="lazy"
                decoding="async"
                className="margin-bottom-1 lazyloaded"
                alt=""
                width={324}
                height={324}
              />
            </Link>
          </div>
          <Link to="/laser-skin-treatments">
            <h3>Laser Skin Treatments</h3>
          </Link>
        </article>
      </div>
      <div
        className="next-blog-article custom-arrow"
        onClick={handleNextArrowClick}
      >
        <button type="button" className="next-arrow">
          <span className="sr-only">next</span>
        </button>
      </div>
    </div>
  )
}

export default TreatmentGuides
