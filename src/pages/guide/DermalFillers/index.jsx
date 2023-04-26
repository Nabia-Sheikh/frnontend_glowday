import React from "react"
import { Link } from "react-router-dom"
import { useRef } from "react"

const Dermal = () => {
  const scrollContainer = useRef(null)


  return (
    <main id="main_content">
      <div className="margin-top-1">
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="column">
                <ul>
                  <li className="">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="">
                    <Link to="/guide">Guides</Link>
                  </li>
                  <li className="active">
                    <a href>Dermal Fillers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="banner banner__background--golden-light">
          <div className="banner__image" />
          <div className="banner__content text-center">
            <div className="container">
              <div className="column">
                <h1 className="text-left">Dermal Fillers</h1>
              </div>
            </div>
          </div>
        </div>
        <section className="padding-top-4 padding-bottom-4">
          <div className="container">
            <div className="row">
              <div className="column null">
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Dermal Fillers - Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        As the skin ages, it gradually loses collagen, elastin
                        and fat. These are the components of the skin that give
                        it structure - the scaffolding of the skin. When present
                        in high amounts, skin is supple, firm and plump. As the
                        levels of these components decrease, our skin becomes
                        thinner, more lined and wrinkled with reduced volume,
                        plumpness and fullness.
                      </p>
                      <p>
                        Strategically placed fillers take the place of lost fat
                        pads and collagen. Some even promote the production of
                        collagen. This helps to restore the skin's volume and
                        fill deep wrinkles, thus giving the face a firmer, more
                        youthful appearance.
                      </p>
                      <p>
                        Not only are injectable fillers used to restore lost
                        volume and firmness, they can also be used to sculpt and
                        change the appearance of your face.
                      </p>
                      <p>So, fillers have a huge range of uses:</p>
                      <ul>
                        <li>
                          <a href="../lip-fillers/guide/">Lip augmentation </a>-
                          probably the most common use of dermal fillers
                        </li>
                        <li>
                          <a href="../filler-for-deep-wrinkles-and-scars/guide/">
                            Filling static, deep lines
                          </a>
                          around the lips, the lines from the nose to the
                          corners of the mouth (nasolabial lines), smile lines,
                          marionette lines and crow’s feet
                        </li>
                        <li>
                          <a href="../cheek-chin-and-jaw-enhancement/guide/">
                            <span>
                              Adding volume to sunken cheeks and weak chins
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="../liquid-non-surgical-facelift/guide/">
                            Liquid or lunchtime facelift
                          </a>
                        </li>
                        <li>
                          <a href="../liquid-rhinoplasty/guide/">
                            Non-surgical rhinoplasty
                          </a>
                        </li>
                        <li>
                          <a href="../filler-for-deep-wrinkles-and-scars/guide/">
                            Filling deep acne scars
                          </a>
                        </li>
                        <li>Rejuvenating ageing hands and necks</li>
                      </ul>
                      <p>
                        There are over 60 brands of dermal filler available in
                        the UK. Some of the most commonly used are:
                      </p>
                      <p>
                        <a href="https://restylane.co.uk">Restylane</a>®,
                        <a href="https://www.juvederm.co.uk">Juvéderm</a>®,
                        <a href="https://ellanse.com" />
                        <a href="https://ellanse.com">Ellanse</a>®,
                        <a href="https://www.sculptraaesthetic.com">Sculptra</a>
                        ® and
                        <a href="https://perfectha.com">Perfectha</a>®
                      </p>
                      <p>
                        Practitioners will likely use a range of brands for
                        different treatments, based on their knowledge and
                        experience.
                      </p>
                      <p>
                        There are products available which can dissolve fillers,
                        so the effects of dermal fillers are not only temporary,
                        but they can be reversed if necessary.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section__light-gray padding-top-4 padding-bottom-4">
          <div className="container">
            <div className="column--relative blog-grid row--middle">
              <div
                className="row--middle column--relative overflowSlider row--no-wrap filter-gradient blog-grid"
                ref={scrollContainer}
              >
                <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
                  <div className="treatment-guide-illustration__image margin-bottom-1">
                    <Link to="/dermal-fillers/rhinoplasty">
                      <img
                        src="https://cdn.sanity.io/images/iy559jeo/production/a32880305f84ae999197c2a946d7556aa932ee12-2048x2048.png?rect=129,123,1790,1790&w=162&h=162&auto=format&dpr=2"
                        srcSet="
                        https://cdn.sanity.io/images/iy559jeo/production/a32880305f84ae999197c2a946d7556aa932ee12-2048x2048.png?rect=129,123,1790,1790&w=162&h=162&auto=format           162w,
                        https://cdn.sanity.io/images/iy559jeo/production/a32880305f84ae999197c2a946d7556aa932ee12-2048x2048.png?rect=129,123,1790,1790&w=162&h=162&auto=format&dpr=2 324w,
                        https://cdn.sanity.io/images/iy559jeo/production/a32880305f84ae999197c2a946d7556aa932ee12-2048x2048.png?rect=129,123,1790,1790&w=162&h=162&auto=format&dpr=3 468w
                      "
                        loading="lazy"
                        decoding="async"
                        className="lazyload margin-bottom-1"
                        alt
                        width={324}
                        height={324}
                      />
                    </Link>
                  </div>
                  <Link to="/dermal-fillers/rhinoplasty">
                    <h3>Liquid Rhinoplasty</h3>
                  </Link>
                </article>
                <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
                  <div className="treatment-guide-illustration__image margin-bottom-1">
                    <Link to="/dermal-fillers/filler-for-deep-wrinkles-and-scars">
                      <img
                        src="https://cdn.sanity.io/images/iy559jeo/production/8b2776e49b6f172cd7637f1a8c47c6b336080e67-2048x2048.png?rect=131,127,1794,1794&w=162&h=162&auto=format&dpr=2"
                        srcSet="
                        https://cdn.sanity.io/images/iy559jeo/production/8b2776e49b6f172cd7637f1a8c47c6b336080e67-2048x2048.png?rect=131,127,1794,1794&w=162&h=162&auto=format           162w,
                        https://cdn.sanity.io/images/iy559jeo/production/8b2776e49b6f172cd7637f1a8c47c6b336080e67-2048x2048.png?rect=131,127,1794,1794&w=162&h=162&auto=format&dpr=2 324w,
                        https://cdn.sanity.io/images/iy559jeo/production/8b2776e49b6f172cd7637f1a8c47c6b336080e67-2048x2048.png?rect=131,127,1794,1794&w=162&h=162&auto=format&dpr=3 468w
                      "
                        loading="lazy"
                        decoding="async"
                        className="lazyload margin-bottom-1"
                        alt
                        width={324}
                        height={324}
                      />
                    </Link>
                  </div>
                  <Link to="/dermal-fillers/filler-for-deep-wrinkles-and-scars">
                    <h3>Deep Wrinkles and Scars</h3>
                  </Link>
                </article>
                <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
                  <div className="treatment-guide-illustration__image margin-bottom-1">
                    <Link to="/dermal-fillers/filler-dissolving-treatment">
                      <img
                        src="https://cdn.sanity.io/images/iy559jeo/production/cbcaa05823529a8e53657d3b298287660152d578-2048x2048.png?rect=142,137,1769,1769&w=162&h=162&auto=format&dpr=2"
                        srcSet="
                        https://cdn.sanity.io/images/iy559jeo/production/cbcaa05823529a8e53657d3b298287660152d578-2048x2048.png?rect=142,137,1769,1769&w=162&h=162&auto=format           162w,
                        https://cdn.sanity.io/images/iy559jeo/production/cbcaa05823529a8e53657d3b298287660152d578-2048x2048.png?rect=142,137,1769,1769&w=162&h=162&auto=format&dpr=2 324w,
                        https://cdn.sanity.io/images/iy559jeo/production/cbcaa05823529a8e53657d3b298287660152d578-2048x2048.png?rect=142,137,1769,1769&w=162&h=162&auto=format&dpr=3 468w
                      "
                        loading="lazy"
                        decoding="async"
                        className="lazyload margin-bottom-1"
                        alt
                        width={324}
                        height={324}
                      />
                    </Link>
                  </div>
                  <Link to="/dermal-fillers/filler-dissolving-treatment">
                    <h3>Filler Dissolving Treatment</h3>
                  </Link>
                </article>
                <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
                  <div className="treatment-guide-illustration__image margin-bottom-1">
                    <Link to="/dermal-fillers/liquid-non-surgical-facelift">
                      <img
                        src="https://cdn.sanity.io/images/iy559jeo/production/eb01c634e50c7c63b51415609510f477d2527ebc-2048x2048.png?rect=127,133,1786,1786&w=162&h=162&auto=format&dpr=2"
                        srcSet="
                        https://cdn.sanity.io/images/iy559jeo/production/eb01c634e50c7c63b51415609510f477d2527ebc-2048x2048.png?rect=127,133,1786,1786&w=162&h=162&auto=format           162w,
                        https://cdn.sanity.io/images/iy559jeo/production/eb01c634e50c7c63b51415609510f477d2527ebc-2048x2048.png?rect=127,133,1786,1786&w=162&h=162&auto=format&dpr=2 324w,
                        https://cdn.sanity.io/images/iy559jeo/production/eb01c634e50c7c63b51415609510f477d2527ebc-2048x2048.png?rect=127,133,1786,1786&w=162&h=162&auto=format&dpr=3 468w
                      "
                        loading="lazy"
                        decoding="async"
                        className="lazyload margin-bottom-1"
                        alt
                        width={324}
                        height={324}
                      />
                    </Link>
                  </div>
                  <Link to="/dermal-fillers/liquid-non-surgical-facelift">
                    <h3>Liquid / Non-surgical Facelift</h3>
                  </Link>
                </article>
                <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
                  <div className="treatment-guide-illustration__image margin-bottom-1">
                    <Link to="/dermal-fillers/cheek-chin-and-jaw-enhancement">
                      <img
                        src="https://cdn.sanity.io/images/iy559jeo/production/cbcaa05823529a8e53657d3b298287660152d578-2048x2048.png?rect=142,137,1765,1765&w=162&h=162&auto=format&dpr=2"
                        srcSet="
                        https://cdn.sanity.io/images/iy559jeo/production/cbcaa05823529a8e53657d3b298287660152d578-2048x2048.png?rect=142,137,1765,1765&w=162&h=162&auto=format           162w,
                        https://cdn.sanity.io/images/iy559jeo/production/cbcaa05823529a8e53657d3b298287660152d578-2048x2048.png?rect=142,137,1765,1765&w=162&h=162&auto=format&dpr=2 324w,
                        https://cdn.sanity.io/images/iy559jeo/production/cbcaa05823529a8e53657d3b298287660152d578-2048x2048.png?rect=142,137,1765,1765&w=162&h=162&auto=format&dpr=3 468w
                      "
                        loading="lazy"
                        decoding="async"
                        className="lazyload margin-bottom-1"
                        alt
                        width={324}
                        height={324}
                      />
                    </Link>
                  </div>
                  <Link to="/dermal-fillers/cheek-chin-and-jaw-enhancement">
                    <h3>Cheek, Chin &amp; Jaw Enhancement</h3>
                  </Link>
                </article>
                <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
                  <div className="treatment-guide-illustration__image margin-bottom-1">
                    <Link to="/dermal-fillers//tear-trough-fillers">
                      <img
                        src="https://cdn.sanity.io/images/iy559jeo/production/811bd5b77ab5e1854e6acd6e78d8cef4c8456c55-2048x2048.png?rect=127,123,1790,1790&w=162&h=162&auto=format&dpr=2"
                        srcSet="
                        https://cdn.sanity.io/images/iy559jeo/production/811bd5b77ab5e1854e6acd6e78d8cef4c8456c55-2048x2048.png?rect=127,123,1790,1790&w=162&h=162&auto=format           162w,
                        https://cdn.sanity.io/images/iy559jeo/production/811bd5b77ab5e1854e6acd6e78d8cef4c8456c55-2048x2048.png?rect=127,123,1790,1790&w=162&h=162&auto=format&dpr=2 324w,
                        https://cdn.sanity.io/images/iy559jeo/production/811bd5b77ab5e1854e6acd6e78d8cef4c8456c55-2048x2048.png?rect=127,123,1790,1790&w=162&h=162&auto=format&dpr=3 468w
                      "
                        loading="lazy"
                        decoding="async"
                        className="lazyload margin-bottom-1"
                        alt
                        width={324}
                        height={324}
                      />
                    </Link>
                  </div>
                  <Link to="/dermal-fillers//tear-trough-fillers">
                    <h3>Tear Trough Fillers</h3>
                  </Link>
                </article>
                <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
                  <div className="treatment-guide-illustration__image margin-bottom-1">
                    <Link to="/dermal-fillers//lip-fillers">
                      <img
                        src="https://cdn.sanity.io/images/iy559jeo/production/38b00c83906bb51abdcae90e118c93f2ce1cf885-2048x2048.png?rect=133,131,1782,1782&w=162&h=162&auto=format&dpr=2"
                        srcSet="
                        https://cdn.sanity.io/images/iy559jeo/production/38b00c83906bb51abdcae90e118c93f2ce1cf885-2048x2048.png?rect=133,131,1782,1782&w=162&h=162&auto=format           162w,
                        https://cdn.sanity.io/images/iy559jeo/production/38b00c83906bb51abdcae90e118c93f2ce1cf885-2048x2048.png?rect=133,131,1782,1782&w=162&h=162&auto=format&dpr=2 324w,
                        https://cdn.sanity.io/images/iy559jeo/production/38b00c83906bb51abdcae90e118c93f2ce1cf885-2048x2048.png?rect=133,131,1782,1782&w=162&h=162&auto=format&dpr=3 468w
                      "
                        loading="lazy"
                        decoding="async"
                        className="lazyload margin-bottom-1"
                        alt
                        width={324}
                        height={324}
                      />
                    </Link>
                  </div>
                  <Link to="/dermal-fillers//lip-fillers">
                    <h3>Lip Fillers</h3>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Dermal
