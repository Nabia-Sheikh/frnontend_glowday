import React from "react"
import { Link } from "react-router-dom"
import SearchBox from "./SearchBox"

const RelatedBlogs = ({ blogs }) => {
  // divide blogs into 2 arrays, one for left column and one for right column (2 columns)
  const aboveBlogs = blogs.slice(0, Math.ceil(blogs.length / 2))
  const belowBlogs = blogs.slice(Math.ceil(blogs.length / 2))
  return (
    <aside className="sidebar column column-t-4">
      <div className="section__light-gray related-article-grid padding-left-1 padding-top-1 padding-right-1 padding-bottom-1 padding-left__l-2 padding-top__l-2 padding-right__l-2 padding-bottom__l-2 shadow">
        <div>
          {aboveBlogs.map((blog) => (
            <article className="margin-bottom-1 sidebar-article">
              <div className="sidebar-article__image">
                <Link to={`/blog/${blog.slug}`}>
                  <div
                    style={{
                      display: "block",
                      overflow: "hidden",
                      position: "relative",
                      boxSizing: "border-box",
                      margin: 0,
                    }}
                  >
                    <div
                      style={{
                        display: "block",
                        boxSizing: "border-box",
                        paddingTop: "55.73770491803278%",
                      }}
                    ></div>
                    <img
                      alt={blog.title}
                      src={blog.imgUrl}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
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
                        backgroundSize: "cover",
                        backgroundImage: blog.imgUrl,
                        backgroundPosition: "0% 0%",
                      }}
                    />
                  </div>
                </Link>
              </div>
              <div className="padding-left-1 sidebar-article__title no-style">
                <Link to={`/blog/${blog.slug}`}>
                  <h4 className="margin-bottom-0">{blog.title}</h4>
                </Link>
              </div>
            </article>
          ))}

          <SearchBox />
          <div className="margin-top-1">
            {belowBlogs.map((blog) => (
              <article className="margin-bottom-1 sidebar-article">
                <div className="sidebar-article__image">
                  <Link to={`/blog/${blog.slug}`}>
                    <div
                      style={{
                        display: "block",
                        overflow: "hidden",
                        position: "relative",
                        boxSizing: "border-box",
                        margin: 0,
                      }}
                    >
                      <div
                        style={{
                          display: "block",
                          boxSizing: "border-box",
                          paddingTop: "55.73770491803278%",
                        }}
                      ></div>
                      <img
                        alt={blog.title}
                        src={blog.imgUrl}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
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
                          backgroundSize: "cover",
                          backgroundImage: blog.imgUrl,
                          backgroundPosition: "0% 0%",
                        }}
                      />
                    </div>
                  </Link>
                </div>
                <div className="padding-left-1 sidebar-article__title no-style">
                  <Link to={`/blog/${blog.slug}`}>
                    <h4 className="margin-bottom-0">{blog.title}</h4>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default RelatedBlogs
