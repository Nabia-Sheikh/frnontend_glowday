import React from 'react'
import { Link } from "react-router-dom"

const Rhinoplasty = () => {
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
                    <a href>Liquid Rhinoplasty </a>
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
                <h1 className="text-left">Liquid Rhinoplasty</h1>
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
                          Numbing cream/local anaesthetic
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
                          Numbing cream/local anaesthetic
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
                <a href="#liquid-rhinoplasty-overview">
                  Liquid Rhinoplasty Overview
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-does-a-liquid-nosejob-treatment-work">
                  How does a liquid nosejob treatment work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#who-can-have-liquid-rhinoplasty">
                  Who can have liquid rhinoplasty?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-you-prepare-for-liquid-rhinoplasty">
                  How do you prepare for liquid rhinoplasty?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-happens-during-a-liquid-rhinoplasty-treatment">
                  What happens during a liquid rhinoplasty treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-should-you-do-after-having-liquid-rhinoplasty">
                  What should you do after having liquid rhinoplasty?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-when-having-a-non-surgical-nose-job">
                  What are the side effects and risks when having a non-surgical
                  nose job?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-does-liquid-rhinoplasty-cost">
                  How much does liquid rhinoplasty cost?
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
                data-name="liquid-rhinoplasty-overview"
                id="liquid-rhinoplasty-overview"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Liquid Rhinoplasty Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Liquid rhinoplasty, or
                        <a href="../../../blog/non-surgical-nose-job-faqs/">
                          liquid nose job
                        </a>
                        , is a non-surgical alternative to rhinoplasty (nose
                        job).
                      </p>
                      <p>
                        Strategically placed hyaluronic acid fillers help
                        address nose asymmetry and profile issues such as bumps
                        and droopy tips. Non-surgical rhinoplasty is not
                        suitable for those looking to address uneven nostril
                        size, a deviated septum, broken nose repair or to reduce
                        the size of the nose.
                      </p>
                      <p>
                        The nose has critical arteries running across it, so it
                        is imperative that you choose a suitably medically
                        qualified and experienced practitioner to carry out your
                        <a href="../../../blog/the-magic-of-a-liquid-nosejob/">
                          liquid rhinoplasty
                        </a>
                        .
                      </p>
                      <p>
                        There are over 60 brands of dermal filler available in
                        the UK. The two most commonly used for liquid nose jobs
                        are
                        <a href="https://www.restylaneusa.com/restylane-lyft">
                          Restylane Lyft
                        </a>
                        ® and
                        <a href="https://www.juvederm.com/treatment/cheek-fillers">
                          Juvéderm Voluma
                        </a>
                        ®. These are both hyaluronic acid-based fillers which
                        will last 6-12+ months.
                      </p>
                      <p>
                        There are products available which can dissolve
                        hyaluronic acid fillers, so the effects of these fillers
                        are not only temporary, but they can be reversed if
                        necessary.
                        <a href="../../../blog/what-to-do-if-fillers-go-wrong/">
                          The products to dissolve fillers
                        </a>
                        are prescription medicines and must be performed by an
                        expert.
                      </p>
                      <p>
                        Many dermal filler products&nbsp;are&nbsp;available with
                        the addition of 0.3% lidocaine combined with the
                        <a href="../../../blog/hyaluronic-acid-the-magic-moisturising-molecule/">
                          hyaluronic acid
                        </a>
                        gel in the syringe. This provides an instant relief from
                        pain upon injection and removes the need for a separate
                        nerve block or topical anaesthesia. However,
                        practitioners want you to feel as comfortable as
                        possible, so you will likely be offered a topical
                        numbing cream or a dental block, depending on the
                        treatment and preference of the practitioner.
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
                data-name="how-does-a-liquid-nosejob-treatment-work"
                id="how-does-a-liquid-nosejob-treatment-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How does a liquid nosejob treatment work?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        The leading dermal fillers used by most UK practitioners
                        are hyaluronic acid-based products.
                        <a href="../../../blog/hyaluronic-acid-the-magic-moisturising-molecule/">
                          Hyaluronic acid is a naturally occurring substance
                          within the body
                        </a>
                        , which makes adverse reactions to it unlikely. When
                        injected into the skin, the filler plumps out hollow
                        areas, instantly adding volume and shape where
                        necessary.
                      </p>
                      <p>
                        Medically qualified, experienced practitioners are more
                        able to navigate the complex network of arteries in the
                        nose, taking into consideration anatomical variation
                        between individuals than non-medically qualified
                        practitioners. The safest filler treatments are those
                        administered by experienced, medically qualified
                        practitioners.
                      </p>
                      <p>
                        Your practitioner will tailor the treatment to your
                        specific nose and facial anatomy. The idea is to create
                        a natural looking nose, in keeping with the rest of your
                        face.
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
                data-name="who-can-have-liquid-rhinoplasty"
                id="who-can-have-liquid-rhinoplasty"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Who can have liquid rhinoplasty?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        <a href="../../../blog/feeling-nosy-about-non-surgical-rhinoplasty/">
                          Liquid rhinoplasty can help address nose asymmetry and
                          profile issues
                        </a>
                        such as bumps and droopy tips.
                      </p>
                      <p>
                        Non-surgical rhinoplasty is not suitable for those
                        looking to address uneven nostril size, a deviated
                        septum, broken nose repair or to reduce the size of the
                        nose.
                      </p>
                      <p>
                        As hyaluronic acid-based fillers use a substance already
                        produced by the body, they can be used on all adults.
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
                data-name="how-do-you-prepare-for-liquid-rhinoplasty"
                id="how-do-you-prepare-for-liquid-rhinoplasty"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do you prepare for liquid rhinoplasty?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        In the week before the treatment, avoid taking aspirin,
                        ibuprofen, Vitamin E and fish oil supplements as these
                        may increase bleeding and bruising.
                      </p>
                      <p>You can take paracetamol.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="padding-top-4 padding-bottom-4">
          <div
            data-name="what-happens-during-a-liquid-rhinoplasty-treatment"
            id="what-happens-during-a-liquid-rhinoplasty-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>What happens during a liquid rhinoplasty treatment?</h2>
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
                      to dissolve fillers, hyaluronidase, is.
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
                      <p>Your treatment will take around 15-30 minutes.</p>
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
                    <p>
                      It is good practice for your practitioner to offer a free
                      check-up, two weeks after your treatment. This allows them
                      to check that the dose they administered was appropriate
                      for the agreed outcome.
                    </p>
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
                        repeat treatment 6-24 months after your initial
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
                data-name="what-should-you-do-after-having-liquid-rhinoplasty"
                id="what-should-you-do-after-having-liquid-rhinoplasty"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What should you do after having liquid rhinoplasty?</h2>
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
                          the use of painkillers such as paracetamol, is often
                          not required but may be used if needed for a few days
                          after treatment;
                        </li>
                        <li>
                          arnica (a homeopathic remedy) cream or tablets are
                          sometimes recommended a few days before and a few days
                          after treatment as there is some evidence that this
                          can reduce bruising. Bruising and swelling should go
                          down after a couple of days but can persist for a
                          week.
                        </li>
                      </ul>
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
                      <p>
                        Similarly, if you experience any delayed reactions such
                        as lumpy redness occurring any time after treatment, you
                        should contact the person who treated you immediately.
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
                data-name="what-are-the-side-effects-and-risks-when-having-a-non-surgical-nose-job"
                id="what-are-the-side-effects-and-risks-when-having-a-non-surgical-nose-job"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What are the side effects and risks when having a
                      non-surgical nose job?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Depending on the area being injected, the type of filler
                        and the pain relief method being used, clients may find
                        this procedure uncomfortable to mildly painful. Dermal
                        filler injections around the nose and lips are usually
                        the most painful filler treatments. That said, most
                        clients find filler treatments bearable.
                      </p>
                      <p>
                        You must discuss pain management options with your
                        practitioner and let them know if you are finding the
                        procedure too uncomfortable.
                      </p>
                      <p>
                        The obvious, immediate and
                        <a href="../../../blog/fillers-and-botox-side-effects-and-risks/">
                          most common side effect
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
                        Rarely, occlusions occur. This is where filler is
                        accidentally injected into a blood vessel, where it
                        creates a blockage. This presents as whitening of the
                        skin, followed by the area turning greyish-purple. If
                        left untreated, this can result in tissue loss in the
                        affected area. There have been reports of this in lip
                        and nose treatments.
                      </p>
                      <p>
                        One particular type of occlusion is an ocular occlusion.
                        This is where a blood vessel supplying the eye gets
                        blocked. This results in partial or complete blindness
                      </p>
                      <p>
                        Obviously,
                        <a href="../../../blog/what-to-do-if-fillers-go-wrong/">
                          if you exhibit any symptoms of occlusion, you need to
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
                        in the treated area, filler injections may cause them to
                        break out. In these cases, your practitioner may
                        recommend that you take a course of anti-viral medicine
                        before the treatment to help reduce the likelihood of an
                        outbreak.
                      </p>
                      <p>
                        If you have a known allergy to hyaluronic acid fillers
                        or any of the ingredients in the filler product, you
                        must inform your practitioner. An alternative treatment
                        will need to be carried out.
                      </p>
                      <p>
                        Dermal fillers have not been tested on pregnant women.
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
                data-name="how-much-does-liquid-rhinoplasty-cost"
                id="how-much-does-liquid-rhinoplasty-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much does liquid rhinoplasty cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Costs vary depending mostly on the type of dermal filler
                        used, the area of the face to be filled and the degree
                        of filling to the skin required.
                      </p>
                      <p>
                        Generally, prices for dermal fillers are based upon the
                        estimated number of syringes needed to obtain the
                        required result. Typically, fillers are sold in 1ml
                        syringes, except Radiesse®, which comes in a 1.5ml
                        syringe.
                      </p>
                      <p>
                        In addition, different filler brands such
                        as&nbsp;Restylane®, Perlane®, Radiesse®&nbsp;and
                        Juvederm® differ in price depending on clinic and/or
                        practitioner.
                      </p>
                      <p>
                        Hence, overall prices may vary from £300 to over £550
                        for a liquid rhinoplasty treatment.
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

export default Rhinoplasty