import React from "react"
import { useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import DatePicker from "./../../../components/DatePicker"

const BookingsTab = ({
  selectedTreatments,
  removeTreatment,
  setSelectedTime,
  setSelectedDate,
  totalAmount,
  setTotalAmount,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })
  const bookings = Object.entries(selectedTreatments)
    .filter(([_, treatments]) => treatments.length > 0)
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})

  useEffect(
    () => {
      setTotalAmount(
        Object.keys(bookings).reduce((acc, key) => {
          const total = bookings[key].reduce((a, b) => a + b.price, 0)
          return acc + total
        }, 0)
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [bookings]
  )

  return (
    <>
      {!Object.keys(bookings).length ? (
        <div className="treatment-selection-grid">
          <div className="treatment-selection-grid__wrapper">
            <h3>No treatments selected</h3>
            <p>
              To proceed with the booking please select treatments from the menu
              provided
            </p>
          </div>
          <div className="fresnel-container fresnel-lessThan-bigmd" />
        </div>
      ) : (
        <div className="treatment-selection-grid">
          <h3>Selected treatments</h3>
          <div
            className="treatment-selection-grid__wrapper"
            style={{
              height: isMobile ? "8rem" : "5rem",
            }}
          >
            {Object.keys(bookings).map((key, index) => (
              <div
                key={index}
                className="treatment-selection-grid__wrapper--row"
              >
                <h4 className="margin-bottom-0">{key}</h4>

                {bookings[key].map((item, i) => (
                  <div
                    className="treatment-row border-bottom border-bottom__charcoal-medium"
                    key={i}
                  >
                    <div className="column-m-8">
                      <span>{item.name}</span>
                    </div>
                    <div className="column-m-3 text-center">
                      <span className="pound">£</span>
                      <span>{item.price}</span>
                    </div>
                    <div className="column-m-2 action">
                      <button
                        className="button--small button--utility round-button"
                        type="button"
                        title="remove treatment from the menu"
                        data-testid
                        onClick={() =>
                          removeTreatment({
                            categoryName: key,
                            practitionerTreatmentId:
                              item.practitionerTreatmentId,
                          })
                        }
                      >
                        <img
                          src="/static/img/icons/trash.svg"
                          alt="icon for remove treatment from the menu"
                          width={24}
                          height={24}
                          className="round-image"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="fresnel-container fresnel-lessThan-bigmd" />
          {Object.keys(bookings).length && (
            <div className="fresnel-container ">
              <div className="booking__section">
                <div className="field field--date">
                  <DatePicker
                    setSelectedDate={setSelectedDate}
                    setSelectedTime={setSelectedTime}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {Object.keys(bookings).length ? (
        <div className="booking__price booking__price--mobile">
          <span className="booking__price--mobile--total">
            Total: £{totalAmount || 0}
          </span>
        </div>
      ) : null}
    </>
  )
}

export default BookingsTab
