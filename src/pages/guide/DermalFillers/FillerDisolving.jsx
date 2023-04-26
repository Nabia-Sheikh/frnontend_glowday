import React from 'react'
import { Link } from "react-router-dom"

const FillerDisolving = () => {
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
                    <a href>Filler Dissolving Treatment</a>
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
                <h1 className="text-left">Filler Dissolving Treatment</h1>
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
                      src="https://cdn.sanity.io/images/iy559jeo/production/4f93025eeb1b191bbdcbf4d5287d353ef69241ce-1333x2000.jpg?rect=0,14,1325,1325&w=138&h=138&auto=format"
                      alt="Dr Charlotte D'Souza"
                      width={138}
                      height={138}
                    />
                    <div className="author-details__details">
                      <span className="author-details__label">
                        Verified by:
                      </span>
                      <span className="author-details__name">
                        Dr Charlotte D'Souza
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
                <h2>Filler Dissolving Treatments - At A Glance</h2>
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
                        <h4 className="glance-card__description">Permanent</h4>
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
                        <h4 className="glance-card__description">Permanent</h4>
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
                        <h4 className="glance-card__description">3-4 hours</h4>
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
                        <h4 className="glance-card__description">3-4 hours</h4>
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
                          Numbing cream / local anaesthetic
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
                          Numbing cream / local anaesthetic
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
                        <h4 className="glance-card__description">60+ min</h4>
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
                        <h4 className="glance-card__description">60+ min</h4>
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
                <a href="#filler-dissolving-overview">
                  Filler Dissolving Overview
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-filler-dissolving-treatments-work">
                  How do filler dissolving treatments work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#who-can-have-fillers-dissolving">
                  Who can have filler dissolving?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-you-prepare-for-a-filler-dissolving-treatment">
                  How do you prepare for a filler dissolving treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-happens-during-a-filler-dissolving-treatment">
                  What happens during a filler dissolving treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-happens-after-a-filler-dissolving-treatment">
                  What happens after a filler dissolving treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-filler-dissolving">
                  What are the side effects and risks of filler dissolving?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-do-filler-dissolving-cost">
                  How much does filler dissolving cost?
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
                data-name="filler-dissolving-overview"
                id="filler-dissolving-overview"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Filler Dissolving Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Celebrity culture has both popularised and demonised
                        fillers, and many people now mistakenly associate
                        fillers with overly plumped, pillowy faces, ‘
                        <a href="../../../blog/how-to-avoid-the-trout-pout/">
                          trout pouts
                        </a>
                        ’ and ‘duck lips’. There is no denying the impact the
                        Kardashian’s have had on the use of dermal fillers.
                      </p>
                      <p>
                        If you have had filler treatments and are no longer
                        happy with how they look. Or you have been to a
                        practitioner who was maybe not so adequately trained and
                        you have lumps of nodules, or filler migration, you may
                        wish to dissolve your filler.
                      </p>
                      <p>
                        In the correct, highly-skilled, highly-qualified hands,
                        this can be done using an enzyme called
                        <strong>hyaluronidase</strong>,<strong> </strong>or
                        <strong>Hyalase</strong>, which is a prescription-only
                        medicine. This enzyme is injected where the filler has
                        been placed and dissolves it, leaving the area free of
                        hyaluronic acid filler.
                      </p>
                      <p>
                        If you wish to have the area re-filled, you would need
                        to wait at least two weeks before having further filler
                        placed in the area treated with hyaluronidase.
                      </p>
                      <p>
                        Hyalase/hyaluronidase is a prescription-only medicine.
                        The potential side-effects and risks of filler
                        dissolving treatments can be significant. It is
                        important that you see a medical practitioner for filler
                        dissolving treatments.
                      </p>
                      <p>This only works for hyaluronic acid-based fillers.</p>
                      <p>
                        This Glowday Treatment Guide has been edited and
                        medically verified by Dr Charlotte D'Souza.
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
                data-name="how-do-filler-dissolving-treatments-work"
                id="how-do-filler-dissolving-treatments-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do filler dissolving treatments work?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Most dermal fillers used in the UK contain hyaluronic
                        acid. When injected into the skin, hyaluronic acid's
                        hydrophilic (water-loving) tendencies, cause it to
                        attract water, instantly filling out wrinkles and scars
                        and adding volume, shape and definition where necessary.
                      </p>
                      <p>
                        <a href="../../../blog/hyaluronic-acid-the-magic-moisturising-molecule/">
                          Hyaluronic acid is a naturally occurring substance
                          within the body
                        </a>
                        , which makes adverse reactions to it unlikely.
                      </p>
                      <p>
                        Fortunately, it can also be dissolved using an enzyme
                        called <strong>hyaluronidase</strong>. This is a
                        prescription-only medicine that can be injected into the
                        area filler has been placed, dissolving any filler in
                        that area.
                      </p>
                      <p>
                        This means that if you have had filler treatments and
                        are not happy with the outcome, because you aren't keen
                        on the aesthetic, or have lumps or nodules, the
                        treatment can be reversed.
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
                data-name="who-can-have-filler-dissolving-treatments"
                id="who-can-have-filler-dissolving-treatments"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Who can have filler dissolving treatments?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <p>
                      Filler dissolving treatments are suitable for all adults,
                      regardless of race and gender, who have had hyaluronic
                      acid-based fillers, unless you are allergic to
                      hyaluronidase/Hyalase.
                    </p>
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
                data-name="how-do-you-prepare-for-a-filler-dissolving-treatment"
                id="how-do-you-prepare-for-a-filler-dissolving-treatment"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      How do you prepare for a filler dissolving treatment?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        In the week before the treatment, avoid taking aspirin
                        (unless prescribed by a doctor), ibuprofen, vitamin E
                        and C, and fish oil supplements. These may increase
                        bleeding and bruising. You can take paracetamol.
                      </p>
                      <p>
                        You must inform your practitioner of any prescription
                        medication you are taking.
                      </p>
                      <p>
                        Don't have any anti-wrinkle injections 48 hours before
                        or 48 hours after filler dissolving treatments.
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
            data-name="what-happens-during-a-filler-dissolving-treatment"
            id="what-happens-during-a-filler-dissolving-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>What happens during a filler dissolving treatment?</h2>
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
                      filler treatments and filler dissolving treatments.
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
                      <p>
                        Your treatment will take about an hour, possibly longer.
                      </p>
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
                        Depending on whether the existing filler has been
                        completely dissolved, you may need an additional
                        dissolving treatment.
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
                data-name="what-happens-after-a-filler-dissolving-treatment"
                id="what-happens-after-a-filler-dissolving-treatment"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What happens after a filler dissolving treatment?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        After your treatment, you can go about your normal day.
                        Bruising and swelling is common post-treatment, but
                        these effects are temporary.
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
                            itching, pain, inflammation or skin colour changes,
                            you should contact your practitioner immediately.
                          </em>
                        </strong>
                      </p>
                      <p />
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
                data-name="what-are-the-side-effects-and-risks-of-dissolving-fillers"
                id="what-are-the-side-effects-and-risks-of-dissolving-fillers"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What are the side effects and risks of dissolving fillers?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Depending on the area being injected, the type of filler
                        being used and the pain relief method being used,
                        clients may find this procedure relatively painless to
                        uncomfortable. Treatments around the nose, lips and tear
                        trough area (under the eyes) are usually more painful
                        than other areas but most clients find filler dissolving
                        treatments as bearable as the initial filler treatment.
                      </p>
                      <p>
                        You must discuss pain management options with your
                        practitioner and let them know if you are finding the
                        procedure too uncomfortable.
                      </p>
                      <p>
                        The obvious, immediate and most common side effect is
                        slight bleeding after the needle has been inserted into
                        the skin.
                      </p>
                      <p>
                        Other risks include bruising, tenderness, redness and
                        swelling around the injection site. These signs may take
                        2-7 days to vanish completely, especially around the
                        lips where there is little flesh and skin is tender.
                      </p>
                      <p>
                        Hyalase (hyaluronidase) breaks down hyaluronic acid
                        fillers, but it can also break down naturally occurring
                        hyaluronic acid present in the body, so the results can
                        be unpredictable and the effect dramatic.
                      </p>
                      <p>
                        There may well be loss of volume and some skin laxity
                        which in itself may not provide a good aesthetic result.
                        This often corrects itself as your own hyaluronic acid
                        is regenerated 2-3 months later.
                      </p>
                      <p>
                        Rarely, allergic type reactions can occur after a filler
                        dissolving treatment. In very rare cases, these can be
                        severe or even fatal if not quickly and adequately
                        treated. Signs of an allergic reaction include prolonged
                        redness, swelling, itching and/or hardness, bumps in the
                        skin. Such signs may appear at some or all injection
                        points or in the general area the hyaluronidase has been
                        injected. If you have allergic-type reactions to bee and
                        wasp stings, you are more likely to have a reaction to
                        hyaluronidase.
                      </p>
                      <p>
                        If you experience difficulty breathing, it is indicative
                        of an anaphylactic reaction and you should seek medical
                        help immediately.
                      </p>
                      <p>
                        As with any skin treatment, injections should be avoided
                        in areas where the skin is swollen or where infections
                        are present - e.g. active acne. Medically-qualified
                        practitioners will be able to advise on treatments to
                        manage such conditions prior to any filler dissolving
                        treatments.
                      </p>
                      <p>
                        If you have a history of cold sores, or fever blisters
                        in the treated area, injections may result in break
                        outs. In this case, your practitioner may recommend that
                        you take a course of anti-viral medicine before
                        treatment.
                      </p>
                      <p>
                        No medical practitioner would carry out a filler
                        dissolve treatment on a pregnant woman.
                      </p>
                      <p>
                        You should wait at least 2 weeks before undergoing any
                        new dermal filler treatments. This is to ensure that any
                        swelling and bruising has subsided. Also, if you have
                        treatments too soon, hyaluronidase will dissolve your
                        new filler too.
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
                data-name="how-much-do-filler-dissolving-treatments-cost"
                id="how-much-do-filler-dissolving-treatments-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much do filler dissolving treatments cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Costs vary depending mostly on the amount of
                        hyaluronidase used and the number of treatments needed
                        to dissolve the filler.
                      </p>
                      <p>
                        Hence, overall prices start at £200 per treatment
                        session.
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

export default FillerDisolving