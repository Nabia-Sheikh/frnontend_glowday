import React from 'react'
import { Link } from 'react-router-dom'

const SuperFacialPeels = () => {
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
                    <Link to="/chemicalPeels">Chemical Peels </Link>
                  </li>
                  <li className="active">
                    <a href>Superficial Peels</a>
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
                <h1 className="text-left">Superficial Peels</h1>
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
                          4 - 6 sessions
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
                          4 - 6 sessions
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
                        <h4 className="glance-card__description">4-6 weeks</h4>
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
                        <h4 className="glance-card__description">4-6 weeks</h4>
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
                        <h4 className="glance-card__description">30 mins</h4>
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
                        <h4 className="glance-card__description">30 mins</h4>
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
                          Medically qualified/aesthetician
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
                          Medically qualified/aesthetician
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
                <a href="#superficial-chemical-peels-overview">
                  Superficial Chemical Peels Overview
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-superficial-chemical-peels-work">
                  How do superficial chemical peels work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#who-are-superficial-chemical-peels-good-for">
                  Who are superficial chemical peels good for?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-you-prepare-for-a-superficial-chemical-peel">
                  How do you prepare for a superficial chemical peel?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#your-superficial-chemical-peel-treatment">
                  Your Superficial Chemical Peel Treatment
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-should-you-do-following-a-superficial-chemical-peel">
                  What should you do following a superficial chemical peel?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-superficial-chemical-peels">
                  What are the side effects and risks of superficial chemical
                  peels?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-do-superficial-chemical-peels-cost">
                  How much do superficial chemical peels cost?
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
                data-name="superficial-chemical-peels-overview"
                id="superficial-chemical-peels-overview"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Superficial Chemical Peels Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        We are all familiar with mechanical exfoliation. Many
                        people use facial scrubs, abrasive mitts or facial
                        cleansing brushes to slough off dull skin cells.
                      </p>
                      <p>
                        Proper, regular exfoliation removes the barrier of dead
                        skin cells on the surface of the skin, uncovering the
                        fresh, new cells beneath. This clears the way for
                        skincare products to penetrate more deeply into the
                        skin, making them more effective.
                      </p>
                      <p>
                        Chemical peels are also another and more effective way
                        of deeply, chemically exfoliating the skin. This is
                        sometimes called chemiexfoliation and it reveals
                        smoother, softer, more even skin.
                      </p>
                      <p>
                        <a href="../../../blog/which-chemicals-are-used-in-chemical-peels/">
                          Chemical peels, AKA skin peels, typically contain
                          acids of varying strengths and types
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
                        Superficial chemical peels are the mildest of the peels,
                        they remove the outermost layer of the epidermis. They
                        are mild enough to be used as part of a monthly skincare
                        regime to help reduce the appearance of fine lines and
                        age spots and can help even out the texture and tone of
                        your skin.
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
                data-name="how-do-superficial-chemical-peels-work"
                id="how-do-superficial-chemical-peels-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do superficial chemical peels work?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        During a superficial chemical peel, acids are used to
                        create an intentional, controlled injury to a specific
                        skin depth. The acid breaks the chemical bonds which
                        hold the skin cells together, causing them to peel off.
                        Superficial peels remove all, or part of, the eipdermis.
                      </p>
                      <p>
                        The aim is to deeply exfoliate the skin, which in turn,
                        stimulates new epidermal growth and
                        <a href="../../../blog/collagen-the-protein-that-keeps-us-looking-young/">
                          collagen
                        </a>
                        production, with more evenly distributed melanin. The
                        new skin that grows has improved surface texture and
                        appearance.
                      </p>
                      <p>
                        <a href="../../../blog/which-chemicals-are-used-in-chemical-peels/">
                          Acids commonly used for superficial peels include
                        </a>
                        : lactic acid, glycolic acid, tartaric acid and
                        salicylic acid. With the exception of salicylic acid
                        (commonly used for acne treatments), these are known as
                        the fruit acid peels.
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
                data-name="who-are-superficial-chemical-peels-good-for"
                id="who-are-superficial-chemical-peels-good-for"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Who are superficial chemical peels good for?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        <a href="../../../blog/my-chemical-peel-romance/">
                          Superficial chemical peels
                        </a>
                        are safe and effective for all skin types and tones. If
                        you have uneven skin, blemishes, fine lines, sun damaged
                        and blemished skin, a superficial chemical peel may
                        help.
                      </p>
                      <p>
                        They can be used anywhere on the face, neck and body,
                        and while they are most commonly used on the face, they
                        are also a good option for those prone to acne on their
                        chest and back.
                      </p>
                      <p>They are used to:</p>
                      <ul>
                        <li>Smooth skin</li>
                        <li>Reduce blemishes</li>
                        <li>Reduce pigmentation</li>
                        <li>Reduce the appearance of fine lines</li>
                        <li>Improve the appearance of age spots</li>
                        <li>Reduce the appearance of acne scarring</li>
                      </ul>
                      <p />
                      <p>
                        Chemical peels DO NOT reduce pore size or improve saggy,
                        loose skin.
                      </p>
                      <p />
                      <p>You may not be suitable for a chemical peel if you:</p>
                      <ul>
                        <li>are pregnant or breastfeeding</li>
                        <li>
                          have a history of problems with skin scarring,
                          particularly keloid scarring
                        </li>
                        <li>
                          have certain skin pigment issues, lesions or moles.
                          These must be checked by a GP or dermatologist first.
                        </li>
                        <li>have facial warts or a facial skin infection</li>
                        <li>
                          have used prescription acne treatments such as
                          isotretinoin
                        </li>
                        <li>
                          have darkly pigmented skin (due to the heightened risk
                          of hyperpigmentation)
                        </li>
                        <li>
                          have had any other abrasive treatment, including home
                          care treatments
                        </li>
                        <li>
                          have recently exfoliated, shaved or waxed the area
                        </li>
                      </ul>
                      <p />
                      <p>
                        You must inform your practitioner of all creams or
                        facial products you have used.
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
                data-name="how-do-you-prepare-for-a-superficial-chemical-peel"
                id="how-do-you-prepare-for-a-superficial-chemical-peel"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do you prepare for a superficial chemical peel?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        1-2 weeks prior to your treatment, avoid adding anything
                        new to your skincare routine. Specifically, avoid
                        exfoliating facials, facial electrolysis and
                        sunbathing/sunbed use.
                      </p>
                      <p>
                        3 days prior to your treatment, stop using active skin
                        care products containing retinoic acid derivatives.
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
            data-name="your-superficial-chemical-peel-treatment"
            id="your-superficial-chemical-peel-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>Your Superficial Chemical Peel Treatment</h2>
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
                        {/* */}Your Superficial Peel Treatment
                      </strong>
                    </p>
                    <p>
                      Your face is first cleansed thoroughly. Sometimes, it is
                      also degreased with alcohol, to allow the acid to
                      penetrate the skin fully.
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
                        {/* */}The Check-Up
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        It is good practice for your practitioner to offer a
                        free check-up a few days after your treatment. This
                        allows them to check your progress and recovery.
                      </p>
                      <p>
                        You may be advised to have regular peels every 4-6
                        weeks.
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
                data-name="what-should-you-do-following-a-superficial-chemical-peel"
                id="what-should-you-do-following-a-superficial-chemical-peel"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What should you do following a superficial chemical peel?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        It is very important that you carefully follow the
                        advice of your practitioner following a peel treatment
                        to help improve the benefit of the procedure and reduce
                        the risk of complications or side effects.
                      </p>
                      <p>
                        <a href="../../../blog/chemical-peel-aftercare-dos-and-don-ts/">
                          Following your chemical peel treatment
                        </a>
                        , you should cleanse your face
                        <strong>very</strong> gently with a soap-free cleanser,
                        patting the skin dry with a towel. Ensure you moisturise
                        your skin well.
                      </p>
                      <p>
                        2-4 days after your treatment you may experience peeling
                        – though not everyone does. DO NOT pick or peel your
                        skin. If you do, you risk bleeding, discolouration and
                        even scarring.
                      </p>
                      <p>
                        Wear a high
                        <a href="../../../blog/spf-what-when-where/">
                          SPF sunscreen
                        </a>
                        for at least 6 weeks post-treatment. This will reduce
                        the risk of brown blotches (hyperpigmentation) forming
                        on your skin.
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
                data-name="what-are-the-side-effects-and-risks-of-superficial-chemical-peels"
                id="what-are-the-side-effects-and-risks-of-superficial-chemical-peels"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What are the side effects and risks of superficial
                      chemical peels?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        As superficial chemical peels are the gentlest of the
                        peels, you are less likely to experience an adverse
                        reaction than with a
                        <a href="../../medium-depth-peels/guide/">
                          medium-depth
                        </a>
                        or deep peel.
                      </p>
                      <p />
                      <ul>
                        <li>
                          You may experience slight white discolouration in some
                          areas or blotchy skin, though this should subside
                          within a few hours.
                        </li>
                      </ul>
                      <p />
                      <ul>
                        <li>
                          You may experience peeling 2-4 days after your
                          treatment.
                        </li>
                      </ul>
                      <p />
                      <ul>
                        <li>
                          Hyperpigmentation (brown spots on the skin) may occur
                          with all peels, especially if your skin is darker. To
                          reduce the chance of this, it is important to use
                          creams as directed by your practitioner. This should
                          include a high factor sunscreen daily.
                        </li>
                      </ul>
                      <p />
                      <ul>
                        <li>
                          It is important to avoid direct sun exposure for 6
                          weeks post-peel.
                        </li>
                      </ul>
                      <p />
                      <ul>
                        <li>
                          Cold sores – if you are susceptible to cold sores, you
                          may find you have an outbreak after a chemical peel.
                          To help prevent this, taking a course of antiviral
                          medicine as advised by your practitioner beforehand
                          may be advised.
                        </li>
                      </ul>
                      <p />
                      <ul>
                        <li>
                          Redness – sometimes skin redness persists for more
                          than 2-3 months, but this usually disappears in time.
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
                data-name="how-much-do-superficial-chemical-peels-cost"
                id="how-much-do-superficial-chemical-peels-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much do superficial chemical peels cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <p>
                      Prices start from £60 for a superficial peel, such as a
                      glycolic or lactic acid peel.
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

export default SuperFacialPeels