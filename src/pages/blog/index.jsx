import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Categories from "../../components/Categories"
import { useRef } from "react"
import axios from "../../utils/axios"
import Anti from "./topCategories/Anti"
import Fillers from "./topCategories/Fillers"
import ChemPeels from "./topCategories/ChemPeels"
import SkinCare from "./topCategories/SkinCare"
import Laser from "./topCategories/Laser"
import TreatGuide from "./TreatGuide"

const Blog = () => {
  const [state, setState] = useState(null)
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState("")

  const getTopBlogs = async () => {
    setLoading(true)
    setMsg("")
    setState(null)
    try {
      const response = await axios.get("/blogs/top")

      if (response.data.message) {
        setMsg(response.data.message)
        return setLoading(false)
      }
      setState(response.data.blogs[0].data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getTopBlogs()
  }, [])

  const scrollContainer = useRef(null)

  const handlePrevArrowClick = () => {
    const cardWidth = scrollContainer.current.firstElementChild.clientWidth
    // scrollContainer.current.scrollLeft -= cardWidth
    scrollContainer.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    })
  }

  const handleNextArrowClick = () => {
    const cardWidth = scrollContainer.current.firstElementChild.clientWidth
    // scrollContainer.current.scrollLeft += cardWidth
    scrollContainer.current.scrollBy({
      left: +cardWidth,
      behavior: "smooth",
    })
  }

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
                      <li className="active">
                        <Link to="/blog">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner container banner__blog--page">
              <div className="banner__image">
                <img
                  srcset="https://cdn.sanity.io/images/iy559jeo/production/eb554c0b903f62eb9534e5c9650fe180151350f5-5540x3693.jpg?w=320&amp;auto=format 320w, https://cdn.sanity.io/images/iy559jeo/production/eb554c0b903f62eb9534e5c9650fe180151350f5-5540x3693.jpg?w=320&amp;auto=format&amp;dpr=2 480w, https://cdn.sanity.io/images/iy559jeo/production/eb554c0b903f62eb9534e5c9650fe180151350f5-5540x3693.jpg?w=320&amp;auto=format&amp;dpr=3 640w, https://cdn.sanity.io/images/iy559jeo/production/eb554c0b903f62eb9534e5c9650fe180151350f5-5540x3693.jpg?w=768&amp;auto=format 768w, https://cdn.sanity.io/images/iy559jeo/production/eb554c0b903f62eb9534e5c9650fe180151350f5-5540x3693.jpg?w=768&amp;auto=format&amp;dpr=2 1536w, "
                  src="https://cdn.sanity.io/images/iy559jeo/production/eb554c0b903f62eb9534e5c9650fe180151350f5-5540x3693.jpg?w=768&amp;auto=format&amp;dpr=2"
                  alt=""
                  loading="eager"
                  decoding="async"
                  width="1600"
                  height="900"
                />
              </div>
              <div className="banner__content text-center">
                <div className="container">
                  <h1 className="boldest default-font">In the Glow</h1>
                </div>
              </div>
            </div>
            <div className="container blog-grid blog-grid--wrap padding-top__l-2">
              {!loading && <Categories />}

              <div className="column-m-12 column-d-9 column-d-order-1 margin-bottom-2 margin-bottom__d-0 padding-left__l-1 padding-right__l-1 padding-left__d-0 padding-right__d-0">
                <div className="title title--smaller column">
                  <h2 className="padding-left__t-3">Latest Articles</h2>
                </div>
                <div className="margin-right__l-1 margin-left__l-0">
                  {loading ? (
                    <div
                      className="padding-left-1 padding-top-5 "
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "auto",
                      }}
                    >
                      <div className="spinner">
                        <div />
                        <div />
                        <div />
                        <div />
                      </div>
                    </div>
                  ) : (
                    <div className="container">
                      <div className="no-style margin-left__l-3 margin-right__l-3">
                        <div className="blog-article-card blog-article-card-featured ">
                          <div className="blog-article-card__image margin-bottom-1">
                            <Link to={`/blog/${state[0].slug}`}>
                              <div
                                style={{
                                  display: "inline-block",
                                  maxWidth: "100%",
                                  overflow: "hidden",
                                  position: "relative",
                                  boxSizing: "border-box",
                                  margin: 0,
                                }}
                              >
                                <div
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    maxWidth: "100%",
                                  }}
                                >
                                  <img
                                    alt={state[0].title}
                                    aria-hidden="true"
                                    src={state[0].imgUrl}
                                    style={{
                                      maxWidth: "100%",
                                      display: "block",
                                      margin: 0,
                                      border: "none",
                                      padding: 0,
                                    }}
                                  />
                                </div>
                                <img
                                  alt={state[0].title}
                                  src={state[0].imgUrl}
                                  decoding="async"
                                  data-nimg="intrinsic"
                                  style={{
                                    position: "absolute",
                                    inset: 0,
                                    boxSizing: "border-box",
                                    padding: 0,
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: 0,
                                    height: 0,
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                    objectFit: "cover",
                                    filter: "none",
                                    backgroundSize: "cover",
                                    backgroundImage: "none",
                                    backgroundPosition: "0% 0%",
                                  }}
                                />
                                <noscript />
                              </div>
                            </Link>
                          </div>
                          <div className="blog-article-card__body  padding-left-1 padding-top-1 padding-right-1 padding-bottom-1 padding-left__d-2 padding-top__d-2 padding-right__d-2 padding-bottom__d-2">
                            <Link to={`/blog/${state[0].slug}`}>
                              <h3 className="margin-bottom__l-1">
                                {state[0].title}
                              </h3>
                              <p className="blog-article-card__summary">
                                {state[0].summary}
                              </p>
                            </Link>
                            <Link
                              to={`
                              /blog/${state[0].author.slug}
                              `}
                            >
                              <div className="author-details margin-bottom-1 margin-bottom__l-0 margin-right__l-0">
                                <div className="author-details__details">
                                  <div className="author-details__date">
                                    {
                                      // Random read time generator for demo purposes b/w 1-5 mins
                                      Math.floor(Math.random() * 5) +
                                        1 +
                                        " min read"
                                    }

                                    {/* <span className="blog-article-card__read-time">
                                    4 min read
                                  </span> */}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="blog-grid row--middle column--relative">
                        <div
                          className="prev-blog-article custom-arrow"
                          onClick={handlePrevArrowClick}
                        >
                          <button type="button" className="prev-arrow">
                            <span className="sr-only">previous</span>
                          </button>
                        </div>
                        <div
                          className="row--middle column--relative overflowSlider row--no-wrap filter-gradient  disable-scrollbars margin-left__l-2 margin-right__t-2"
                          ref={scrollContainer}
                        >
                          {state.slice(1).map((blog, index) => {
                            return (
                              <div className="column column-t-6 column-d-4 slide no-style">
                                <div className="blog-article-card null">
                                  <div className="blog-article-card__image margin-bottom-1">
                                    <Link to={`/blog/${blog.slug}`}>
                                      <div
                                        style={{
                                          display: "inline-block",
                                          maxWidth: "100%",
                                          overflow: "hidden",
                                          position: "relative",
                                          boxSizing: "border-box",
                                          margin: 0,
                                        }}
                                      >
                                        <div
                                          style={{
                                            boxSizing: "border-box",
                                            display: "block",
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <img
                                            alt={blog.title}
                                            aria-hidden="true"
                                            src={blog.imgUrl}
                                            style={{
                                              maxWidth: "100%",
                                              display: "block",
                                              margin: 0,
                                              border: "none",
                                              padding: 0,
                                            }}
                                          />
                                        </div>
                                        <img
                                          alt={blog.title}
                                          src={blog.imgUrl}
                                          decoding="async"
                                          data-nimg="intrinsic"
                                          style={{
                                            position: "absolute",
                                            inset: 0,
                                            boxSizing: "border-box",
                                            padding: 0,
                                            border: "none",
                                            margin: "auto",
                                            display: "block",
                                            width: 0,
                                            height: 0,
                                            minWidth: "100%",
                                            maxWidth: "100%",
                                            minHeight: "100%",
                                            maxHeight: "100%",
                                            objectFit: "cover",
                                            filter: "none",
                                            backgroundSize: "cover",
                                            backgroundImage: "none",
                                            backgroundPosition: "0% 0%",
                                          }}
                                        />
                                        <noscript />
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="blog-article-card__body ">
                                    <span className="uppercase blog-article-card__category-name bold">
                                      {blog.category.name}
                                    </span>
                                    <Link to={`/blog/${blog.slug}`}>
                                      <h3 className="margin-bottom__l-1">
                                        {blog.title}
                                      </h3>
                                      <p className="blog-article-card__summary">
                                        {blog.summary}
                                      </p>
                                    </Link>
                                    <Link
                                      to={`/blog/authors/${blog.author.slug}`}
                                    >
                                      <div className="author-details margin-bottom-1 margin-bottom__l-0 margin-right__l-0">
                                        <img
                                          className="author-details__image margin-right round-image lazyloaded"
                                          src={blog.author.imgUrl}
                                          alt={blog.author.name}
                                          width={138}
                                          height={138}
                                        />
                                        <div className="author-details__details">
                                          <div className="author-details__name">
                                            {blog.author.name}
                                          </div>
                                          <div className="author-details__date">
                                            {
                                              // Random read time generator for demo purposes b/w 1-5 mins
                                              Math.floor(Math.random() * 5) +
                                                1 +
                                                " min read"
                                            }
                                            {/* <span className="blog-article-card__read-time">
                                                6 min read
                                              </span> */}
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        <div
                          className="next-blog-article custom-arrow"
                          onClick={handleNextArrowClick}
                        >
                          <button type="button" className="next-arrow">
                            <span className="sr-only">next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <TreatGuide />
            <Anti />
            <Fillers />
            <SkinCare />
            <ChemPeels />
            <Laser />

            <section className="section section__charcoal">
              <div className="container">
                <div className="newsletter-signup charcoal-dark column-t-10 column-d-12">
                  <div className="row">
                    <div className="column column-d-9">
                      <div className="padding-left__t-1 padding-right__t-1 column-d-10">
                        <div className="newsletter-signup__text text__t-center text-left__l ">
                          <div className="border-bottom border-bottom-t-none margin-bottom-1 ">
                            <h3>Stay in the Glow</h3>
                          </div>
                          <p>
                            Want to stay in the know with our latest blog posts.
                            <br className="hide-on-mobile" />
                            Subscribe to our newsletter below:
                          </p>
                          <p></p>
                          <form action="#">
                            <div className="field">
                              <label
                                htmlFor="newsletter_email"
                                className="sr-only"
                              >
                                Email
                              </label>
                              <input
                                type="text"
                                name="email"
                                id="newsletter_email"
                                placeholder="Enter your email here"
                              />
                            </div>
                            <div className="field">
                              <button
                                className="button button--fullwidth"
                                type="submit"
                                data-testid="newsletter-signup"
                                title="Subscribe"
                              >
                                Subscribe
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="column column-d-3 newsletter-signup__social text__t-center">
                      <p>
                        Stay up to date with all the things #Glowday via our
                        social channels.
                      </p>
                      <div className="newsletter-signup__links margin-bottom__t-1">
                        <div>
                          <a href="https://www.instagram.com/glowday_pro/">
                            <img
                              src="../static/img/icons/white/instagram.svg"
                              alt="Instagram icon"
                              width="32"
                              height="35"
                            />
                          </a>
                        </div>
                        <div>
                          <a href="https://www.facebook.com/GlowdayOfficial">
                            <img
                              src="../static/img/icons/white/facebook.svg"
                              alt="Facebook icon"
                              width="32"
                              height="37"
                            />
                          </a>
                        </div>
                        <div>
                          <a href="https://www.pinterest.co.uk/goglowday/">
                            <img
                              src="../static/img/icons/white/pinterest.svg"
                              alt="Pinterest icon"
                              width="32"
                              height="35"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </main>
    </div>
  )
}

export default Blog
