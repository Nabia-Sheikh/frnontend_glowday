import React from "react"
import { Link } from "react-router-dom"

const CheekChin = () => {
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
                  <li className>
                    <Link to="/dermal-fillers">Dermal Fillers</Link>
                  </li>
                  <li className="active">
                    <a href>Cheek, Chin &amp; Jaw Enhancement</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="banner banner__background-slant--golden-light">
          <div className="banner__image" />
          <div className="banner__content text-center">
            <div className="container">
              <div className="column">
                <h1 className="text-left">Cheek, Chin &amp; Jaw Enhancement</h1>
                <div className="authorSection">
                  <div className="author-details margin-bottom-1 margin-right-3 margin-bottom__l-0 margin-right__l-0">
                    <img
                      className="author-details__image margin-right lazyload round-image"
                      src="https://cdn.sanity.io/images/iy559jeo/production/790d8a9875878a3d52850483be2de23484ea8fb4-4000x5706.jpg?rect=0,0,4000,4000&w=138&h=138&auto=format"
                      alt="Hannah Russell"
                      width={138}
                      height={138}
                    />
                    <div className="author-details__details">
                      <span className="author-details__label">Written by:</span>
                      <span className="author-details__name">
                        Hannah Russell
                      </span>
                    </div>
                  </div>
                  <div className="author-details margin-bottom-1 margin-bottom__l-0">
                    <img
                      className="author-details__image margin-right lazyload round-image"
                      src="https://cdn.sanity.io/images/iy559jeo/production/2f95668f6eb7187e2ee5240884eb3a25e25dc626-2000x2000.jpg?w=138&h=138&auto=format"
                      alt="Andrew Rankin"
                      width={138}
                      height={138}
                    />
                    <div className="author-details__details">
                      <span className="author-details__label">
                        Verified by:
                      </span>
                      <span className="author-details__name">
                        Andrew Rankin
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="padding-top-4 padding-bottom-4 section__charcoal">
          <div className="container">
            <div className="row">
              <div className="column" id="at-a-glance" data-name="at-a-glance">
                <h2>At A Glance</h2>
              </div>
            </div>
            <div className="row overflowSlider">
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">Best Results</h3>
                        <h4 className="glance-card__description">
                          1 - 3 treatments
                        </h4>
                        <img
                          src="../../../static/img/icons/charcoal-dark/calendar.svg"
                          className="glance-card__icon"
                          alt="Best Results"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description wrapper">
                        <img
                          src="../../../static/img/icons/white/calendar.svg"
                          className="glance-card__icon"
                          alt="Best Results"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">Best Results</h3>
                        <h4 className="glance-card__description">
                          1 - 3 treatments
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">
                          Duration of Results
                        </h3>
                        <h4 className="glance-card__description">
                          6 - 12 months
                        </h4>
                        <img
                          src="../../../static/img/icons/charcoal-dark/hourglass.svg"
                          className="glance-card__icon"
                          alt="Duration of Results"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description wrapper">
                        <img
                          src="../../../static/img/icons/white/hourglass.svg"
                          className="glance-card__icon"
                          alt="Duration of Results"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">
                          Duration of Results
                        </h3>
                        <h4 className="glance-card__description">
                          6 - 12 months
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">
                          Treatment recovery
                        </h3>
                        <h4 className="glance-card__description">
                          3 - 4 hours
                        </h4>
                        <img
                          src="../../../static/img/icons/charcoal-dark/recovery.svg"
                          className="glance-card__icon"
                          alt="Treatment recovery"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description wrapper">
                        <img
                          src="../../../static/img/icons/white/recovery.svg"
                          className="glance-card__icon"
                          alt="Treatment recovery"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">
                          Treatment recovery
                        </h3>
                        <h4 className="glance-card__description">
                          3 - 4 hours
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">
                          Risks &amp; complications
                        </h3>
                        <h4 className="glance-card__description">Medium</h4>
                        <img
                          src="../../../static/img/icons/charcoal-dark/complication.svg"
                          className="glance-card__icon"
                          alt="Risks & complications"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description wrapper">
                        <img
                          src="../../../static/img/icons/white/complication.svg"
                          className="glance-card__icon"
                          alt="Risks & complications"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">
                          Risks &amp; complications
                        </h3>
                        <h4 className="glance-card__description">Medium</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">Anaesthetic</h3>
                        <h4 className="glance-card__description">
                          Numbing cream Local anaesthetic
                        </h4>
                        <img
                          src="../../../static/img/icons/charcoal-dark/syringe.svg"
                          className="glance-card__icon"
                          alt="Anaesthetic"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description wrapper">
                        <img
                          src="../../../static/img/icons/white/syringe.svg"
                          className="glance-card__icon"
                          alt="Anaesthetic"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">Anaesthetic</h3>
                        <h4 className="glance-card__description">
                          Numbing cream Local anaesthetic
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">Procedure time</h3>
                        <h4 className="glance-card__description">
                          20 - 40 min
                        </h4>
                        <img
                          src="../../../static/img/icons/charcoal-dark/stopwatch.svg"
                          className="glance-card__icon"
                          alt="Procedure time"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description wrapper">
                        <img
                          src="../../../static/img/icons/white/stopwatch.svg"
                          className="glance-card__icon"
                          alt="Procedure time"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">Procedure time</h3>
                        <h4 className="glance-card__description">
                          20 - 40 min
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">Skin specialist</h3>
                        <h4 className="glance-card__description">
                          Medically qualified
                        </h4>
                        <img
                          src="../../../static/img/icons/charcoal-dark/doctor.svg"
                          className="glance-card__icon"
                          alt="Skin specialist"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description wrapper">
                        <img
                          src="../../../static/img/icons/white/doctor.svg"
                          className="glance-card__icon"
                          alt="Skin specialist"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">Skin specialist</h3>
                        <h4 className="glance-card__description">
                          Medically qualified
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">Back to work</h3>
                        <h4 className="glance-card__description">Same day</h4>
                        <img
                          src="../../../static/img/icons/charcoal-dark/briefcase.svg"
                          className="glance-card__icon"
                          alt="Back to work"
                          width={48}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-lessThan-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description wrapper">
                        <img
                          src="../../../static/img/icons/white/briefcase.svg"
                          className="glance-card__icon"
                          alt="Back to work"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">Back to work</h3>
                        <h4 className="glance-card__description">Same day</h4>
                      </div>
                    </div>
                  </div>
                </div>
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
                <a href="#cheek-chin-and-jaw-enhancement-overview">
                  Cheek, Chin and Jaw Enhancement - Overview
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-does-dermal-filler-for-cheeks-chins-and-jaws-work">
                  How does dermal filler for cheeks, chins and jaws work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#who-is-suitable-for-cheek-chin-and-jaw-filler-treatment">
                  Who is suitable for cheek, chin and jaw filler treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-should-i-prepare-for-a-cheek-chin-or-jaw-filler-treatment">
                  How should I prepare for a cheek, chin or jaw filler
                  treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#your-cheek-chin-or-jaw-filler-treatment">
                  Your cheek, chin or jaw filler treatment
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-happens-after-a-cheek-chin-or-jaw-filler-treatment">
                  What happens after a cheek, chin or jaw filler treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-filler-treatments">
                  What are the side effects and risks of filler treatments?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-do-cheek-chin-and-jaw-filler-treatments-cost">
                  How much do cheek, chin and jaw filler treatments cost?
                </a>
              </div>
            </div>
          </div>
          <div className="fresnel-container fresnel-greaterThanOrEqual-bigmd" />
        </section>
        <section className="padding-top-4 padding-bottom-4">
          <div className="container">
            <div className="row">
              <div
                data-name="cheek-chin-and-jaw-enhancement-overview"
                id="cheek-chin-and-jaw-enhancement-overview"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Cheek, Chin and Jaw Enhancement - Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        For those looking to balance their profiles or enhance
                        the contours of their cheekbones, jawlines or chins,
                        dermal fillers may provide the solution.
                      </p>
                      <p>
                        There are over 60 brands of dermal filler available in
                        the UK. The most commonly used are made from
                        <a href="../../../blog/hyaluronic-acid-the-magic-moisturising-molecule/">
                          hyaluronic acid
                        </a>
                        which is well tolerated and easily dissolved should
                        there be any problems. Some of the most commonly used
                        hyaluronic acid fillers are:
                        <a href="http://restylane.co.uk">Restylane</a>®,
                        <a href="http://juvederm.co.uk">Juvéderm</a>®,
                        <a href="https://www.belotero.com">Belotero®</a> and
                        <a href="https://www.teoxane.com/dermal-fillers">
                          Teosyal
                        </a>
                        ®.
                      </p>
                      <p>
                        Other non-hyaluronic acid fillers work by directly
                        stimulating the skin and these include
                        <a href="https://www.ellanse.com">Ellanse</a>®,
                        <a href="https://www.sculptraaesthetic.com">Sculptra</a>
                        ®, <a href="https://radiesse.com">Radiesse</a>®.
                        Practitioners will likely use a range of brands for
                        different treatments, based on their knowledge and
                        experience.
                      </p>
                      <p>
                        There are products available which can dissolve
                        hyaluronic acid fillers, so the effects of these fillers
                        are not only temporary, but they can be reversed, if
                        necessary. The products to dissolve fillers are
                        prescription medicines and must be performed by an
                        expert.
                      </p>
                      <p>
                        Many dermal filler products&nbsp;are&nbsp;available with
                        the addition of 0.3% lidocaine combined with the
                        hyaluronic acid gel in the syringe. This provides
                        instant relief from pain upon injection and removes the
                        need for a separate nerve block or topical anaesthesia,
                        although you may still be offered topical anaesthesia.
                      </p>
                      <p>
                        This Glowday Treatment Guide has been edited and
                        medically verified by
                        <a href="../../../blog/guest-editor-andre-rankin/">
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
        <section className="padding-top-4 padding-bottom-4 section__charcoal">
          <div className="container">
            <div className="row">
              <div
                data-name="how-does-dermal-filler-for-cheeks-chins-and-jaws-work"
                id="how-does-dermal-filler-for-cheeks-chins-and-jaws-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      How does dermal filler for cheeks, chins and jaws work?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        The leading dermal fillers used by most UK practitioners
                        are hyaluronic acid-based products. Hyaluronic acid is a
                        naturally occurring substance within the body, which
                        makes adverse reactions to it unlikely.
                      </p>
                      <p>
                        When injected into the skin, the filler immediately adds
                        volume and shape where necessary. This enables the
                        practitioner to create cheek, chin and jaw contours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="padding-top-4 padding-bottom-4">
          <div className="container">
            <div className="row">
              <div
                data-name="who-is-suitable-for-cheek-chin-and-jaw-filler-treatment"
                id="who-is-suitable-for-cheek-chin-and-jaw-filler-treatment"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      Who is suitable for cheek, chin and jaw filler treatment?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Dermal fillers can be used to create more contoured
                        jawlines, cheekbones and balance profiles.
                      </p>
                      <p>
                        Adults of all skin types, tones and genders are
                        appropriate candidates for profile balancing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="padding-top-4 padding-bottom-4 section__charcoal">
          <div className="container">
            <div className="row">
              <div
                data-name="how-should-i-prepare-for-a-cheek-chin-or-jaw-filler-treatment"
                id="how-should-i-prepare-for-a-cheek-chin-or-jaw-filler-treatment"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      How should I prepare for a cheek, chin or jaw filler
                      treatment?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        In the week before the treatment, avoid taking aspirin,
                        ibuprofen, vitamin E and fish oil supplements as these
                        may increase bleeding and bruising.
                      </p>
                      <p>You can take paracetamol.</p>
                      <p>
                        Ensure you tell your practitioner about any prescription
                        medication or supplements you are taking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="padding-top-4 padding-bottom-4">
          <div
            data-name="your-cheek-chin-or-jaw-filler-treatment"
            id="your-cheek-chin-or-jaw-filler-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>Your cheek, chin or jaw filler treatment</h2>
                </div>
              </div>
              <div className="row">
                <div className="column column-t-4 column-t-offset-1">
                  <div className="step-definition gray-step cms-content">
                    <p>
                      <strong>
                        Step
                        {/* */}One{/* */}-{/* */}
                        {/* */}Consultation and Consent
                      </strong>
                    </p>
                    <p>
                      It is important to understand that, whilst dermal fillers
                      are not prescription only medicines, the medication needed
                      to dissolve fillers, hyaluronidase, is. Additionally, the
                      anatomy of the face is complex, it is advisable the you
                      only allow medically qualified practitioners carry out
                      filler treatments.
                    </p>
                    <button
                      className="button button--outline button--small"
                      type="button"
                    >
                      Read more
                    </button>
                  </div>
                </div>
                <div className="column column-t-4 column-t-offset-2">
                  <div className="step-definition gray-step cms-content">
                    <p>
                      <strong>
                        Step
                        {/* */}Two{/* */}-{/* */}
                        {/* */}The Treatment
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>Your Treatment will take around 20-40 minutes.</p>
                      <p>
                        The first part of your treatment will be administering
                        an anaesthetic to make your treatment as comfortable as
                        possible.
                      </p>
                    </div>
                    <button
                      className="button button--outline button--small"
                      type="button"
                    >
                      Read more
                    </button>
                  </div>
                </div>
                <div className="column column-t-4 column-t-offset-1">
                  <div className="step-definition gray-step cms-content">
                    <p>
                      <strong>
                        Step
                        {/* */}Three{/* */}-{/* */}
                        {/* */}The Repeat Treatment
                      </strong>
                    </p>
                    <p>
                      Hyaluronic acid fillers are metabolised by the body. This
                      will mean that, in order to maintain the effect, you will
                      need to have a repeat treatment every 6-12 months.
                    </p>
                    <button
                      className="button button--outline button--small"
                      type="button"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="padding-top-4 padding-bottom-4 section__charcoal">
          <div className="container">
            <div className="row">
              <div
                data-name="what-happens-after-a-cheek-chin-or-jaw-filler-treatment"
                id="what-happens-after-a-cheek-chin-or-jaw-filler-treatment"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What happens after a cheek, chin or jaw filler treatment?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        After your treatment, you can go about your normal day.
                      </p>
                      <p>Post-treatment advice may include:</p>
                      <ul>
                        <li>
                          iced water soaks or ice packs to help to reduce
                          swelling (although this is generally not required);
                        </li>
                        <li>
                          the use of painkillers such as paracetamol. This is
                          often not required but may be used if required for a
                          few days after treatment;
                        </li>
                        <li>
                          arnica (a homeopathic remedy) cream or tablets are
                          sometimes recommended a few days before and a few days
                          after treatment as there is some evidence that this
                          can reduce bruising.
                        </li>
                      </ul>
                      <p>
                        Bruising and swelling should go down after a couple of
                        days but can persist for a week.
                      </p>
                      <p>
                        <strong>
                          <em>
                            If you continue to experience excessive swelling,
                            pain, skin colour changes or if any blistering
                            occurs, you should contact your practitioner
                            immediately.
                          </em>
                        </strong>
                      </p>
                      <ul>
                        <li>
                          similarly, if you experience any delayed reactions
                          such as lumpy redness occurring any time after
                          treatment, you should contact the person who treated
                          you immediately.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="padding-top-4 padding-bottom-4">
          <div className="container">
            <div className="row">
              <div
                data-name="what-are-the-side-effects-and-risks-of-filler-treatments"
                id="what-are-the-side-effects-and-risks-of-filler-treatments"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What are the side effects and risks of filler treatments?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Depending on the area being injected, the type of filler
                        and the pain relief method being used, clients may find
                        this procedure relatively painless to uncomfortable.
                        Treatments around the
                        <a href="../../../blog/non-surgical-nose-job-faqs/">
                          nose
                        </a>
                        and
                        <a href="../../../blog/10-things-to-know-before-having-lip-fillers/">
                          lips
                        </a>
                        are usually more painful than other areas but most
                        clients find filler treatments bearable.
                      </p>
                      <p>
                        You must discuss pain management options with your
                        practitioner and let them know if you are finding the
                        procedure too uncomfortable.
                      </p>
                      <p>
                        The obvious, immediate and most
                        <a href="../../../blog/fillers-and-botox-side-effects-and-risks/">
                          common side effect
                        </a>
                        is slight bleeding after the needle has been inserted
                        into the skin. Other risks include bruising, tenderness,
                        redness and swelling around the injection site. These
                        signs may take 2-3 days to vanish completely, especially
                        around the lips where there is little flesh and skin is
                        tender.
                      </p>
                      <p>
                        Occasionally, a ‘bleb’ will occur. This is where the
                        filler has been injected too superficially (close to the
                        surface) and will need to be dissolved.
                      </p>
                      <p>
                        Rarely, allergic type reactions can occur after a filler
                        treatment. These include prolonged redness, swelling,
                        itching and/or hardness and bumps in the skin. Such
                        signs may appear at some or all injection points.
                        Sometimes, they can last several months or longer, but
                        this is extremely unusual.
                      </p>
                      <p>
                        Another rare side effect is occlusions. This is where
                        filler is accidentally injected into a blood vessel and
                        creates a blockage. This presents as whitening of the
                        skin, followed by the area turning greyish-purple. If
                        left untreated, this can result in tissue loss in the
                        affected area. There have been reports of this in lip
                        and nose treatments.
                      </p>
                      <p>
                        One particular type of occlusion is an ocular occlusion.
                        This is where a blood vessel supplying the eye gets
                        blocked. This results in partial or complete blindness.
                      </p>
                      <p>
                        <a href="../../../blog/what-to-do-if-fillers-go-wrong/">
                          If you exhibit any symptoms of occlusion, you need to
                          seek the advice of your practitioner and/or visit
                          accident and emergency immediately
                        </a>
                        . You will need to be prescribed emergency treatment
                        medicines, which is why it is important that you have
                        access to a practitioner who is able to prescribe
                        medicine.
                      </p>
                      <p>
                        As with any skin treatment, injections should be avoided
                        in areas where the skin is swollen or where infections
                        are present - e.g. active acne.
                      </p>
                      <p>
                        If you have a history of cold sores, or fever blisters
                        in the treated area, filler injections may cause a break
                        out. In these cases, your practitioner may recommend
                        that you take a course of anti-viral medicine before
                        your treatment to help reduce the likelihood of an
                        outbreak.
                      </p>
                      <p>
                        If you have a known allergy to hyaluronic acid fillers
                        or any of the ingredients in the filler product, you
                        must inform your practitioner. An alternative treatment
                        will need to be carried out.
                      </p>
                      <p>
                        <a href="../../../blog/what-non-surgical-treatments-are-safe-during-pregnancy/">
                          Dermal fillers have not been tested on pregnant women.
                        </a>
                        No medically qualified practitioner would carry out a
                        filler treatment on a pregnant woman.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="padding-top-4 padding-bottom-4 section__charcoal">
          <div className="container">
            <div className="row">
              <div
                data-name="how-much-do-cheek-chin-and-jaw-filler-treatments-cost"
                id="how-much-do-cheek-chin-and-jaw-filler-treatments-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      How much do cheek, chin and jaw filler treatments cost?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Costs vary depending mostly on the type of dermal filler
                        used, the area of the face to be filled and the degree
                        of filling required.
                      </p>
                      <p>
                        Generally, prices for dermal fillers are based upon the
                        estimated number of syringes needed to obtain the
                        required result.
                        <a href="../../../blog/a-guide-to-the-quantities-of-filler/">
                          Most fillers come in 1ml syringes
                        </a>
                        .
                      </p>
                      <p>
                        In addition, different filler brands such
                        as&nbsp;Restylane®, Perlane®, Radiesse®&nbsp;and
                        Juvederm® differ in price depending on the clinic and/or
                        practitioner.
                      </p>
                      <p>
                        Hence, overall prices may vary from £200 to over £500
                        per treatment session, depending on how many lines you
                        are getting treated.
                      </p>
                      <p>
                        Your treatment may require more than one syringe to
                        provide optimal results. Your practitioner should be
                        clear about the overall costs of the treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="padding-top-4 padding-bottom-4">
          <div className="container">
            <div className="blog-grid row--middle column--relative">
              <div className="row--middle column--relative overflowSlider row--no-wrap filter-gradient blog-grid" />
            </div>
          </div>
        </section>
        <section className="padding-top-4 padding-bottom-4 section__charcoal">
          <div className="container">
            <div className="row">
              <div className="column null">
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Glowday Disclaimer</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        All information in our Glowday Treatment Guides and blog
                        articles is intended for reference and information. The
                        information given here is to help you make informed
                        decisions when considering the wide range of
                        non-surgical aesthetic treatments available.
                      </p>
                      <p>
                        It is NOT intended as medical advice. Any reliance
                        placed by you on the information contained within the
                        Glowday Treatment Guides, Glowday blog articles or on
                        any of Glowday.com is done by you at your own risk.
                      </p>
                      <p>
                        Before undergoing any non-surgical cosmetic treatment
                        mentioned anywhere on Glowday.com, you should fully
                        consult with an appropriately qualified and accredited
                        practitioner who is properly trained in and fully
                        insured to conduct the treatment you are interested in.
                        Neither the author of the guides or blog articles, or
                        the practitioner who has verified the guides nor Glowery
                        Limited can be held responsible or liable for any loss
                        or claim arising from the use or misuse of the content
                        of Glowday.com.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <a href="#at-a-glance" className="sr-only">
          Back to top
        </a>
      </div>
    </main>
  )
}

export default CheekChin
