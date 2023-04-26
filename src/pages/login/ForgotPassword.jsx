import React from "react"
import logo from "./logo--full.svg"
import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google"
import { ToastContainer, toast } from "react-toastify"
import "./Login.css"
import "react-toastify/dist/ReactToastify.css"
import jwtDecode from "jwt-decode"
import { useEffect } from "react"
import { useLayoutEffect } from "react"
import axios from "../../utils/axios"
import authConfig from "../../configs/auth.js"
const ForgotPassword = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  useLayoutEffect(() => {
    const { user } = auth
    if (user) {
      navigate("/")
    }
  })

  const [data, setData] = useState({
    email: "",
  })

  const handleForgotPassword = async () => {
    try {
      const {
        data: { message },
      } = await axios.post(authConfig.forgotPasswordEndpoint, {
        email: data.email,
      })
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
    const { email } = data

    if (!email) {
      toast.error("Please fill all the fields")
      return
    }

    handleForgotPassword()
  }
  return (
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
        <p className="para">Enter your email address</p>
        <input
          placeholder="Email Address"
          className="email"
          type="email"
          name="email"
          value={data.email}
          onChange={(e) => setData({ email: e.target.value })}
        />
        <button className="sbtn" type="submit">
          Send Reset Link
        </button>
      </div>
      <ToastContainer
        style={{
          width: "400px",
        }}
      />
    </form>
  )
}

export default ForgotPassword
