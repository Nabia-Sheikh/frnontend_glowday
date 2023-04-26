import React, { useRef, useState } from "react"
import { useEffect } from "react"
import axios from "../../utils/axios"
import useIsMount from "../../hooks/useIsMount"
// import Map from "./map.jpeg"
import DesktopCard from "./DesktopCard"
import MobileCard from "./MobileCard"
// import InfiniteScroll from "react-infinite-scroller"
import InfiniteScroll from "react-infinite-scroll-component"
import mapboxgl from "mapbox-gl"
import SearchPageSearchBar from "../../components/SearchPageSearchBar"
import { MAP_KEY } from "../../configs/constants"

mapboxgl.accessToken =
  "pk.eyJ1IjoibWluaWZpcmVmbHkiLCJhIjoiY2s4b2RhZGdxMDcxbzNlbmxic3k1eDlmYSJ9.Hvm9H386I-bRzPk7Prh5Dg"

const Search = () => {
  // Query params
  const params = new URLSearchParams(window.location.search)
  const location = params.get("location")
  const treatment = params.get("treatment")

  const mapContainerRef = useRef(null)
  const isMount = useIsMount()

  // Make isMobile state true, if the screen width is less than 768px
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [practitioners, setPractitioners] = useState(null)
  const [geocoordinates, setGeocoordinates] = useState(null)
  const [popupItem, setPopupItem] = useState(null)
  const [showMore, setShowMore] = useState(true)
  const [loading, setLoading] = useState(true)
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [level7, setLevel7] = useState(false)
  const [total, setTotal] = useState(0)
  const [filter, setFilter] = useState("MOST_RECOMMENDED")
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const myRef = useRef(null)
  const [cancelToken, setCancelToken] = useState(axios.CancelToken.source())

  const rerender = () => {
    setPopupItem(null)
    setIsMapLoaded(false)
    setLoading(true)
    setPractitioners(null)
    setGeocoordinates(null)
    setLevel7(false)
    setTotal(0)
    setFilter("MOST_RECOMMENDED")
    setLoadingMore(false)
    setError(null)
    setPage(1)
    fetchPractitioners()
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
    console.log("Filter: ", e.target.value)
  }

  // const searchTreatmentLocation = async () => {
  //   try {
  //     // const { data } = await axios.get(`/practitioners/searchTreatments`, {
  //     //   params: {
  //     //     treatment: treatmentVal,
  //     //     loc: locationVal,
  //     //   },
  //     //   cancelToken: cancelToken.token,
  //     // })

  //     navigate(`/search?location=${locationVal}&treatment=${treatmentVal}`)

  //     // console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const fetchPractitioners = async () => {
    setLoading(true)
    try {
      let respData
      if (!location && !treatment) {
        const { data } =
          await axios.get(`/practitioners/search?page=${page}&filter=${filter}
      `)
        respData = data
      } else {
        const { data } =
          await axios.get(`/practitioners/searchTreatments?page=${page}&filter=${filter}&loc=${location}&treatment=${treatment}
      `)
        respData = data
      }

      setPractitioners(respData.practitioners)
      setTotal(respData.length)
      setGeocoordinates(
        respData.practitioners.map((practitioner) => practitioner.geocode)
      )

      setShowMore(respData.showMore)
      setLoading(false)
      setError(null)
    } catch (error) {
      console.log(error)
      setError(error)
      setLoading(false)
    }
  }
  console.log("Total length: ", total)
  const getLevel7Practitioners = async () => {
    try {
      const { data } = await axios.get("/practitioners/level7")
      setPractitioners(data.practitioners)
      setGeocoordinates(
        data.practitioners.map((practitioner) => practitioner.geocode)
      )
      setTotal(data.length)
      setShowMore(data.showMore)
      setLoading(false)
      setError(null)
    } catch (error) {
      console.log(error)
      setError(error)
      setLoading(false)
    }
  }

  const handleLevel7 = () => {
    setLevel7(!level7)
  }

  useEffect(() => {
    if (isMount) return
    setPage(1)
    fetchPractitioners()
  }, [filter])

  useEffect(() => {
    if (isMount) return
    if (level7) {
      setPage(1)
      getLevel7Practitioners()
    } else {
      setPage(1)
      fetchPractitioners()
    }
  }, [level7])

  const loadMore = async () => {
    console.log("Called")
    if (loadingMore) return

    setLoadingMore(true)
    try {
      let respData
      if (!location && !treatment) {
        const { data } = await axios.get(
          `${level7 ? "/practitioners/level7" : "/practitioners/search"}?page=${
            page + 1
          }&filter=${filter}
        `,
          { cancelToken: cancelToken.token }
        )
        respData = data
      } else {
        const { data } = await axios.get(
          `/practitioners/searchTreatments?page=${
            page + 1
          }&loc=${location}&treatment=${treatment}
        `,
          { cancelToken: cancelToken.token }
        )
        respData = data
      }

      setPractitioners((prev) => [...prev, ...respData.practitioners])
      setTotal(respData.length)
      setGeocoordinates((prev) => [
        ...prev,
        ...respData.practitioners.map((practitioner) => practitioner.geocode),
      ])

      setShowMore(respData.showMore)
      setPage((prev) => prev + 1)
      setLoadingMore(false)
      setError(null)
    } catch (error) {
      console.log(error)
      setError(error)
    }
  }

  useEffect(() => {
    if (!isMount) return
    fetchPractitioners()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (loadingMore || loading || !showMore) return
      const element = myRef.current
      if (element) {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom
        const isVisible = elementTop >= 0 && elementBottom <= window.innerHeight
        if (isVisible) {
          loadMore()
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add event listener to window to listen for resize event
  window.addEventListener("resize", () => {
    // Set isMobile state to true, if the screen width is less than 768px
    setIsMobile(window.innerWidth < 768)
  })

  useEffect(() => {
    if (!isMapLoaded && practitioners && !loading && practitioners.length > 0) {
      // If the map is not loaded, load the map and if is already loaded, then no need to load the map again
      mapboxgl.accessToken = MAP_KEY

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,

        style: `https://api.mapbox.com/styles/v1/mapbox/streets-v11?access_token=${MAP_KEY}`,
        center: [-0.0297, 51.5087],
        zoom: 10,
      })
      map.addControl(new mapboxgl.NavigationControl())

      const newCoordinates = geocoordinates.map((coordinate) => [
        coordinate.lng,
        coordinate.lat,
      ])

      const popups = []

      newCoordinates.forEach((coordinate, index) => {
        const marker = new mapboxgl.Marker({ color: "#d2ae76" })
          .setLngLat(coordinate)
          .addTo(map)

        marker.getElement().addEventListener("click", () => {
          const coords = marker.getLngLat()

          const popupItem = practitioners.find((practitioner) => {
            return (
              practitioner.geocode.lat === coordinate[1] &&
              practitioner.geocode.lng === coordinate[0]
            )
          })
          const element = document.getElementById(popupItem._id)
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          })

          setPopupItem(popupItem)
        })

        var popup
        if (
          (popupItem &&
            popupItem.geocode.lat === coordinate[1] &&
            popupItem.geocode.lng === coordinate[0]) ||
          index === 0
        ) {
          popup = new mapboxgl.Popup({ closeOnClick: false }).setHTML(
            `
              ${
                popupItem
                  ? `    <div> <div style="max-height: 10rem; overflow: hidden auto;"><div class="popup__content"><div class="row column row--middle"><div class="column-m-4"><img src=${popupItem.profileImageUrl} alt=${popupItem.name} class="round-image"></div><div class="column-m-8"><ul class="unstyled"><li><span class="capitalise bold">${popupItem.name}</span></li><li><span class="golden">${popupItem.clinicName}</span></li><li><span class="bold popup__price">${popupItem.featuredCard.price}</span></li></ul></div></div></div></div></div>`
                  : `<div> <div style="max-height: 10rem; overflow: hidden auto;"><div class="popup__content"><div class="row column
                  row--middle"><div class="column-m-4"><img src=${practitioners[0].profileImageUrl} alt=${practitioners[0].name} class="round-image"></div><div class="column-m-8"><ul class="unstyled"><li><span class="capitalise bold">${practitioners[0].name}</span></li><li><span class="golden">${practitioners[0].clinicName}</span></li><li><span class="bold popup__price">${practitioners[0].featuredCard.price}</span></li></ul></div></div></div></div></div>`
              }       `
          )

          popups.push(popup)

          // Remove all the other popups from the map
          popups.forEach((p) => p.remove())

          // Add the current popup to the map
          popup.addTo(map)

          if (popupItem) {
            map.flyTo({
              center: [popupItem.geocode.lng, popupItem.geocode.lat],
              essential: true,
            })
          }

          marker.setPopup(popup)
        }
      })
      return () => map && map.remove()
    }
  }, [geocoordinates, practitioners, loading, popupItem])

  return (
    <div>
      <SearchPageSearchBar
        loca={location}
        treatm={treatment}
        rerender={rerender}
      />
      <main id="main_content">
        {loading ? (
          <div
            className="padding-left-15 padding-top-3"
            style={{ width: "4rem", height: "4rem" }}
          >
            <div className="spinner">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        ) : practitioners && practitioners.length > 0 ? (
          <main id="main_content">
            <div className="margin-top-3">
              <div className="container">
                <div className="row">
                  <div
                    id="myDiv"
                    className="column-m-12 column-d-8 column-lg-7 column"
                  >
                    <div className="search__sort border-top">
                      <div className="search__sort-navigation">
                        <span className="uppercase">Filter By:</span>
                      </div>
                      <div className="search__sort-filters">
                        <div className={level7 ? "current" : "null"}>
                          <button
                            className="button button--pill button--small"
                            type="button"
                            onClick={handleLevel7}
                          >
                            Level 7 Practitioners
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="search__sort border-top">
                      <div className="search__sort-navigation">
                        <span className="uppercase">{total} Results</span>
                      </div>
                      <div className="search__sort-filters field">
                        <div className="field__select column-t-6">
                          <select
                            name="sort-by"
                            id="sort-by"
                            onChange={handleFilter}
                          >
                            <option value="MOST_RECOMMENDED">
                              Recommended
                            </option>
                            <option value="BEST_RATED">Highest Rated</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div
                      id="search-results-container"
                      style={{
                        overflow: "auto",
                        height: isMobile
                          ? "calc(100vh - 20rem)"
                          : "calc(100vh - 15rem)",
                      }}
                    >
                      <InfiniteScroll
                        dataLength={practitioners ? total : 0} //This is important field to render the next data
                        next={loadMore}
                        hasMore={showMore}
                        loader={
                          <div
                            className="spinner"
                            style={{
                              overflow: "hidden",
                            }}
                          >
                            <div />
                            <div />
                            <div />
                            <div />
                          </div>
                        }
                        onScroll={(e) => {
                          const { scrollTop, scrollHeight, clientHeight } =
                            e.target
                          if (
                            scrollTop + clientHeight >= scrollHeight - 100 &&
                            !loading &&
                            showMore
                          ) {
                            return loadMore()
                          }
                        }}
                        scrollThreshold={0.4}
                        children={"div"}
                        scrollableTarget="search-results-container"
                        endMessage={
                          <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                          </p>
                        }
                      >
                        {isMobile ? (
                          <MobileCard
                            practitioners={practitioners}
                            loading={loading}
                          />
                        ) : (
                          <DesktopCard
                            practitioners={practitioners}
                            loading={loading}
                            setPopupItem={(popupItem) =>
                              setPopupItem(popupItem)
                            }
                          />
                        )}
                      </InfiniteScroll>
                    </div>
                  </div>
                  <div className="column-d-4 column-lg-5 column">
                    <div className="fresnel-container fresnel-greaterThanOrEqual-bigmd ">
                      <div
                        ref={mapContainerRef}
                        style={{
                          borderRadius: "15px",
                          width: "468px",
                          height: "699.994px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        ) : (
          <h1>
            Something went wrong, please try again later or contact support
          </h1>
        )}
      </main>
    </div>
  )
}

export default Search
