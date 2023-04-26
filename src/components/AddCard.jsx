import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh")

const AddCard = ({ handleCardDetailsComplete }) => {
  return (
    <div className="booking__section">
      <h2 className="small">Add Card</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>

      <div className="fresnel-container fresnel-lessThan-bigmd" />
      <button
        className="button button--small"
        type="submit"
        onClick={handleCardDetailsComplete}
      >
        Continue
      </button>
      {/* <button
        className="button booking__back button button--small button--outline"
        type="button"
      >
        Back to cards
      </button> */}
      <div className="disclaimer">
        <div className="column">
          <div className="margin-bottom-1 padding-bottom-1 border-bottom border-bottom__charcoal-medium">
            <strong>We do not accept REVOLUT, MONZO nor NewDay cards.</strong>
          </div>
          <p>
            <strong>
              Your card details are needed to confirm your booking. You WILL NOT
              be charged until after your consultation/treatment unless we need
              to implement the late cancel or no-show policy:
            </strong>
          </p>
          <p>Late Cancel: 10%</p>
          <p>No show: 30%</p>
          <p>
            By proceeding to book an appointment you authorise Glowery Ltd,
            trading as Glowday, to send instructions to the financial
            institution that issued your card to take payments from your card
            account in accordance with the terms of your agreement with Glowday.
          </p>
        </div>
        <div className="accordion policy">
          <button className="accordion__header">
            <span>*Treatment subject to consultation</span>
          </button>
          <div className="accordion__body closed">
            <div className="accordion__body--content">
              <div className="policy__content">
                <small>
                  All appointments include a consultation, which may result a
                  change to the recommended treatment, cost and duration. You
                  are not obliged to go ahead with any treatment.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCard
