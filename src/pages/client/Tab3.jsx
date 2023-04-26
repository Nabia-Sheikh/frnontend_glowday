import React from "react"
import { Link } from "react-router-dom"

const ClientPreferences = () => {
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
              <li className="icon icon--incomplete icon--past">
                <Link to="/client/history">
                  <span>Appointment History</span>
                </Link>
              </li>
              <li className="icon icon--complete icon--preferences">
                <Link to="/client/preferences">
                  <span>Preferences</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fresnel-container fresnel-lessThan-md " />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="border-bottom-t margin-bottom-2 boldest">
                <h1 className="default-font">Your Preferences</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column border-bottom">
              <h2 className="medium">Manage your preferences</h2>
              <p>You can opt-in into our marketing emails and reminders</p>
            </div>
            <div className="column">
              <div className="padding-bottom-1 border-bottom margin-bottom-1">
                <div className="margin-top-1">
                  <div className="field">
                    <label>Opt-In for Marketing</label>
                  </div>
                  <div className="field">
                    <div className="radio">
                      <input
                        type="radio"
                        id="marketing_opt_in_yes"
                        name="marketing_opt_in"
                        defaultValue="true"
                      />
                      <label htmlFor="marketing_opt_in_yes">
                        <div className="radio__faux" /> Yes
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        type="radio"
                        id="marketing_opt_in_no"
                        name="marketing_opt_in"
                        defaultValue="false"
                      />
                      <label htmlFor="marketing_opt_in_no">
                        <div className="radio__faux" /> No
                      </label>
                    </div>
                  </div>
                </div>
                <div aria-live="polite" role="status">
                  <span className="label label--placeholder" />
                </div>
              </div>
              <div className="padding-bottom-1 border-bottom">
                <div className>
                  <div className="field">
                    <label>
                      Do you want Glowday to remind you when you're due for your
                      next treatment?
                    </label>
                  </div>
                  <div className="field">
                    <div className="radio">
                      <input
                        type="radio"
                        id="treatment_reminders_opt_in_yes"
                        name="treatment_reminders_opt_in"
                        defaultValue="true"
                      />
                      <label htmlFor="treatment_reminders_opt_in_yes">
                        <div className="radio__faux" /> Yes
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        type="radio"
                        id="treatment_reminders_opt_in_no"
                        name="treatment_reminders_opt_in"
                        defaultValue="false"
                      />
                      <label htmlFor="treatment_reminders_opt_in_no">
                        <div className="radio__faux" /> No
                      </label>
                    </div>
                  </div>
                </div>
                <div aria-live="polite" role="status">
                  <span className="label label--placeholder" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ClientPreferences
