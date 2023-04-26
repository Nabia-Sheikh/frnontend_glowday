import React from 'react'
import { Link } from 'react-router-dom'

const NonAblativeLaser = () => {
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
                  <li className>
                    <Link to="/laser-skin-treatments">
                      Laser Skin Treatments
                    </Link>
                  </li>
                  <li className="active">
                    <a href>Non-ablative Laser Resurfacing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="banner banner__background-slant--charcoal-pattern">
          <div className="banner__image" />
          <div className="banner__content text-center">
            <div className="container">
              <div className="column">
                <h1 className="text-left">Non-ablative Laser Resurfacing</h1>
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
                      src="https://cdn.sanity.io/images/iy559jeo/production/7975fba82580f550076c9563c9bb434f1dce5a45-750x1000.jpg?rect=0,125,750,750&w=138&h=138&auto=format"
                      alt="Dr Sophie Shotter"
                      width={138}
                      height={138}
                    />
                    <div className="author-details__details">
                      <span className="author-details__label">
                        Verified by:
                      </span>
                      <span className="author-details__name">
                        Dr Sophie Shotter
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
                <h2>Non-ablative Laser Resurfacing</h2>
              </div>
            </div>
            <div className="row overflowSlider">
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">Best Results</h3>
                        <h4 className="glance-card__description">3 +</h4>
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
                        <h4 className="glance-card__description">3 +</h4>
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
                        <h4 className="glance-card__description">Longterm</h4>
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
                        <h4 className="glance-card__description">Longterm</h4>
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
                        <h4 className="glance-card__description">Minimal</h4>
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
                        <h4 className="glance-card__description">Minimal</h4>
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
                        <h4 className="glance-card__description">
                          Topical anaesthetic &amp; cold air
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
                          Topical anaesthetic &amp; cold air
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
                          Doctor/Nurse
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
                          Doctor/Nurse
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
                        <h4 className="glance-card__description">Same Day</h4>
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
                        <h4 className="glance-card__description">Same Day</h4>
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
                <a href="#non-ablative-laser-resurfacing-overview">
                  Non-ablative Laser Resurfacing Overview
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-does-non-ablative-laser-resurfacing-work">
                  How does non-ablative laser resurfacing work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-is-non-ablative-laser-resurfacing-used-for">
                  What is non-ablative laser resurfacing used for?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-should-i-prepare-for-non-ablative-laser-resurfacing">
                  How should I prepare for non-ablative laser resurfacing?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-happens-during-a-non-ablative-laser-resurfacing-treatment">
                  What happens during a non-ablative laser resurfacing
                  treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-happens-after-a-non-ablative-laser-resurfacing-treatment">
                  What happens after a non-ablative laser resurfacing treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-non-ablative-laser-resurfacing">
                  What are the side effects and risks of non-ablative laser
                  resurfacing?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-does-non-ablative-laser-resurfacing-cost">
                  How much does non-ablative laser resurfacing cost?
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
                data-name="non-ablative-laser-resurfacing-overview"
                id="non-ablative-laser-resurfacing-overview"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Non-ablative Laser Resurfacing Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        In the last 20 years, there have been significant
                        advances in the field of lasers and their use in
                        aesthetic treatments. This means that lasers are now
                        able to very specifically treat a myriad of skin
                        complaints, and a wide range of skin tones, with far
                        fewer risks and complications.
                      </p>
                      <p>
                        Non-ablative treatments include: Frax1550, Fraxel®
                        Re:Store and 3JUVE® Rebright.
                      </p>
                      <p>
                        Non-ablative fractional lasers treat fine lines and
                        wrinkles, sun damaged skin, acne scarred skin and those
                        with enlarged pores and uneven skin texture. They can
                        also be used to improve skin texture and tone, improving
                        the appearance of age spots and other pigmentation
                        issues. Non-ablative fractional lasers are much gentler
                        than their ablative counterparts, requiring virtually no
                        downtime.
                      </p>
                      <p>
                        Following a treatment, the skin is not visibly affected,
                        other than some mild redness or swelling. This does,
                        however, mean that more treatments are needed for
                        optimal results.
                      </p>
                      <p>
                        Non-ablative laser treatments are best if you are
                        relatively young, have mild to moderate skin ageing and
                        are happy to have, and can finance, multiple treatments.
                      </p>
                      <p>
                        This treatment guide has been verified and edited by
                        <a href="../../../blog/guest-editor-dr-sophie-shotter/">
                          Dr Sophie Shotter
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
                data-name="how-does-non-ablative-laser-resurfacing-work"
                id="how-does-non-ablative-laser-resurfacing-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How does non-ablative laser resurfacing work?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Most non-ablative lasers are fractional non-ablative
                        lasers.
                      </p>
                      <p>
                        These lasers create microchannels (called Microscopic
                        Thermal Zones or MTZs) of damage within the skin.
                      </p>
                      <p>
                        As the laser travels through the skin, it causes the
                        water in the deeper, dermal layers of skin to heat up.
                        They do this in a controlled manner, so rather than
                        causing the water and the surrounding tissue to vaporise
                        (like an ablative laser would do), the temperature
                        increases, tightening existing collagen whilst also
                        stimulating the production of collagen and elastin, thus
                        stimulating dermal remodelling.
                      </p>
                      <p>
                        Most non-ablative lasers are fractional non-ablative
                        lasers. These create microchannels (called Microscopic
                        Thermal Zones or MTZs) of damage within the skin. As the
                        laser travels through the skin, it causes the water in
                        the deeper, dermal layers of skin to heat up. They do
                        this in a controlled manner, so rather than causing the
                        water and the surrounding tissue to vaporise (like an
                        ablative laser would do), the temperature increases,
                        tightening existing collagen whilst also stimulating the
                        production of collagen and elastin, thus prompting
                        dermal remodelling.
                      </p>
                      <p>
                        The channels are surrounded by healthy and intact skin,
                        which means that non-ablative laser skin treatments are
                        far less invasive than ablative laser skin treatments.
                        They also leave the epidermis completely intact, making
                        them a great alternative to more invasive laser
                        treatments. They still produce a skin rejuvenating
                        effect, albeit to a more moderate degree than their
                        ablative counterparts (see diagram). The upside is that
                        risk of complications is much reduced.
                      </p>
                      <figure className="lightbox lightbox--transparent lightbox--auto-height">
                        <img
                          className="lazyload"
                          src="https://cdn.sanity.io/images/iy559jeo/production/51fe8998bbc595ce50f5f3f73b32a9a21a9b9bbc-4064x2594.png?w=768&fit=max&auto=format"
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
                data-name="what-is-non-ablaitve-laser-resurfacing-used-for"
                id="what-is-non-ablaitve-laser-resurfacing-used-for"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What is non-ablative laser resurfacing used for?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Non-ablative laser treatments are best for younger
                        people who have mild or moderate skin age concerns.
                      </p>
                      <p>Typical concerns include:</p>
                      <ul>
                        <li>Fine lines and moderate wrinkles</li>
                        <li>Signs of sun damage</li>
                        <li>Acne scarring</li>
                        <li>Uneven skin texture</li>
                        <li>Enlarged pores</li>
                        <li>Skin pigmentation</li>
                        <li>Age spots</li>
                      </ul>
                      <p>
                        Non-ablative laser resurfacing may not be suitable if
                        you have:
                      </p>
                      <ul>
                        <li>A history of keloid scarring</li>
                        <li>An active herpes infection</li>
                        <li>Impetigo</li>
                        <li>Active acne</li>
                        <li>
                          A dark tan or black skin (NB: There are certain brands
                          of laser machine which are suitable for dark skin
                          tones, speak to your practitioner for more
                          information)
                        </li>
                        <li>Used isotretinoin in the last year</li>
                        <li>Diabetes mellitus</li>
                        <li>Smokers</li>
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
                data-name="how-should-i-prepare-for-non-ablative-laser-resurfacing"
                id="how-should-i-prepare-for-non-ablative-laser-resurfacing"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      How should I prepare for non-ablative laser resurfacing?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Your practitioner may ask you to prepare for your
                        treatment by:
                      </p>
                      <p>
                        <strong>6-8 weeks</strong> prior to your treatment you
                        should avoid sun exposure and false tanning products.
                      </p>
                      <p>
                        <strong>4 weeks</strong> prior to your treatment, to
                        prepare your skin and to kick start the production of
                        collagen, your practitioner may recommend you use a
                        topical retinoid product alongside exfoliating acids,
                        such as alpha-hydroxy acid based creams.
                      </p>
                      <p>
                        <strong>2 weeks</strong> prior to your treatment, your
                        practitioner may prescribe an anti-viral medicine (like
                        Acyclovir) if you are prone to coldsores.
                      </p>
                      <p>
                        <strong>1 week</strong> prior to your treatment you
                        should:
                      </p>
                      <ul>
                        <li>
                          Stop taking asprin, NSAIDs and Vitamin E supplements
                        </li>
                        <li>Have a patch test</li>
                      </ul>
                      <p />
                      <p>
                        NB: Before and after your non-ablative laser treatment
                        you need to avoid sun exposure. Ideally, you will avoid
                        the sun for at least 2 months prior to your treatment.
                        Equally, to get the best out of your laser treatment,
                        you should avoid sun exposure following your treatment.
                        Investing in, and using, a broad spectrum SPF 50 product
                        everyday is advised.
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
            data-name="what-happens-during-a-non-ablative-laser-resurfacing-treatment"
            id="what-happens-during-a-non-ablative-laser-resurfacing-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>
                    What happens during a non-ablative laser resurfacing
                    treatment?
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
                        {/* */}Step One - The Consultation and Consent
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        On arrival at the clinic, your practitioner will
                        complete a detailed personal and medical history form
                        with you.
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
                        {/* */}Step Two - Your non-ablative laser resurfacing
                        treatment
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        Your Treatment will take around 15-90 minutes, depending
                        on the machine being used and size of the area to be
                        treated.
                      </p>
                      <p>
                        Your Practitioner will protect your eyes and numb your
                        skin with a topical anaesthetic cream one hour before
                        your treatment.
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
                        {/* */}Step Three - The Check-up
                      </strong>
                    </p>
                    <p>
                      It is good practice for your Practitioner to offer a free
                      check-up, a few days to two weeks after your treatment.
                      This allows them to check that the treatment was
                      appropriate for the agreed outcome and to answer any
                      questions you may have.
                    </p>
                  </div>
                </div>
                <div className="column column-t-4 column-t-offset-2">
                  <div className="step-definition gray-step cms-content">
                    <p>
                      <strong>
                        Step
                        {/* */}Four{/* */}-{/* */}
                        {/* */}Step Four - The Repeat Treatment
                      </strong>
                    </p>
                    <p>
                      Depending on the issue you were having treated, you may be
                      advised to have additional treatments, 4-6 weeks from your
                      original treatment. Your practitioner will advise
                      regarding when you may require a repeat treatment.
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
                data-name="what-happens-after-a-non-ablative-laser-resurfacing-treatment"
                id="what-happens-after-a-non-ablative-laser-resurfacing-treatment"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What happens after a non-ablative laser resurfacing
                      treatment?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Immediately after your treatment, your skin will appear
                        red and feel warm, similar to a mild sunburn. This
                        should dissipate within 24 hours, although, don’t be
                        worried if it persists for a couple of days.
                      </p>
                      <p>
                        Do not undertake any strenuous exercise. Avoid hot
                        showers and baths and do not expose your skin to any
                        sun. You need to try to keep your skin cool.
                      </p>
                      <p>
                        You may experience dry skin. In rare cases, acne may
                        flare up, particularly in younger people.
                      </p>
                      <p>
                        If you are susceptible to cold sores, you may have a
                        breakout following non-ablative laser treatments. It may
                        be an idea to keep lysine supplements and acyclovir
                        medication to hand following your treatment.
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
                data-name="what-are-the-effects-and-risks-of-non-ablative-laser-resurfacing"
                id="what-are-the-effects-and-risks-of-non-ablative-laser-resurfacing"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What are the side effects and risks of non-ablative laser
                      resurfacing?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>The risk of side effects is low.</p>
                      <p>
                        Possible side effects include short-term redness,
                        potential blistering and temporary darkening of the skin
                        in rare cases.
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
                data-name="how-much-does-non-ablative-laser-resurfacing-cost"
                id="how-much-does-non-ablative-laser-resurfacing-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much does non-ablative laser resurfacing cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Costs for non-ablative laser treatments vary depending
                        on the size of the treatment area and the brand of laser
                        used.
                      </p>
                      <p>
                        Expect to pay anywhere from £200 to £600 for a single
                        treatment and £2000 to £3000 for a full face.
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

export default NonAblativeLaser