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
                    <a href>Profhilo® </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="banner banner__background-slant--rose-light">
          <div className="banner__image" />
          <div className="banner__content text-center">
            <div className="container">
              <div className="column">
                <h1 className="text-left">Profhilo®</h1>
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
                      src="https://cdn.sanity.io/images/iy559jeo/production/fbc2bbcf1f61edb8ce9521b58eff68a4dfbcd0c9-4200x2805.jpg?rect=698,0,2805,2805&w=138&h=138&auto=format"
                      alt="Roisin Hopkins"
                      width={138}
                      height={138}
                    />
                    <div className="author-details__details">
                      <span className="author-details__label">
                        Verified by:
                      </span>
                      <span className="author-details__name">
                        Roisin Hopkins
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
                <h2>Profhilo® - At a glance</h2>
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
                          2 treatments
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
                          2 treatments
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
                        <h4 className="glance-card__description">6 months</h4>
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
                        <h4 className="glance-card__description">6 months</h4>
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
                        <h4 className="glance-card__description">Immediate</h4>
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
                        <h4 className="glance-card__description">Immediate</h4>
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
                        <h4 className="glance-card__description">None</h4>
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
                        <h4 className="glance-card__description">None</h4>
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
                        <h4 className="glance-card__description">30-60 min</h4>
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
                        <h4 className="glance-card__description">30-60 min</h4>
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
                        <h4 className="glance-card__description">Same day</h4>
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
                <a href="#what-is-profhilo">What is Profhilo®?</a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-does-profhilo-work">How does Profhilo® work?</a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#who-is-profhilo-for">Who is Profhilo® for?</a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-you-prepare-for-profhilo">
                  How do you prepare for Profhilo®?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-happens-during-a-profhilo-treatment">
                  What happens during a Profhilo® treatment
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-happens-after-a-profhilo-treatment">
                  What happens after a Profhilo® treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-profhilo">
                  What are the side effects and risks of Profhilo®?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-does-profhilo-cost">
                  How much does Profhilo® cost?
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
                data-name="what-is-profhilo"
                id="what-is-profhilo"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What is Profhilo®?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Launched in the UK in 2016,
                        <a href="https://ha-derma.co.uk/products/profhilo/">
                          Profhilo
                        </a>
                        ® has been hailed as a revolutionary product for
                        restoring skin lacking in lustre, volume and glow. An
                        injectable skin treatment which produces a refreshed,
                        plumped yet natural and ‘not done’ look, Profhilo® is
                        not used to change the shape of your face, but is an
                        excellent choice if you want to rewind the clock.
                      </p>
                      <p>
                        As we age, particularly after 30, the amount of
                        collagen, fat and elastin in the skin decreases
                        markedly. The result is a loss of volume, the appearance
                        of fine lines and a general dulling of the skin.
                        <a href="../../blog/what-is-profhilo-and-how-does-it-work/">
                          Profhilo® is the perfect rejuvenating treatment to
                          combat these signs of skin ageing.
                        </a>
                        ​
                      </p>
                      <p>
                        Primarily, Profhilo® is used to treat the face, but it
                        can also be used to rejuvenate the neck, décolletage,
                        hands, arms and even knees.
                      </p>
                      <p>
                        The Profhilo® Glowday Treatment Guide has been guest
                        edited and medically verified by
                        <a href="../../blog/guest-editor-roisin-hopkins/">
                          Roisin Hopkins
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
                data-name="how-does-profhilo-work"
                id="how-does-profhilo-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How does Profhilo® work?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Profhilo® is an injectable skin treatment made from
                        highly concentrated, highly purified hyaluronic acid
                        (HA).
                        <a href="../../blog/how-are-profhilo-and-fillers-different/">
                          Far less viscous than hyaluronic acid dermal fillers
                        </a>
                        , Profhilo®’s runnier consistency means that as it is
                        injected into the skin, it spreads within a 2cm radius
                        of the injection site.
                      </p>
                      <p>
                        Profhilo® is injected into 10 specific areas of the
                        face, known as the BAP (bio aesthetic points). 5
                        injections of 0.2ml are administered on each side of the
                        face. The product then spreads under the surface of the
                        skin where it immediately hydrates deep within the skin,
                        due to the hydrophilic (water-loving) properties of the
                        hyaluronic acid.
                      </p>
                      <figure className="lightbox lightbox--transparent lightbox--auto-height">
                        <img
                          className="lazyload"
                          src="https://cdn.sanity.io/images/iy559jeo/production/7d5147eda3586d6a40b36288407bf62c4f02c814-2481x1364.png?w=768&fit=max&auto=format"
                          loading="lazy"
                          decoding="async"
                          width={768}
                          height={432}
                          alt
                        />
                      </figure>
                      <p>
                        Profhilo® also acts as a ‘
                        <strong>bio-remodeller’</strong>. It gets broken down
                        after around 28 days, but prior to breaking down, it
                        stimulates significant
                        <a href="../../blog/collagen-the-protein-that-keeps-us-looking-young/">
                          collagen
                        </a>
                        and elastin synthesis, resulting in plumper, tighter,
                        smoother, more supple skin.
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
                data-name="who-is-profhilo-for"
                id="who-is-profhilo-for"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Who is Profhilo® for?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        <a href="https://ha-derma.co.uk/products/profhilo/">
                          Profhilo
                        </a>
                        ® is recommended for adults who feel their skin has
                        begun to sag, lose overall volume and fullness.
                        Profhilo® can be used on the face, neck, décolletage,
                        hands, arms and knees to refresh and rejuvenate skin.
                      </p>
                      <p>
                        Profhilo® is not suitable for those who are wanting to
                        replace lost volume in specific parts of their face, or
                        those who want to alter the shape of their face or
                        features.
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
                data-name="how-do-you-prepare-for-profhilo"
                id="how-do-you-prepare-for-profhilo"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do you prepare for Profhilo®?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        As with any injectable treatments, avoid NSAIDS, fish
                        oils and alcohol prior to your treatment. Other than
                        this, you do not need to take any particular steps in
                        preparation for your
                        <a href="https://ha-derma.co.uk/products/profhilo/">
                          Profhilo
                        </a>
                        ® treatment.
                      </p>
                      <p>
                        You may wish to take any makeup off, however, your
                        practitioner will ensure that your skin is appropriately
                        prepared prior to your treatment.
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
            data-name="what-happens-during-a-profhilo-treatment"
            id="what-happens-during-a-profhilo-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>What happens during a Profhilo® treatment?</h2>
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
                      It is important to understand that, whilst Profhilo® is
                      not prescription only medicine, the anatomy of the face is
                      complex, so it is advisable that you only allow medically
                      qualified practitioners to carry out Profhilo® treatments.
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
                    <p>
                      Your practitioner will remove any makeup from your face
                      and use a sterile wipe/solution to prepare the area to be
                      treated.
                    </p>
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
                        {/* */}The Second Treatment
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        4 weeks later, you will return to the clinic for the
                        same treatment. You will see the best results about 4
                        weeks after this second sitting.
                      </p>
                      <p>
                        In order to maintain results, it is recommended that you
                        have Profhilo® every 6 months.
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
                data-name="what-happens-after-a-profhilo-treatment"
                id="what-happens-after-a-profhilo-treatment"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What happens after a Profhilo® treatment?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        <strong>Do:</strong>
                      </p>
                      <ul>
                        <li>Keep hydrated</li>
                        <li>Avoid sun exposure, alcohol and cigarettes</li>
                      </ul>
                      <p />
                      <p>
                        <strong>Don’t:</strong>
                      </p>
                      <ul>
                        <li>Use make up for 24-48 hours after treatment</li>
                        <li>
                          Do strenuous exercise for 24 hours - sweating can
                          enable bacteria to enter the channels created during
                          the treatment
                        </li>
                        <li>
                          Take hot showers or baths, or use saunas for 48 hours
                          after your treatment
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
                data-name="what-are-the-side-effects-and-risks-of-profhilo"
                id="what-are-the-side-effects-and-risks-of-profhilo"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What are the side effects and risks of Profhilo®?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Millions of
                        <a href="https://ha-derma.co.uk/products/profhilo/">
                          Profhilo
                        </a>
                        ® treatments have been carried out worldwide with no
                        serious side effects being reported.
                      </p>
                      <p>
                        You may experience minor bruising and swelling at the
                        injections for site for about 24 hours.
                      </p>
                      <p>
                        Profhilo® is not suitable for those with blood disorders
                        or those who are immunocompromised. Additionally, it is
                        not suitable for pregnant or breastfeeding women.
                      </p>
                      <p>
                        Those with active skin infections are also advised to
                        wait until infections have cleared.
                      </p>
                      <p>
                        Obviously, Profhilo® is not suitable for those with a
                        hyaluronic acid allergy.
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
                data-name="how-much-does-profhilo-cost"
                id="how-much-does-profhilo-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much does Profhilo® cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <p>Expect to pay £300 - £500 per Profhilo® treatment</p>
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

export default index