import React, { useState } from "react"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import treatments from "../data/treatments.json"
import axios from "../utils/axios"

const SearchPageSearchBar = ({ loca, treatm, rerender }) => {
  // Make isMobile state true, if the screen width is less than 768px
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  // Make isMobile state true, if the screen width is less than 768px
  const [current, setCurrent] = useState("treatment")
  const [treatmentVal, setTreatmentVal] = useState("")
  const [locationVal, setLocationVal] = useState("")
  const [practitionerVal, setPractitionerVal] = useState("")
  const [clinicVal, setClinicVal] = useState("")

  const [practitionersList, setPractitionersList] = useState([])
  const [clinicsList, setClinicsList] = useState([])
  const [locations, setLocations] = useState([])
  const [cancelToken, setCancelToken] = useState(axios.CancelToken.source())
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [filteredTreatments, setFilteredTreatments] = useState(null)
  const [showTreatmentMenu, setShowTreatmentMenu] = useState(false)
  const [showLocationMenu, setShowLocationMenu] = useState(false)
  const [showPractitionerMenu, setShowPractitionerMenu] = useState(false)
  const [showClinicMenu, setShowClinicMenu] = useState(false)

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

  const handleCurrent = (e) => {
    setCurrent(e.target.value)
  }

  const handlePractitioner = (e) => {
    setPractitionerVal(e.target.value)

    // Cancel any pending requests
    cancelToken.cancel()

    // Create a new cancel token for the next request
    setCancelToken(axios.CancelToken.source())
  }
  const handleClinic = (e) => {
    setClinicVal(e.target.value)
    // Cancel any pending requests
    cancelToken.cancel()

    // Create a new cancel token for the next request
    setCancelToken(axios.CancelToken.source())
  }

  const handleTreatment = (e) => {
    setTreatmentVal(e.target.value)

    // Cancel any pending requests
    cancelToken.cancel()

    // Create a new cancel token for the next request
    setCancelToken(axios.CancelToken.source())
  }

  const handleLocation = (e) => {
    setLocationVal(e.target.value)

    // Cancel any pending requests
    cancelToken.cancel()

    // Create a new cancel token for the next request
    setCancelToken(axios.CancelToken.source())
  }

  const getLocation = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(
        `/practitioners/geolocation?loc=${locationVal}`,
        {
          cancelToken: cancelToken.token,
        }
      )

      setLocations(data.locations)
      setShowLocationMenu(true)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const searchTreatmentLocation = async () => {
    try {
      rerender()
      navigate(`/search?location=${locationVal}&treatment=${treatmentVal}`)
    } catch (error) {
      console.log(error)
    }
  }

  const getPractitionersList = async () => {
    try {
      // Also, pass the CancelToken to the request
      const { data } = await axios.get(
        `/practitioners/searchPractitioners?name=${practitionerVal}`,
        {
          cancelToken: cancelToken.token,
        }
      )
      setPractitionersList(data.practitioners)
      setShowPractitionerMenu(true)(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getClinicsList = async () => {
    try {
      // Also, pass the CancelToken to the request
      const { data } = await axios.get(
        `/practitioners/searchClinics?name=${clinicVal}`,
        {
          cancelToken: cancelToken.token,
        }
      )
      setClinicsList(data.clinics)
      setShowClinicMenu(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (locationVal && locationVal.length > 2) {
      getLocation()
    }
  }, [locationVal])

  useEffect(() => {
    if (showTreatmentMenu) return

    if (treatmentVal) {
      const searchTreatment = treatments.filter((treatment) => {
        return treatment.categoryName
          .toLowerCase()
          .includes(treatmentVal.toLowerCase())
      })
      setFilteredTreatments(searchTreatment)
      setShowTreatmentMenu(true)
    }
  }, [treatmentVal])

  useEffect(() => {
    if (practitionerVal && practitionerVal.length > 2) {
      getPractitionersList()
    }
  }, [practitionerVal])
  useEffect(() => {
    if (clinicVal && clinicVal.length > 2) {
      getClinicsList()
    }
  }, [clinicVal])

  // Add event listener to window to listen for resize event
  window.addEventListener("resize", () => {
    // Set isMobile state to true, if the screen width is less than 768px
    setIsMobile(window.innerWidth < 768)
  })

  // Add event listener to window to listen for resize event
  window.addEventListener("resize", () => {
    // Set isMobile state to true, if the screen width is less than 768px
    setIsMobile(window.innerWidth < 768)
  })
  return (
    <div className="header header--STICKY_SEARCH" style={{ minHeight: "5rem" }}>
      <div
        className={`search__navigation   ${
          isMobile ? "search__navigation--gold" : "search__navigation--gray"
        }`}
        data-testid="sticky-search"
        style={{ position: "absolute", maxHeight: "inherit", top: "5.5rem" }}
      >
        <div className="container column--relative">
          {isMobile ? (
            <div className="fresnel-container fresnel-lessThan-md ">
              <div className="row row--center" role="button">
                <div className="column-m-10 column-t-8">
                  <div className="field">
                    <div className="fake-input">
                      <span className="padding-left-2">Find treatments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row padding-left__t-2 padding-left__d-2">
              <div className="column column-m-12 column-t-4 column-d-3 search-widget__navigation--sticky">
                <div
                  className={
                    current === "treatment"
                      ? "margin-right__t-1 margin-right__l-0 current"
                      : "margin-right__t-1 margin-right__l-0"
                  }
                >
                  <button
                    className="button button--pill"
                    type="button"
                    data-testid="sticky-search-treatment"
                    title="Treatment"
                    value="treatment"
                    onClick={handleCurrent}
                  >
                    Treatment
                  </button>
                </div>
                <div
                  className={
                    current === "practitioner"
                      ? "margin-right__t-1 margin-right__l-0 current"
                      : "margin-right__t-1 margin-right__l-0"
                  }
                >
                  <button
                    className="button button--pill"
                    type="button"
                    data-testid="sticky-search-practitioner"
                    title="Practitioner"
                    value="practitioner"
                    onClick={handleCurrent}
                  >
                    Practitioner
                  </button>
                </div>
                <div
                  className={
                    current === "clinic"
                      ? "margin-right__t-1 margin-right__l-0 current"
                      : "margin-right__t-1 margin-right__l-0"
                  }
                >
                  <button
                    className="button button--pill"
                    type="button"
                    data-testid="sticky-search-clinic"
                    title="Clinic"
                    value="clinic"
                    onClick={handleCurrent}
                  >
                    Clinic
                  </button>
                </div>
                <div className="fresnel-container fresnel-lessThan-md "></div>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className=" column column-m-12 column-d-9 search-widget__form margin-top-1 margin-top__t-0 column--relative padding-bottom-1  padding-bottom__l-0"
              >
                {current === "treatment" ? (
                  <>
                    <div className="column-t-5">
                      <div className="field result_dropdown field--search">
                        <label
                          className="sr-only"
                          htmlFor="search_by_treatment"
                        >
                          Treatment
                        </label>
                        <div className="field">
                          <div className="column-m-12">
                            <label
                              className="sr-only"
                              htmlFor="sticky_search_for_treatment"
                            >
                              Treatment
                            </label>

                            {treatm ? (
                              <input
                                autoComplete="off"
                                type="text"
                                name="treatment"
                                className="search"
                                id="sticky_search_for_treatment"
                                data-testid="treatment-input"
                                placeholder="Find treatments"
                                value={treatm}
                                disabled
                              />
                            ) : (
                              <input
                                autoComplete="off"
                                type="text"
                                name="treatment"
                                className="search"
                                id="sticky_search_for_treatment"
                                data-testid="treatment-input"
                                placeholder="Find treatments"
                                value={treatmentVal}
                                onChange={handleTreatment}
                              />
                            )}
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
                                            setTreatmentVal(
                                              treatment.categoryName
                                            )
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
                    </div>
                    <div className="column-t-5">
                      <div className="field result_dropdown">
                        <div className="column-m-12">
                          <label
                            className="sr-only"
                            htmlFor="search_by_location"
                          >
                            Location
                          </label>
                          <div className="field">
                            <div className="column-m-12 ">
                              <label
                                className="sr-only"
                                htmlFor="sticky_search_for_location"
                              >
                                Type a location
                              </label>
                              {loca ? (
                                <input
                                  autoComplete="off"
                                  type="text"
                                  name="location"
                                  className="location"
                                  id="sticky_search_for_location"
                                  placeholder="Type a location"
                                  data-testid="location-input"
                                  value={loca}
                                  disabled
                                />
                              ) : (
                                <input
                                  autoComplete="off"
                                  type="text"
                                  name="location"
                                  className="location"
                                  id="sticky_search_for_location"
                                  placeholder="Type a location"
                                  data-testid="location-input"
                                  value={locationVal}
                                  onChange={handleLocation}
                                />
                              )}

                              {locations &&
                                locations.length > 0 &&
                                showLocationMenu && (
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
                    </div>
                    <div className="column-t-2">
                      <button
                        className="button button--fullwidth button--flat button--gold"
                        type="submit"
                        data-testid="sticky-search-submit"
                        title="Search"
                        onClick={handleSearchClick}
                      >
                        Search
                      </button>
                    </div>
                  </>
                ) : current === "practitioner" ? (
                  <div className="field">
                    <div className="column-m-12 column--relative">
                      <label
                        className="sr-only"
                        htmlFor="sticky_search_for_practitioner"
                      >
                        Practitioner
                      </label>
                      <input
                        type="input"
                        className="search"
                        placeholder="Practitioner"
                        id="sticky_search_for_practitioner"
                        data-testid="practitioner-input"
                        value={practitionerVal}
                        onChange={handlePractitioner}
                      />
                      {showPractitionerMenu && (
                        <div
                          id="practitioner-search-results"
                          className="field--search__items field--search__items--open"
                        >
                          <div className="infinite-scroll-component__outerdiv">
                            <div
                              className="infinite-scroll-component"
                              style={{ height: "auto", overflow: "auto" }}
                            >
                              {practitionersList &&
                                practitionersList.length > 0 &&
                                practitionersList.map((practitioner) => (
                                  <div className="search-widget__results">
                                    <Link
                                      to={`/clinic/${practitioner.clinicSlug}/${practitioner.practitionerSlug}`}
                                    >
                                      <div className="radio-result">
                                        <input
                                          type="radio"
                                          id={practitioner._id}
                                          name={practitioner.name}
                                          className="clickable"
                                        />
                                        <div className="radio-result__wrapper">
                                          <div className="logo--container">
                                            <img
                                              className="logo--container__practitioner"
                                              src={practitioner.profileImageUrl}
                                              alt={practitioner.name}
                                            />
                                          </div>
                                          <div className="results--practitioner">
                                            <label htmlFor={practitioner.name}>
                                              {practitioner.name}
                                            </label>
                                            <span style={{ marginLeft: 0 }}>
                                              {practitioner.clinicName}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="field">
                    <div className="column-m-12 column--relative">
                      <label
                        className="sr-only"
                        htmlFor="sticky_search_for_clinic"
                      >
                        Clinic
                      </label>
                      <input
                        type="input"
                        className="search"
                        placeholder="Clinic"
                        id="sticky_search_for_clinic"
                        data-testid="clinic-input"
                        value={clinicVal}
                        onChange={handleClinic}
                      />
                      {showClinicMenu && (
                        <div
                          id="clinic-search-results"
                          className="field--search__items field--search__items--open"
                        >
                          <div className="infinite-scroll-component__outerdiv">
                            <div
                              className="infinite-scroll-component"
                              style={{ height: "auto", overflow: "auto" }}
                            >
                              {clinicsList &&
                                clinicsList.length > 0 &&
                                clinicsList.map((clinic) => (
                                  <div className="search-widget__results">
                                    <Link
                                      to={`/clinic/${clinic.clinicData.slug}`}
                                    >
                                      <div className="radio-result">
                                        <input
                                          type="radio"
                                          id={clinic._id}
                                          name={clinic.clinicData.name}
                                          className="clickable"
                                        />
                                        <div className="radio-result__wrapper">
                                          <div className="logo--container">
                                            <img
                                              className="logo--container__clinic"
                                              src={
                                                clinic.clinicData.clinicLogoUrl
                                                  .medium
                                              }
                                              alt={clinic.clinicData.name}
                                            />
                                          </div>
                                          <div className="results--clinic">
                                            <label
                                              htmlFor={clinic.clinicData.name}
                                            >
                                              {clinic.clinicData.name}
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchPageSearchBar
