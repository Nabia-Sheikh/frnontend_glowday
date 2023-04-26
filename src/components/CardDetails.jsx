import React from "react"
import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import AddCard from "./AddCard"
import PreCard from "./PreCard"
import SignInOrCreateAccount from "./SignInOrCreateAccount"

const CardDetails = ({ backToBooking, handleCardDetailsComplete }) => {
  const { user } = useAuth()
  return (
    <>
      {user ? (
        // <PreCard />
        <AddCard handleCardDetailsComplete={handleCardDetailsComplete} />
      ) : (
        <SignInOrCreateAccount backToBooking={backToBooking} />
      )}
    </>
  )
}

export default CardDetails
