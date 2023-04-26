// ** React Imports
import { createContext, useEffect, useState } from "react"

// ** Axios
import axios from "axios"

// ** Config
import authConfig from "./../configs/auth.js"
import secureLocalStorage from "react-secure-storage"

import { BASE_URL } from "../configs/api"
import { useLocation, useNavigate } from "react-router-dom"

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  isInitialized: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
  register: () => Promise.resolve(),
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [isInitialized, setIsInitialized] = useState(
    defaultProvider.isInitialized
  )

  // ** Hooks
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const initAuth = async () => {
      setIsInitialized(true)
      const storedToken = secureLocalStorage.getItem(
        authConfig.storageTokenKeyName
      )
      if (storedToken) {
        setLoading(true)
        await axios
          .get(BASE_URL + authConfig.meEndpoint, {
            headers: {
              Authorization: "Bearer " + storedToken,
            },
          })
          .then(async (response) => {
            secureLocalStorage.setItem("result", response.data.result)

            setLoading(false)

            setUser({ ...response.data.result })
          })
          .catch(() => {
            secureLocalStorage.removeItem("result")
            secureLocalStorage.removeItem("accessToken")
            setUser(null)
            setLoading(false)
          })
      } else {
        setLoading(false)
      }
    }
    initAuth()
  }, [])

  const handleLogin = async (params, errorCallback) => {
    try {
      const loginResponse = await axios.post(
        BASE_URL + authConfig.loginEndpoint,
        params
      )
      secureLocalStorage.setItem(
        authConfig.storageTokenKeyName,
        loginResponse.data.token
      )
      const headers = {
        headers: {
          Authorization: "Bearer " + secureLocalStorage.getItem("accessToken"),
        },
      }

      const meResponse = await axios.get(
        BASE_URL + authConfig.meEndpoint,
        headers
      )
      const returnUrl = new URLSearchParams(location.search).get("returnUrl")
      secureLocalStorage.setItem("result", meResponse.data.result)
      setUser({ ...meResponse.data.result })
      const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/"
      navigate(redirectURL)
    } catch (err) {
      if (errorCallback) errorCallback(err)
    }
  }
  const handleGoogleLogin = async (params, errorCallback) => {
    try {
      const loginResponse = await axios.post(
        BASE_URL + authConfig.googleEndpoint,
        params
      )
      secureLocalStorage.setItem(
        authConfig.storageTokenKeyName,
        loginResponse.data.token
      )
      const headers = {
        headers: {
          Authorization: "Bearer " + secureLocalStorage.getItem("accessToken"),
        },
      }

      const meResponse = await axios.get(
        BASE_URL + authConfig.meEndpoint,
        headers
      )
      const returnUrl = new URLSearchParams(location.search).get("returnUrl")
      secureLocalStorage.setItem("result", meResponse.data.result)
      setUser({ ...meResponse.data.result })
      const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/"
      navigate(redirectURL)
    } catch (err) {
      if (errorCallback) errorCallback(err)
    }
  }
  const handleFacebookLogin = async (params, errorCallback) => {
    try {
      const loginResponse = await axios.post(
        BASE_URL + authConfig.facebookEndpoint,
        params
      )
      secureLocalStorage.setItem(
        authConfig.storageTokenKeyName,
        loginResponse.data.token
      )
      const headers = {
        headers: {
          Authorization: "Bearer " + secureLocalStorage.getItem("accessToken"),
        },
      }

      const meResponse = await axios.get(
        BASE_URL + authConfig.meEndpoint,
        headers
      )
      const returnUrl = new URLSearchParams(location.search).get("returnUrl")
      secureLocalStorage.setItem("result", meResponse.data.result)
      setUser({ ...meResponse.data.result })
      const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/"
      navigate(redirectURL)
    } catch (err) {
      if (errorCallback) errorCallback(err)
    }
  }

  const handleLogout = () => {
    setUser(null)
    setIsInitialized(false)
    secureLocalStorage.removeItem("result")
    secureLocalStorage.removeItem("accessToken")

    navigate("/login")
  }

  const handleRegister = (params, errorCallback) => {
    axios
      .post(BASE_URL + authConfig.registerEndpoint, params)
      .then((res) => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          handleLogin({ email: params.email, password: params.password })
        }
      })
      .catch((err) => (errorCallback ? errorCallback(err) : null))
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
    googleLogin: handleGoogleLogin,
    facebookLogin: handleFacebookLogin,
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
