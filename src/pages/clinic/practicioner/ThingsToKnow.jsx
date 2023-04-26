import React from "react"

const ThingsToKnow = ({ data }) => {
  return (
    <div
      className="row row--no-margin padding-top-1 padding-bottom-2 border-bottom"
      dangerouslySetInnerHTML={{
        __html: data,
      }}
    />
  )
}

export default ThingsToKnow
