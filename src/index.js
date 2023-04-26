import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { AuthProvider } from "./context/AuthContext"
import { GoogleOAuthProvider } from "@react-oauth/google"

import "mapbox-gl/dist/mapbox-gl.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "swiper/css/bundle"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./index.css"
import "./styles/responsive.css"
import "./styles/main.css"
import "./styles/main2.css"
import "./styles/map.css"
import "./styles/myCustom.css"
import "./styles/rating.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="865783848210-foqe5085crm0vm5unttebam8tggfr2le.apps.googleusercontent.com">
      <AuthProvider>
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
