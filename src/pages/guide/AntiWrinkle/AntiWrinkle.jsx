import React from "react"
import { Link } from "react-router-dom"

const AntiWrinkle = () => {
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
                    <Link to="/anti-wrinkle-injection">
                      Anti-wrinkle Injections
                    </Link>
                  </li>
                  <li className="active">
                    <a href>Anti-Wrinkle Injections</a>
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
                <h1 className="text-left">Anti-Wrinkle Injections</h1>
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
                <h2>Anti-Wrinkle Injections - At A Glance</h2>
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
                          12 - 16 weeks
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
                          12 - 16 weeks
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
                        <h4 className="glance-card__description">None</h4>
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
                        <h3 className="glance-card__title">
                          Risks &amp; complications
                        </h3>
                        <h4 className="glance-card__description">
                          Low to Moderate
                        </h4>
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
                        <h4 className="glance-card__description">
                          Low to Moderate
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
                        <h4 className="glance-card__description">15 - 30min</h4>
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
                        <h4 className="glance-card__description">15 - 30min</h4>
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
                <a href="#anti-wrinkle-injections-overview">
                  Anti-wrinkle Injections Overview
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-anti-wrinkle-injections-work">
                  How do anti-wrinkle injections work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-anti-wrinkle-injections-used-for">
                  What are anti-wrinkle injections used for?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-should-i-prepare-for-anti-wrinkle-injections">
                  How should I prepare for anti-wrinkle injections?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-happens-during-a-anti-wrinkle-treatment">
                  What happens during a anti-wrinkle treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-happens-after-a-anti-wrinkle-treatment">
                  What happens after a anti-wrinkle treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-botulinum-toxin-treatments">
                  What are the side effects and risks of anti-wrinkle
                  treatments?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-do-anti-wrinkle-injections-cost">
                  How much do anti-wrinkle injections cost?
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
                data-name="anti-wrinkle-injection-overview"
                id="anti-wrinkle-injection-overview"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Anti-wrinkle Injections Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Anti-wrinkle injections, are often used to relax muscles
                        of the face, helping to reduce or completely eliminate
                        wrinkles, particularly those that occur due to facial
                        expressions. It is the treatment of choice for forehead
                        lines, crow's feet and lines between the eyebrows (11s).
                        It can also be used to treat lines in the lower face,
                        such as smokers’ lines, and to lift e.g. the eyebrows or
                        the corners of the mouth. In addition to being used to
                        reduce the appearance of wrinkles, they can also treat
                        headaches and reduce a gummy smile, teeth grinding and
                        excess sweating.
                      </p>
                      <p>
                        Botulinum toxin drugs
                        {/* */}are potent neurotoxins derived from the bacterium{" "}
                        <em>Clostridium botulinum</em>
                      </p>
                      <p>
                        These drugs are all tried, tested and proven and are
                        licensed for use in the UK. They contain one common
                        substance, the botulinum toxin (produced by the
                        bacterium Clostridium botulinum).
                      </p>
                      <p>
                        This toxin is highly potent. Tiny amounts are injected
                        into the muscles identified as those causing the
                        wrinkles. The injections are just beneath the skin,
                        making anti-wrinkle injections the most popular
                        aesthetic treatment due to the lack of downtime needed
                        and proven results.
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
                data-name="how-do-anti-wrinkle-injections-work"
                id="how-do-anti-wrinkle-injections-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do anti-wrinkle injections work?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        During a anti-wrinkle injection treatment, botulinum
                        toxin is safely injected into specific muscles, in
                        extremely small therapeutic quantities.
                      </p>
                      <p>
                        It works by prohibiting signals from the nerve cells
                        reaching muscles, therefore paralysing them. It does
                        this by preventing the release of a chemical transmitter
                        called acetylcholine from nerve endings onto muscle
                        cells, reducing the contraction of these muscles.
                      </p>
                      <p>
                        The muscle becomes temporarily paralysed and remains
                        relaxed until the toxin has been broken down by your
                        body. This reduces the movement of the skin above the
                        treated muscle, causing a reduction in the formation and
                        appearance of wrinkles.
                      </p>
                      <p>
                        The effects of anti-wrinkle injections lasts between 3-6
                        months. How often you need anti-wrinkle injections can
                        depend on the dose administered but more often it’s
                        about individual responses to treatment and the rate at
                        which your body breaks down the toxin. Repeat treatments
                        are required to maintain the desired effect of any
                        anti-wrinkle injections.
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
                data-name="what-are-anti-wrinkle-injections-used-for"
                id="what-are-anti-wrinkle-injections-used-for"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What are anti-wrinkle injections used for?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        There are a number of cosmetic uses of botulinum toxin
                        products. It can be used for:
                      </p>
                      <p />
                      <ul>
                        <li>Forehead lines</li>
                        <li>Bunny lines</li>
                        <li>Softening or defining the jaw angle</li>
                        <li>Crow’s feet (around your eyes)</li>
                        <li>Eyebrow lift</li>
                        <li>Frown lines/11s</li>
                      </ul>
                      <p />
                      <p />
                      <figure className="lightbox lightbox--transparent lightbox--auto-height">
                        <img
                          className="lazyload"
                          src="https://cdn.sanity.io/images/iy559jeo/production/8624ac9d9c4e086b41c1f4324035d29fc7734b48-3508x2111.png?w=768&fit=max&auto=format"
                          loading="lazy"
                          decoding="async"
                          width={768}
                          height={432}
                          alt
                        />
                      </figure>
                      <p />
                      <p />
                      <ul>
                        <li>Marionette lines</li>
                        <li>Neck lines</li>
                        <li>Chin dimples</li>
                        <li>Gummy smile</li>
                        <li>Mouth droop</li>
                        <li>Lipstick lines</li>
                      </ul>
                      <p />
                      <p>
                        Botulinum toxin can also be used to prevent excessive
                        sweating (hyperhydrosis) and it has also been reported
                        to have a positive effect on reducing headaches and
                        migraines.
                      </p>
                      <p>
                        Ideal candidates for anti-wrinkle injections are those
                        who have dynamic wrinkles that are visible when their
                        face is moving. If you have deeper, static wrinkles
                        (which are present even when your face isn’t moving),
                        you may require a combination of dermal fillers and
                        Botulinum toxin to achieve the desired outcome.
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
                data-name="how-should-i-prepare-for-anti-wrinkle-injections"
                id="how-should-i-prepare-for-anti-wrinkle-injections"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How should I prepare for anti-wrinkle injections?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        A week before the treatment, avoid taking aspirin,
                        ibuprofen, vitamin E and fish oil supplements. These may
                        increase bleeding and bruising. However, you can take
                        paracetamol if needed.
                      </p>
                      <p>
                        If you are taking any prescribed medication, including
                        aspirin, do not stop taking it – consult your
                        practitioner or your GP first.
                      </p>
                      <p>
                        Avoid drinking alcohol 24 hours before your treatment,
                        as this also increases the risk of bruising.
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
            data-name="what-happens-during-a-anti-wrinkle-treatment"
            id="what-happens-during-a-anti-wrinkle-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>What happens during a anti-wrinkle treatment?</h2>
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
                      It is important to understand that
                      {/* */}Botulinum toxin{/* */}
                      is a prescription only medicine. It is a legal requirement
                      that the consultation is performed by a prescribing
                      practitioner and you should confirm this with them.
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
                        {/* */}Your Anti-wrinkle Injection Treatment
                      </strong>
                    </p>
                    <p>
                      Your anti-wrinkle treatment will take around 15 minutes.
                      It may be performed by the prescriber who undertook your
                      consultation, or they may delegate it to a competent
                      colleague.
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
                        {/* */}Your Anti-wrinkle Injection Follow-up
                      </strong>
                    </p>
                    <p>
                      It is a requirement that the prescriber is available to
                      review the treatment if necessary. This is usually done
                      after 2 weeks but should be sooner if there are any
                      problems. This allows them to check that the dose
                      administered was appropriate for the agreed outcome, and
                      to adjust if necessary.
                    </p>
                  </div>
                </div>
                <div className="column column-t-4 column-t-offset-2">
                  <div className="step-definition gray-step cms-content">
                    <p>
                      <strong>
                        Step
                        {/* */}Four{/* */}-{/* */}
                        {/* */}Your Anti-wrinkle Injection Repeat Treatment
                      </strong>
                    </p>
                    <p>
                      Depending on how quickly your body breaks down the toxin,
                      you will require a repeat treatment 12 - 16 weeks after
                      your initial treatment.
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
                data-name="what-happens-after-a-anti-wrinkle-treatment"
                id="what-happens-after-a-anti-wrinkle-treatment"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What happens after a anti-wrinkle treatment?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        After you
                        {/* */}Botulinum toxin{/* */}
                        treatment, you can go about your normal day. It is
                        important, however, that you follow the advice of your
                        practitioner carefully. This will help you gain maximum
                        effect from the procedure and reduce the risk of
                        complications.
                      </p>
                      <p>
                        You may experience localised redness and pin-prick marks
                        around the injection sites.
                      </p>
                      <p>
                        To help get the best out of your anti-wrinkle treatment,
                        you need to:
                      </p>
                      <p />
                      <ul>
                        <li>
                          Avoid rubbing or massaging the treated area and avoid
                          strenuous exercise for 24 – 48 hours after treatment,
                          or as your practitioner advises. Failure to do so may
                          result in the toxin moving into muscles it shouldn't.
                        </li>
                      </ul>
                      <p />
                      <ul>
                        <li>
                          The treatment takes around 72 hours to begin working
                          and 2 weeks for the effects to be fully visible,
                          although you may feel most of the effect after 7 to 10
                          days.
                        </li>
                      </ul>
                      <p />
                      <ul>
                        <li>
                          Contact your practitioner if you have any unusual
                          results such as prolonged bruising, swelling,
                          irritation, infection or drooping.
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
                data-name="what-are-the-side-effects-and-risks-of-botulinum-toxin-treatments"
                id="what-are-the-side-effects-and-risks-of-botulinum-toxin-treatments"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What are the side effects and risks of Botulinum toxin
                      treatments?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Most clients find botulinum toxin injections to be
                        relatively painless and straightforward.
                      </p>
                      <p>
                        A small minority of clients choose to have a topical
                        numbing cream applied to the area 20-30 minutes prior to
                        the treatment. If you feel you have a low pain
                        threshold, be sure to put this on your medical history
                        form, so your practitioner can apply the cream early in
                        your consultation.
                      </p>
                      <p>Some side effects include:</p>
                      <ul>
                        <li>Temporary bleeding/bruising</li>
                        <li>Mild swelling</li>
                        <li>Post-treatment headache</li>
                        <li>Drooping eyelids</li>
                        <li>Drooping eyebrows</li>
                      </ul>
                      <p />
                      <p>
                        More serious side effects can occur for treatment of
                        other areas (e.g. double vision, drooping lip,
                        difficulty swallowing or breathing, change of voice or
                        difficulty pronouncing some words.
                      </p>
                      <p>
                        This list is not exhaustive and you should consult your
                        practitioner if you are concerned in any way.
                      </p>
                      <p>DO NOT have botulinum toxin injections if:</p>
                      <ul>
                        <li>You are pregnant or breastfeeding</li>
                        <li>You are trying to get pregnant</li>
                      </ul>
                      <p />
                      <p>You also need to let your practitioner know if:</p>
                      <ul>
                        <li>You have a muscular disease (e.g. Bell's Palsy)</li>
                        <li>You have any blood or nervous system disorders</li>
                        <li>
                          You are taking any medications which affect blood
                          clotting
                        </li>
                        <li>You are taking any medicines</li>
                        <li>You have any psychological concerns</li>
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
                data-name="how-much-do-anti-wrinkle-injections-cost"
                id="how-much-do-anti-wrinkle-injections-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much do anti-wrinkle injections cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Botulinum toxin injections are usually charged per area,
                        although your practitioner may offer discounts for
                        multiple areas.
                      </p>
                      <p>Expect to pay from £175 - £300 per area.</p>
                      <p>
                        Beware of very cheap prices. It may be that these
                        practitioners are not using licensed products of
                        botulinum toxin or they may not be appropriately
                        medically qualified.
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

export default AntiWrinkle
