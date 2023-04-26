import React from 'react'
import { Link } from 'react-router-dom'

const AblativeLaser = () => {
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
                    <Link to="/laser-skin-treatments">Laser Skin Treatments</Link>
                  </li>
                  <li className="active">
                    <a href>Ablative Laser Resurfacing</a>
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
                <h1 className="text-left">Ablative Laser Resurfacing</h1>
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
                <h2>Ablative Laser Resurfacing</h2>
              </div>
            </div>
            <div className="row overflowSlider">
              <div className="column-m-8 column-t-4 column-d-3 column slide">
                <div className="fresnel-container fresnel-greaterThanOrEqual-md">
                  <div className="glance-card">
                    <div className="glance-card__block">
                      <div className="glance-card__description">
                        <h3 className="glance-card__title">Best Results</h3>
                        <h4 className="glance-card__description">1/2</h4>
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
                        <h4 className="glance-card__description">1/2</h4>
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
                        <h4 className="glance-card__description">2 weeks +</h4>
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
                        <h4 className="glance-card__description">2 weeks +</h4>
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
                          Topical/sedative
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
                          Topical/sedative
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
                          30min - 2hrs
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
                          30min - 2hrs
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
                        <h4 className="glance-card__description">Doctor</h4>
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
                        <h4 className="glance-card__description">Doctor</h4>
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
                        <h4 className="glance-card__description">1 week</h4>
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
                        <h4 className="glance-card__description">1 week</h4>
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
                <a href="#ablative-laser-resurfacing-overview">
                  Ablative Laser Resurfacing Overview
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-does-ablative-laser-resurfacing-work">
                  How does ablative laser resurfacing work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-is-ablative-laser-resurfacing-used-for">
                  What is ablative laser resurfacing used for?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-should-i-prepare-for-ablative-laser-resurfacing">
                  How should I prepare for ablative laser resurfacing?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-happens-during-an-ablative-laser-resurfacing-treatment">
                  What happens during an ablative laser resurfacing treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-happens-after-an-ablative-laser-resurfacing-treatment">
                  What happens after an ablative laser resurfacing treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-ablative-laser-resurfacing">
                  What are the side effects and risks of ablative laser
                  resurfacing?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-does-ablative-laser-resurfacing-cost">
                  How much does ablative laser resurfacing cost?
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
                data-name="ablative-laser-resurfacing-overview"
                id="ablative-laser-resurfacing-overview"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Ablative Laser Resurfacing Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Ablative laser skin therapy, also called photofacial or
                        photorejuvenation, is an invasive skin resurfacing
                        treatment used to remove the outer (epidermal) and a
                        portion of the dermal layers of skin.
                      </p>
                      <p>
                        Examples of brands include, but are not limited to,
                        Fraxel® Re:Pair, Pixel® 2940 and 3JUVE®
                      </p>
                      <p>
                        Ablative fractional lasers lead to destruction of the
                        epidermal and a portion of the dermal skin layers. This
                        controlled, intentional injury created by skin
                        resurfacing lasers, triggering extensive skin repair.
                        During this process, new, thicker layers of skin, with
                        higher levels of collagen and elastin, are laid down.
                        The new skin will have significantly fewer lines,
                        wrinkles and pigmentation, revealing smoother, softer,
                        younger-looking skin.
                      </p>
                      <p>
                        Whilst they are far more effective than non-ablative
                        skin treatments, they have more severe side effects,
                        require a much longer recovery time and have a higher
                        risk of complications.
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
                data-name="how-does-ablative-laser-resurfacing-work"
                id="how-does-ablative-laser-resurfacing-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How does ablative laser resurfacing work?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        A laser is simply a very high-energy beam of light.
                        Different lasers can be set to different wavelengths of
                        light. This enables the practitioner to determine the
                        strength of the laser and the depth to which it
                        penetrates the skin, but they can also choose the
                        correct laser for your skin tone.
                      </p>
                      <p>
                        Ablative, or skin resurfacing lasers, deliver an intense
                        burst of laser energy to the area being treated in a
                        precise, controlled manner. The light energy is
                        transferred into heat energy within the specific layers
                        of skin. This causes the water, and therefore the cells,
                        to vapourise. This results in the epidermis and some of
                        the dermis effectively being peeled away. This
                        controlled, but intensive, skin damage leaves the skin
                        red, sore and weepy. As the saying goes “No pain, no
                        gain!” And that certainly applies to ablative laser
                        resurfacing treatments.
                      </p>
                      <p>
                        Ablative laser treatments can be fractional, where
                        columns of skin are vapourised, leaving healthy skin
                        around the columns. This is a less aggressive ablative
                        laser treatment than non-fractional ablative treatments,
                        which remove the whole area being treated (see diagram).
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
                      <p>
                        Following the intentional, controlled injury, the skin
                        repairs itself by growing new skin cells and producing
                        additional elastin and collagen. Once healed, the new
                        skin is thicker, and smoother with fewer wrinkles, scars
                        and pigmentation.
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
                data-name="what-is-ablative-laser-resurfacing-used-for"
                id="what-is-ablative-laser-resurfacing-used-for"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What is ablative laser resurfacing used for?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Ablative laser skin resurfacing treatments are best for
                        those who have significant signs of skin ageing, want
                        dramatic results, fast and those who can take 1-2 weeks
                        off work.
                      </p>
                      <p>
                        Ablative laser treatments are used to dramatically
                        improve the appearance of:
                      </p>
                      <ul>
                        <li>Deep wrinkles</li>
                        <li>Scars (including acne scars)</li>
                        <li>Warts</li>
                        <li>Enlarged pores</li>
                        <li>Dark spots and pigmentation</li>
                      </ul>
                      <p />
                      <p>
                        Ablative laser resurfacing may not be suitable if you
                        have:
                      </p>
                      <ul>
                        <li>a history of keloid scarring</li>
                        <li>An active herpes infection</li>
                        <li>Impetigo</li>
                        <li>Active acne</li>
                        <li>
                          A dark tan or black skin (nb there are certain brands
                          of laser machine which are suitable for dark skin
                          tones)
                        </li>
                        <li>Used isotretinoin in the last year</li>
                        <li>Diabetes mellitus</li>
                        <li>It is also not suitable for smokers</li>
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
                data-name="how-should-i-prepare-for-ablative-laser-resurfacing"
                id="how-should-i-prepare-for-ablative-laser-resurfacing"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      How should I prepare for ablative laser resurfacing?
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
                        <strong>4 weeks </strong>prior to your treatment, to
                        prepare your skin and to kick start the production of
                        collagen, your practitioner may recommend you use a
                        topical retinoid product alongside exfoliating acids,
                        such as alpha-hydroxy acid-based creams.
                      </p>
                      <p>
                        <strong>2 weeks</strong> prior to your treatment, your
                        practitioner may prescribe an anti-viral medicine
                        (Acyclovir) if you are prone to cold sores.They may also
                        recommend taking an oral antibiotic prior to and
                        following the treatment, to prevent a bacterial
                        infection.
                      </p>
                      <p>
                        <strong>1 week</strong> prior to your treatment you
                        should:
                      </p>
                      <p>
                        Stop taking aspirin, NSAIDs and Vitamin E supplements
                      </p>
                      <p>Complete the Fitzpatrick test and have a patch test</p>
                      <p />
                      <p>
                        NB: Before and after your ablative laser treatment you
                        need to avoid sun exposure. Ideally, you will avoid the
                        sun for at least 2 months prior to your treatment.
                        Equally, to get the best out of your laser treatment,
                        you should avoid sun exposure following your treatment.
                        Investing in, and using, a broad spectrum SPF 50 product
                        every day is advised.
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
            data-name="what-happens-during-an-ablative-laser-resurfacing-treatment"
            id="what-happens-during-an-ablative-laser-resurfacing-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>
                    What happens during an ablative laser resurfacing treatment?
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
                        {/* */}Step Two - Your Non-ablative Laser Resurfacing
                        Treatment
                      </strong>
                    </p>
                    <p>
                      Your skin will be thoroughly cleansed with an antiseptic
                      cleanser and a local anaesthetic will be administered to
                      the area being treated.
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
                        {/* */}Step Three - The Check-up
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        You should be offered a check-up a couple of days
                        following your ablative laser treatment. This will allow
                        the practitioner to check your progress and provide
                        advice. They may also prescribe a further course of
                        painkillers or steroids. It is also an opportunity for
                        you to ask any questions and raise any concerns you may
                        have.
                      </p>
                      <p>
                        If a number of laser sessions were suggested in your
                        initial consultation, your practitioner will suggest
                        when you may wish to book further treatments.
                      </p>
                    </div>
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
                    <div className="cms-content undefined">
                      <p>
                        Depending on the particular issue you were having
                        treated, you may be advised to have additional
                        treatments, 4-6 weeks from your original treatment.
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
                data-name="what-happens-after-an-ablative-laser-resurfacing-treatment"
                id="what-happens-after-an-ablative-laser-resurfacing-treatment"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What happens after an ablative laser resurfacing
                      treatment?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Ablative laser treatments, like CO2 laser, strip the
                        outer layers of the epidermis and the dermal layers of
                        skin. They are as invasive as non-surgical aesthetic
                        treatments get. You will likely need to take a week off
                        work, allowing your skin to heal.
                      </p>
                      <p>
                        Immediately after having your treatment, you will look
                        like you have severe sunburn. The treated area will be
                        red, swollen, itchy and will become blistered. Your skin
                        will remain like this for about a week.
                      </p>
                      <p>
                        If you have been given a sedative during your treatment,
                        you should ensure you have someone to drive you home.
                      </p>
                      <p>
                        Your skin will ooze, crust and then peel. The peeling
                        process indicates that your skin is healing itself. DO
                        NOT PEEL OR SCRATCH. You will be creating more damage if
                        you peel, scratch or roll the healing layers of skin.
                      </p>
                      <p>
                        It goes without saying that you should contact your
                        practitioner if you have any questions, worries or
                        concerns. Indeed, a good practitioner will be in regular
                        contact with you following your treatment.
                      </p>
                      <p>
                        <strong>Week 1 </strong>- During this week, the aim is
                        to keep your skin clean, cool, moist and lubricated.
                      </p>
                      <p>
                        Clean your skin several times a day with a sterile salt
                        solution and gauze/muslin cloth. Do not scrub. Simply
                        douse your skin with the saline solution and very gently
                        pat with the gauze. Apply a layer of petroleum jelly or
                        Aquaphor.
                      </p>
                      <p>
                        Sleep with your head and shoulders elevated and use an
                        icepack on the first few days.
                      </p>
                      <p>
                        Do not undertake any strenuous exercise. Avoid hot
                        showers and baths.
                      </p>
                      <p>
                        Do not expose your skin to <strong>any</strong> sun. The
                        aim is to keep your skin cool.
                      </p>
                      <p>
                        Keep taking any painkillers or steroids as prescribed by
                        your practitioner.
                      </p>
                      <p>
                        <strong>Week 2</strong> - Don’t undo the good work you
                        did in week 1!
                      </p>
                      <p>
                        Your skin should be healing nicely. It may remain
                        red/pink for a number of months (this is especially true
                        if you have red hair or are naturally blonde), but as
                        long as you have no oozing or raw skin, you should be
                        able to begin to wear light makeup.
                      </p>
                      <p>
                        You should still avoid strenuous exercise and anything
                        which causes your treated skin to heat up/sweat.
                      </p>
                      <p>
                        Protect your new skin. Avoid sun exposure. Wear a
                        minimum of SPF 50 everyday, not just when you are in the
                        sun. Wear a wide-brimmed hat.
                      </p>
                      <p>
                        Keep taking any painkillers or steroids as prescribed by
                        your practitioner.
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
                data-name="what-are-the-effects-and-risks-of-ablative-laser-resurfacing"
                id="what-are-the-effects-and-risks-of-ablative-laser-resurfacing"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What are the side effects and risks of ablative laser
                      resurfacing?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Aside from the expected redness, swelling, weeping skin
                        and peeling post laser resurfacing, there are other
                        potential complications to be mindful of:
                      </p>
                      <p>
                        <strong>Infection</strong> - the skin is a natural
                        barrier, protecting you from infection.Without the
                        epidermal barrier, the skin is prone to infection.
                      </p>
                      <p>
                        <strong>Skin Redness</strong> (erythma) - This can last
                        for several months.In rare cases, it can last much
                        longer.
                      </p>
                      <p>
                        <strong>Small, raised cysts </strong>(milia) - These
                        usually appear 6-8 weeks after treatment and may remain
                        for days/weeks.
                      </p>
                      <p>
                        <strong>Hyperpigmentation</strong> - For those with
                        darker skin tones, hyperpigmentation (darkening of the
                        skin) can sometimes occur.
                      </p>
                      <p>
                        <strong>Hypopigmentation</strong> - very rarely, the
                        treated skin may become lighter.
                      </p>
                      <p>
                        <strong>Scarring</strong> - very rarely, scarring of the
                        skin can occur post treatment.This can occasionally be
                        permanent.
                      </p>
                      <p>
                        Please ensure you discuss all of these potential side
                        effects and risks with your practitioner PRIOR to going
                        ahead with your treatment. You have to make and educated
                        and informed decision reagarding your treatment. At no
                        time are you obliged to go ahead, so ensure you are
                        fully aware of the benefits and risks of ablative laser
                        resurfacing.
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
                data-name="how-much-does-ablative-laser-resurfacing-cost"
                id="how-much-does-ablative-laser-resurfacing-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much does ablative laser resurfacing cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>Often at around £1000 per unit.</p>
                      <p>1 unit - cheeks</p>
                      <p>2 units - half face and chin</p>
                      <p>3 units - full face</p>
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

export default AblativeLaser