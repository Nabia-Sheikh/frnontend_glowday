import React from "react"

function BookingProcess({
  currentStep = "Booking",
  isBookingComplete,
  isCardDetailsComplete,
  isConfirmComplete,
}) {
  const steps = ["Booking", "Card Details", "Confirm"]

  return (
    <div>
      <ul className="booking__process">
        {steps.map((step) => (
          <li
            className={`${step === currentStep ? "active" : ""} ${
              (step === "Booking" && isBookingComplete) ||
              (step === "Card Details" && isCardDetailsComplete) ||
              (step === "Confirm" && isConfirmComplete)
                ? "complete"
                : ""
            }`}
            data-testid={step.toLowerCase()}
            key={step}
          >
            {step}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookingProcess
