import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import "../styles/footer.css"
const Footer = () => {
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const [toggle3, setToggle3] = useState(false)
  const [toggle4, setToggle4] = useState(false)

  const isMobile = useMediaQuery({ maxWidth: 767 })

  const handleToggle1 = () => {
    setToggle1(!toggle1)
  }

  const handleToggle2 = () => {
    setToggle2(!toggle2)
  }

  const handleToggle3 = () => {
    setToggle3(!toggle3)
  }

  const handleToggle4 = () => {
    setToggle4(!toggle4)
  }

  const listLinkStyle = {
    listStyle: "none",
    display: "flex",
  }

  return (
    <>
      {isMobile ? (
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="column column-t-3">
                <div className="row">
                  <div className="column column-t-6">
                    <div
                      onClick={handleToggle1}
                      className={
                        toggle1
                          ? "footer__column-expand mobileFooter"
                          : "footer__column null"
                      }
                    >
                      <h2>Community</h2>
                      <ul>
                        <li style={listLinkStyle}>
                          <Link to="https://www.facebook.com/GlowdayEveryday">
                            Facebook
                          </Link>
                        </li>
                        <li style={listLinkStyle}>
                          <Link to="https://www.instagram.com/_glowday/">
                            Instagram
                          </Link>
                        </li>
                        <li style={listLinkStyle}>
                          <Link to="https://twitter.com/Glowday_">Twitter</Link>
                        </li>
                        <li style={listLinkStyle}>
                          <Link to="https://www.pinterest.co.uk/goglowday/">
                            Pinterest
                          </Link>
                        </li>
                        <li style={listLinkStyle}>
                          <Link to="https://www.youtube.com/channel/UCIN3RUiqxc-Ffjk-A3bPCvA">
                            YouTube
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="column column-t-6">
                    <div
                      onClick={handleToggle2}
                      className={
                        toggle2
                          ? "footer__column-expand mobileFooter"
                          : "footer__column null"
                      }
                    >
                      <h2>GlowdayPRO</h2>
                      <ul>
                        <li style={listLinkStyle}>
                          <Link to="https://www.pro.glowday.com/">
                            Facebook
                          </Link>
                        </li>
                        <li style={listLinkStyle}>
                          <Link to="https://www.pro.glowday.com/shop">
                            Instagram
                          </Link>
                        </li>
                        <li style={listLinkStyle}>
                          <Link to="https://www.pro.glowday.com/prophotography">
                            Twitter
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-t-6 column">
                <div
                  onClick={handleToggle3}
                  className={
                    toggle3
                      ? "footer__column-expand mobileFooter"
                      : "footer__column null"
                  }
                >
                  <h2>Our treatment guides</h2>
                  <ul className="columns">
                    <li style={listLinkStyle}>
                      <Link to="/microneedling">Microneedling</Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/profhilo">Profhilo® </Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/laser-hair-removal">Laser Hair Removal</Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/threadLifts">Thread Lifts</Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/prp-therapy">PRP Therapy</Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/dermal-fillers">Dermal Fillers</Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/laser-skin-treatments">
                        Laser Skin Treatments
                      </Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/anti-wrinkle-injection">
                        Anti-wrinkle Injections{" "}
                      </Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/chemicalPeels">Chemical Peels </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column-t-3 column">
                <div
                  onClick={handleToggle4}
                  className={
                    toggle4
                      ? "footer__column-expand mobileFooter"
                      : "footer__column null"
                  }
                >
                  <h2>Company</h2>
                  <ul>
                    <li style={listLinkStyle}>
                      <Link to="/glowdayStory">The Glowday Story</Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/getInTouch">Get in touch</Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/privacyPolicy">Privacy Policy</Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/cookiePolicy/">Cookie Policy</Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/clinicTerms/">
                        Clinic Terms &amp; Conditions
                      </Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/customerTerms">
                        Customer Terms &amp; Conditions
                      </Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/site-map">Location Hub</Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/advertise">Advertise with us</Link>
                    </li>
                    <li style={listLinkStyle}>
                      <Link to="/glowdayTeam">The Glowday team</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column margin-top-1">
                <p>© 2022 Glowery Ltd. All rights reserved.</p>
                <div className="footer__disclaimer margin-top-1">
                  <div className="cms-content undefined">
                    <p>
                      All information in our Glowday Treatment Guides and blog
                      articles is intended for reference and information. The
                      information given here is to help you make informed
                      decisions when considering the wide range of non-surgical
                      aesthetic treatments available.{" "}
                    </p>
                    <p>
                      It is NOT intended as medical advice. Any reliance placed
                      by you on the information contained within the Glowday
                      Treatment Guides, Glowday blog articles or on any of
                      Glowday.com is done by you at your own risk.{" "}
                    </p>
                    <p>
                      Before undergoing any non-surgical cosmetic treatment
                      mentioned anywhere on Glowday.com, you should fully
                      consult with an appropriately qualified and accredited
                      practitioner who is properly trained in and fully insured
                      to conduct the treatment you are interested in. Neither
                      the author of the guides or blog articles, or the
                      practitioner who has verified the guides nor Glowery
                      Limited can be held responsible or liable for any loss or
                      claim arising from the use or misuse of the content of
                      Glowday.com.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="column column-t-3">
                <div className="row">
                  <div className="column column-t-6">
                    <div className="footer__column null">
                      <h2>Community</h2>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/GlowdayEveryday">
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/_glowday/">
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/Glowday_">Twitter</a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.co.uk/goglowday/">
                            Pinterest
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/channel/UCIN3RUiqxc-Ffjk-A3bPCvA">
                            YouTube
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="column column-t-6">
                    <div className="footer__column null">
                      <h2>GlowdayPRO</h2>
                      <ul>
                        <li>
                          <a href="https://www.pro.glowday.com/">Facebook</a>
                        </li>
                        <li>
                          <a href="https://www.pro.glowday.com/shop">
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pro.glowday.com/prophotography">
                            Twitter
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-t-6 column">
                <div className="footer__column null">
                  <h2>Our treatment guides</h2>
                  <ul className="columns">
                    <li>
                      <Link to="/microneedling">Microneedling</Link>
                    </li>
                    <li>
                      <Link to="/profhilo">Profhilo® </Link>
                    </li>
                    <li>
                      <Link to="/laser-hair-removal">Laser Hair Removal</Link>
                    </li>
                    <li>
                      <Link to="/threadLifts">Thread Lifts</Link>
                    </li>
                    <li>
                      <Link to="/prp-therapy">PRP Therapy</Link>
                    </li>
                    <li>
                      <Link to="/dermal-fillers">Dermal Fillers</Link>
                    </li>
                    <li>
                      <Link to="/laser-skin-treatments">
                        Laser Skin Treatments
                      </Link>
                    </li>
                    <li>
                      <Link to="/anti-wrinkle-injection">
                        Anti-wrinkle Injections{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/chemicalPeels">Chemical Peels </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column-t-3 column">
                <div className="footer__column null">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <Link to="/glowdayStory">The Glowday Story</Link>
                    </li>
                    <li>
                      <Link to="/getInTouch">Get in touch</Link>
                    </li>
                    <li>
                      <Link to="/privacyPolicy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/cookiePolicy/">Cookie Policy</Link>
                    </li>
                    <li>
                      <Link to="/clinicTerms/">
                        Clinic Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/customerTerms">
                        Customer Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/site-map">Location Hub</Link>
                    </li>
                    <li>
                      <Link to="/advertise">Advertise with us</Link>
                    </li>
                    <li>
                      <Link to="/glowdayTeam">The Glowday team</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column margin-top-1">
                <p>© 2022 Glowery Ltd. All rights reserved.</p>
                <div className="footer__disclaimer margin-top-1">
                  <div className="cms-content undefined">
                    <p>
                      All information in our Glowday Treatment Guides and blog
                      articles is intended for reference and information. The
                      information given here is to help you make informed
                      decisions when considering the wide range of non-surgical
                      aesthetic treatments available.{" "}
                    </p>
                    <p>
                      It is NOT intended as medical advice. Any reliance placed
                      by you on the information contained within the Glowday
                      Treatment Guides, Glowday blog articles or on any of
                      Glowday.com is done by you at your own risk.{" "}
                    </p>
                    <p>
                      Before undergoing any non-surgical cosmetic treatment
                      mentioned anywhere on Glowday.com, you should fully
                      consult with an appropriately qualified and accredited
                      practitioner who is properly trained in and fully insured
                      to conduct the treatment you are interested in. Neither
                      the author of the guides or blog articles, or the
                      practitioner who has verified the guides nor Glowery
                      Limited can be held responsible or liable for any loss or
                      claim arising from the use or misuse of the content of
                      Glowday.com.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  )
}

export default Footer
