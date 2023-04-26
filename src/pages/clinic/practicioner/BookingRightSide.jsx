import React, { useState } from "react"
// import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "react-datepicker/dist/react-datepicker-cssmodules.css"
import BookingProcess from "../../../components/BookingProcess"
import BookingsTab from "./BookingsTab"
import CardDetails from "../../../components/CardDetails"
import ConfirmationTab from "../../../components/ConfirmationTab"
import axios from "../../../utils/axios"
import { useAuth } from "../../../hooks/useAuth"
import { useMediaQuery } from "react-responsive"

const BookingRightSide = ({
  selectedTreatments,
  removeTreatment,
  practitioner,
  totalAmount,
  setTotalAmount,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })

  const [policy, setPolicy] = useState(false)
  const [consultation, setConsultation] = useState(false)
  const [currentStep, setCurrentStep] = useState("Booking")
  const [isBookingComplete, setIsBookingComplete] = useState(false)
  const [isCardDetailsComplete, setIsCardDetailsComplete] = useState(false)
  const [isConfirmComplete, setIsConfirmComplete] = useState(false)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [bookingRef, setBookingRef] = useState(null)
  const [comments, setComments] = useState("")
  const [loading, setLoading] = useState(false)
  const [seeAvailibility, setSeeAvailibility] = useState(false)
  const { user } = useAuth()

  const handleSelectTime = (v) => {
    setSelectedTime(v)
  }
  const handleSelectedDate = (v) => {
    setSelectedDate(v)
  }

  const bookings = Object.entries(selectedTreatments)
    .filter(([_, treatments]) => treatments.length > 0)
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})

  function handleBookingComplete() {
    setIsBookingComplete(true)
    setCurrentStep("Card Details")
  }

  const backToBooking = () => {
    setCurrentStep("Booking")
    setIsCardDetailsComplete(false)
    setIsBookingComplete(false)
    setIsConfirmComplete(false)
  }

  function handleCardDetailsComplete() {
    setCurrentStep("Confirm")
    setIsCardDetailsComplete(true)
  }

  function handleConfirmComplete() {
    setIsConfirmComplete(true)
  }

  const confirmBooking = async () => {
    setLoading(true)
    try {
      const treatmentArray = Object.entries(bookings)
        .map(([treatmentCategoryName, treatments]) => {
          return treatments.map((treatment) => {
            return Object.assign(
              {},
              {
                duration: Number(treatment.duration),
                practitionerTreatmentId: treatment.practitionerTreatmentId,
                price: treatment.price,
                treatmentCategoryId: treatment.clinicTreatmentId,
                treatmentCategoryName,
                treatmentName: treatment.name,
              }
            )
          })
        })
        .flat()

      const bookingDetails = {
        appointment: {
          date: selectedDate,
          time: selectedTime,
        },
        clinicSlug: practitioner.clinicSlug,
        clinicName: practitioner.clinicName,
        practitionerSlug: practitioner.practitionerSlug,
        practitionerName: practitioner.name,
        practitionerId: practitioner._id,
        address:
          practitioner?.address?.line1 + " " + practitioner?.address?.postcode,
        profileImageUrl: practitioner.profileImageUrl,
        customer: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          customerId: user._id,
        },
        totalAmount,
        treatments: treatmentArray,
        customerComments: comments,
      }

      const { data } = await axios.post("/bookings", bookingDetails)
      setBookingRef(data.bookingId)
      handleConfirmComplete()
      setBookingConfirmed(true)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <div className="column-d-4 column column--relative z-index">
      <div className="booking-overlay" />
      {/* <div class="booking-overlay booking-overlay--active"></div> */}
      {/* booking booking--open booking--wide booking--open__booking */}
      <div
        className="booking booking--wide booking--open__booking"
        data-testid="booking-widget"
      >
        <div className="fresnel-container fresnel-greaterThanOrEqual-bigmd">
          <div style={{ maxHeight: "90vh", overflowY: "auto" }}>
            <div className="booking__main">
              <div className="booking__stage booking__stage--active">
                <div className="booking__stage--main-center">
                  <BookingProcess
                    currentStep={currentStep}
                    isBookingComplete={isBookingComplete}
                    isCardDetailsComplete={isCardDetailsComplete}
                    isConfirmComplete={isConfirmComplete}
                  />

                  {currentStep === "Booking" && (
                    <BookingsTab
                      selectedTreatments={selectedTreatments}
                      removeTreatment={removeTreatment}
                      setSelectedDate={(v) => handleSelectedDate(v)}
                      setSelectedTime={(v) => handleSelectTime(v)}
                      totalAmount={totalAmount}
                      setTotalAmount={(v) => setTotalAmount(v)}
                    />
                  )}

                  {currentStep === "Card Details" && (
                    <CardDetails
                      handleCardDetailsComplete={handleCardDetailsComplete}
                      backToBooking={backToBooking}
                    />
                  )}

                  {currentStep === "Confirm" && (
                    <ConfirmationTab
                      practitioner={practitioner}
                      editDateTime={backToBooking}
                      selectedDate={selectedDate}
                      selectedTime={selectedTime}
                      selectedTreatments={selectedTreatments}
                      confirmBooking={confirmBooking}
                      bookingConfirmed={bookingConfirmed}
                      bookingRef={bookingRef}
                      comments={comments}
                      setComments={(v) => setComments(v)}
                      loading={loading}
                    />
                  )}
                </div>
              </div>
            </div>

            {currentStep === "Booking" && (
              <footer className="booking__footer false">
                <div>
                  <button
                    className="button button--fullwidth button--flat button--gold"
                    disabled={Object.keys(bookings).length > 0 ? false : true}
                    type="button"
                    data-testid="widget-book-now"
                    title="Book now"
                    onClick={handleBookingComplete}
                  >
                    Book now
                  </button>
                </div>
              </footer>
            )}
            <div className="disclaimer">
              <div className="accordion policy">
                <button
                  className="accordion__header"
                  onClick={() => setPolicy(!policy)}
                >
                  <span>Cancellation Policy</span>
                </button>
                {policy && (
                  <div className="accordion__body--content">
                    <div>
                      <h2 className="small">Cancellation Policy</h2>
                      <p>
                        <strong>10%</strong> of treatment cost if cancelled 48
                        hours of appointment
                      </p>
                      <p>
                        <strong>30%</strong> of treatment cost if no show
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="accordion policy">
                <button
                  className="accordion__header"
                  onClick={() => setConsultation(!consultation)}
                >
                  <span>*Treatment subject to consultation</span>
                </button>
                {consultation && (
                  <div className="accordion__body--content">
                    <div className="policy__content">
                      <small>
                        All appointments include a consultation, which may
                        result a change to the recommended treatment, cost and
                        duration. You are not obliged to go ahead with any
                        treatment.
                      </small>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {!seeAvailibility && isMobile ? (
          <div className="fresnel-container fresnel-lessThan-bigmd">
            <footer className="booking__footer booking__footer--active">
              <div className="row row--center">
                <div className="column column-t-6">
                  <button
                    onClick={() => setSeeAvailibility(!seeAvailibility)}
                    className="button button--fullwidth button--flat button--gold"
                    type="button"
                    data-testid="widget-book-now"
                    title="see availability"
                  >
                    see availability
                  </button>
                </div>
              </div>
            </footer>
          </div>
        ) : (
          <div className="fresnel-container fresnel-lessThan-bigmd">
            <div className="column-d-4 column column--relative z-index">
              <div className="booking-overlay booking-overlay--active" />
              <div className="booking booking--open booking--wide booking--open__booking">
                <div className="booking__title">
                  <button
                    className="booking__close round-button"
                    type="button"
                    title="close widget"
                    data-testid
                  >
                    <img
                      src="/static/img/icons/close.svg"
                      alt="icon for close widget"
                      width={24}
                      height={24}
                      className="round-image"
                      onClick={() => setSeeAvailibility(!seeAvailibility)}
                    />
                  </button>
                  <h2 id="booking" className="small">
                    Booking
                  </h2>
                </div>
                <div className="booking__main">
                  <div className="booking__stage booking__stage--active">
                    <div className="booking__stage--main-center">
                      <BookingProcess
                        currentStep={currentStep}
                        isBookingComplete={isBookingComplete}
                        isCardDetailsComplete={isCardDetailsComplete}
                        isConfirmCompletev={isConfirmComplete}
                      />

                      {currentStep === "Booking" && (
                        <BookingsTab
                          selectedTreatments={selectedTreatments}
                          removeTreatment={removeTreatment}
                          setSelectedDate={(v) => handleSelectedDate(v)}
                          setSelectedTime={(v) => handleSelectTime(v)}
                          totalAmount={totalAmount}
                          setTotalAmount={(v) => setTotalAmount(v)}
                        />
                      )}

                      {currentStep === "Card Details" && (
                        <CardDetails
                          handleCardDetailsComplete={handleCardDetailsComplete}
                          backToBooking={backToBooking}
                        />
                      )}

                      {currentStep === "Confirm" && (
                        <ConfirmationTab
                          practitioner={practitioner}
                          editDateTime={backToBooking}
                          selectedDate={selectedDate}
                          selectedTime={selectedTime}
                          selectedTreatments={selectedTreatments}
                          confirmBooking={confirmBooking}
                          bookingConfirmed={bookingConfirmed}
                          bookingRef={bookingRef}
                          comments={comments}
                          setComments={(v) => setComments(v)}
                          loading={loading}
                          backToBooking={backToBooking}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {currentStep === "Booking" && (
                  <footer className="booking__footer false">
                    <div className="disclaimer">
                      <div className="accordion policy">
                        <button
                          className="accordion__header"
                          onClick={() => setPolicy(!policy)}
                        >
                          <span>Cancellation Policy</span>
                        </button>
                        {policy && (
                          <div className="accordion__body--content">
                            <div>
                              <h2 className="small">Cancellation Policy</h2>
                              <p>
                                <strong>10%</strong> of treatment cost if
                                cancelled 48 hours of appointment
                              </p>
                              <p>
                                <strong>30%</strong> of treatment cost if no
                                show
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="accordion policy">
                        <button
                          className="accordion__header"
                          onClick={() => setConsultation(!consultation)}
                        >
                          <span>*Treatment subject to consultation</span>
                        </button>
                        {consultation && (
                          <div className="accordion__body--content">
                            <div className="policy__content">
                              <small>
                                All appointments include a consultation, which
                                may result a change to the recommended
                                treatment, cost and duration. You are not
                                obliged to go ahead with any treatment.
                              </small>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <button
                        className="button button--fullwidth button--flat button--gold"
                        disabled={
                          Object.keys(bookings).length > 0 ? false : true
                        }
                        type="button"
                        data-testid="widget-book-now"
                        title="Book now"
                        onClick={handleBookingComplete}
                      >
                        Book now
                      </button>
                    </div>
                  </footer>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingRightSide
