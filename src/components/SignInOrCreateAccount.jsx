import React from "react"
import { Link } from "react-router-dom"

const SignInOrCreateAccount = ({ backToBooking }) => {
  return (
    <div className="booking__section">
      <h2 className="small">Sign In or Create Account</h2>
      <p style={{ textAlign: "left" }}>
        By creating an account you can re-schedule or cancel your booking
      </p>
      <div className="social-login">
        {/* <button
          className="button google button--small button--outline shadow__utility"
          type="button"
          data-testid="sign-in-google"
          title="Google"
        >
          <img src="/static/img/icons/google-g-logo.svg" alt="Icon" />
          <span>Continue with Google</span>
        </button> */}

        {/* <button
          className="button facebook button--small button--outline shadow__utility"
          type="button"
          data-testid="sign-in-facebook"
          title="Facebook"
        >
          <img src="/static/img/icons/facebook-blue.svg" alt="Icon" />
          <span>Login in to Continue</span>
        </button> */}
        <Link
          to={`/login?returnUrl=${encodeURIComponent(
            window.location.pathname + window.location.search
          )}`}
        >
          <button
            className="button button--small button--link"
            type="button"
            data-testid="sign-in-email"
            title="Email"
          >
            <img src="/static/img/icons/email.svg" alt="Icon" />
            <span>Login to Continue</span>
          </button>
        </Link>
      </div>
      <hr className="content-divider content-divider__extra-small" />
      <button
        className="button button--outline button--small"
        type="button"
        onClick={backToBooking}
      >
        Back to booking
      </button>
    </div>
  )
}

export default SignInOrCreateAccount
