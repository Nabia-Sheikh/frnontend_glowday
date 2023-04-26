import React from 'react'
import { Link } from "react-router-dom"

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
                    <a href>Laser Hair Removal</a>
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
                <h1 className="text-left">Laser Hair Removal</h1>
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
                <h2>Laser hair removal - At a glance</h2>
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
                          6 - 12 sessions
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
                          6 - 12 sessions
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
                        <h4 className="glance-card__description">Long term</h4>
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
                        <h4 className="glance-card__description">Long term</h4>
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
                        <h4 className="glance-card__description">
                          15 - 30 mins
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
                          15 - 30 mins
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
                          Medically qualified/technician
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
                          Medically qualified/technician
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
                <a href="#laser-hair-removal-overview">
                  Laser hair removal Overview
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-does-laser-hair-removal-work">
                  How does laser hair removal work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#who-is-a-good-candidate-for-laser-hair-removal">
                  Who is a good candidate for laser hair removal?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-you-prepare-for-laser-hair-removal">
                  How do you prepare for laser hair removal?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#your-laser-hair-removal-treatment">
                  Your laser hair removal treatment
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-should-you-do-after-laser-hair-removal">
                  What should you do after laser hair removal?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-laser-hair-removal">
                  What are the side effects and risks of laser hair removal?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-does-laser-hair-removal-cost">
                  How much does laser hair removal cost?
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
                data-name="laser-hair-removal-overview"
                id="laser-hair-removal-overview"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Laser hair removal Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Excess facial and body hair is due to hereditary factors
                        and hormonal events such as puberty, pregnancy,
                        menopause and other hormonal conditions like PCOS. Due
                        to this, no laser treatment can ever guarantee 100%
                        permanent hair removal.
                      </p>
                      <p>
                        There are two types of
                        <a href="../../blog/the-lowdown-on-laser-hair-removal/">
                          laser hair removal
                        </a>
                        options available to clients:
                      </p>
                      <p>
                        <strong>Laser</strong> uses a concentrated beam of a
                        specific single wavelength of light, adjusted to the
                        colour of the hair being treated and the skin tone of
                        the individual. They target the melanin pigment in the
                        hair follicle and leave the surrounding skin undamaged.
                        Many people have experienced dramatic and significant
                        permanent hair reduction following laser hair removal.
                      </p>
                      <p>
                        <strong>IPL</strong> (Intense Pulsed Light) uses
                        multiple wavelengths (500nm - 1200nm) of light that
                        scatter within the skin, heating it up. It is a cheaper,
                        less effective hair removal technology. IPL has a
                        variety of uses in treating other skin conditions like
                        superficial pigmentation, rosacea and fine blood
                        vessels.
                      </p>
                      <p>
                        Due to the reduced efficacy of IPL, this guide
                        concentrates instead on true laser hair removal.
                      </p>
                      <p>
                        The laser hair removal Glowday Treatment Guide has been
                        guest edited and medically verified by
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
                data-name="how-does-laser-hair-removal-work"
                id="how-does-laser-hair-removal-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How does laser hair removal work?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>Hair grows in stages:</p>
                      <ul>
                        <li>
                          <strong>Anagen stage</strong> - The active, growing
                          stage of the hair follicle.
                        </li>
                        <li>
                          <strong>Catagen stage </strong>- The intermediate
                          period of hair growth.
                        </li>
                        <li>
                          <strong>Telogen stage</strong> - The resting or
                          shedding stage.
                        </li>
                      </ul>
                      <p>
                        Laser hair removal targets hairs in the anagen stage,
                        when the root of the hair has a good blood supply and is
                        firmly bedded in the follicle. When you pull these hairs
                        out, they have a jelly-like bulb at the root. At any one
                        time, 20% - 40% of the hairs on your body are in this
                        stage.
                      </p>
                      <p>
                        The laser machine is set to a specific wavelength,
                        depending on your hair colour and skin tone. Laser hair
                        removal is not effective on very blonde or red hair.
                        Whether you are a suitable candidate for laser hair
                        removal will be determined by the
                        <a href="../../blog/fitzpatrick-test-understanding-your-skin-type/">
                          Fitzpatrick Test
                        </a>
                        .
                      </p>
                      <p>
                        Dark pigments (melanin) in the hair absorb the light
                        from the laser, which turns to heat. If the hair is
                        firmly rooted into the follicle (is in the active
                        stage), the heat inflicts intentional damage on the hair
                        cells, ideally causing them to die.
                      </p>
                      <figure className="lightbox lightbox--transparent lightbox--auto-height">
                        <img
                          className="lazyload"
                          src="https://cdn.sanity.io/images/iy559jeo/production/e821ceb6dd76fd2fc07c5bb33387a382559b7097-4324x2933.png?rect=0,0,4324,2798&w=768&fit=max&auto=format"
                          loading="lazy"
                          decoding="async"
                          width={768}
                          height={432}
                          alt
                        />
                      </figure>
                      <p>
                        The affected hairs eventually fall out and don’t
                        re-grow. Those which weren’t in the anagen stage
                        continue to grow, which is why multiple (6-12) laser
                        treatments are recommended, targeting all follicles.
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
                data-name="who-is-a-good-candidate-for-laser-hair-removal"
                id="who-is-a-good-candidate-for-laser-hair-removal"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Who is a good candidate for laser hair removal?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Laser hair removal is used to significantly reduce hair
                        growth by up to 90%.
                      </p>
                      <p>
                        It is predominantly used to treat unwanted body hair.
                        Typical areas include, upper lip, underarms, bikini
                        line, legs and arms.
                      </p>
                      <p>
                        The ideal candidates for laser hair removal are those
                        with very fair skin and very dark, coarse hair. Those
                        with red, blonde, grey, or white hair and those with
                        very fine hair, aren’t suitable for laser hair removal.
                        Instead, electrolysis would be a good alternative.
                      </p>
                      <p>
                        Laser may not be suitable if you have darker skin tones.
                        This is due to the melanin in the skin absorbing the
                        energy from the laser, rather than it targeting the
                        pigments in the hair. This could lead to
                        <a href="../../blog/hyperpigmentation-treating-pigmentation-issues-in-black-skin/">
                          hyperpigmentation
                        </a>
                        (darkening of the skin). Some practitioners are highly
                        experienced in treating those with darker skin tones
                        using a specific laser called a Nd:YAG. They will spot
                        test your skin to determine your suitability.
                      </p>
                      <p>Laser is not suitable if you:</p>
                      <ul>
                        <li>are pregnant or breastfeeding</li>
                        <li>
                          are on or have recently finished a course of
                          isotretinoin medication in the last 6 months
                        </li>
                        <li>
                          have an active infection in the area to be treated
                        </li>
                        <li>have a known sensitivity to light</li>
                        <li>are taking St John's Wort</li>
                      </ul>
                      <p />
                      <p>
                        Laser may not be suitable for those with photosensitive
                        epilepsy.
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
                data-name="how-do-you-prepare-for-laser-hair-removal"
                id="how-do-you-prepare-for-laser-hair-removal"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do you prepare for laser hair removal?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Prior to your treatment, you'll need to avoid tanning
                        the area to be treated. This means sun exposure and the
                        use of tanning beds should be avoided 4-6 weeks before
                        treatment. You should also avoid the use of false
                        tanning products. You need your skin to be as pale as
                        possible for the treatment to be most effective.
                      </p>
                      <p>
                        The area you are having treated needs to be hair-free,
                        with the root of the hair in place. This means that you
                        should shave the area prior to the day of your
                        treatment, ideally the day/night before.
                      </p>
                      <p>
                        Waxing, sugaring, threading, plucking, epilating and
                        hair removal creams should be avoided, as this removes
                        the hair at the root.
                      </p>
                      <p>
                        On the day of your treatment, avoid applying
                        moisturiser, makeup or deodorant to the area to be
                        treated.
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
            data-name="your-laser-hair-removal-treatment"
            id="your-laser-hair-removal-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>Your laser hair removal treatment</h2>
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
                        {/* */}Your Laser Hair Removal Treatment
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        The laser machine will be set to the correct wavelength,
                        determined during your consultation.
                      </p>
                      <p>
                        You and the practitioner (and anyone else in the room)
                        will be given a pair of dark goggles to wear.
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
              </div>
            </div>
          </div>
        </section>
        <section className="padding-top-4 padding-bottom-4 section__charcoal">
          <div className="container">
            <div className="row">
              <div
                data-name="what-should-you-do-after-laser-hair-removal"
                id="what-should-you-do-after-laser-hair-removal"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What should you do after laser hair removal?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        You may find that the treated area feels warm for around
                        24 hours after your treatment, so avoid hot showers and
                        baths and apply a cooling aloe vera gel if necessary.
                      </p>
                      <p>
                        Avoid thick and heavily perfumed products for a few
                        days.
                      </p>
                      <p>
                        You may want to wear looser fitting clothes on the day
                        of your treatment, to avoid aggravating treated skin.
                      </p>
                      <p>
                        It is important that, between treatments, you rely only
                        on shaving to remove hair. Waxing, sugaring, threading,
                        plucking, epilating and the use of hair removal creams
                        should be avoided.
                      </p>
                      <p>
                        Stay out of the sun and use a high protection factor
                        sunscreen (at least SPF30) if you do go out in the sun.
                      </p>
                      <p>
                        Contact your practitioner if you experience prolonged
                        discomfort, the area becomes infected or blisters.
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
                data-name="what-are-the-side-effects-and-risks-of-laser-hair-removal"
                id="what-are-the-side-effects-and-risks-of-laser-hair-removal"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What are the side effects and risks of laser hair removal?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        In the correct hands, laser hair removal is a minimally
                        invasive procedure with little discomfort.
                      </p>
                      <p>
                        Immediately following treatment, the skin in the treated
                        area may become pink and sore, a bit like mild sunburn.
                        However, this should not persist.
                      </p>
                      <p>
                        Rarely, skin can become temporarily lightened. In some
                        cases, this can last for a few months.
                      </p>
                      <p>
                        Very rarely, melanin in the skin absorbs the energy from
                        the laser, instead of/as well as the pigment in the
                        hair. This can result in blistering and scarring.
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
                data-name="how-much-does-laser-hair-removal-cost"
                id="how-much-does-laser-hair-removal-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much does laser hair removal cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Laser hair removal is usually charged per area, areas
                        are packaged together, or repeat treatments are packaged
                        together at a discounted price.
                      </p>
                      <ul>
                        <li>Extra Small Area (e.g. Upper lip) from £40</li>
                        <li>Small Area (e.g. Underarms) from £50</li>
                        <li>Medium Area (e.g. Classic bikini) from £70</li>
                        <li>
                          Large Area (e.g. Half arms, Brazilian bikini) from
                          £100
                        </li>
                        <li>
                          XL Large Area (e.g. Half leg, Hollywood bikini) from
                          £130
                        </li>
                        <li>XX Large Area (e.g. Full legs) from £199</li>
                      </ul>
                      <p />
                      <p>Example package:</p>
                      <p>
                        Women’s Package (Brazilian bikini, underarms, half arms
                        and full legs)
                      </p>
                      <ul>
                        <li>Single treatment from £430</li>
                        <li>4 x treatments from £1200</li>
                        <li>8 x treatments from £2060</li>
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