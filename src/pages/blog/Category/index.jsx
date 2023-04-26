import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Categories from "../../../components/Categories"
import axios from "../../../utils/axios"
import CategoryBreadcumb from "./CategoryBreadcumb"

const Category = () => {
  const { slug } = useParams()
  const [page, setPage] = useState(1)
  const [state, setState] = useState(null)
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState("")

  const getCategoryBlogs = async () => {
    setLoading(true)
    setMsg("")
    setState(null)
    setPage(1)
    try {
      const response = await axios.post(`/blogs/category?page=${page}`, {
        category: slug,
      })

      if (response.data.message) {
        setMsg(response.data.message)
        return setLoading(false)
      }
      setState(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const loadMore = async () => {
    try {
      const response = await axios.post(`/blogs/category?page=${page + 1}`, {
        category: slug,
      })

      if (response.data.message) {
        setMsg(response.data.message)
        return setLoading(false)
      }
      setState({
        ...state,
        blogs: [...state.blogs, ...response.data.blogs],
        showMore: response.data.showMore,
        totalBlogs: response.data.totalBlogs,
      })
      setPage(page + 1)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getCategoryBlogs()
  }, [slug])

  return (
    <div id="__next">
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
      ) : msg ? (
        <main id="main_content">
          <main id="main_content">
            <div className="margin-top-1">
              <CategoryBreadcumb category={slug} />
              <div className="container">
                <div className="blog-grid blog-grid--wrap padding-top__l-2">
                  <Categories slug={slug} />

                  <div className="column-m-12 column-d-9 column-d-order-1 blog-min-height">
                    <div className="title title--smaller column">
                      <h1 className="padding-left__t-1 default-font bold">
                        {slug}
                      </h1>
                    </div>
                    <div className="no-style column">
                      <div className="blog-article-card blog-article-card-featured ">
                        <div className="blog-article-card__body  padding-left-1 padding-top-1 padding-right-1 padding-bottom-1 padding-left__d-2 padding-top__d-2 padding-right__d-2 padding-bottom__d-2">
                          <h1>{msg}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </main>
      ) : (
        <main id="main_content">
          <main id="main_content">
            <div className="margin-top-1">
              <CategoryBreadcumb category={state.category} />
              <div className="container">
                <div className="blog-grid blog-grid--wrap padding-top__l-2">
                  <Categories slug={slug} />

                  <div className="column-m-12 column-d-9 column-d-order-1 blog-min-height">
                    <div className="title title--smaller column">
                      <h1 className="padding-left__t-1 default-font bold">
                        {state.category}
                      </h1>
                    </div>

                    <div className="no-style column">
                      <div className="blog-article-card blog-article-card-featured ">
                        <div className="blog-article-card__image margin-bottom-1">
                          <Link to={`/blog/${state.blogs[0].slug}`}>
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
                                  alt={state.blogs[0].title}
                                  aria-hidden="true"
                                  src={state.blogs[0].imgUrl}
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
                                alt={state.blogs[0].title}
                                src={state.blogs[0].imgUrl}
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
                          <Link to={`/blog/${state.blogs[0].slug}`}>
                            <h3 className="margin-bottom__l-1">
                              {state.blogs[0].title}
                            </h3>
                            <p className="blog-article-card__summary">
                              {state.blogs[0].summary}
                            </p>
                          </Link>
                          <Link
                            to={`
                              /blog/${state.blogs[0].author.slug}
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
                      <div className="row--middle column--relative blog-grid blog-grid--wrap  blog-grid">
                        {state.blogs.slice(1).map((blog, index) => {
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
                    </div>
                    {/* <div className="blog-grid blog-grid--wrap">
                <div className="container">
                  <div className="blog-grid row--middle column--relative">
                    <div className="row--middle column--relative blog-grid blog-grid--wrap  blog-grid">
                    </div>
                  </div>
                </div>
              </div> */}
                    <div className="row margin-top-2 margin-bottom-2 margin-left-0 margin-right-0">
                      {state.showMore && (
                        <div className="column text-center margin-bottom-2">
                          <button
                            className="button button--outline"
                            type="button"
                            onClick={loadMore}
                          >
                            Show more
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <section className="padding-top-1 padding-bottom-1">
                <div className="container">
                  <div className="newsletter-signup gray column-t-10 column-d-12">
                    <div className="row">
                      <div className="column column-d-9">
                        <div className="padding-left__t-1 padding-right__t-1 column-d-10">
                          <div className="newsletter-signup__text text__t-center text-left__l ">
                            <div className="border-bottom border-bottom-t-none margin-bottom-1 ">
                              <h3>Stay in the Glow</h3>
                            </div>
                            <p>
                              Want to stay in the know with our latest blog
                              posts.
                              <br className="hide-on-mobile" />
                              Subscribe to our newsletter below:
                            </p>
                            <p />
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
                                  defaultValue
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
                                src="../../../static/img/icons/charcoal-dark/instagram.svg"
                                alt="Instagram icon"
                                width={32}
                                height={35}
                              />
                            </a>
                          </div>
                          <div>
                            <a href="https://www.facebook.com/GlowdayOfficial">
                              <img
                                src="../../../static/img/icons/charcoal-dark/facebook.svg"
                                alt="Facebook icon"
                                width={32}
                                height={37}
                              />
                            </a>
                          </div>
                          <div>
                            <a href="https://www.pinterest.co.uk/goglowday/">
                              <img
                                src="../../../static/img/icons/charcoal-dark/pinterest.svg"
                                alt="Pinterest icon"
                                width={32}
                                height={35}
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
      )}
    </div>
  )
}

export default Category
