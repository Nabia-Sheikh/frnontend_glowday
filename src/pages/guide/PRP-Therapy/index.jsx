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
                    <a href>PRP Therapy</a>
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
                <h1 className="text-left">PRP Therapy</h1>
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
                <h2>PRP Therapy - At A Glance</h2>
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
                          4 - 6 Treatments
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
                          4 - 6 Treatments
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
                        <h4 className="glance-card__description">1 year</h4>
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
                        <h4 className="glance-card__description">1 year</h4>
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
                        <h4 className="glance-card__description">3 - 5 days</h4>
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
                        <h4 className="glance-card__description">3 - 5 days</h4>
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
                          None Topical anaesthetic
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
                          None Topical anaesthetic
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
                          30 - 60 mins
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
                          30 - 60 mins
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
                          Nurse/ Doctor/ Dentist
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
                          Nurse/ Doctor/ Dentist
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
                <a href="#what-is-prp-therapy">What is PRP therapy?</a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-vampire-facials-work">
                  How do vampire facials work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-benefits-of-a-vampire-facial">
                  What are the benefits of a vampire facial?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-you-prepare-for-prp-therapy">
                  How do you prepare for PRP therapy?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-will-happen-during-a-prp-therapy-treatment">
                  What will happen during a PRP therapy treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-happen-after-a-vampire-facial">
                  What should I do after a vampire facial?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-prp-therapy">
                  What are the side effects and risks of PRP therapy?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-does-prp-therapy-cost">
                  How much does PRP therapy cost?
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
                data-name="what-is-prp-therapy"
                id="what-is-prp-therapy"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What is PRP therapy?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        PRP (platelet-rich plasma) therapy has been used widely
                        in orthopaedic and sports medicine to treat muscle and
                        ligament injuries. More recently it has been adopted as
                        a cosmetic treatment to treat signs of ageing and
                        alopecia.
                      </p>
                      <p>
                        In 2013, Kim Kardashian made this treatment famous when
                        she posted a rather gruesome photo of her blood-covered
                        face on Instagram. What followed was an explosion in
                        customers asking for this treatment.
                      </p>
                      <p>
                        PRP therapy, also called PRP facials, ‘vampire facials’
                        and 'Dracula therapy', is a treatment which recycles
                        potent elements found naturally in blood.
                      </p>
                      <p>
                        PRP therapy brands include: Regen, GLOPRP, Angel Lift
                        and Cellenis.
                      </p>
                      <p>
                        Blood contains platelets. We are familiar with the role
                        of platelets in blood clotting, but what is probably
                        less well known is that platelets contain proteins
                        called <strong>growth factors</strong>. These growth
                        factors are potent triggers for many of the processes
                        involved in tissue growth and wound healing. It is these
                        growth factors that are harnessed and utilised in PRP
                        therapy.
                      </p>
                      <p>
                        PRP therapy is used for facial rejuvenation, improving
                        the appearance of fine lines, wrinkles and acne scars
                        and increasing skin plumpness. It can also be used to
                        decrease healing time after ablative laser treatments
                        and to treat hair loss.
                      </p>
                      <p>
                        Basically, a small amount of blood is removed from your
                        arm and then spun at high speed in a centrifuge. This
                        separates the blood into its component parts. Of
                        interest to your practitioner (and you) is the portion
                        that contains platelet-rich plasma (PRP).
                      </p>
                      <figure className="lightbox lightbox--transparent lightbox--auto-height">
                        <img
                          className="lazyload"
                          src="https://cdn.sanity.io/images/iy559jeo/production/d74ecf08c5a0250af96e12456f3e578a349dbb39-2481x1113.png?w=768&fit=max&auto=format"
                          loading="lazy"
                          decoding="async"
                          width={768}
                          height={432}
                          alt
                        />
                      </figure>
                      <p>
                        This is can then be injected directly into your skin,
                        combined with filler and injected, or applied to the
                        surface of your skin following a microneedling or laser
                        treatment.
                      </p>
                      <p>
                        There are limited widescale studies into the efficacy of
                        PRP therapy for cosmetic reasons, and only small studies
                        have been carried out to show its effectiveness in the
                        treatment of wrinkles and hair loss. There is evidence
                        that it works to promote healing, which is why it is
                        used for sports injuries, scar treatments and in
                        combination with other treatments like microneedling.
                      </p>
                      <p>
                        This Glowday Treatment Guide has been edited and
                        medically verified by
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
                data-name="how-do-vampire-facials-work"
                id="how-do-vampire-facials-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do vampire facials work?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        PRP therapy utilises your own blood to improve the
                        appearance of fine lines and wrinkles, acne scars and
                        crepey skin.
                      </p>
                      <p>
                        Your blood will be taken, and the platelet-rich plasma
                        will be harvested. This component of the blood contains
                        proteins called ‘growth factors’.
                      </p>
                      <p>
                        When injected into target areas or applied to skin that
                        has been intentionally injured during treatments like
                        microneedling, these proteins increase cell renewal and
                        repair. They also increase the volume of healthy skin
                        cells and cause them to migrate to the site of injury,
                        helping to plump up the skin.
                      </p>
                      <p>
                        Additionally, they help stimulate fibroblasts to
                        increase the production of thicker collagen fibres (the
                        scaffolding of the skin). They also stimulate
                        pre-adipocytes (precursors to fat cells). This is good
                        news in the face, as the loss of fat pads in the cheeks
                        is one of the key reasons for skin laxity and sagging.
                      </p>
                      <p>
                        Production of hyaluronic acid in the skin is also
                        increased. This acid improves the skin's moisture
                        levels, stimulates cell actitvity, has antioxidant
                        properties and plumps and smooths the skin.
                      </p>
                      <p>
                        PRP therapy is typically used on the face, particularly
                        around the eyes, mouth and nose. It can also be used on
                        the backs of the hands and the décolletage to rejuvenate
                        skin.
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
                data-name="what-are-the-benefits-of-a-vampire-facial"
                id="what-are-the-benefits-of-a-vampire-facial"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What are the benefits of a vampire facial?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Vampire facials are appropriate for all adults and skin
                        types. They improve the appearance of fine lines,
                        wrinkles, acne scars and crepey skin.
                      </p>
                      <p>
                        PRP therapy can also be used to help treat hair loss in
                        men and women.
                      </p>
                      <p />
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
                data-name="how-do-you-prepare-for-prp-therapy"
                id="how-do-you-prepare-for-prp-therapy"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do you prepare for PRP therapy?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        1 week prior to your PRP facial, you should avoid taking
                        NSAIDs.
                      </p>
                      <p>
                        Other than that, there are no specific steps to take -
                        unless you are combining PRP therapy with microneedling
                        or laser treatments.
                      </p>
                      <p>
                        It is a good idea to arrive at your appointment with
                        thoroughly cleansed skin and no makeup.
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
            data-name="what-will-happen-during-a-prp-therapy-treatment"
            id="what-will-happen-during-a-prp-therapy-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>What will happen during a PRP therapy treatment?</h2>
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
                      It is important to understand that, whilst PRP therapy is
                      not a prescription-based treatment, choosing a medically
                      qualified practitioner is best since blood will need to be
                      drawn from your arm. Medically trained practitioners will
                      also use medical needling devices that penetrate deeper
                      into the skin than non-medically qualified practitioners.
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
                        {/* */}The PRP Treatment
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        What happens during your treatment depends on whether
                        you are combining PRP therapy with other complementary
                        treatments or not.
                      </p>
                      <p />
                      <figure className="lightbox">
                        <button type="button" title="expand the image">
                          <img
                            alt
                            srcSet="
                            https://cdn.sanity.io/images/iy559jeo/production/3cfc5edf8fddef2c7b7f04d532d6dbbbbe651148-813x717.png?w=320&auto=format           320w,
                            https://cdn.sanity.io/images/iy559jeo/production/3cfc5edf8fddef2c7b7f04d532d6dbbbbe651148-813x717.png?w=320&auto=format&dpr=2 640w,
                            https://cdn.sanity.io/images/iy559jeo/production/3cfc5edf8fddef2c7b7f04d532d6dbbbbe651148-813x717.png?w=768&auto=format           768w
                          "
                            src="https://cdn.sanity.io/images/iy559jeo/production/3cfc5edf8fddef2c7b7f04d532d6dbbbbe651148-813x717.png?w=320&auto=format&dpr=2"
                            loading="lazy"
                            width={768}
                            height={432}
                            decoding="async"
                            className="clickable"
                          />
                        </button>
                        <span className="bold text-center">
                          Click on the image to expand
                        </span>
                      </figure>
                      <div className="modal" role="dialog">
                        <div
                          className="modal__dialog column-m-11 modal__blog--image"
                          style={{ margin: "0 auto" }}
                        >
                          <button
                            className="button--modal__close round-button"
                            type="button"
                            title="close the modal"
                            data-testid
                          >
                            <img
                              src="../../static/img/icons/white/close.svg"
                              alt="icon for close the modal"
                              width={24}
                              height={24}
                              className="round-image"
                            />
                          </button>
                          <img
                            src="https://cdn.sanity.io/images/iy559jeo/production/3cfc5edf8fddef2c7b7f04d532d6dbbbbe651148-813x717.png?w=768&auto=format&dpr=2"
                            alt
                            loading="lazy"
                            height={576}
                            className="lazyload"
                            decoding="async"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column column-t-4 column-t-offset-1">
                  <div className="step-definition gray-step cms-content">
                    <p>
                      <strong>
                        Step
                        {/* */}Three{/* */}-{/* */}
                        {/* */}Repeat Treatments
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        Improvements in your skin will be visible within a few
                        weeks.
                      </p>
                      <p>
                        Depending on the advice given by your practitioner, you
                        may be advised to book a course of treatments - usually
                        4-6, at least 8 weeks apart. Alternatively, a specific
                        maintenance programme might be recommended.
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
                data-name="what-happen-after-a-vampire-facial"
                id="what-happen-after-a-vampire-facial"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What should I do after a vampire facial?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        <strong>Do:</strong>
                      </p>
                      <ul>
                        <li>Avoid the sun</li>
                        <li>Avoid sunscreen immediately after</li>
                        <li>Use collagen-stimulating peptides</li>
                        <li>Keep hydrated</li>
                      </ul>
                      <p />
                      <p>
                        <strong>Don’t:</strong>
                      </p>
                      <ul>
                        <li>
                          Use ‘active’ skincare products (such as retinols, AHAs
                          and acids) until recommended by your practitioner -
                          usually 5 days post-treatment
                        </li>
                        <li>Use makeup for 24-48 hours after treatment</li>
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
                data-name="what-are-the-side-effects-and-risks-of-prp-therapy"
                id="what-are-the-side-effects-and-risks-of-prp-therapy"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What are the side effects and risks of PRP therapy?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Your skin is likely to appear red and feel more
                        sensitive post-treatment. Your skin may feel tight and
                        uncomfortable. Any swelling, itchiness and redness
                        should subside within a few days.
                      </p>
                      <p>
                        Additionally, because the injections contain your own
                        blood products, there is less risk of an allergic
                        reaction. There is a risk of infection, however, so
                        using a medically qualified, appropriately trained
                        practitioner is essential.
                      </p>
                      <p>PRP therapy is unsuitable for anyone who has:</p>
                      <ul>
                        <li>Liver pathology</li>
                        <li>
                          A blood-borne disease such as Hepatitis C or HIV
                        </li>
                        <li>Prescribed blood thinning medication</li>
                        <li>Open cuts, abrasions and wounds</li>
                        <li>Active cold sores or skin infections</li>
                        <li>Keloid or hypertrophic scars</li>
                        <li>Poor wound healing</li>
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
                data-name="how-much-does-prp-therapy-cost"
                id="how-much-does-prp-therapy-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much does PRP therapy cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        PRP facials should only be carried out by fully
                        medically qualified practitioners. The cost of your
                        treatment will vary depending on the treatment and
                        location.
                      </p>
                      <p>As a guide, you should expect to pay:</p>
                      <p>£300 PRP therapy injections</p>
                      <p>£550 microneedling treatment + PRP facial</p>
                      <p>£700 PRP + filler facelift</p>
                      <p>£450 PRP hair treatment</p>
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