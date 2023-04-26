import React from "react"
import logo from "./logo--full.svg"
import "./Login.css"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import { useAuth } from "../../hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"
import { useLayoutEffect } from "react"

const Register = () => {
  const { register, user } = useAuth()

  const navigate = useNavigate()

  useLayoutEffect(() => {
    if (user) {
      navigate("/")
    }
  })

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
  })

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      mobileNumber,
    } = data
    if (password !== confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters")
      return
    }

    // Mobile number validation according to global standards
    if (mobileNumber.length < 10) {
      toast.error("Mobile number must be at least 10 digits")
      return
    }
    register(
      {
        email,
        password,
        firstName,
        lastName,
        mobileNumber,
      },
      (err) => {
        if (err) {
          console.log(err)
          toast.error(err?.response?.data?.message || "Something went wrong")
        }
      }
    )
  }

  return (
    <form className="body" onSubmit={handleSubmit}>
      <div
        className="box"
        style={{
          width: "500px",
        }}
      >
        <img
          className="img-auth"
          src={logo}
          alt="logo"
          width="300px"
          height="300px"
        />
        <input
          placeholder="Email Address"
          className="email"
          type="email"
          name="email"
          value={data.email}
          onChange={handleOnChange}
        />
        <input
          placeholder="New Password"
          className="email"
          required
          type="password"
          name="password"
          value={data.password}
          minLength={6}
          onChange={handleOnChange}
        />
        <input
          placeholder="Confirm New Password"
          className="email"
          required
          type="password"
          name="confirmPassword"
          minLength={6}
          value={data.confirmPassword}
          onChange={handleOnChange}
        />
        <input
          placeholder="First Name"
          className="email"
          required
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleOnChange}
        />
        <input
          placeholder="Last Name"
          className="email"
          required
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleOnChange}
        />
        <input
          placeholder="Mobile Number"
          className="email"
          required
          type="text"
          name="mobileNumber"
          value={data.mobileNumber}
          onChange={handleOnChange}
        />
        <button type="submit" className="sbtn">
          Create
        </button>
        <Link
          to="/login"
          className="sbtn"
          style={{
            backgroundColor: "transparent",
            color: "black",
            border: "1px solid black",
          }}
        >
          Login
        </Link>
      </div>
      <ToastContainer />
    </form>
  )
}

export default Register
