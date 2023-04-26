import React, { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"

const TreatmentsSection = ({
  selectedTreatments,
  setSelectedTreatments,
  data,
}) => {
  const overflowSliderRef = useRef(null)
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })
  // const [selectedTreatments, setSelectedTreatments] = useState({})
  const [activeCat, setActiveCat] = useState(0)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const cats = data.filter((cat) => {
      return {
        categoryName: cat.categoryName,
        id: cat.id,
        priceFrom: cat.priceFrom,
      }
    })
    setCategories(cats)
  }, [])

  const handleCategoryClick = (categoryId, index) => {
    setActiveCat(index)

    requestAnimationFrame(() => {
      const categoryElement = document.getElementById(categoryId)
      if (isMobile) {
        //  Scroll into view and make sure the element is on the top of the screen
        categoryElement.scrollIntoView({ behavior: "smooth", block: "start" })
        const top = categoryElement.getBoundingClientRect().top
        window.scrollBy({ top: top - 100, behavior: "smooth" })
      }
      const overflowSliderElement = overflowSliderRef.current
      const overflowSliderOffsetLeft = overflowSliderElement.offsetLeft
      overflowSliderElement.scrollLeft =
        categoryElement.offsetLeft -
        (overflowSliderElement.clientWidth - categoryElement.offsetWidth) / 2 -
        overflowSliderOffsetLeft
    })
  }

  function handleOverflowSliderScroll(activeCategoryId) {
    setActiveCat(categories.findIndex((cat) => cat.id === activeCategoryId)) // this will log the id of the active article element
  }

  function handleSelectTreatments(checked, category, treatment) {
    const selectedTreatment = {
      ...treatment,
      ...category,
    }
    selectedTreatment.practitionerTreatments = null
    selectedTreatment.locations = null

    if (checked) {
      setSelectedTreatments((prevState) => ({
        ...prevState,
        [selectedTreatment.categoryName]: [
          ...(prevState[selectedTreatment.categoryName] || []),
          selectedTreatment,
        ],
      }))
    } else {
      setSelectedTreatments((prevState) => {
        const treatments = prevState[selectedTreatment.categoryName].filter(
          (t) =>
            t.practitionerTreatmentId !==
            selectedTreatment.practitionerTreatmentId
        )
        return {
          ...prevState,
          [selectedTreatment.categoryName]: treatments,
        }
      })
    }
    // Remove categories that have null array
    // setTimeout(() => {
    //   setSelectedTreatments(
    //     Object.entries(selectedTreatments)
    //       .filter(([_, treatments]) => treatments.length > 0)
    //       .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})
    //   )
    // }, 1000)
  }
  const totalSelected = Object.values(selectedTreatments).flat().length

  return (
    <section className="treatment-grid padding-bottom-2 margin-bottom-1 border-bottom">
      <h2 className="small">Treatments</h2>
      <p>You can select up to five treatments</p>
      <div className="fresnel-container fresnel-lessThan-bigmd " />
      {/* fresnel-lessThan-bigmd */}
      <div
        className={`fresnel-container ${
          isMobile
            ? "fresnel-lessThan-bigmd"
            : "fresnel-greaterThanOrEqual-bigmd"
        } `}
      >
        <div className="treatment-grid__wrapper row column column--relative">
          <div className="column-d-5 treatment-grid__controls padding-right-1">
            <ul className="unstyled">
              {categories &&
                categories.length > 0 &&
                categories.map((category, index) => (
                  <li
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id, index)}
                  >
                    <button
                      className={`button treatment-grid__button button--fullwidth button--small ${
                        activeCat === index
                          ? "treatment-grid__button--selected bold"
                          : ""
                        // index === 0 && "treatment-grid__button--selected bold"
                      } `}
                      type="button"
                      data-testid={category.id}
                      title={category.categoryName}
                    >
                      {category.categoryName}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div
            className="overflowSlider row--no-wrap column-t-7"
            ref={overflowSliderRef}
          >
            {data &&
              data.length > 0 &&
              data.map((t) => (
                <article
                  onMouseEnter={() => handleOverflowSliderScroll(t.id)}
                  onMouseLeave={() => handleOverflowSliderScroll(t.id)}
                  onMouseUpCapture={() => handleOverflowSliderScroll(t.id)}
                  onFocus={() => handleOverflowSliderScroll(t.id)}
                  id={t.id}
                  className="column-m-12 margin-bottom-1 slide"
                >
                  {t.practitionerTreatments.map((tr, ind) => (
                    <div className={`${ind !== 0 ? "border-top__dashed" : ""}`}>
                      <div className="treatment-category__row">
                        <div
                          className="column-m-6 column-t-7 grid column--relative"
                          data-testid="treatment-information-row"
                        >
                          <div>
                            <button
                              type="button"
                              className="treatment-category__name-btn"
                              data-testid="select-button"
                            >
                              {tr.name}
                            </button>
                            <br />
                            <small className="uppercase">
                              {tr.formattedDuration}
                            </small>
                          </div>
                        </div>
                        <div className="column-m-6 column-t-5 grid text-right">
                          <span className="uppercase gap column-m-10">
                            £{tr.price}
                          </span>
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              checked={
                                Object.keys(selectedTreatments)?.length > 0 &&
                                Object.keys(selectedTreatments)?.some((key) =>
                                  selectedTreatments[key]?.some((sTr) => {
                                    return sTr.practitionerTreatmentId ===
                                      tr.practitionerTreatmentId
                                      ? true
                                      : false
                                  })
                                )
                              }
                              disabled={
                                totalSelected >= 5 &&
                                (!selectedTreatments[t.categoryName] ||
                                  !selectedTreatments[t.categoryName].some(
                                    (e) =>
                                      e.practitionerTreatmentId ===
                                      tr.practitionerTreatmentId
                                  ))
                              }
                              id={tr.practitionerTreatmentId}
                              name={tr.practitionerTreatmentId}
                              data-testid="select-checkbox"
                              onChange={(e) =>
                                handleSelectTreatments(e.target.checked, t, tr)
                              }
                              // cat id and practtreatid
                              defaultValue={
                                t.id + "," + tr.practitionerTreatmentId
                              }
                            />
                            <label htmlFor={tr.practitionerTreatmentId}>
                              <div className="checkbox__faux" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TreatmentsSection
