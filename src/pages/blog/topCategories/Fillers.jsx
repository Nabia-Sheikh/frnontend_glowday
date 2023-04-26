import React from "react"
import fillers from "../../../data/fillers.json"
import { useRef } from "react"
import { Link } from "react-router-dom"

const Fillers = () => {
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
    <section className="padding-top-4 padding-bottom-4 section__charcoal">
      <div className="container padding-left__l-1 padding-right__l-1 padding-left__d-0 padding-right__d-0">
        <div className="column padding-left__l-3">
          <div className="title title--smaller">
            <h2>Fillers</h2>
          </div>
        </div>
        <div className="container">
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
              {fillers.map((blog, index) => {
                return (
                  <div className="column column-t-6 column-d-3 slide no-style">
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
                          <h3 className="margin-bottom__l-1">{blog.title}</h3>
                          <p className="blog-article-card__summary">
                            {blog.summary}
                          </p>
                        </Link>
                        <Link to={`/blog/authors/${blog.author.slug}`}>
                          <div className="author-details margin-bottom-1 margin-bottom__l-0 margin-right__l-0">
                            <img
                              className="author-details__image margin-right round-image ls-is-cached lazyloaded"
                              data-src={blog.author.imgUrl}
                              alt={blog.author.name}
                              width={138}
                              height={138}
                              src={blog.author.imgUrl}
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
        <div className="column text-center margin-bottom-2 margin-top-1">
          <Link
            className="button text-center button--outline--white"
            to="/blog/categories/fillers"
          >
            More great articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Fillers
