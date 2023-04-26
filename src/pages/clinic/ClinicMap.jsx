import React, { useState, useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import { MAP_KEY } from "../../configs/constants"

const ClinicMap = ({ location }) => {
  console.log(location)
  const mapContainer = useRef(null)
  const [map, setMap] = useState(null)

  useEffect(() => {
    mapboxgl.accessToken = MAP_KEY
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [location.geocode.lng, location.geocode.lat],
      zoom: 15,
    })

    map.on("load", () => {
      map.addControl(new mapboxgl.NavigationControl(), "top-left")
      // Add a marker to the map at the location.geocode's coordinates
      new mapboxgl.Marker()
        .setLngLat([location.geocode.lng, location.geocode.lat])
        .addTo(map)
    })

    setMap(map)

    return () => map.remove()
  }, [location])

  return <div ref={mapContainer} style={{ width: "100%", height: "400px" }} />
}

export default ClinicMap
