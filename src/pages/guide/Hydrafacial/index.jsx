import React from "react"
import { Link } from "react-router-dom"
const index = () => {
  return (
    <div id="__next">
      <main id="main_content">
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
                      <li className="active">
                        <a href>HydraFacial™ </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner banner__background-slant--bronze-light">
              <div className="banner__image" />
              <div className="banner__content text-center">
                <div className="container">
                  <div className="column">
                    <h1 className="text-left">HydraFacial™ </h1>
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
                          <span className="author-details__label">
                            Written by:
                          </span>
                          <span className="author-details__name">
                            Hannah Russell
                          </span>
                        </div>
                      </div>
                      <div className="author-details margin-bottom-1 margin-bottom__l-0">
                        <img
                          className="author-details__image margin-right lazyload round-image"
                          src="https://cdn.sanity.io/images/iy559jeo/production/bcab3769cef9e8ca5c02e9547de5f683756f4951-3337x5000.jpg?rect=0,0,3337,3337&w=138&h=138&auto=format"
                          alt="Dr Nestor Demosthenous"
                          width={138}
                          height={138}
                        />
                        <div className="author-details__details">
                          <span className="author-details__label">
                            Verified by:
                          </span>
                          <span className="author-details__name">
                            Dr Nestor Demosthenous
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
                  <div
                    className="column"
                    id="at-a-glance"
                    data-name="at-a-glance"
                  >
                    <h2>HydraFacial - At a Glance</h2>
                  </div>
                </div>
                <div className="row overflowSlider">
                  <div className="column-m-8 column-t-4 column-d-3 column slide">
                    <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                      <div className="glance-card">
                        <div className="glance-card__block">
                          <div className="glance-card__description">
                            <h3 className="glance-card__title">Best Results</h3>
                            <h4 className="glance-card__description">
                              6 treatments, 2 weeks apart
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
                    <div className="fresnel-container fresnel-lessThan-md ">
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
                              6 treatments, 2 weeks apart
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column-m-8 column-t-4 column-d-3 column slide">
                    <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                      <div className="glance-card">
                        <div className="glance-card__block">
                          <div className="glance-card__description">
                            <h3 className="glance-card__title">
                              Duration of Results
                            </h3>
                            <h4 className="glance-card__description">
                              7 - 10 days
                            </h4>
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
                    <div className="fresnel-container fresnel-lessThan-md ">
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
                            <h4 className="glance-card__description">
                              7 - 10 days
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column-m-8 column-t-4 column-d-3 column slide">
                    <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                      <div className="glance-card">
                        <div className="glance-card__block">
                          <div className="glance-card__description">
                            <h3 className="glance-card__title">
                              Treatment recovery
                            </h3>
                            <h4 className="glance-card__description">None</h4>
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
                    <div className="fresnel-container fresnel-lessThan-md ">
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
                            <h4 className="glance-card__description">None</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column-m-8 column-t-4 column-d-3 column slide">
                    <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
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
                    <div className="fresnel-container fresnel-lessThan-md ">
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
                    <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
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
                    <div className="fresnel-container fresnel-lessThan-md ">
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
                    <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                      <div className="glance-card">
                        <div className="glance-card__block">
                          <div className="glance-card__description">
                            <h3 className="glance-card__title">
                              Procedure time
                            </h3>
                            <h4 className="glance-card__description">30-60</h4>
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
                    <div className="fresnel-container fresnel-lessThan-md ">
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
                            <h3 className="glance-card__title">
                              Procedure time
                            </h3>
                            <h4 className="glance-card__description">30-60</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column-m-8 column-t-4 column-d-3 column slide">
                    <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                      <div className="glance-card">
                        <div className="glance-card__block">
                          <div className="glance-card__description">
                            <h3 className="glance-card__title">
                              Skin specialist
                            </h3>
                            <h4 className="glance-card__description">
                              Aesthetician
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
                    <div className="fresnel-container fresnel-lessThan-md ">
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
                            <h3 className="glance-card__title">
                              Skin specialist
                            </h3>
                            <h4 className="glance-card__description">
                              Aesthetician
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column-m-8 column-t-4 column-d-3 column slide">
                    <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                      <div className="glance-card">
                        <div className="glance-card__block">
                          <div className="glance-card__description">
                            <h3 className="glance-card__title">Back to work</h3>
                            <h4 className="glance-card__description">
                              Same day
                            </h4>
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
                    <div className="fresnel-container fresnel-lessThan-md ">
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
                            <h4 className="glance-card__description">
                              Same day
                            </h4>
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
                    <a href="#what-is-a-hydrafacial">What is a HydraFacial™?</a>
                  </div>
                  <div className="column-t-6 column question top-questions__right">
                    <a href="#how-does-a-hydrafacial-work">
                      How does a HydraFacial™ work?
                    </a>
                  </div>
                  <div className="column-t-6 column question top-questions__border">
                    <a href="#who-is-a-hydrafacial-for">
                      Who is a HydraFacial™ for?
                    </a>
                  </div>
                  <div className="column-t-6 column question top-questions__right">
                    <a href="#how-do-you-prepare-for-a-hydrafacial">
                      How do you prepare for a HydraFacial™?
                    </a>
                  </div>
                  <div className="column-t-6 column question top-questions__border">
                    <a href="#what-happens-during-a-hydrafacial">
                      What happens during a HydraFacial™?
                    </a>
                  </div>
                  <div className="column-t-6 column question top-questions__right">
                    <a href="#what-happens-after-a-hydrafacial-treatment">
                      What happens after a HydraFacial™ treatment?
                    </a>
                  </div>
                  <div className="column-t-6 column question top-questions__border">
                    <a href="#what-are-the-risks-and-side-effects-of-hydrafacial-treatments">
                      What are the risks and side effects of HydraFacial™
                      treatments?
                    </a>
                  </div>
                  <div className="column-t-6 column question top-questions__right">
                    <a href="#how-much-does-a-hydrafacial-cost">
                      How much does a HydraFacial™ cost?
                    </a>
                  </div>
                </div>
              </div>
              <div className="fresnel-container fresnel-greaterThanOrEqual-bigmd " />
            </section>
            <section className="padding-top-4 padding-bottom-4">
              <div className="container">
                <div className="row">
                  <div
                    data-name="what-is-a-hydrafacial"
                    id="what-is-a-hydrafacial"
                    className="column null"
                  >
                    <div className="row">
                      <div className="column column-t-4">
                        <h2>What is a HydraFacial™?</h2>
                      </div>
                      <div className="cms-content column column-t-8">
                        <div className="cms-content undefined">
                          <p>
                            <a href="https://hydrafacial.com">HydraFacial</a>
                            <a href="https://hydrafacial.com">
                              <sup>TM</sup>
                            </a>{" "}
                            is an extremely popular treatment. So much so that
                            it is carried out every 15s around the world.
                          </p>
                          <p>
                            <a href="../../blog/hydrafacial-the-5-step-facial-we-can-t-get-enough-of/">
                              HydraFacial is a completely non-invasive,
                              multi-stage facial suitable for all skin types,
                              tones and ages.
                            </a>{" "}
                            Sometimes called hydradermabrasion, this pain-free,
                            relaxing treatment is carried out using a specially
                            developed machine and different handpiece tips which
                            cleanse, exfoliate, extract and hydrate the skin.{" "}
                          </p>
                          <p>
                            Effectively, hydradermabrasion removes the dull,
                            dead upper layer of skin, clearing out pores whilst
                            continuously infusing skin with a range of
                            intensive, active, hydrating serums.
                          </p>
                          <p>
                            The HydraFacial<sup>TM </sup>targets a number of
                            skin concerns, including:
                          </p>
                          <ul>
                            <li>Hyperpigmentation</li>
                            <li>Oily skin</li>
                            <li>Congested pores</li>
                            <li>Fine lines</li>
                            <li>Dull skin</li>
                          </ul>
                          <p>
                            The effects are immediate, with skin looking
                            brighter, tighter, clearer and hydrated. A small
                            independent study found that, after a course of 6
                            hydradermabrasion treatments, skin thickness
                            increased, more <Link to="/article">collagen</Link>
                            fibres were present and there was a decrease in fine
                            lines, pore size and hyperpigmentation.
                          </p>
                          <p>
                            Hydradermabrasion treatments like HydraFacial
                            <sup>TM </sup>can be combined with more active,
                            prescribed skincare products, for those who need
                            slightly more aggressive treatments. It is
                            recommended that these kinds of treatments are
                            carried out by medically-qualified practitioners.
                          </p>
                          <p>
                            <Link to="/practinioner">Dr Nestor</Link> has kindly
                            edited and verified the medical accuracy of the
                            Glowday HydraFacial<sup>TM </sup>guide.
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
                    data-name="how-does-a-hydrafacial-work"
                    id="how-does-a-hydrafacial-work"
                    className="column null"
                  >
                    <div className="row">
                      <div className="column column-t-4">
                        <h2>How does a HydraFacial™ work?</h2>
                      </div>
                      <div className="cms-content column column-t-8">
                        <div className="cms-content undefined">
                          <p>
                            The{" "}
                            <a href="https://hydrafacial.com">
                              HydraFacial<sup>TM</sup>
                            </a>
                            uses a specially developed delivery and suction
                            device which has various tips suited to each stage
                            of the treatment.
                          </p>
                          <p>
                            The tips simultaneously deliver the HydraFacial
                            <sup>TM </sup>products such as cleansing balms,{" "}
                            <a href="../../blog/ahas-and-bhas-lifting-the-lid-on-exfoliants/">
                              exfoliating acids such as glycolic and salicylic
                              acids
                            </a>
                            , hydrating hyaluronic acid and peptide serums,
                            whilst massaging and suctioning the skin to dislodge
                            impurities from the pores and remove the dull, dead
                            skin cells from the surface of the skin.
                          </p>
                          <p>
                            The process is multi-stage, with the tip of the
                            handpiece being changed between each step. The
                            HydraFacial<sup>TM</sup> can also be combined with
                            other treatments, such as{" "}
                            <a href="../../blog/led-therapy-clearing-up-skin-issues-with-light/">
                              LED light therapy
                            </a>
                            , to address specific skin concerns.
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
                    data-name="who-is-a-hydrafacial-for"
                    id="who-is-a-hydrafacial-for"
                    className="column null"
                  >
                    <div className="row">
                      <div className="column column-t-4">
                        <h2>Who is a HydraFacial™ for?</h2>
                      </div>
                      <div className="cms-content column column-t-8">
                        <p>
                          <a href="https://hydrafacial.com">HydraFacials</a>
                          <a href="https://hydrafacial.com">
                            <sup>TM</sup>
                          </a>{" "}
                          are suitable for adults of all skin types and tones.
                          The treatment protocol can be adapted for those with
                          acne, mild rosacea, congested skin and a range of
                          other skin concerns.
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
                    data-name="how-do-you-prepare-for-a-hydrafacial"
                    id="how-do-you-prepare-for-a-hydrafacial"
                    className="column null"
                  >
                    <div className="row">
                      <div className="column column-t-4">
                        <h2>How do you prepare for a HydraFacial™?</h2>
                      </div>
                      <div className="cms-content column column-t-8">
                        <div className="cms-content undefined">
                          <p>6 months before your treatment:</p>
                          <ul>
                            <li>Stop any isotretinoin medication</li>
                          </ul>
                          <p />
                          <p>1 month before your treatment:</p>
                          <ul>
                            <li>Avoid any medium-depth peels</li>
                          </ul>
                          <p />
                          <p>2 days before your treatment:</p>
                          <ul>
                            <li>Stop using retinoids</li>
                            <li>Avoid using exfoliating treatments</li>
                            <li>Do not wax or use depilatory creams</li>
                            <li>Do not tan, use tanning creams or sprays</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="padding-top-4 padding-bottom-4">
              <div
                data-name="what-happens-during-a-hydrafacial"
                id="what-happens-during-a-hydrafacial"
              >
                <div className="container">
                  <div className="row">
                    <div className="column">
                      <h2>What happens during a HydraFacial™?</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column column-t-4  column-t-offset-1">
                      <div className="step-definition gray-step cms-content">
                        <p>
                          <strong>Step One Consultation and Consent</strong>
                        </p>
                        <div className="cms-content undefined">
                          <p>
                            On arrival at the clinic, your practitioner will
                            complete a detailed personal details and medical
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
                    <div className="column column-t-4  column-t-offset-2">
                      <div className="step-definition gray-step cms-content">
                        <p>
                          <strong>Step Two Your Treatment</strong>
                        </p>
                        <div className="cms-content undefined">
                          <p>
                            Your practitioner may ask to take a ‘before’ photo.
                          </p>
                          <p>
                            You will then lay on the treatment bed. Your face
                            will be cleansed and possibly steamed, to open pores
                            and soften any dirt in pores.
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
                    data-name="what-happens-after-a-hydrafacial-treatment"
                    id="what-happens-after-a-hydrafacial-treatment"
                    className="column null"
                  >
                    <div className="row">
                      <div className="column column-t-4">
                        <h2>What happens after a HydraFacial™ treatment?</h2>
                      </div>
                      <div className="cms-content column column-t-8">
                        <div className="cms-content undefined">
                          <p>
                            After your{" "}
                            <a href="https://hydrafacial.com">
                              HydraFacial<sup>TM</sup>
                            </a>
                            , you can go about your normal day and you should
                            experience no adverse effects. It is more than
                            likely that your skin will look plump, hydrated and
                            clearer than before your treatment.
                          </p>
                          <p>
                            <strong>Do:</strong>
                          </p>
                          <ul>
                            <li>Avoid the sun</li>
                            <li>Apply sunscreen</li>
                            <li>Use collagen-stimulating peptides</li>
                            <li>Keep hydrated</li>
                          </ul>
                          <p>
                            <strong>Don’t:</strong>
                          </p>
                          <ul>
                            <li>
                              Use ‘active’ skin care products (retinols, AHAs,
                              acids) until recommended by your practitioner -
                              usually after 5 days post-treatment
                            </li>
                            <li>Use make up for 24-48 hours after treatment</li>
                            <li>
                              Do strenuous exercise, use saunas or take hot
                              showers
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
                    data-name="what-are-the-risks-and-side-effects-of-hydrafacial-treatments"
                    id="what-are-the-risks-and-side-effects-of-hydrafacial-treatments"
                    className="column null"
                  >
                    <div className="row">
                      <div className="column column-t-4">
                        <h2>
                          What are the risks and side effects of HydraFacial™
                          treatments?
                        </h2>
                      </div>
                      <div className="cms-content column column-t-8">
                        <div className="cms-content undefined">
                          <p>
                            No adverse reactions to{" "}
                            <a href="https://hydrafacial.com">
                              HydraFacial<sup>TM</sup>
                            </a>
                            treatments have been reported.
                          </p>
                          <p>
                            Some people experience mild redness immediately
                            following the treatment, but this is short-lived.
                          </p>
                          <p>
                            HydraFacial<sup>TM</sup> is not suitable for those
                            who:
                          </p>
                          <ul>
                            <li>Have active rashes or skin infections</li>
                            <li>Have sunburn</li>
                            <li>Have severe rosacea</li>
                            <li>Are pregnant or breastfeeding</li>
                            <li>Are on isotretinoin medication</li>
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
                    data-name="how-much-does-a-hydrafacial-cost"
                    id="how-much-does-a-hydrafacial-cost"
                    className="column null"
                  >
                    <div className="row">
                      <div className="column column-t-4">
                        <h2>How much does a HydraFacial™ cost?</h2>
                      </div>
                      <div className="cms-content column column-t-8">
                        <div className="cms-content undefined">
                          <p>
                            The cost of a HydraFacial<sup>TM</sup> depends on
                            the type you opt for and where in the country you
                            are.
                          </p>
                          <p>
                            HydraFacial<sup>TM</sup> Express ranges from £80 -
                            £120
                          </p>
                          <p>
                            HydraFacial<sup>TM</sup> Health for Life ranges from
                            £100 - £150
                          </p>
                          <p>Additional Boosters cost more</p>
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
                        <h2>Glowday Disclaimer </h2>
                      </div>
                      <div className="cms-content column column-t-8">
                        <div className="cms-content undefined">
                          <p>
                            All information in our Glowday Treatment Guides and
                            blog articles is intended for reference and
                            information. The information given here is to help
                            you make informed decisions when considering the
                            wide range of non-surgical aesthetic treatments
                            available.{" "}
                          </p>
                          <p>
                            It is NOT intended as medical advice. Any reliance
                            placed by you on the information contained within
                            the Glowday Treatment Guides, Glowday blog articles
                            or on any of Glowday.com is done by you at your own
                            risk.{" "}
                          </p>
                          <p>
                            Before undergoing any non-surgical cosmetic
                            treatment mentioned anywhere on Glowday.com, you
                            should fully consult with an appropriately qualified
                            and accredited practitioner who is properly trained
                            in and fully insured to conduct the treatment you
                            are interested in. Neither the author of the guides
                            or blog articles, or the practitioner who has
                            verified the guides nor Glowery Limited can be held
                            responsible or liable for any loss or claim arising
                            from the use or misuse of the content of
                            Glowday.com.
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
      </main>
    </div>
  )
}
export default index
