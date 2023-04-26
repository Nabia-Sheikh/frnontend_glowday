import React, { useState } from "react"
import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "../../../utils/axios"
import Breadcumb from "./Breadcumb"
import RelatedBlogs from "./RelatedBlogs"

const BlogPage = () => {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [loading, setLoading] = useState(true)
  const [blog, setBlog] = useState(null)

  const getBlog = async () => {
    try {
      const response = await axios.get(`/blogs/${slug}`)

      // // Replace all glowday.com with fiverr.com
      const blogContent = response.data[0].body.replace(
        /glowday.com/g,
        "fiverr.com"
      )

      response.data[0].body = blogContent

      setBlog(response.data[0])

      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getBlog()
  }, [slug])

  const contentClickHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()

    const href = e.target.getAttribute("href")

    // if click on .authorSection or .author-details__label class, then grab the href from the <a> tag inside the .authorSection or .author-details__label
    if (
      e.target.classList.contains("authorSection") ||
      e.target.classList.contains("author-details__label") ||
      e.target.classList.contains("author-details__details") ||
      e.target.classList.contains("author-details__image") ||
      e.target.classList.contains("author-details") ||
      e.target.classList.contains("author-details__date") ||
      e.target.classList.contains("section")
    ) {
      let parent = e.target.parentElement
      while (parent.tagName !== "A") {
        parent = parent.parentElement
      }
      navigate(parent.getAttribute("href"))
    }

    // check that if href starts with http, then open in new tab

    // Check clicked item is img or not, if yes then check if it has a parent with href, if yes then navigate to that href
    if (e.target.tagName === "IMG") {
      let parent = e.target.parentElement
      if (parent.tagName === "A") {
        return window.open(parent.getAttribute("href"), "_blank")
      }
    }

    if (href && href.includes("http")) {
      return window.open(href, "_blank")
    }

    if (href) {
      e.preventDefault()
      navigate(href)
    }
  }

  return (
    <main id="main_content">
      {!loading && blog ? (
        <div className="margin-top-1">
          {
            // <!-- Breadcrumbs -->
            !loading && blog && <Breadcumb title={blog.title} />
          }
          <div className="container blog-grid margin-top__t-1">
            <div className="column column-t-8">
              {loading ? (
                <div
                  className="padding-left-1"
                  style={{ width: "4rem", height: "4rem" }}
                >
                  <div className="spinner">
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
              ) : (
                <>
                  {/* Dangerously setInnerHTML */}
                  <div
                    onClick={contentClickHandler}
                    dangerouslySetInnerHTML={{
                      __html: blog.body,
                    }}
                  />

                  {/* {ReactHtmlParser(blog.body, {
                  transform: (node) => {
                    if (node.type === "tag" && node.name === "a") {
                      return (
                        <Link to={node.attribs.href}>
                          {console.log("NODE", node.children[0].data)}
                          {
                            // node.children[0].data
                            node.children[0].data
                          }
                        </Link>
                      )
                    }
                  },
                })} */}
                </>
              )}
            </div>

            <RelatedBlogs blogs={blog.relatedBlogs} />
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
                          Want to stay in the know with our latest blog posts.
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
                            src="../../static/img/icons/charcoal-dark/instagram.svg"
                            alt="Instagram icon"
                            width={32}
                            height={35}
                          />
                        </a>
                      </div>
                      <div>
                        <a href="https://www.facebook.com/GlowdayOfficial">
                          <img
                            src="../../static/img/icons/charcoal-dark/facebook.svg"
                            alt="Facebook icon"
                            width={32}
                            height={37}
                          />
                        </a>
                      </div>
                      <div>
                        <a href="https://www.pinterest.co.uk/goglowday/">
                          <img
                            src="../../static/img/icons/charcoal-dark/pinterest.svg"
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
      ) : (
        <div
          className="padding-left-15 padding-top-3"
          style={{
            //  Center the spinner using flex
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="spinner">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      )}
    </main>
  )
}

export default BlogPage
