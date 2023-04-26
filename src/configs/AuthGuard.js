// ** React Imports
import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import secureLocalStorage from "react-secure-storage"

// ** Hooks Import
import { useAuth } from "../hooks/useAuth"

const AuthGuard = (props) => {
  const { children, fallback } = props
  const auth = useAuth()
  const location = useLocation()
  useEffect(
    () => {
      if (auth.user === null && !secureLocalStorage.getItem("userData")) {
        if (location.pathname !== "/") {
          const queryParams = new URLSearchParams({
            returnUrl: location.pathname,
          }).toString()
          window.location.replace(`/login?${queryParams}`)
        } else {
          window.location.replace("/login")
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname]
  )
  if (auth.loading || auth.user === null) {
    return fallback
  }

  return <>{children}</>
}

export default AuthGuard
