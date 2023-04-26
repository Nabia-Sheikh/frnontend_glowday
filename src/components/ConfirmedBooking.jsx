import React from "react"

const ConfirmedBooking = () => {
  return (
    <div className="confirmed">
      <div className="booking__section">
        <div className="booking__fill">
          <div>
            <img
              src="/static/img/icons/approve.svg"
              alt="Success"
              width={48}
              height={48}
            />
          </div>
          <div>
            <h2 className="small">
              Congratulations, your booking is confirmed
            </h2>
          </div>
        </div>
      </div>
      <div className="booking__section">
        <div className="booking__summary">
          <div>
            <span className="booking__heading">Booking reference:</span>
            <span>#KB4-011941</span>
          </div>
        </div>
      </div>
      <div className="booking__section">
        <div className="booking__summary">
          <div>
            <span className="booking__time">14:00 PM - 14:15 PM</span>
            <span className="booking__date">Wednesday, January 18th</span>
          </div>
        </div>
      </div>
      <div className="booking__section">
        <div className="booking__summary">
          <div>
            <span className="booking__heading">Kelsey Bailey</span>
          </div>
          <img
            src="https://cdn.sanity.io/images/obs9cuzs/production/ef9f3becd078b0813f07432175903e824b917b85-2560x1705.jpg?rect=437,0,1705,1705&w=160&h=160&auto=format&dpr=2"
            className="booking__practitioner"
            alt="Kelsey Bailey at KB Aesthetics London Ltd"
            width={48}
            height={48}
          />
        </div>
      </div>
      <div className="booking__summary text-center">
        <div className="column margin-top-1">
          <p>We've sent you a text message to confirm your booking.</p>
        </div>
      </div>

      <div className="booking__summary border-top text-center">
        <div className="column margin-top-1 margin-bottom-1">
          <p>To manage your booking, visit your client area.</p>
          <a
            className="button text-center button--fullwidth button--flat button--gold"
            href="/client"
          >
            Client Area
          </a>
        </div>
      </div>
    </div>
  )
}

export default ConfirmedBooking
