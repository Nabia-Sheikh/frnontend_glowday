import React, { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"
import axios from "../utils/axios"

const Categories = ({ slug = "fillers", page }) => {
  const [categories, setCategories] = useState(null)
  const [showCategories, setShowCategories] = useState(false)
  console.log("showCategories", showCategories)
  const [loading, setLoading] = useState(true)
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  const getCategories = async () => {
    try {
      const response = await axios.get("/category")
      setCategories(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      {loading ? (
        <div
          className={`column-m-12 column-d-3 column-d-order-2 ${
            !page && "padding-top__l-4"
          } padding-right__l-1 margin-bottom__t-2 margin-bottom__d-0`}
        >
          <div className="category-menu column--relative">
            <div className="padding-left-1 padding-right-1 category-menu__wrapper">
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
            </div>
          </div>
        </div>
      ) : (
        <>
          {isMobile ? (
            <div
              className={`column-m-12 column-d-3 column-d-order-2 ${
                !page && "padding-top__l-4"
              } padding-right__l-1 margin-bottom__t-2 margin-bottom__d-0`}
            >
              <div className="category-menu section__charcoal column--relative">
                <div
                  className="padding-left-1 padding-right-1 category-menu__wrapper"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => setShowCategories(!showCategories)}
                >
                  <button className="open-text " type="button">
                    Categories
                  </button>
                  <button
                    className={
                      "category-menu__control button--small   round-button" +
                      (showCategories ? " rotate" : "")
                    }
                    type="button"
                    title="toggle categories"
                    data-testid
                  >
                    <img
                      src="/static/img/icons/charcoal-dark/arrow-down.svg"
                      alt="icon for toggle categories"
                      width={24}
                      height={24}
                      className="round-image"
                    />
                  </button>
                </div>
                <div
                  id="category-links"
                  className={
                    "category-links row--no-wrap " +
                    (showCategories ? "open border-top" : "")
                  }
                >
                  <div className="padding-left-1 padding-top-1 padding-right-1 padding-bottom-1">
                    <ul className="margin-bottom-0 padding-left-0 unstyled">
                      {categories.map((category, index) => {
                        return (
                          <li
                            className={
                              category.slug === slug
                                ? "active category-link"
                                : "category-link"
                            }
                            key={index}
                          >
                            <Link to={`/blog/categories/${category.slug}`}>
                              {category.name}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`column-m-12 column-d-3 column-d-order-2 ${
                !page && "padding-top__l-4"
              } padding-right__l-1 margin-bottom__t-2 margin-bottom__d-0`}
            >
              <div className="category-menu section__charcoal column--relative">
                <div className="padding-left-1 padding-right-1 category-menu__wrapper">
                  <button className="open-text disabled" type="button">
                    Categories
                  </button>
                </div>
                <div
                  id="category-links"
                  className="category-links row--no-wrap open border-top"
                >
                  <div className="padding-left-1 padding-top-1 padding-right-1 padding-bottom-1">
                    <ul className="margin-bottom-0 padding-left-0 unstyled">
                      {categories.map((category, index) => {
                        return (
                          <li
                            className={
                              category.slug === slug
                                ? "active category-link"
                                : "category-link"
                            }
                            key={index}
                          >
                            <Link to={`/blog/categories/${category.slug}`}>
                              {category.name}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Categories
