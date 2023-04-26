import React from "react"
import { Link } from "react-router-dom"

const MediumDepthPeels = () => {
  return (
    <main id="main_content">
      <div classname="margin-top-1">
        <div className="breadcrumbs margin-top-1">
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
                    <Link to="/chemicalPeels">Chemical Peels </Link>
                  </li>
                  <li className="active">
                    <a href>Medium-Depth Peels</a>
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
                <h1 className="text-left">Medium-Depth Peels</h1>
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
                          6 + treatments
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
                          6 + treatments
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
                          4 - 6 weeks
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
                          4 - 6 weeks
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
                          7 - 10 days
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
                          7 - 10 days
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
                        <h4 className="glance-card__description">None</h4>
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
                        <h4 className="glance-card__description">30 min</h4>
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
                        <h4 className="glance-card__description">30 min</h4>
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
                        <h4 className="glance-card__description">Next day</h4>
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
                        <h4 className="glance-card__description">Next day</h4>
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
                <a href="#medium-depth-peels-overview">
                  Medium Depth Peels Overview
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-medium-depth-chemical-peels-work">
                  How do medium depth chemical peels work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#who-are-medium-depth-chemical-peels-good-for">
                  Who are medium depth chemical peels good for?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-you-prepare-for-a-medium-depth-chemical-peel">
                  How do you prepare for a medium depth chemical peel?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-happens-during-a-medium-depth-chemical-peel-treatment">
                  What happens during a medium depth chemical peel treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-happens-after-a-medium-depth-chemical-peel">
                  What happens after a medium depth chemical peel?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-medium-depth-chemical-peels">
                  What are the side effects and risks of medium depth chemical
                  peels?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-do-medium-depth-chemical-peels-cost">
                  How much do medium depth chemical peels cost?
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
                data-name="medium-depth-peels-overview"
                id="medium-depth-peels-overview"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Medium-Depth Peels Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        We are all familiar with mechanical exfoliation: using
                        facial scrubs, mitts and facial cleansing brushes to
                        exfoliate the skin.
                      </p>
                      <p>
                        Proper, regular exfoliation removes the barrier of dead
                        skin cells on the surface of the skin, uncovering the
                        fresh, new cells beneath. This also clears the way for
                        skincare products to penetrate more deeply into the
                        skin, making them more effective.
                      </p>
                      <p>
                        Chemical peels are also a way of deeply, chemically
                        exfoliating the skin. This is sometimes called
                        chemiexfoliation and it reveals smoother, softer, more
                        even skin.
                      </p>
                      <p>
                        <a href="../../../blog/which-chemicals-are-used-in-chemical-peels/">
                          Chemical peels typically contain acids of varying
                          strengths and types
                        </a>
                        , which remove the dead, dull, outer layers of skin. The
                        depth of the peel depends on the strength and type of
                        acid used.
                      </p>
                      <figure className="lightbox lightbox--transparent lightbox--auto-height">
                        <img
                          className="lazyload"
                          src="https://cdn.sanity.io/images/iy559jeo/production/6944871f62b71fb24b8ebc805781d837a1b12311-1371x507.png?w=768&fit=max&auto=format"
                          loading="lazy"
                          decoding="async"
                          width={768}
                          height={432}
                          alt
                        />
                      </figure>
                      <p>
                        Deep peels remove the epidermis and the upper dermis. As
                        these are deeper peels, the results are more dramatic
                        and longer lasting.
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
                data-name="how-do-medium-depth-chemical-peels-work"
                id="how-do-medium-depth-chemical-peels-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do medium-depth chemical peels work?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        During medium-depth chemical peels, acids are used to
                        create an intentional, controlled injury to a specific
                        skin depth.
                      </p>
                      <p>
                        The acid breaks the chemical bonds which hold the skin
                        cells together, causing them to peel off. The acids used
                        in medium-depth peels are able to penetrate the
                        epidermis and a proportion of the dermis.
                      </p>
                      <p>
                        The aim is to deeply exfoliate the skin which, in turn,
                        stimulates new epidermal and dermal growth, increased
                        collagen production and more evenly distributed melanin.
                        The new skin that grows has improved surface texture and
                        appearance.
                      </p>
                      <p>
                        Medium -depth peels are usually carried out using
                        trichloroacetic acid (TCA) at concentrations between 35%
                        and 50%. Other acids are sometimes used, including:
                        glycolic, pyruvic and salicylic acid, as well as
                        Jessner’s solution, which is a combination of acids.
                      </p>
                      <p>
                        Phenol is typically used in deeper peels but may be
                        found in small quantities in medium-depth peels.
                      </p>
                      <p>
                        Often, higher concentrations are associated with
                        additional risks and complications. For this reason,
                        medium-depth peels should be carried out by an
                        appropriately qualified professional.
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
                data-name="who-are-medium-depth-chemical-peels-good-for"
                id="who-are-medium-depth-chemical-peels-good-for"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Who are medium-depth chemical peels good for?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Medium-depth chemical peels are effective on all skin
                        types and tones. A more aggressive treatment than
                        <a href="../../../blog/my-chemical-peel-romance/">
                          superficial chemical peels
                        </a>
                        , they are used to improve the appearance of uneven
                        skin, fine lines, acne scarring and sun damaged skin.
                      </p>
                      <p>
                        Medium-depth chemical peels can be used the face, neck
                        and most places of the body, but are most commonly used
                        on the face and backs of hands.
                      </p>
                      <p>
                        It’s important to note that the skin on different areas
                        of the body will react differently to the same peel, so
                        a practitioner may advise different peels for different
                        areas.
                      </p>
                      <p>In general, they are used to:</p>
                      <ul>
                        <li>Smooth skin</li>
                        <li>Reduce blemishes</li>
                        <li>Reduce pigmentation</li>
                        <li>Reduce fine lines</li>
                        <li>Improve the appearance of age spots</li>
                        <li>Reduce acne scarring</li>
                      </ul>
                      <p />
                      <p>
                        Obviously, the deeper the peel, the more impressive and
                        dramatic the results. But this should be balanced by the
                        risks and side effects of the harsher, deeper peels.
                      </p>
                      <p>
                        <a href="../../../blog/peeling-away-the-mystery-what-exactly-is-a-chemical-peel/">
                          Chemical peels
                        </a>
                        DO NOT reduce pore size or improve saggy, lose skin.
                      </p>
                      <p>You may not be suitable for a chemical peel if you:</p>
                      <ul>
                        <li>
                          have a history of problems with skin scarring,
                          particularly keloid scarring
                        </li>
                        <li>have certain skin pigment issues</li>
                        <li>have facial warts or a facial skin infection</li>
                        <li>
                          have used prescription acne treatments such as
                          isotretinoin
                        </li>
                        <li>
                          clients with darkly pigmented skin may be unsuitable
                          for deeper peels due to the heightened risk of
                          hyperpigmentation
                        </li>
                        <li>
                          extra caution may be required if you have dry skin or
                          conditions like dermatitis and rosacea – your
                          practitioner will advise
                        </li>
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
                data-name="how-do-you-prepare-for-a-medium-depth-chemical-peel"
                id="how-do-you-prepare-for-a-medium-depth-chemical-peel"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      How do you prepare for a medium-depth chemical peel?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        6 weeks prior to your treatment, stop using skin
                        products containing vitamin A derivatives, unless
                        directed by your practitioner.
                      </p>
                      <p />
                      <p>
                        1-2 weeks prior to your treatment, avoid exfoliating
                        facials, waxing, hair removal creams, laser hair
                        removal, electrolysis and sunbathing/sunbed use.
                      </p>
                      <p />
                      <p>
                        24 hours prior to your treatment, stop using exfoliating
                        products including those containing
                        <a href="../../../blog/ahas-and-bhas-lifting-the-lid-on-exfoliants/">
                          alpha and beta hydroxy acids
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
        <section className="padding-top-4 padding-bottom-4">
          <div
            data-name="what-happens-during-a-medium-depth-chemical-peel-treatment"
            id="what-happens-during-a-medium-depth-chemical-peel-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>
                    What happens during a medium-depth chemical peel treatment?
                  </h2>
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
                    <div className="cms-content undefined">
                      <p>
                        On arrival at the clinic, your practitioner will
                        complete a detailed personal details and medical history
                        form with you.
                      </p>
                      <p>
                        They will discuss your medical history and clearly
                        highlight the realistic, expected result of the
                        treatment.
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
                <div className="column column-t-4 column-t-offset-2">
                  <div className="step-definition gray-step cms-content">
                    <p>
                      <strong>
                        Step
                        {/* */}Two{/* */}-{/* */}
                        {/* */}Your Medium Depth Chemical Peel Treatment
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        Your face is first cleansed thoroughly.It may be
                        degreased with alcohol to maximise the absorption of
                        acid into your skin.
                      </p>
                      <p>
                        The peel is applied to the skin with a soft brush or
                        cotton pads.
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
                        free check-up, a few days after your treatment. This
                        allows them to check your progress and recovery.
                      </p>
                      <p />
                      <p>
                        You may be advised to have a course of peels, spaced
                        10-14 days apart, and to repeat the course every 6
                        months.
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
                data-name="what-happens-after-a-medium-depth-chemical-peel"
                id="what-happens-after-a-medium-depth-chemical-peel"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What happens after a medium-depth chemical peel?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        It is very important that you carefully follow the
                        advice of your practitioner,
                        <a href="../../../blog/chemical-peel-aftercare-dos-and-don-ts/">
                          following a peel treatment
                        </a>
                        , to help improve the benefit of the procedure and
                        reduce the risk of complications or side effects.
                      </p>
                      <p />
                      <p>
                        As the chemical peel penetrates deeper layers of skin,
                        you may experience more discomfort and peeling
                        afterwards, compared to a
                        <a href="../../chemical-peels-superficial-peels/guide/">
                          superficial peel
                        </a>
                        .
                      </p>
                      <p />
                      <p>
                        Do not scratch or pick at your skin as doing this may
                        result in permanent scarring. The peeling skin is a
                        barrier. Your aim is to take care of it, not remove it!
                      </p>
                      <p />
                      <p>
                        To help avoid infection, follow your practitioner's
                        advice regarding hygiene, including washing your face
                        gently with a mild cleanser and not wearing make-up.
                      </p>
                      <p />
                      <p>
                        Ensure you wear a high
                        <a href="../../../blog/spf-what-when-where/">
                          SPF sunscreen
                        </a>
                        during the course of your treatment and for 4 weeks
                        after. Avoid any direct sun exposure for 6 weeks.
                      </p>
                      <p />
                      <p>
                        Only use the skincare products advised by your
                        practitioner.
                      </p>
                      <p />
                      <p>
                        Avoid strenuous activity for 24 hours after your
                        treatment, and avoid saunas, steam rooms and hot showers
                        until your skin is healed.
                      </p>
                      <p />
                      <p>
                        Do not have any other facial treatments for at least 1
                        week after the peel.
                      </p>
                      <p />
                      <p>
                        If, at any point, you experience any unexpected pain or
                        swelling, discolouration,
                        <a href="../../../blog/hyperpigmentation-treating-pigmentation-issues-in-black-skin/">
                          hyperpigmentation
                        </a>
                        , hypopigmentation or infection, consult your
                        practitioner immediately. Please note that prior to the
                        skin peeling away, it may become uniformly darker.
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
                data-name="what-are-the-side-effects-and-risks-of-medium-depth-chemical-peels"
                id="what-are-the-side-effects-and-risks-of-medium-depth-chemical-peels"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What are the side effects and risks of medium-depth
                      chemical peels?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Your face may swell slightly following a medium-depth
                        peel and your skin may turn dark brown with white
                        streaks. Following this, the skin will peel over 5-7
                        days, during which time it may be itchy, tight and
                        easily irritated.
                      </p>
                      <p>
                        Once the skin has peeled, fresh, bright red skin will
                        appear. This will fade to your normal skin tone over 3-6
                        weeks. Sometimes, skin redness persists for more than
                        2-3 months, but this also usually disappears in time.
                      </p>
                      <p>
                        <a href="../../../blog/skincare-diaries-dr-soul-managing-melasma/">
                          Hyperpigmentation
                        </a>
                        (brown spots on skin) may occur with all peels. To
                        reduce the chance of this, apply high factor sunscreen
                        daily and avoid direct sun exposure for 6 weeks post
                        peel.
                      </p>
                      <p>
                        Bleaching creams can be used to help minimise the
                        appearance of any hyperpigmentation – these should only
                        be used if prescribed by your practitioner. You should
                        not undertake at-home bleaching without the advice of a
                        medically qualified prescriber.
                      </p>
                      <p>
                        If you are susceptible to cold sores, you may find you
                        have an outbreak after a chemical peel. To help prevent
                        this, taking a course of antiviral medicine beforehand
                        may be advised by your practitioner.
                      </p>
                      <p>
                        There is a small chance of developing a localised skin
                        infection following a chemical peel.
                      </p>
                      <p>
                        Scarring is extremely unlikely with a medium-depth peel
                        if it is done properly, by a medically qualified
                        practitioner, who will advise appropriate before and
                        aftercare ensuring the risk of infection is minimised.
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
                data-name="how-much-do-medium-depth-chemical-peels-cost"
                id="how-much-do-medium-depth-chemical-peels-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much do medium-depth chemical peels cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <p>
                      Medium-depth peels generally start from £500 upwards for a
                      single peel or for a course of 4, depending on the type of
                      peel.
                    </p>
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

export default MediumDepthPeels
