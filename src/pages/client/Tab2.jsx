import moment from "moment"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import secureLocalStorage from "react-secure-storage"
import { useAuth } from "../../hooks/useAuth"
import axios from "../../utils/axios"

const ClientHistory = () => {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState([])
  const [detailsModal, setDetailsModal] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState({})
  const [modalTreatments, setModalTreatments] = useState([])
  const [loading, setLoading] = useState(true)

  const showTreatmentModal = (treatments) => {
    setShowModal(true)
    setModalTreatments(treatments)
  }

  const handleDetailsModal = () => {
    setDetailsModal(!detailsModal)
  }

  const getCompletedAppointments = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secureLocalStorage.getItem("accessToken")}`,
      }

      const response = await axios.get("/bookings/completed", { headers })
      setAppointments(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getCompletedAppointments()
  }, [])

  return (
    <main id="main_content">
      <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
        <div className="container--wide">
          <div className="steps--container">
            <ul className="steps">
              <li className="icon icon--incomplete icon--upcoming">
                <Link to="/client">
                  <span>Upcoming Appointments</span>
                </Link>
              </li>
              <li className="icon icon--complete icon--past">
                <Link to="/client/history">
                  <span>Appointment History</span>
                </Link>
              </li>
              <li className="icon icon--incomplete icon--preferences">
                <Link to="/client/preferences">
                  <span>Preferences</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal modal--active" role="dialog">
          <div className="modal__dialog">
            <button
              className="button--modal__close round-button"
              type="button"
              title="close the modal"
              data-testid
              onClick={() => setShowModal(false)}
            >
              <img
                src="/static/img/icons/white/close.svg"
                alt="icon for close the modal"
                width={24}
                height={24}
                className="round-image"
              />
            </button>
            <h2 className="modal__title">Treatments</h2>
            <section>
              <ul className="modal-treatment-list">
                {modalTreatments.map((treatment) => (
                  <li className="modal-treatment-item">
                    {treatment.treatmentCategoryName +
                      " - " +
                      treatment.treatmentName}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
      <div className="fresnel-container fresnel-lessThan-md " />
      <section className="section section">
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="border-bottom-t margin-bottom-2 boldest">
                <h1 className="default-font">Appointment History</h1>
              </div>
              <div className="container client-booking-list-container">
                <div className="modal " role="dialog">
                  <div className="modal__dialog ">
                    <button
                      className="button--modal__close round-button"
                      type="button"
                      title="close the modal"
                      data-testid
                    >
                      <img
                        src="/static/img/icons/white/close.svg"
                        alt="icon for close the modal"
                        width={24}
                        height={24}
                        className="round-image"
                      />
                    </button>
                    <section>
                      <ul className="modal-treatment-list" />
                    </section>
                  </div>
                </div>
                <h2 className="bold">Your Booking History</h2>
                <div className="row">
                  {!loading && appointments.length < 1 ? (
                    <div className="column-d-12 column">
                      <p className="capitalise">you have no past bookings</p>
                    </div>
                  ) : (
                    appointments.map((appointment) => (
                      <div className="data-row client-booking-list client-booking-list__item--default">
                        <div className="client-booking-list__item client-booking-list__item--date">
                          <span>
                            {moment(
                              appointment.appointment.date,
                              "dddd, MMMM Do"
                            ).format("DD/MM/YYYY")}
                            {"  "}
                            {appointment.appointment.time.split(" ")[0]}
                          </span>
                        </div>
                        <div className="client-booking-list__item client-booking-list__item--reference">
                          <span>{appointment.bookingId}</span>
                        </div>
                        <div className="client-booking-list__item client-booking-list__item--treatment">
                          <div className="fresnel-container fresnel-lessThan-md" />
                          <div className="fresnel-container fresnel-greaterThanOrEqual-md">
                            <div className="tooltip-container">
                              <div className="tooltip-wrapper tooltip-popup-wrapper multitreatments-tooltip">
                                <button
                                  className="button accessible-tooltip text-center"
                                  type="button"
                                  data-testid="test"
                                  title="show information about Treatments"
                                  onClick={() => {
                                    showTreatmentModal(appointment.treatments)
                                  }}
                                >
                                  show information about Treatments
                                </button>
                              </div>
                              <span>
                                {appointment.treatments[0]
                                  .treatmentCategoryName +
                                  " - " +
                                  appointment.treatments[0].treatmentName}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="client-booking-list__item client-booking-list__item--location">
                          <span>
                            <Link
                              to={`/clinic/${appointment.clinicSlug}/${appointment.practitionerSlug}`}
                            >
                              {appointment.practitionerName +
                                " At " +
                                appointment.clinicName}
                            </Link>
                          </span>
                        </div>
                        <div className="client-booking-list__item client-booking-list__item--price hide-on-mobile">
                          <span className="pound bold">
                            £{appointment?.totalAmount}
                          </span>
                        </div>
                        <div className="client-booking-list__item client-booking-list__item--action">
                          <button
                            className="button button--small button--flat button--green button--fullwidth"
                            type="button"
                            onClick={() => {
                              setSelectedAppointment(appointment)
                              handleDetailsModal()
                            }}
                          >
                            details
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                  {detailsModal && (
                    <div
                      className="modal modal--booking modal--active"
                      role="dialog"
                    >
                      <div className="modal__dialog widget client-management-booking-card">
                        <div className="record-header margin-bottom-1 margin-bottom__t-0">
                          <div className="record-header__button-space column-m-2 column-t-1 column-m-order-1" />
                          <div className="record-header__wrapper margin-top-1 margin-top__t-0 column-m-12 column-m-order-4 column-t-8 column-t-order-2">
                            <nav className="record-navigation">
                              <div>
                                <button
                                  className="button button--link button--fullwidth button--no-padding button--green button--flat button--step"
                                  type="button"
                                >
                                  <div
                                    className="capitalise record-navigation__item record-navigation__item--active record-navigation__item--current"
                                    data-testid="link"
                                  >
                                    <span
                                      className="record-navigation__item--icon record-navigation__item--summary"
                                      data-testid="icon"
                                    />
                                    <span className="hide-on-mobile hide-on-tablet">
                                      Booking
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </nav>
                          </div>
                          <div className="row row--no-margin row--end record-header__button-space record-header__close column-m-2 column-t-1 column-m-order-3">
                            <button
                              className="button--modal__close round-button"
                              type="button"
                              title="close the modal"
                              data-testid
                              onClick={handleDetailsModal}
                            >
                              <img
                                src="/static/img/icons/white/close.svg"
                                alt="icon for close the modal"
                                width={24}
                                height={24}
                                className="round-image"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="margin-bottom-1 padding-left__t-1 padding-right__t-1">
                          <div className="record-grid record-grid--forms column-m-12">
                            <div className="record-grid__top column-m-12">
                              <div className="record__section patient-summary">
                                <div className="patient-summary__item border-bottom">
                                  <h1 className="boldest default-font">
                                    Booking
                                  </h1>
                                </div>
                                <dl className="patient-summary__item border-bottom">
                                  <dt className="column-m-12 column-t-4">
                                    Booking Reference:
                                  </dt>
                                  <dd className="column-m-12 column-t-8">
                                    <strong>
                                      {selectedAppointment.bookingId}
                                    </strong>
                                  </dd>
                                </dl>
                                <dl className="patient-summary__item border-bottom">
                                  <dt className="column-m-12 column-t-4">
                                    Date:
                                  </dt>
                                  <dd className="column-m-12 column-t-8">
                                    <strong>
                                      {selectedAppointment.appointment.date}
                                    </strong>
                                  </dd>
                                </dl>
                                <dl className="patient-summary__item border-bottom">
                                  <dt className="column-m-12 column-t-4">
                                    Time:
                                  </dt>
                                  <dd className="column-m-12 column-t-8">
                                    <strong>
                                      {selectedAppointment.appointment.time}{" "}
                                    </strong>
                                  </dd>
                                </dl>
                                <dl className="patient-summary__item border-bottom">
                                  <dt className="column-m-12 column-t-4">
                                    Clinic:
                                  </dt>
                                  <dd className="column-m-12 column-t-8">
                                    <strong>
                                      {" "}
                                      {selectedAppointment.clinicName}
                                    </strong>
                                  </dd>
                                </dl>
                                <dl className="patient-summary__item">
                                  <dt className="column-m-12 column-t-4">
                                    Practitioner:
                                  </dt>
                                  <dd className="column-m-12 column-t-8">
                                    <strong>
                                      {selectedAppointment.practitionerName}
                                    </strong>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                            <div className="record-grid__forms column-m-12">
                              <div className="record__section client-booking-treatment">
                                <h1 className="boldest default-font">
                                  Treatment
                                </h1>
                                <div className="treatments-summary__content treatments-summary__content--full-height margin-bottom-1 margin-bottom__t-0 padding-bottom-1">
                                  <article className="record__appointment record__row row row--no-margin row--middle">
                                    {selectedAppointment.treatments.map(
                                      (treatment) => (
                                        <div className="record-appointment__cell record__row column-m-12">
                                          <span className="uppercase">
                                            {treatment.treatmentCategoryName +
                                              " - " +
                                              treatment.treatmentName}
                                          </span>
                                        </div>
                                      )
                                    )}
                                  </article>
                                </div>
                                <div className="price-row price__row--default">
                                  <div className="price-row__header">
                                    <span>Total</span>
                                  </div>
                                  <div className="price-row__price">
                                    <span>
                                      £{selectedAppointment.totalAmount}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ClientHistory
