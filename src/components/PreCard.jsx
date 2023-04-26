import React from 'react'

const PreCard = () => {
  return (
    <div className="booking__section">
      <button
        className="button button--small button--flat button--gold"
        type="button"
      >
        Continue as for
      </button>
      <span className="booking__or">or</span>
      <button className="button button--outline button--small" type="button">
        Sign Out
      </button>
      <p>
        By continuing I agree to the
        <a href="https://www.glowday.com/client-terms-and-conditions">
          Terms of Service
        </a>
        and <a href="https://www.glowday.com/privacy-policy">Privacy Policy</a>
      </p>
      <div className="fresnel-container fresnel-greaterThanOrEqual-bigmd">
        <button className="button button--outline button--small" type="button">
          Back to booking
        </button>
      </div>
      <div className="fresnel-container fresnel-lessThan-bigmd" />
    </div>
  )
}

export default PreCard