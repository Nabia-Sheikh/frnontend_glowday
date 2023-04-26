import React from 'react'
import { Link } from "react-router-dom"

const TearTrough = () => {
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
                    <a href>Tear Trough Fillers </a>
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
                <h1 className="text-left">Tear Trough Fillers</h1>
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
                          1 treatment
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
                          1 treatment
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
                          12 - 24 months
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
                          12 - 24 months
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
                          Numbing cream or local anaesthetic
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
                          Numbing cream or local anaesthetic
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
                        <h4 className="glance-card__description">30 - 60min</h4>
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
                        <h4 className="glance-card__description">30 - 60min</h4>
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
                <a href="#tear-trough-fillers-overview">
                  Tear Trough Fillers Overview
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-tear-trough-fillers-work">
                  How do tear trough fillers work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-tear-trough-fillers-used-to-treat">
                  What are tear trough fillers used to treat?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-should-i-prepare-for-tear-trough-fillers">
                  How should I prepare for tear trough fillers?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-happens-during-a-tear-trough-filler-treatment">
                  What happens during a tear trough filler treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-happens-after-a-tear-trough-filler-treatment">
                  What happens after a tear trough filler treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-tear-trough-fillers">
                  What are the side effects and risks of tear trough fillers?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-do-tear-trough-fillers-cost">
                  How much do tear trough fillers cost?
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
                data-name="tear-trough-fillers-overview"
                id="tear-trough-fillers-overview"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Tear Trough Fillers Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        The tear trough area is the space between the lower
                        eyelids and the cheeks. As we age, the loss of
                        subcutaneous fat,
                        <a href="../../../blog/collagen-the-protein-that-keeps-us-looking-young/">
                          collagen
                        </a>
                        and elastin leads to a thinning and hollowing out of
                        this area, resulting in darkening and loose skin.
                      </p>
                      <p>
                        <a href="../../../blog/tear-trough-filler-faqs/">
                          Tear trough fillers
                        </a>
                        , also known as under eye filler, are an increasingly
                        popular non-surgical treatment where strategically
                        placed
                        <a href="../../../blog/hyaluronic-acid-the-magic-moisturising-molecule/">
                          hyaluronic acid
                        </a>
                        fillers replace lost volume, thus improving the undereye
                        shadow and loose skin.
                      </p>
                      <p>
                        The skin beneath the eyes is very delicate and there are
                        important nerves and arteries in that area, so it is
                        imperative that you choose a suitably medically
                        qualified and experienced practitioner to carry out your
                        tear trough fillers.
                      </p>
                      <p>
                        There are over 60 brands of dermal filler available in
                        the UK. Those commonly used are
                        <a href="https://www.restylaneusa.com/restylane-lyft">
                          Restylane Lyft
                        </a>
                        ®,
                        <a href="https://www.juvederm.com/treatment/cheek-fillers">
                          Juvéderm Voluma
                        </a>
                        ® <a href="https://www.belotero.com">Belotero</a>® and
                        <a href="https://www.teoxane.com/dermal-fillers/teosyalr-products">
                          Teosyal Redensity
                        </a>
                        ®. These are all hyaluronic acid-based fillers which
                        will last 6-12+ months.
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
                        need for a separate nerve block or topical anaesthesia.
                      </p>
                      <p>
                        However, practitioners want you to feel as comfortable
                        as possible, so you may be offered a topical numbing
                        cream or a local anaesthetic, depending on the treatment
                        and preference of the practitioner.
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
                data-name="how-do-tear-trough-fillers-work"
                id="how-do-tear-trough-fillers-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do tear trough fillers work?</h2>
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
                        When injected into the skin, filler plumps out wrinkles
                        and lines, instantly filling scars and adding volume and
                        shape where necessary.
                      </p>
                      <p>
                        Tear troughs are notoriously difficult to treat in a
                        natural, subtle way. Filler is injected above the bone,
                        but below the muscle, whilst steering clear of the
                        complex network of arteries and veins in the area. It is
                        imperative that you choose a medically qualified,
                        experienced practitioner to treat you.
                      </p>
                      <p>
                        Ideally, your practitioner should also be able to
                        prescribe medication - a necessity in the unlikely
                        situation where you should need or want your dermal
                        fillers dissolved.
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
                data-name="what-are-tear-trough-fillers-used-to-treat"
                id="what-are-tear-trough-fillers-used-to-treat"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What are tear trough fillers used to treat?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Hyaluronic acid-based fillers can be used on all adults.
                      </p>
                      <p>
                        Tear trough fillers can help address loss of volume,
                        dark circles and crepey skin.
                      </p>
                      <p>
                        You may not be an ideal candidate if you suffer from:
                      </p>
                      <ul>
                        <li>Large (herniated) eye bags</li>
                        <li>Excessively loose skin (festoons)</li>
                        <li>Puffy/swollen eyes</li>
                      </ul>
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
                data-name="how-should-i-prepare-for-tear-trough-fillers"
                id="how-should-i-prepare-for-tear-trough-fillers"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How should I prepare for tear trough fillers?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        In the week before the treatment, avoid taking aspirin,
                        ibuprofen, vitamin E and fish oil supplements.
                      </p>
                      <p>
                        These may increase bleeding and bruising. You can take
                        paracetamol.
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
            data-name="what-happens-during-a-tear-trough-filler-treatment"
            id="what-happens-during-a-tear-trough-filler-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>What happens during a tear trough filler treatment?</h2>
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
                        {/* */}The Tear Trough Treatment
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>Your treatment will take around 30 - 60 minutes.</p>
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
                        {/* */}The Check-Up
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        It is good practice for your practitioner to offer a
                        free check-up, two weeks after your treatment.
                      </p>
                      <p>
                        This allows them to check that the dose they
                        administered was appropriate for the agreed outcome and
                        that you are happy with your treatment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="column column-t-4 column-t-offset-2">
                  <div className="step-definition gray-step cms-content">
                    <p>
                      <strong>
                        Step
                        {/* */}Four{/* */}-{/* */}
                        {/* */}The Repeat Treatment
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        Depending on how quickly you metabolise the filler and
                        which product you were treated with, you will require a
                        repeat treatment 9-12 months after your initial
                        treatment.
                      </p>
                      <p>
                        Your practitioner will advise regarding when you may
                        require a repeat treatment.
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
                data-name="what-happens-after-a-tear-trough-filler-treatment"
                id="what-happens-after-a-tear-trough-filler-treatment"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What happens after a tear trough filler treatment?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        After your treatment, you can go about your normal day.
                        You will likely experience swelling, but results will be
                        immediate. The best results will be visible 2-3 days
                        after your treatment when the swelling has subsided.
                      </p>
                      <p>Post-treatment advice may include:</p>
                      <ul>
                        <li>
                          iced water soaks or ice packs to help to reduce
                          swelling;
                        </li>
                        <li>
                          the use of pain-killers such as paracetamol, if
                          required for a few days after treatment;
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
                        days (oral arnica may help reduce any bruising), but if
                        you continue to experience very painful swelling and
                        bruising, or if any blistering occurs, you should
                        contact your practitioner immediately.
                      </p>
                      <p>
                        Any visual disturbance should should be reported to your
                        practitioner immediately. Similarly, if you experience
                        any delayed reactions such as lumpy redness occurring
                        any time after treatment, you should contact the person
                        who treated you immediately.
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
                data-name="what-are-the-side-effects-and-risks-of-tear-trough-fillers"
                id="what-are-the-side-effects-and-risks-of-tear-trough-fillers"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What are the side effects and risks of tear trough
                      fillers?
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
                        <a href="../../../blog/lip-fillers-faqs/">lips</a>
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
                        signs may take 2-3 days to vanish completely.
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
                        blocked, resulting in partial or complete blindness.
                      </p>
                      <p>
                        <a href="../../../blog/what-to-do-if-fillers-go-wrong/">
                          If you exhibit ANY symptoms of occlusion, you need to
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
                        If you have a history of cold sores or fever blisters in
                        the treated area, filler injections may cause an
                        outbreak. In this case, your practitioner may recommend
                        that you take a course of anti-viral medicine before
                        your treatment to help reduce the likelihood.
                      </p>
                      <p>
                        If you have a known allergy to hyaluronic fillers or any
                        of the ingredients in the filler product, you must
                        inform your practitioner. An alternative treatment will
                        need to be carried out.
                      </p>
                      <p>
                        Dermal fillers have not been tested on pregnant women.
                        <a href="../../../blog/what-non-surgical-treatments-are-safe-during-pregnancy/">
                          No medically qualified practitioner would carry out a
                          filler treatment on a pregnant woman.
                        </a>
                        ​
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
                data-name="how-much-do-tear-trough-fillers-cost"
                id="how-much-do-tear-trough-fillers-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much do tear trough fillers cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Costs vary depending mostly on the type of dermal
                        filler, the area of the face to be filled, the degree of
                        filling required and the expertise of the practitioner.
                      </p>
                      <p>
                        Generally, prices for dermal fillers are based upon the
                        estimated number of syringes needed to obtain the
                        required result. Most fillers come in 1ml syringes. Most
                        clients require up to 0.5ml for each tear trough.
                      </p>
                      <p>
                        In addition, different filler brands such as Teosyal
                        Redensity®,&nbsp;Restylane®, Perlane®,
                        Radiesse®&nbsp;and Juvederm® differ in price depending
                        on the clinic and/or practitioner.
                      </p>
                      <p>
                        Hence, overall prices may vary from £350 to over £500
                        per treatment session.
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

export default TearTrough