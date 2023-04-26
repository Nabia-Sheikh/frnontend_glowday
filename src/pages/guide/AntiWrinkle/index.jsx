import React from "react"
import { Link } from "react-router-dom"

const index = () => {
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
                    <a href>
                      Anti-wrinkle Injections
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="banner banner__background--ivory-light">
          <div className="banner__image" />
          <div className="banner__content text-center">
            <div className="container">
              <div className="column">
                <h1 className="text-left">Anti-wrinkle Injections</h1>
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
                    <h2>Anti-wrinkle Injections Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Often termed Botox®, botulinum toxin has numerous uses,
                        including:
                      </p>
                      <ul>
                        <li>
                          relaxing certain muscles of the face to reduce the
                          appearance of dynamic
                          <a href="../../botox/guides/">lines and wrinkles</a>
                        </li>
                        <li>
                          treating a
                          <a href="../../botox/botox-for-a-gummy-smile/guide/">
                            gummy smile
                          </a>
                        </li>
                        <li>
                          <a href="../../botox/jaw-slimming-botox/guide/">
                            jawline slimming
                          </a>
                        </li>
                        <li>treating hyperhydrosis</li>
                        <li>reducing headaches</li>
                      </ul>
                      <p />
                      <p>
                        <a>Botox</a>®, Vistabel®,
                        <a href="https://www.dysportusa.com">Dysport</a>®,
                        <a href="https://www.galderma.com/azzalure">Azzalure</a>
                        ®{/* */}
                        all brand names for the anti-wrinkle treatment we tend
                        to call 'Botox®'. They all contain the neurotoxin,
                        botulinum toxin, produced by the bacterium{" "}
                        <em>Clostridium botulinum</em>.{/* */}There are other
                        brands available, but not all have been licensed for use
                        in the UK.
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
              <div className="row--middle column--relative overflowSlider row--no-wrap filter-gradient blog-grid">
                <article className="column column-m-6 column-t-3 column-d-2 treatment-guide-illustration text-center no-style slide">
                  <div className="treatment-guide-illustration__image margin-bottom-1">
                    <a href="../anti-wrinkle-injections/guide/">
                      <img
                        src="https://cdn.sanity.io/images/iy559jeo/production/bd500564ddb9bc5a8d7c4cd5d68b228439e6c4a8-2048x2048.png?rect=139,137,1774,1774&w=162&h=162&auto=format&dpr=2"
                        srcSet="
                        https://cdn.sanity.io/images/iy559jeo/production/bd500564ddb9bc5a8d7c4cd5d68b228439e6c4a8-2048x2048.png?rect=139,137,1774,1774&w=162&h=162&auto=format           162w,
                        https://cdn.sanity.io/images/iy559jeo/production/bd500564ddb9bc5a8d7c4cd5d68b228439e6c4a8-2048x2048.png?rect=139,137,1774,1774&w=162&h=162&auto=format&dpr=2 324w,
                        https://cdn.sanity.io/images/iy559jeo/production/bd500564ddb9bc5a8d7c4cd5d68b228439e6c4a8-2048x2048.png?rect=139,137,1774,1774&w=162&h=162&auto=format&dpr=3 468w
                      "
                        loading="lazy"
                        decoding="async"
                        className="lazyload margin-bottom-1"
                        alt
                        width={324}
                        height={324}
                      />
                    </a>
                  </div>
                  <Link to="/anti-wrinkle-injection/anti-wrinkle-injections">
                    <h3>Anti-Wrinkle Injections</h3>
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

export default index
