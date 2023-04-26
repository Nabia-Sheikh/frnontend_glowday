import React from 'react'
import { Link } from "react-router-dom"

const LiquidNonSurgical = () => {
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
                    <Link to="/dermal-fillers">Dermal Fillers</Link>
                  </li>
                  <li className="active">
                    <a href>Liquid / Non-surgical Facelift</a>
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
                <h1 className="text-left">Liquid / Non-surgical Facelift</h1>
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
                          12 - 18 months
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
                          12 - 18 months
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
                        <h4 className="glance-card__description">3 - 5 days</h4>
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
                          Numbing cream
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
                          Numbing cream
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
                          60 - 90 minutes
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
                          60 - 90 minutes
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
                <a href="#non-surgical-liquid-facelift-overview">
                  Non-surgical liquid facelift - Overview
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-liquid-facelifts-work">
                  How do liquid facelifts work?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#who-are-liquid-facelifts-good-for">
                  Who are liquid facelifts good for?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-do-you-prepare-for-a-liquid-facelift">
                  How do you prepare for a liquid facelift?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-happens-during-a-liquid-facelift-treatment">
                  What happens during a liquid facelift treatment?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#what-happens-after-a-liquid-facelift">
                  What happens after a liquid facelift?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__border">
                <a href="#what-are-the-side-effects-and-risks-of-liquid-facelifts">
                  What are the side effects and risks of liquid facelifts?
                </a>
              </div>
              <div className="column-t-6 column question top-questions__right">
                <a href="#how-much-does-a-liquid-facelift-cost">
                  How much does a liquid facelift cost?
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
                data-name="non-surgical-liquid-facelift-overview"
                id="non-surgical-liquid-facelift-overview"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Non-surgical liquid facelift - Overview</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        As we age, the reduction in facial fat pads and in the
                        production of
                        <a href="../../../blog/collagen-the-protein-that-keeps-us-looking-young/">
                          collagen
                        </a>
                        and elastin leads to skin losing it’s elasticity and
                        plumpness.
                      </p>
                      <p>
                        Typically,
                        <a href="../../../blog/the-effects-of-ageing-on-the-skin/">
                          people begin to notice this in their late 30s
                        </a>
                        . Skin begins to sag, the under-eye area looks tired and
                        the jawline loosens as jowls begin to form.
                      </p>
                      <p>
                        The non-surgical face lift uses a minimal amount of
                        strategically placed hyaluronic acid fillers to replace
                        the volume lost from parts of the face which result in
                        this sagging and loosening. The result is very subtle,
                        giving an overall rejuvenating and refreshing change to
                        the face.
                      </p>
                      <p>
                        There are over 60 brands of dermal filler available in
                        the UK. The most commonly used are made from hyaluronic
                        acid which is well tolerated and easily dissolved should
                        there be any problems.
                      </p>
                      <p>
                        Some of the most commonly used
                        <a href="../../../blog/hyaluronic-acid-the-magic-moisturising-molecule/">
                          hyaluronic acid
                        </a>
                        fillers are:
                      </p>
                      <p>
                        <a href="http://restylane.co.uk">Restylane</a>®,
                        <a href="http://juvederm.co.uk">Juvéderm</a>®,
                        <a href="https://www.belotero.com">Belotero®</a> and
                        <a href="https://www.teoxane.com/dermal-fillers">
                          Teosyal
                        </a>
                        ®
                      </p>
                      <p>
                        Practitioners will likely use a range of brands for
                        different treatments, based on their knowledge and
                        experience. Different hyaluronic acid products have
                        different viscosities. More gel-like products will be
                        chosen for sculpting and adding volume.
                      </p>
                      <p>
                        During the liquid facelift, small
                        <a href="../../../blog/a-guide-to-the-quantities-of-filler/">
                          volumes of filler
                        </a>
                        are
                        <a href="../../../blog/the-liquid-facelift-8-point-facelifts-explained/">
                          injected into the skin in up to 8 specific areas on
                          each side of the face
                        </a>
                        . This replaces lost volume due to a reduction in facial
                        fat pads and collagen.
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
                data-name="how-do-liquid-facelifts-work"
                id="how-do-liquid-facelifts-work"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do liquid facelifts work?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        The leading dermal fillers used by most UK practitioners
                        are hyaluronic acid-based products.
                        <a href="../../../blog/hyaluronic-acid-the-magic-moisturising-molecule/">
                          Hyaluronic acid
                        </a>
                        is a naturally occurring substance within the body,
                        which makes adverse reactions to it unlikely.
                      </p>
                      <p>
                        When injected into the skin, hyaluronic acid instantly
                        fills out hollow areas, adding volume and shape where
                        necessary
                      </p>
                      <p>
                        The 8 point approach is one technique associated with
                        the Juvéderm® brand of fillers many practitioners use to
                        achieve this liquid facelift. As the name suggests,
                        <a href="../../../blog/the-liquid-facelift-8-point-facelifts-explained/">
                          the 8-point facelift involves injecting filler into 8
                          strategic ‘lifting points
                        </a>
                        ’ as shown in the diagram below:
                      </p>
                      <figure className="lightbox lightbox--transparent lightbox--auto-height">
                        <img
                          className="lazyload"
                          src="https://cdn.sanity.io/images/iy559jeo/production/0ca2fda920524b3ef6d0e42626f752a9a700aa0c-4029x2309.png?w=768&fit=max&auto=format"
                          loading="lazy"
                          decoding="async"
                          width={768}
                          height={432}
                          alt
                        />
                      </figure>
                      <p>
                        <strong>Cheek bone:</strong> A small amount of filler
                        here enhances the cheekbone and helps reduce nasolabial
                        folds.
                      </p>
                      <p>
                        <strong>Tear trough/midface:</strong> Reduces tired,
                        hollow eyes.
                      </p>
                      <p>
                        <strong>Nasolabial folds:</strong> This often deepens
                        with age. You may or may not need additional filler here
                        if filler in 1 &amp; 2 has lifted the folds
                        sufficiently.
                      </p>
                      <p>
                        <strong>Mouth corners:</strong> A small amount of filler
                        here can lift a downturned mouth.
                      </p>
                      <p>
                        <strong>Pre-jowl:</strong> Loss of volume in the chin,
                        jaw and cheek can all lead to the formation of jowls.
                        Adding volume here will help reduce jowls.
                      </p>
                      <p>
                        <strong>Jawline: </strong> As we age, the jaw loses it’s
                        definition and squareness. Volume added here firms up
                        the jawline.
                      </p>
                      <p>
                        <strong>Lower cheek:</strong> Filler here can help
                        maintain a natural curve and structure to the cheek.
                      </p>
                      <p>
                        Depending on the degree of volume replacement needed,
                        you may not need filler injected into each of the 8
                        points. Your practitioner will be able to advise on the
                        best procedure for you.
                      </p>
                      <p>
                        The liquid facelift requires expert knowledge of the
                        anatomy of the face, the underlying nerves and blood
                        vessels. This is not a procedure you want carried out by
                        a non-medically qualified practitioner. It is imperative
                        that you choose a medically qualified, experienced
                        practitioner to treat you.
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
                data-name="who-are-liquid-facelifts-good-for"
                id="who-are-liquid-facelifts-good-for"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>Who are liquid facelifts good for?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Hyaluronic acid-based fillers can be used on adults of
                        any genders. They are suitable for those who have
                        noticed skin sagging, jowls and under-eye bags forming
                        and darkening,
                        <a href="../../../blog/the-effects-of-ageing-on-the-skin/">
                          typically those in their late 30s upwards.
                        </a>
                        ​
                      </p>
                      <p>
                        Those who have more severe skin laxity may require more
                        filler and possibly different techniques.
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
                data-name="how-do-you-prepare-for-a-liquid-facelift"
                id="how-do-you-prepare-for-a-liquid-facelift"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How do you prepare for a liquid facelift?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        In the week before the treatment, avoid taking aspirin,
                        ibuprofen, vitamin E and fish oil supplements as these
                        may increase bleeding and bruising.
                      </p>
                      <p>You can take paracetamol.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="padding-top-4 padding-bottom-4">
          <div
            data-name="what-happens-during-a-liquid-facelift-treatment"
            id="what-happens-during-a-liquid-facelift-treatment"
          >
            <div className="container">
              <div className="row">
                <div className="column">
                  <h2>What happens during a liquid facelift treatment?</h2>
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
                      It is important to understand that, whilst dermal fillers
                      are not prescription only medicines, the medication needed
                      to dissolve fillers, hyaluronidase, is. Additionally, the
                      anatomy of the face is complex, it is advisable the you
                      only allow medically qualified practitioners carry out
                      filler treatments.
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
                        {/* */}The Liquid Facelift Treatment
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        Your liquid facelift treatment will take around 60 - 90
                        minutes.
                      </p>
                      <p>
                        The first part of your treatment will be administering
                        an anaesthetic to make your treatment as comfortable as
                        possible.
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
                        {/* */}The Check-up
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        It is good practice for your practitioner to offer a
                        free check-up, two weeks after your treatment.
                      </p>
                      <p>
                        This allows them to check that the dose they
                        administered was appropriate for the agreed outcome and
                        that you are happy with your treatment.
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
                        {/* */}The Repeat Treatment
                      </strong>
                    </p>
                    <div className="cms-content undefined">
                      <p>
                        Depending on how quickly you metabolise the filler and
                        which product you were treated with, you will require a
                        repeat treatment 12-18 months after your initial
                        treatment.
                      </p>
                      <p>
                        Your practitioner will advise regarding when you may
                        require a repeat treatment
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
                data-name="what-happens-after-a-liquid-facelift"
                id="what-happens-after-a-liquid-facelift"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>What happens after a liquid facelift?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        After your treatment, you can go about your normal day.
                      </p>
                      <p>Post-treatment advice may include:</p>
                      <ul>
                        <li>
                          iced water soaks or ice packs to help to reduce
                          swelling (although this is generally not required);
                        </li>
                        <li>
                          the use of pain-killers such as paracetamol, is often
                          not required but may be used if needed for a few days
                          after treatment;
                        </li>
                        <li>
                          arnica (a homeopathic remedy) cream or tablets are
                          sometimes recommended a few days before and a few days
                          after treatment as there is some evidence that this
                          can reduce bruising.
                        </li>
                      </ul>
                      <p>
                        Bruising and swelling should go down after a couple of
                        days but can persist for a week.
                      </p>
                      <p>
                        <strong>
                          <em />
                        </strong>
                      </p>
                      <p>
                        <strong>
                          <em>
                            If you continue to experience excessive swelling,
                            pain, skin colour changes or if any blistering
                            occurs, you should contact your practitioner
                            immediately.
                          </em>
                        </strong>
                      </p>
                      <p>
                        Similarly, if you experience any delayed reactions such
                        as lumpy redness occurring any time after treatment, you
                        should contact the person who treated you immediately.
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
                data-name="what-are-the-side-effects-and-risks-of-liquid-facelifts"
                id="what-are-the-side-effects-and-risks-of-liquid-facelifts"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>
                      What are the side effects and risks of liquid facelifts?
                    </h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Depending on the area being injected, the type of filler
                        and the pain relief method being used, clients may find
                        this procedure relatively painless to uncomfortable.
                        Treatments around the nose and lips are usually more
                        painful than other areas but most clients find filler
                        treatments bearable.
                      </p>
                      <p>
                        You must discuss pain management options with your
                        practitioner and let them know if you are finding the
                        procedure too uncomfortable.
                      </p>
                      <p>
                        The obvious, immediate and most common side effect is
                        slight bleeding after the needle has been inserted into
                        the skin.
                      </p>
                      <p>
                        Other risks include bruising, tenderness, redness and
                        swelling around the injection site. These signs may take
                        2-3 days to vanish completely, especially around the
                        lips where there is little flesh and skin is tender.
                      </p>
                      <p>
                        Occasionally, a ‘bleb’ will occur. This is where the
                        filler has been injected too superficially (close to the
                        surface) and will need to be dissolved.
                      </p>
                      <p>
                        Rarely, allergic type reactions can occur after a filler
                        treatment. These include prolonged redness, swelling,
                        itching and/or hardness and bumps in the skin. Such
                        signs may appear at some or all injection points.
                        Sometimes, they can last several months or longer, but
                        this is extremely unusual.
                      </p>
                      <p>
                        Another rare side effect is occlusions. This is where
                        filler is accidentally injected into a blood vessel,
                        creating a blockage. This presents as a whitening of the
                        skin, followed by the area turning greyish-purple. If
                        left untreated, this can result in tissue loss in the
                        affected area. There have been reports of this in lip
                        and nose treatments.
                      </p>
                      <p>
                        One particular type of occlusion is an ocular occlusion.
                        This is where a blood vessel supplying the eye gets
                        blocked. This results in partial or complete blindness.
                      </p>
                      <p>
                        <strong>
                          Obviously, if you exhibit any symptoms of occlusion,
                          you need to seek the advice of your practitioner
                          and/or visit accident and emergency immediately.
                        </strong>
                      </p>
                      <p>
                        You will need to be prescribed emergency treatment
                        medicines, which is why it is important that you have
                        access to a practitioner who is able to prescribe
                        medicine.
                      </p>
                      <p>
                        As with any skin treatment, injections should be avoided
                        in areas where the skin is swollen or where infections
                        are present - e.g. active acne.
                      </p>
                      <p>
                        If you have a history of cold sores, or fever blisters
                        in the treated area, filler injections may cause them to
                        break out. In these cases, your practitioner may
                        recommend that you take a course of anti-viral medicine
                        before treatment to help reduce the likelihood of an
                        outbreak.
                      </p>
                      <p>
                        If you have a known allergy to hyaluronic fillers or any
                        of the ingredients in the filler product, you must
                        inform your practitioner. An alternative treatment will
                        need to be carried out.
                      </p>
                      <p>
                        Dermal fillers have not been tested on pregnant women.
                        No medically qualified practitioner would carry out a
                        filler treatment on a pregnant woman.
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
                data-name="how-much-does-a-liquid-facelift-cost"
                id="how-much-does-a-liquid-facelift-cost"
                className="column null"
              >
                <div className="row">
                  <div className="column column-t-4">
                    <h2>How much does a liquid facelift cost?</h2>
                  </div>
                  <div className="cms-content column column-t-8">
                    <div className="cms-content undefined">
                      <p>
                        Costs vary depending mostly on the type of dermal filler
                        used, the area of the face to be filled and the degree
                        of filling to the skin required.
                      </p>
                      <p>
                        Generally prices for dermal fillers are based upon the
                        estimated number of syringes needed to obtain the
                        required result. For the liquid facelift, on average,
                        between 2 and 4 syringes are required.
                      </p>
                      <p>
                        Typically, the types of fillers used more for facial
                        sculpting, contouring and addition of volume will tend
                        to be more expensive than those just used for treating
                        single lines.
                      </p>
                      <p>
                        A combination of fillers may also be recommended, and
                        for certain areas additional treatments with other
                        agents such as botulinum toxin (Botox®) may also be
                        suggested (especially for lines in the upper part of the
                        face).
                      </p>
                      <p>
                        In addition, different filler brands such
                        as&nbsp;Restylane®, Perlane®, Radiesse®&nbsp;and
                        Juvederm® differ in price to clinics and practitioners
                        who purchase them from the respective manufacturers.
                      </p>
                      <p>
                        Hence, overall prices may vary from £650 to over £950
                        for a liquid facelift.
                      </p>
                      <p>
                        Remember, using less filler than is actually required to
                        fill out a line or improve the contour of the face
                        properly will generally produce a less pleasing,
                        shorter-lasting effect than opting for a proper (and
                        more expensive) treatment.
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

export default LiquidNonSurgical