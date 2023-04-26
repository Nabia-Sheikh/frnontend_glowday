import React from "react"

const Page404 = () => {
  return (
    <div id="__next">
      <div
        style={{
          color: "#000",
          background: "#fff",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n                    body {\n                        margin: 0\n                    }\n                ",
            }}
          />
          <h1
            style={{
              display: "inline-block",
              borderRight: "1px solid rgba(0, 0, 0,.3)",
              margin: 0,
              marginRight: 20,
              padding: "10px 23px 10px 0",
              fontSize: 24,
              fontWeight: 500,
              verticalAlign: "top",
            }}
          >
            404
          </h1>
          <div
            style={{
              display: "inline-block",
              textAlign: "left",
              lineHeight: 49,
              height: 49,
              verticalAlign: "middle",
            }}
          >
            <h2
              style={{
                fontSize: 14,
                fontWeight: "normal",
                lineHeight: "",
                margin: 0,
                padding: 0,
              }}
            >
              This page could not be found
              {/* */}.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page404
