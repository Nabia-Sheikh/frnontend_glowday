import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "../../../utils/axios"
import treatments from "./../../../data/treatments.json"

const SearchBox = () => {
  const [treatmentVal, setTreatmentVal] = useState("")
  const [filteredTreatments, setFilteredTreatments] = useState(null)

  const [locationVal, setLocationVal] = useState("")
  const [locations, setLocations] = useState([])

  const [showTreatmentMenu, setShowTreatmentMenu] = useState(false)
  const [showLocationMenu, setShowLocationMenu] = useState(false)

  const [isTreatmentSelected, setIsTreatmentSelected] = useState(false)
  const [isLocationSelected, setIsLocationSelected] = useState(false)
  const [cancelToken, setCancelToken] = useState(axios.CancelToken.source())

  const navigate = useNavigate()

  const getLocation = async () => {
    setIsLocationSelected(false)
    try {
      const { data } = await axios.get(
        `/practitioners/geolocation?loc=${locationVal}`,
        {
          cancelToken: cancelToken.token,
        }
      )

      setLocations(data.locations)
      setShowLocationMenu(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (locationVal && locationVal.length > 2 && !isLocationSelected) {
      getLocation()
    }
  }, [locationVal])

  const handleSearchClick = (e) => {
    e.preventDefault()
    // If treatmentVal is less than 3 characters, then focus on treatment input which id is sticky_search_for_treatment and return or if locationVal is less than 3 characters, then focus on location input which id is sticky_search_for_location and return
    if (treatmentVal.length < 3) {
      document.getElementById("sticky_search_for_treatment").focus()
      return
    } else if (locationVal.length < 3) {
      document.getElementById("sticky_search_for_location").focus()
      return
    }

    searchTreatmentLocation()
  }

  const searchTreatmentLocation = async () => {
    try {
      navigate(`/search?location=${locationVal}&treatment=${treatmentVal}`)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isTreatmentSelected) return

    if (treatmentVal) {
      if (isTreatmentSelected) return
      setIsTreatmentSelected(false)
      const searchTreatment = treatments.filter((treatment) => {
        return treatment.categoryName
          .toLowerCase()
          .includes(treatmentVal.toLowerCase())
      })
      setFilteredTreatments(searchTreatment)
      setShowTreatmentMenu(true)
    }
  }, [treatmentVal])

  return (
    <div className="margin-top-1 padding-bottom-1 border-top-bottom border-top-bottom__charcoal-medium">
      <div className="search-widget search-widget__sidebar">
        <form>
          <div className="field result_dropdown">
            <div className="field">
              <div className="column-m-12">
                <label
                  className="sr-only"
                  htmlFor="widget_search_for_treatment"
                >
                  Treatment
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="treatment"
                  className="search"
                  id="widget_search_for_treatment"
                  data-testid="treatment-input"
                  placeholder="Find treatments"
                  value={treatmentVal}
                  onChange={(e) => {
                    if (e.target.value.length === 0) {
                      setIsTreatmentSelected(false)
                    }
                    setTreatmentVal(e.target.value)
                  }}
                />
                {filteredTreatments &&
                  filteredTreatments.length > 0 &&
                  showTreatmentMenu && (
                    <div
                      className="field--search__items field--search__items--open"
                      data-testid="treatment-options"
                    >
                      {filteredTreatments.map((treatment) => (
                        <div
                          key={treatment.categoryName}
                          className="search-widget__results--treatments"
                          role="group"
                        >
                          <div
                            className="radio-result"
                            data-testid="treatment-option-results"
                          >
                            <input
                              type="radio"
                              id={treatment.categoryName}
                              name={treatment.categoryName}
                              value={treatment.categoryName}
                              onClick={() => {
                                setShowTreatmentMenu(false)
                                setTreatmentVal(treatment.categoryName)
                                setIsTreatmentSelected(true)
                              }}
                              className="clickable"
                            />
                            <label htmlFor={treatment.categoryName}>
                              {treatment.categoryName}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </div>
          <div className="field result_dropdown">
            <div className="column-m-12">
              <div className="field">
                <div className="column-m-12 ">
                  <label
                    className="sr-only"
                    htmlFor="widget_search_for_location"
                  >
                    Type a location
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="location"
                    className="location"
                    id="widget_search_for_location"
                    placeholder="Type a location"
                    data-testid="location-input"
                    value={locationVal}
                    onChange={(e) => {
                      if (e.target.value.length === 0) {
                        setIsLocationSelected(false)
                      }
                      setLocationVal(e.target.value)
                    }}
                  />
                  {locations && locations.length > 0 && showLocationMenu && (
                    <div
                      className="field--search__items field--search__items--open"
                      data-testid="treatment-options"
                    >
                      {locations.map((location) => (
                        <div
                          key={location._id}
                          className="search-widget__results--treatments"
                          role="group"
                        >
                          <div
                            className="radio-result"
                            data-testid="treatment-option-results"
                          >
                            <input
                              type="radio"
                              id={location.location}
                              name={location.location}
                              value={location.location}
                              onClick={() => {
                                setShowLocationMenu(false)
                                setLocationVal(location.location)
                                setIsLocationSelected(true)
                              }}
                              className="clickable"
                            />
                            <label htmlFor={location.location}>
                              {location.location}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="column-m-12 search-widget__action">
            <button
              className="button button--fullwidth button--flat button--gold"
              type="submit"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchBox
