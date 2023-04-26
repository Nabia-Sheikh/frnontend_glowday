import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Link, useNavigate } from "react-router-dom"

const ConfirmationTab = ({
  selectedTreatments,
  selectedDate,
  selectedTime,
  editDateTime,
  confirmBooking,
  bookingConfirmed,
  practitioner,
  comments,
  setComments,
  bookingRef,
  loading,
  backToBooking,
}) => {
  const navigate = useNavigate()
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })
  const [termsAgree, setTermsAgree] = useState(null)
  console.log("trems", termsAgree)
  const [showMsg, setShowMsg] = useState(false)
  const bookings = Object.entries(selectedTreatments)
    .filter(([_, treatments]) => treatments.length > 0)
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})

  const handleSubmit = () => {
    if (!termsAgree) {
      return setShowMsg(true)
    }

    confirmBooking()
  }

  useEffect(() => {
    if (termsAgree) {
      return setShowMsg(false)
    } else {
      setShowMsg(true)
    }
  }, [termsAgree])
  return (
    <>
      {bookingConfirmed ? (
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
                <span>{bookingRef}</span>
              </div>
            </div>
          </div>
          <div className="booking__section">
            <div className="booking__summary">
              <div>
                <span className="booking__time">{selectedTime}</span>
                <span className="booking__date">{selectedDate}</span>
              </div>
            </div>
          </div>
          <div className="booking__section">
            <div className="booking__summary">
              <div>
                <span className="booking__heading">{practitioner.name}</span>
              </div>
              <img
                src={practitioner.profileImageUrl}
                className="booking__practitioner"
                alt={practitioner.clinicName}
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
              <Link
                className="button text-center button--fullwidth button--flat button--gold"
                to="/client"
              >
                Client Area
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="booking__stage--main-center">
          <div className="booking__section booking__border">
            <div className="booking__summary">
              <p style={{ textAlign: "left", marginTop: 0 }}>
                You will not be charged until after your treatment
              </p>
            </div>
            <div className="booking__summary">
              <div>
                <span className="booking__time">{selectedTime}</span>
                <span className="booking__date">{selectedDate}</span>
              </div>
              <button
                className="button button--small button--outline"
                type="button"
                data-testid="mobile-nav-to-booking"
                title="Edit"
                onClick={editDateTime}
              >
                Edit
              </button>
            </div>
          </div>
          <div className="booking__section booking__border">
            {Object.keys(bookings).map((key, index) => (
              <>
                <strong className="booking__heading">{key}</strong>
                {bookings[key].map((item, i) => (
                  <div
                    className="booking__summary"
                    style={{ padding: "0.25rem 0px" }}
                  >
                    <div className="column-m-8">
                      <span className="booking__description">{item.name}</span>
                    </div>
                    <span
                      className="booking__price booking__price--background"
                      style={{ fontSize: "1.25rem" }}
                    >
                      <span>£</span>
                      {item.price}
                    </span>
                  </div>
                ))}
              </>
            ))}
          </div>
          <div className="booking__section booking__border booking__section--customer-comments">
            <div className="field">
              <label htmlFor="customer_comments">
                Optional: Notes for practitioner
              </label>
              <textarea
                placeholder="Any information you'd like to provide to the practitioner in advance of this booking."
                maxLength={255}
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                style={{ resize: "none" }}
                defaultValue={""}
              />
            </div>
          </div>
          <div className="booking__section booking__border">
            <div className="booking__summary">
              <div>
                <span className="booking__heading">{practitioner.name}</span>
                <span className="booking__description">
                  {practitioner.clinicName}
                </span>
              </div>
              <img
                src={practitioner.profileImageUrl}
                width={160}
                height={160}
                className="booking__practitioner"
                alt={`Booking with ${practitioner.name}`}
              />
            </div>
          </div>
          <div className="booking__section booking__border booking__section--marketing">
            <div className="field">
              <label htmlFor="terms">
                I accept the
                <a href="https://www.glowday.com/client-terms-and-conditions">
                  Terms &amp; Conditions
                </a>
              </label>
            </div>

            {isMobile ? (
              <>
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  value={termsAgree}
                  onChange={(e) => setTermsAgree(e.target.checked)}
                  style={{
                    // Rounded checkbox
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                    // Custom checkbox
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: "0.5rem",
                    border: "1px solid #3ef3ad",
                    borderRadius: "50%",
                    // Custom checkbox checked
                    backgroundColor: termsAgree ? "#3ef3ad" : "transparent",
                    // Custom checkbox focus
                    outline: "none",

                    // Custom checkbox hover
                    ":hover": {
                      backgroundColor: termsAgree ? "#3ef3ad" : "#ccc",
                    },

                    // Custom checkbox checked hover
                    ":hover:checked": {
                      backgroundColor: "#3ef3ad",
                    },
                  }}
                />
                <label
                  htmlFor="terms"
                  style={{ fontWeight: 400, marginBottom: "1rem" }}
                >
                  Yes
                </label>
                <br />
              </>
            ) : (
              <div className="field field--inline padding-bottom-1">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    value={termsAgree}
                    onChange={(e) => setTermsAgree(e.target.checked)}
                  />
                  <label htmlFor="terms" style={{ fontWeight: 400 }}>
                    <div className="checkbox__faux" />
                    Yes
                  </label>
                </div>
              </div>
            )}
            {showMsg && (
              <span class="error">Please accept our Terms and Conditions.</span>
            )}
          </div>
          <div className="booking__section booking__border">
            <p style={{ textAlign: "left", marginTop: 0 }}>
              You will not be charged until after your treatment
            </p>
          </div>
          <div className="booking__section">
            <button
              className="button button--small button--flat button--gold"
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
            >
              Confirm Booking
            </button>
            <button
              className="button button--outline button--small"
              type="button"
              onClick={() => navigate("/search")}
            >
              Cancel
            </button>
            <span className="error" />
          </div>
        </div>
      )}
    </>
  )
}

export default ConfirmationTab
