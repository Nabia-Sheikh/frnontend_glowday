import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (elements == null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {/* <button
        className="button button--small"
        type="submit"
        disabled={!stripe || !elements}
      >
        Add Card
      </button> */}
    </form>
  )
}

export default CheckoutForm
