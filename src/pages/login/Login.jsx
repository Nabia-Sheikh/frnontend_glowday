import React, { useCallback } from "react"
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
import ReactFacebookLogin from "react-facebook-login"
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login"

const Login = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    const { user } = auth
    if (user) {
      navigate("/")
    }
  })

  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleGoogleLogin = (response) => {
    setLoading(true)
    const {
      email,
      given_name: firstName,
      family_name: lastName,
      name,
    } = response
    auth.googleLogin({ email, firstName, lastName, name }, (err) => {
      if (err) {
        console.log(err)
        toast.error(err?.response?.data?.message || "Something went wrong")
      }
    })
    setLoading(false)
  }

  const handleFacebookLogin = (response) => {
    setLoading(true)
    const { name, email } = response
    const firstName = name.split(" ")[0]
    const lastName = name.split(" ")[1] || ""
    auth.facebookLogin({ email, firstName, lastName, name }, (err) => {
      if (err) {
        console.log(err)
        toast.error(err?.response?.data?.message || "Something went wrong")
      }
    })
    setLoading(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { email, password } = data

    if (!email || !password) {
      toast.error("Please fill all the fields")
      return
    }

    setLoading(true)
    auth.login({ email, password }, (err) => {
      if (err) {
        console.log(err)
        toast.error(err?.response?.data?.message || "Something went wrong")
      }
    })
    setLoading(false)
  }

  return (
    <>
      {loading ? (
        <>
          <div className="booking-overlay booking-overlay--active"></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10%",
            }}
          >
            <div
              className="booking booking--open  booking--wide booking--open__booking"
              style={{
                position: "inherit",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "400px",
              }}
            >
              <div className="spinner">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </>
      ) : (
        <form className="body" onSubmit={onSubmit}>
          <div className="box">
            <img
              className="img-auth"
              src={logo}
              alt="logo"
              width="300px"
              height="300px"
            />
            <p className="para">Sign in with your existing account</p>
            <input
              placeholder="Email Address"
              className="email"
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <input
              placeholder="Password"
              className="email"
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <Link to={"/forgot-password"} className="textClass">
              Forgot your password?
            </Link>
            <button className="sbtn" type="submit">
              Sign In
            </button>
            <Link to={"/register"} className="textClass">
              Don't have an account? Sign up
            </Link>
            <p className="para">Sign in with your social accounts</p>{" "}
            <div>
              <LoginSocialGoogle
                client_id={
                  "865783848210-foqe5085crm0vm5unttebam8tggfr2le.apps.googleusercontent.com"
                }
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={({ provider, data }) => {
                  setLoading(true)
                  handleGoogleLogin(data)
                }}
                onReject={(err) => {
                  console.log(err)
                  setLoading(false)
                }}
                // If close the popup without login then it will call this function
              >
                <div className="gbtn">
                  <img
                    src="https://freesvg.org/img/1534129544.png"
                    alt="google"
                    width="22px"
                    height="22px"
                    margin="0px 10px"
                    style={{
                      marginRight: "12px",
                    }}
                  />
                  Login with Google
                </div>
              </LoginSocialGoogle>
              {/* <GoogleLogin
            clientId="865783848210-foqe5085crm0vm5unttebam8tggfr2le.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={(response) => {
              handleGoogleLogin(response)
            }}
            onError={(response) => {
              console.log(response)
            }}
            cookiePolicy={"single_host_origin"}
            scope="https://www.googleapis.com/auth/userinfo.email "
            size="large"
            theme="dark"
            text="Login with Google"
            shape="square"
            width="100%"
            logo_alignment="left"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              backgroundColor: "#fff",
              color: "#000",
            }}
          /> */}
            </div>
            {/* <div className="fbtn"> */}
            <LoginSocialFacebook
              appId={"518527676976534"}
              fieldsProfile={
                "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
              }
              onResolve={({ data }) => {
                setLoading(true)

                toast.success("Login successful")

                handleFacebookLogin(data)
              }}
              onReject={(err) => {
                console.log(err)
                setLoading(false)
              }}
              onClose={() => {
                console.log("Popup closed")
                setLoading(false)
              }}
            >
              <div className="fbtn">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                  alt="facebook"
                  width="20px"
                  height="26px"
                  style={{
                    marginRight: "10px",
                  }}
                />
                Login with Facebook
              </div>
            </LoginSocialFacebook>
            {/* <ReactFacebookLogin
          appId="518527676976534"
          autoLoad={false}
          fields="name,email,picture"
          onClick={() => {
            componentClicked()
          }}
          callback={(response) => {
            responseFacebook(response)
          }}
        /> */}
            {/* </div> */}
          </div>
          <ToastContainer />
        </form>
      )}
    </>
  )
}

export default Login
