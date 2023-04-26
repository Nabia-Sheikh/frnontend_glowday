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
                    <a href>Microneedling</a>
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
                <h1 className="text-left">Microneedling</h1>
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
                <h2>Microneedling - At a glance</h2>
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
                          3 + treatments
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
                          3 + treatments
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
                        <h4 className="glance-card__description">3 months</h4>
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
                        <h4 className="glance-card__description">3 months</h4>
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
                        <h4 className="glance-card__description">1/2 days</h4>
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
                        <h4 className="glance-card__description">1/2 days</h4>
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
                          Topical anaesthetic
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
                          Topical anaesthetic
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
                          Medically qualified/Aesthetician
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
                          Medically qualified/Aesthetician
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
                <a href="#what-is-microneedling">What is microneedling?</a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-does-microneedling-work">
                  How does microneedling work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#who-is-microneedling-good-for">
                  Who is microneedling good for?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-you-prepare-for-microneedling">
                  How do you prepare for microneedling?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-happens-during-microneedling">
                  What happens during microneedling?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-happens-after-microneedling">
                  What happens after microneedling?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-microneedling">
                  What are the side effects and risks of microneedling?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-does-microneedling-cost">
                  How much does microneedling cost?
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
                data-name="what-is-microneedling"
                id="what-is-microneedling"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What is microneedling?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        <a href="../../blog/boosting-collagen-with-microneedling/">
                          Microneedling, also called medical needling, collagen
                          induction therapy
                        </a>
                        (CIT) or percutaneous collagen induction (PCI), is a
                        skin treatment used to treat:
                      </p>
                      <ul>
                        <li>wrinkles</li>
                        <li>fine lines</li>
                        <li>scars (including acne scarring)</li>
                        <li>stretch marks</li>
                        <li>large pores</li>
                        <li>hair loss</li>
                        <li>pigmentation</li>
                      </ul>
                      <p />
                      <p>
                        Microneedling uses multiple fine, sterile needles to
                        puncture the skin with microscopic channels.
                      </p>
                      <p>
                        This intentional, controlled injury initiates a skin
                        healing response, resulting in the increased production
                        of collagen and elastin. The end result is thicker,
                        plumper, firmer, smoother skin. Additionally, skincare
                        products are able to penetrate more deeply into the
                        skin, making them more effective.
                      </p>
                      <p>Microneedling can be done in one of two ways:</p>
                      <p>
                        One option is using a <strong>dermaroller</strong>. A
                        cylinder with many fine, sharp needles is rolled over
                        the target area. The needles are of various lengths,
                        depending on the qualification level of the
                        practitioner, the area to be treated and type of skin
                        issue.
                      </p>
                      <p>
                        Alternatively, your practitioner may use a
                        <strong>microneedling pen</strong>. These are handheld
                        pen-like devices (e.g. Dermapen®) which have around 12
                        fine needles on the tip. Once switched on, these needles
                        move rapidly in and out of the skin, at a depth set by
                        the practitioner.
                      </p>
                      <p>
                        You can use dermarollers at home, however, medically
                        qualified practitioners can use dermarollers and/or
                        microneedling pens, which penetrate deeper into the
                        skin, giving much better results. Additionally, you are
                        at increased risk of infection due to poor sterilisation
                        and storage, and increased risk of track marks due to
                        needles being blunt.
                      </p>
                      <p>Common brands include:</p>
                      <ul>
                        <li>MTS-Roller®</li>
                        <li>
                          <a href="https://www.environskincare.com/">
                            Roll-CIT
                          </a>
                          ®
                        </li>
                        <li>
                          <a href="https://skinpen.com">SkinPen</a>®
                        </li>
                        <li>
                          <a href="https://dermapen.com/about-dermapen-microneedling/">
                            Dermapen®
                          </a>
                        </li>
                        <li>
                          <a href="https://dermarollerclinics.com">
                            eDermastamp
                          </a>
                          ®
                        </li>
                      </ul>
                      <p />
                      <p>
                        Microneedling can also be combined with other treatments
                        such as PRP (platelet-rich plasma) therapy and
                        mesotherapy.
                      </p>
                      <p>
                        The microneedling Glowday Treatment Guide has been guest
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
                data-name="how-does-microneedling-work"
                id="how-does-microneedling-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How does microneedling work?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        <a href="../../blog/collagen-the-protein-that-keeps-us-looking-young/">
                          Collagen is the scaffolding of the skin
                        </a>
                        . As we age collagen production declines, particularly
                        after the age of 30. Many anti-ageing and skin
                        rejuvenating treatments are predicated on increasing the
                        skin's own production of collagen. Microneedling is no
                        different.
                      </p>
                      <p>
                        The microneedling device causes controlled, intentional
                        injury to the epidermis as it is rolled across or
                        applied to the skin. The depth the needles penetrate
                        (0.25mm - 2.0mm) depends on the type of skin issue, the
                        qualification level of the practitioner and the area of
                        the body/face being treated.
                        <a href="../../blog/at-home-skincare-microneedling/">
                          Nurses, doctors and dentists can deliver microneedling
                          up to 1.5mm on the face and 2.0mm on the body.
                        </a>
                        Aestheticians can deliver microneedling up to 1.0mm on
                        the face and 1.5mm on the body.
                      </p>
                      <figure className="lightbox lightbox--transparent lightbox--auto-height">
                        <img
                          className="lazyload"
                          src="https://cdn.sanity.io/images/iy559jeo/production/02212d9be13ecbac7414ea11416aac90f0c9b9b6-2481x1560.png?w=768&fit=max&auto=format"
                          loading="lazy"
                          decoding="async"
                          width={768}
                          height={432}
                          alt
                        />
                      </figure>
                      <p>
                        The channels produced as the microneedling device is
                        applied to the skin induce a natural skin repair
                        response. This results in increased production of growth
                        factors, which in turn stimulates the production of
                        collagen and elastin. As more collagen and elastin are
                        produced, the skin becomes smoother and plumper.
                      </p>
                      <p>
                        There is an additional benefit, if using an active
                        skincare regimen, as the products applied to the skin
                        penetrate more deeply following microneedling
                        treatments.
                      </p>
                      <p>
                        To get the best results, a course of 3-9 treatments may
                        be recommended, followed by a quarterly maintenance
                        programme.
                      </p>
                      <p>
                        Whilst dermarollers are available at home, it is
                        important to recognise that professional microneedling
                        is carried out by experienced professionals, using
                        sterile, sharp dermarollers/microneedling pens with
                        specific aftercare procedures.
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
                data-name="who-is-microneedling-good-for"
                id="who-is-microneedling-good-for"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Who is microneedling good for?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Microneedling is suitable for all adults and is used for
                        the following:
                      </p>
                      <ul>
                        <li>To improve acne scarring</li>
                        <li>To improve fine lines and wrinkles</li>
                        <li>
                          To improve skin texture - tightening and plumping
                        </li>
                        <li>To reduce pore size</li>
                        <li>To reduce stretch marks</li>
                        <li>To improve skin pigmentation</li>
                        <li>To help treat alopecia</li>
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
                data-name="how-do-you-prepare-for-microneedling"
                id="how-do-you-prepare-for-microneedling"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do you prepare for microneedling?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Your practitioner should clearly indicate what the
                        specific treatment can and cannot deliver in terms of
                        results.
                      </p>
                      <p>
                        You may be asked to adopt a particular skincare regimen
                        for 4+ weeks prior to your first treatment, the period
                        between that and any other subsequent treatments, and
                        once your course of treatments has been completed. This
                        is to maximise collagen production and skin repair.
                      </p>
                      <p>Arrive at your appointment without any makeup.</p>
                      <p>
                        A week before the treatment, avoid taking aspirin,
                        ibuprofen, vitamin E and fish oil supplements as these
                        may increase bleeding. However, you can take paracetamol
                        if needed.
                      </p>
                      <p>
                        If you are taking any prescribed medication, including
                        aspirin, do not stop taking it – consult your
                        practitioner or your GP first.
                      </p>
                      <p>
                        Avoid drinking alcohol 24 hours before your treatment,
                        as this also increases the risk of bleeding.
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
            data-name="what-happens-during-microneedling"
            id="what-happens-during-microneedling"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>What happens during microneedling?</h2>
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
                        complete a detailed personal assessment and medical
                        history form with you.
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
                        {/* */}The Treatment
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>Your practitioner may ask to take a ‘before’ photo.</p>
                      <p>
                        Immediately prior to your treatment, the area to be
                        treated will be cleansed with an antiseptic cleanser and
                        a topical anaesthetic cream will be applied. This will
                        stay on your skin for around 30-45 minutes.
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
                        {/* */}The Debrief
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        Your practitioner will remind you of any aftercare
                        procedures you need to follow.
                      </p>
                      <p />
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
                    <p>
                      Improvements in your skin will take 4-8 weeks to see
                      significant improvements. Depending on the advice given by
                      your practitioner, you may be advised to book a course of
                      treatments, usually 3-6 booked at least 4-6 weeks apart or
                      a specific maintenance programme.
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
                data-name="what-happens-after-microneedling"
                id="what-happens-after-microneedling"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What happens after microneedling?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        After your treatment, your skin is likely to appear red
                        and feel more sensitive.
                      </p>
                      <p>
                        <strong>Do:</strong>
                      </p>
                      <ul>
                        <li>Avoid the sun</li>
                        <li>
                          Avoid sunscreen immediately after your treatment –
                          once your skin has calmed, use SPF30 daily
                        </li>
                        <li>Use collagen stimulating peptides</li>
                        <li>Keep hydrated</li>
                      </ul>
                      <p>
                        <strong />
                      </p>
                      <p>
                        <strong>Don’t:</strong>
                      </p>
                      <ul>
                        <li>
                          Use ‘active’ skincare products (retinols,
                          <a href="../../blog/what-are-ahas/">AHAs</a>, acids)
                          until recommended by your practitioner - usually after
                          5 days post-treatment
                        </li>
                        <li>Use make up for 24-48 hours after treatment</li>
                        <li>
                          Do strenuous exercise - sweating can enable bacteria
                          to enter the channels created during the treatment
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
                data-name="what-are-the-side-effects-and-risks-of-microneedling"
                id="what-are-the-side-effects-and-risks-of-microneedling"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What are the side effects and risks of microneedling?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Your skin may become red, itchy and inflamed
                        post-treatment, a little like sunburn. This should last
                        no longer than 48hrs.
                      </p>
                      <p>Some other side effects include:</p>
                      <ul>
                        <li>Minor flaking/dryness</li>
                        <li>Scabs/skin peeling</li>
                        <li>
                          Milia (small white spots) may appear on the skin
                        </li>
                        <li>Hyperpigmentation (skin darkening)</li>
                      </ul>
                      <p>These occur rarely.</p>
                      <p>
                        If you are susceptible to cold sores, you may find that
                        you have a breakout following a microneedling treatment.
                        Taking a course of Acyclovir prior to your treatment can
                        help prevent this.
                      </p>
                      <p>Microneedling is unsuitable for anyone who has/is:</p>
                      <ul>
                        <li>pregnant or breastfeeding</li>
                        <li>used Roaccutane in the last 6 months</li>
                        <li>open cuts, abrasions, wounds</li>
                        <li>had radiation therapy in the last 12 months</li>
                        <li>active cold sores or skin infections</li>
                        <li>skin numbness</li>
                        <li>keloid or hypertrophic scars</li>
                        <li>poor wound healing</li>
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
                data-name="how-much-does-microneedling-cost"
                id="how-much-does-microneedling-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much does microneedling cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>Charge per treatment or per area.</p>
                      <p>Dermarolling - from £200 for a full face</p>
                      <p>Microneedling pen treatment - from £225 full face</p>
                      <p>Stretch marks and scaring are usually POA</p>
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