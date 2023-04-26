import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <main id="main_content">
      <div className="margin-top-1">
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="column">
                <ul>
                  <li className>
                    <Link to="/">Home</Link>
                  </li>
                  <li className>
                    <Link to="/guide">guides</Link>
                  </li>
                  <li className="active">
                    <a href>Thread Lifts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="banner banner__background-slant--ivory-light">
          <div className="banner__image" />
          <div className="banner__content text-center">
            <div className="container">
              <div className="column">
                <h1 className="text-left">Thread Lifts</h1>
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
                      src="https://cdn.sanity.io/images/iy559jeo/production/bcab3769cef9e8ca5c02e9547de5f683756f4951-3337x5000.jpg?rect=0,0,3337,3337&w=138&h=138&auto=format"
                      alt="Dr Nestor Demosthenous"
                      width={138}
                      height={138}
                    />
                    <div className="author-details__details">
                      <span className="author-details__label">
                        Verified by:
                      </span>
                      <span className="author-details__name">
                        Dr Nestor Demosthenous
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
                          src="../../static/img/icons/charcoal-dark/calendar.svg"
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
                          src="../../static/img/icons/white/calendar.svg"
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
                          1 - 2 years
                        </h4>
                        <img
                          src="../../static/img/icons/charcoal-dark/hourglass.svg"
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
                          src="../../static/img/icons/white/hourglass.svg"
                          className="glance-card__icon"
                          alt="Duration of Results"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">
                          Duration of Results
                        </h3>
                        <h4 className="glance-card__description">
                          1 - 2 years
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
                          2 - 4 weeks
                        </h4>
                        <img
                          src="../../static/img/icons/charcoal-dark/recovery.svg"
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
                          src="../../static/img/icons/white/recovery.svg"
                          className="glance-card__icon"
                          alt="Treatment recovery"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">
                          Treatment recovery
                        </h3>
                        <h4 className="glance-card__description">
                          2 - 4 weeks
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
                        <h4 className="glance-card__description">Low</h4>
                        <img
                          src="../../static/img/icons/charcoal-dark/complication.svg"
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
                          src="../../static/img/icons/white/complication.svg"
                          className="glance-card__icon"
                          alt="Risks & complications"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">
                          Risks &amp; complications
                        </h3>
                        <h4 className="glance-card__description">Low</h4>
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
                          Local anaesthetic
                        </h4>
                        <img
                          src="../../static/img/icons/charcoal-dark/syringe.svg"
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
                          src="../../static/img/icons/white/syringe.svg"
                          className="glance-card__icon"
                          alt="Anaesthetic"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">Anaesthetic</h3>
                        <h4 className="glance-card__description">
                          Local anaesthetic
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
                          1 - 2 hours
                        </h4>
                        <img
                          src="../../static/img/icons/charcoal-dark/stopwatch.svg"
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
                          src="../../static/img/icons/white/stopwatch.svg"
                          className="glance-card__icon"
                          alt="Procedure time"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">Procedure time</h3>
                        <h4 className="glance-card__description">
                          1 - 2 hours
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
                          src="../../static/img/icons/charcoal-dark/doctor.svg"
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
                          src="../../static/img/icons/white/doctor.svg"
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
                        <h4 className="glance-card__description">
                          24 - 48 hours
                        </h4>
                        <img
                          src="../../static/img/icons/charcoal-dark/briefcase.svg"
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
                          src="../../static/img/icons/white/briefcase.svg"
                          className="glance-card__icon"
                          alt="Back to work"
                          width={80}
                          height={80}
                        />
                        <h3 className="glance-card__title">Back to work</h3>
                        <h4 className="glance-card__description">
                          24 - 48 hours
                        </h4>
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
                <a href="#thread-lifts-overview">Thread lifts Overview</a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-thread-lifts-work">
                  How do thread lifts work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#who-are-thread-lifts-for">
                  Who are thread lifts for?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-should-i-prepare-for-a-thread-lift-treatment">
                  How should I prepare for a thread lift treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-happens-during-a-thread-lift-treatment">
                  What happens during a thread lift treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-happens-after-a-thread-lift-treatment">
                  What happens after a thread lift treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-thread-lifts">
                  What are the side effects and risks of thread lifts?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-do-thread-lifts-cost">
                  How much do thread lifts cost?
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
                data-name="thread-lifts-overview"
                id="thread-lifts-overview"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Thread Lifts Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Often termed
                        <a href="../../blog/thread-lifts-the-lunchtime-facelift-explained/">
                          the ‘lunchtime facelift’
                        </a>
                        , thread lifts are a relatively new, non-surgical
                        procedure that are a great alternative to the
                        traditional facelift. Whilst they don’t give the same
                        dramatic effect as a facelift (as they can only lift the
                        face a few millimetres) the results are noticeable,
                        immediate, reasonably long-lasting and can delay the
                        need for a surgical facelift. They are also a good
                        compromise for those who are reluctant to ‘go under the
                        knife’ and want a subtle improvement.
                      </p>
                      <p>
                        Thread lifts are used to treat general signs of ageing,
                        such as
                        <a href="../../blog/saggy-skin-we-have-lift-off/">
                          sagging skin
                        </a>
                        as a result of the deflation of underlying tissue. This
                        leads to jowl formation, deepened nasolabial folds and
                        more prominent marionette lines. The treatment is ideal
                        for those in their late
                        <a href="../../blog/the-effects-of-ageing-on-the-skin/">
                          30s to 60s
                        </a>
                        who are bothered by skin laxity and sagging.
                      </p>
                      <p>Popular brands of threads include:</p>
                      <ul>
                        <li>
                          <a href="https://silhouette-soft.com">
                            Silhouette Soft®
                          </a>
                          (which offers a mechanical lift and biological
                          stimulation of collagen production)
                        </li>
                        <li>
                          <a href="https://www.aptos.global">APTOS</a>®
                        </li>
                        <li>
                          Contour Lift<sup>TM</sup>
                        </li>
                        <li>
                          Silk Lift<sup>TM</sup>
                        </li>
                        <li>
                          Feather Lift<sup>TM</sup>
                        </li>
                      </ul>
                      <p>
                        <sup />
                      </p>
                      <p>
                        Thread lifts have a double restorative effect. Not only
                        do they instantly lift the skin, moving it into a more
                        youthful position, they also stimulate cell renewal and
                        <a href="../../blog/collagen-the-protein-that-keeps-us-looking-young/">
                          collagen
                        </a>
                        production in the treated area.
                      </p>
                      <p>
                        Carried out in under an hour and allowing you to return
                        to a fairly standard daily routine, thread lifts don’t
                        come with the same level of downtime as surgical
                        facelifts.
                      </p>
                      <p>
                        This Glowday Treatment Guide has been guest edited and
                        medically verified by
                        <a href="../../blog/guest-editor-dr-nestor-demosthenous/">
                          Dr Nestor
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
                data-name="how-do-thread-lifts-work"
                id="how-do-thread-lifts-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do thread lifts work?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Poly-L-lactic acid (PLLA), Poly Lactic-co-Glycolic acid
                        (PLGA) and Polydioxanone (PDO) threads are surgical
                        sutures which are resorbable. This means that, over
                        time, they break down and are absorbed by the body, so
                        their effects are temporary (1 – 3 years) and risk of
                        reaction, downtime and infection are reduced compared to
                        a surgical facelift. As they are breaking down, they
                        stimulate collagen production.
                      </p>
                      <p>
                        The threads/sutures are placed beneath the skin, into
                        the underlying fat layer about 5mm underneath the
                        surface of the skin. The threads are then gently pulled
                        to achieve the desired lift and tightening effect. Once
                        in place, the threads are then trimmed.
                      </p>
                      <p>
                        Not only do the threads physically lift and reposition
                        sagging skin, the controlled trauma they cause leads to
                        additional collagen synthesis in the treated area,
                        further increasing the rejuvenating effects of the
                        thread lift.
                      </p>
                      <figure className="lightbox lightbox--transparent lightbox--auto-height">
                        <img
                          className="lazyload"
                          src="https://cdn.sanity.io/images/iy559jeo/production/dbe0d9e076199c7dc7f5909a6b9b272f8950962c-3895x2283.png?w=768&fit=max&auto=format"
                          loading="lazy"
                          decoding="async"
                          width={768}
                          height={432}
                          alt
                        />
                      </figure>
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
                data-name="who-are-thread-lifts-for"
                id="who-are-thread-lifts-for"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Who are thread lifts for?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Thread lifts are typically advised for those who have
                        general signs of ageing, such as hollow or mildly
                        <a href="../../blog/the-midface-sag-fillers-for-midface-rejuvenation/">
                          sagging cheeks
                        </a>
                        , jowls and loss of contour and definition.
                      </p>
                      <p>
                        They are often used as a way of delaying a surgical
                        facelift or for those who want a subtle improvement.
                        Most candidates are in their late 30s to 60s.
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
                data-name="how-should-i-prepare-for-a-thread-lift-treatment"
                id="how-should-i-prepare-for-a-thread-lift-treatment"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How should I prepare for a thread lift treatment?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        You should avoid the following 48 hours prior to your
                        treatment:
                      </p>
                      <ul>
                        <li>Alcohol</li>
                        <li>Aspirin</li>
                        <li>Ibuprofen</li>
                        <li>St John’s wort</li>
                        <li>Fish oils</li>
                      </ul>
                      <p />
                      <p>
                        To help prevent bruising, you may be advised to take a
                        10-day course of arnica tablets prior to your treatment.
                      </p>
                      <p>
                        Additionally, since vitamin C assists collagen
                        production, taking a high-quality vitamin C tablet may
                        be advised.
                      </p>
                      <p>
                        It is a good idea to arrive at your appointment with
                        thoroughly cleansed skin.
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
            data-name="what-happens-during-a-thread-lift-treatment"
            id="what-happens-during-a-thread-lift-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>What happens during a thread lift treatment?</h2>
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
                      It is important to understand that thread lift procedures
                      should only be carried out by medically trained
                      professionals. Your consultation and treatment should not
                      be on the same day (unless you have discussed it over the
                      phone with your medical professional). This will allow you
                      time to consider everything that was covered in your
                      consultation, including the risks, and allow a 'cooling
                      off' period.
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
                        {/* */}The Thread lift Treatment
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        Your practitioner may apply a topical numbing cream as
                        well as injecting a local anaesthetic into the area to
                        be treated.
                      </p>
                      <p>
                        Threads are placed into the fat layer of the skin, 5mm
                        beneath the surface, using a needle or cannula.
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
                        {/* */}The Check up
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        It is advisable to book a check-up with your
                        practitioner 2 weeks following your treatment.
                      </p>
                      <p>
                        If you have any concerns prior to this appointment,
                        contact your practitioner.
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
                data-name="what-happens-after-a-thread-lift-treatment"
                id="what-happens-after-a-thread-lift-treatment"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What happens after a thread lift treatment?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        <strong>Do:</strong>
                      </p>
                      <ul>
                        <li>Sleep on your back for about 2-4 weeks</li>
                        <li>Keep hydrated</li>
                        <li>
                          Use over the counter pain medication as necessary
                          (avoid ibuprofen as it promotes bleeding and therefore
                          bruising)
                        </li>
                        <li>Ice any swelling</li>
                        <li>Avoid sun exposure, alcohol and cigarettes</li>
                        <li>
                          Keep the area very clean until the small holes close
                          over (72 hours)
                        </li>
                      </ul>
                      <p />
                      <p>
                        <strong>Don’t:</strong>
                      </p>
                      <ul>
                        <li>
                          Touch the treated area for at least 4 hours after your
                          treatment
                        </li>
                        <li>Use make up for 24-48 hours after treatment</li>
                        <li>Sleep on the treated area for at least 3 days</li>
                        <li>Do strenuous exercise for 14-28 days</li>
                        <li>
                          Plan any laser treatments during the month following
                          your treatment
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
                data-name="what-are-the-side-effects-and-risks-of-thread-lifts"
                id="what-are-the-side-effects-and-risks-of-thread-lifts"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What are the side effects and risks of thread lifts?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Following a thread lift treatment, you will likely
                        experience mild bruising, swelling, some muscle weakness
                        and soreness for a week or two. You may also feel a
                        tightening sensation around the threads. This can be
                        managed with arnica and over the counter pain
                        medication.
                      </p>
                      <p>
                        Rarely, infection, nerve injuries and migration of
                        threads have been reported.
                      </p>
                      <p>
                        Additionally, some people may experience contour
                        irregularities, scarring and skin dimpling.
                      </p>
                      <p>
                        Thread lift procedures should only be carried out by
                        medically qualified practitioners, thus reducing the
                        chance of these rare side effects.
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
                data-name="how-much-do-thread-lifts-cost"
                id="how-much-do-thread-lifts-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much do thread lifts cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>Thread lifts are charged per thread.</p>
                      <p>You can expect to pay the following:</p>
                      <ul>
                        <li>1 thread £500</li>
                        <li>2 threads £950</li>
                        <li>3 threads £1400</li>
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

export default index