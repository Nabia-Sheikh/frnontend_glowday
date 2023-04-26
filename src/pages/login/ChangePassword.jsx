import React from "react"
import logo from "./logo--full.svg"
import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { Link, useNavigate, useParams } from "react-router-dom"
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google"
import { ToastContainer, toast } from "react-toastify"
import "./Login.css"
import "react-toastify/dist/ReactToastify.css"
import jwtDecode from "jwt-decode"
import { useEffect } from "react"
import { useLayoutEffect } from "react"
import axios from "../../utils/axios"
import authConfig from "../../configs/auth.js"
const ChangePassword = () => {
  // Get params from URL
  const { id, token } = useParams()
  const auth = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  })
  if (!id || !token) {
    toast.error("Invalid URL")
    navigate("/login")
  }

  useLayoutEffect(() => {
    const { user } = auth
    if (user) {
      navigate("/")
    }
  })

  const checkToken = async () => {
    try {
      const { data } = await axios.post(
        `${authConfig.checkRandStringEndpoint}/${id}/${token}`
      )
      console.log(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message || "Something went wrong")
      navigate("/login")
      setLoading(false)
    }
  }

  useEffect(() => {
    checkToken()
  }, [])

  const handleChangePassword = async () => {
    try {
      const {
        data: { message },
      } = await axios.post(
        `${authConfig.resetPasswordEndpoint}/${id}/${token}`,
        {
          newPassword: data.password,
        }
      )
      toast.success(message, {
        onClose: () => {
          navigate("/login")
        },
        position: "top-center",
        width: "400px",
      })
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message || "Something went wrong")
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { password, confirmPassword } = data

    if (!password || !confirmPassword) {
      toast.error("Please fill all the fields")
      return
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters")
      return
    }

    handleChangePassword()
  }
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div className="spinner">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      ) : (
        <form className="body" onSubmit={onSubmit}>
          <div
            className="box"
            style={{
              width: "600px",
              maxHeight: "400px",
            }}
          >
            <img
              className="img-auth"
              src={logo}
              alt="logo"
              width="300px"
              height="300px"
            />
            <p className="para">Change Password</p>
            <input
              placeholder="New Password"
              className="email"
              type="password"
              name="password"
              value={data.password}
              minLength="6"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <input
              placeholder="Confirm Password"
              className="email"
              type="password"
              name="confirmPassword"
              minLength="6"
              value={data.confirmPassword}
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
            />
            <button className="sbtn" type="submit">
              Change Password
            </button>
          </div>
          <ToastContainer
            style={{
              width: "400px",
            }}
          />
        </form>
      )}
    </>
  )
}

export default ChangePassword
