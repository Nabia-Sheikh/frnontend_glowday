import Footer from "./components/Footer"
import Header from "./components/Header"
import Search from "./components/Search"
import Home from "./pages/home"
import SearchPage from "./pages/searchPage/Search"
import Blog from "./pages/blog"
import BlogPage from "./pages/blog/blogPage"
import Author from "./pages/blog/Author"
import Category from "./pages/blog/Category"
import Guide from "./pages/guide"
import AntiWrinkle from "./pages/guide/AntiWrinkle"
import AntiWrinkleInjection from "./pages/guide/AntiWrinkle/AntiWrinkle"
import DermalFillers from "./pages/guide/DermalFillers"
import TearTrough from "./pages/guide/DermalFillers/TearTrough"
import Rhinoplasty from "./pages/guide/DermalFillers/Rhinoplasty"
import LiquidNonSurgical from "./pages/guide/DermalFillers/LiquidNonSurgical"
import LipFillers from "./pages/guide/DermalFillers/LipFillers"
import FillerDisolving from "./pages/guide/DermalFillers/FillerDisolving"
import DeepWrinkles from "./pages/guide/DermalFillers/DeepWrinkles"
import CheekChin from "./pages/guide/DermalFillers/CheekChin"
import ChemicalPeels from "./pages/guide/ChemicalPeels"
import MediumDepthPeels from "./pages/guide/ChemicalPeels/MediumDepthPeels"
import SuperFacialPeels from "./pages/guide/ChemicalPeels/SuperFacialPeels"
import Hydrafacial from "./pages/guide/Hydrafacial"
import LaserHairRemover from "./pages/guide/LaserHairRemover"
import Microneedling from "./pages/guide/Microneedling"
import Profhilo from "./pages/guide/Profhilo"
import Therapy from "./pages/guide/PRP-Therapy"
import ThreadLifts from "./pages/guide/ThreadLifts"
import LaserSkinTreatment from "./pages/guide/LaserSkinTreatment"
import Clinic from "./pages/clinic"
import { Route, Routes, useLocation } from "react-router-dom"
import UpcomingAppointments from "./pages/client/UpcomingAppointments"
import ClientHistory from "./pages/client/Tab2"
import ClientPreferences from "./pages/client/Tab3"
import Advertise from "./pages/company/Advertise"
import CustomerTerms from "./pages/company/CustomerTerms"
import ClinicTerms from "./pages/company/ClinicTerms"
import CookiePolicy from "./pages/company/CookiePolicy"
import GetInTouch from "./pages/company/GetInTouch"
import GlowdayStory from "./pages/company/GlowdayStory"
import GlowdayTeam from "./pages/company/GlowdayTeam"
import PrivacyPolicy from "./pages/company/PrivacyPolicy"
import AppearOnScroll from "./components/AppearOnScroll"
import { useEffect, useState } from "react"
import LocationHub from "./pages/company/LocationHub"
import IndividualSiteMap from "./pages/company/IndividualSiteMap"
import PractitionerPage from "./pages/clinic/practicioner/PractitionerPage"
import Login from "./pages/login/Login.jsx"
import { useAuth } from "./hooks/useAuth"
import AuthGuard from "./configs/AuthGuard"
import Register from "./pages/login/Register"
import AblativeLaser from "./pages/guide/LaserSkinTreatment/AblativeLaser"
import NonAblativeLaser from "./pages/guide/LaserSkinTreatment/NonAblativeLaser"
import ForgotPassword from "./pages/login/ForgotPassword"
import ChangePassword from "./pages/login/ChangePassword"
import BlankLayout from "./Layouts/BlankLayout"
import WebLayout from "./Layouts/WebLayout"
import ScrollToTop from "./hooks/ScrollToTop"
import Page404 from "./pages/Page404"

const SecurePath = ({ children }) => {
  return <AuthGuard fallback={<div>Loading...</div>}>{children}</AuthGuard>
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          exact
          path="/register"
          element={
            <BlankLayout>
              <Register />
            </BlankLayout>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <BlankLayout>
              <Login />
            </BlankLayout>
          }
        />
        <Route
          exact
          path="/forgot-password"
          element={
            <BlankLayout>
              <ForgotPassword />
            </BlankLayout>
          }
        />
        <Route
          exact
          path="/reset/:id/:token"
          element={
            <BlankLayout>
              <ChangePassword />
            </BlankLayout>
          }
        />

        <Route path="/" element={<WebLayout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/blog/categories/:slug" element={<Category />} />
          <Route path="/anti-wrinkle-injection" element={<AntiWrinkle />} />
          <Route
            path="/anti-wrinkle-injection/anti-wrinkle-injections"
            element={<AntiWrinkleInjection />}
          />
          <Route path="/dermal-fillers" element={<DermalFillers />} />
          <Route path="/dermal-fillers//lip-fillers" element={<LipFillers />} />
          <Route path="/dermal-fillers/rhinoplasty" element={<Rhinoplasty />} />
          <Route
            path="/dermal-fillers//tear-trough-fillers"
            element={<TearTrough />}
          />
          <Route
            path="/dermal-fillers/cheek-chin-and-jaw-enhancement"
            element={<CheekChin />}
          />
          <Route
            path="/dermal-fillers/liquid-non-surgical-facelift"
            element={<LiquidNonSurgical />}
          />
          <Route
            path="/dermal-fillers/filler-for-deep-wrinkles-and-scars"
            element={<DeepWrinkles />}
          />
          <Route
            path="/dermal-fillers/filler-dissolving-treatment"
            element={<FillerDisolving />}
          />
          <Route path="/chemicalPeels" element={<ChemicalPeels />} />
          <Route
            path="/chemicalPeels/super-ficial-peels"
            element={<SuperFacialPeels />}
          />
          <Route
            path="/chemicalPeels/medium-depth-peels"
            element={<MediumDepthPeels />}
          />
          <Route path="/hydraFacial" element={<Hydrafacial />} />
          <Route path="/microneedling" element={<Microneedling />} />
          <Route path="/threadlifts" element={<ThreadLifts />} />
          <Route path="/prp-therapy" element={<Therapy />} />
          <Route path="/profhilo" element={<Profhilo />} />
          <Route path="/laser-hair-removal" element={<LaserHairRemover />} />
          <Route
            path="/laser-skin-treatments"
            element={<LaserSkinTreatment />}
          />
          <Route
            path="/laser-skin-treatments/ablative-laser-resurfacing"
            element={<AblativeLaser />}
          />
          <Route
            path="/laser-skin-treatments/non-ablative-laser-resurfacing"
            element={<NonAblativeLaser />}
          />
          <Route path="/blog/authors/:slug" element={<Author />} />
          <Route path="/clinic" element={<Clinic />} />
          <Route path="/clinic/:slug" element={<Clinic />} />
          <Route path="/practitioner" element={<PractitionerPage />} />
          <Route path="/clinic/:slug/:name" element={<PractitionerPage />} />
          <Route
            path="/client"
            element={
              <SecurePath>
                <UpcomingAppointments />
              </SecurePath>
            }
          />
          <Route
            path="/client/history"
            element={
              <SecurePath>
                <ClientHistory />
              </SecurePath>
            }
          />
          <Route
            path="/client/preferences"
            element={
              <SecurePath>
                <ClientPreferences />
              </SecurePath>
            }
          />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/cookiePolicy" element={<CookiePolicy />} />
          <Route path="/clinicTerms" element={<ClinicTerms />} />
          <Route path="/customerTerms" element={<CustomerTerms />} />
          <Route path="/getInTouch" element={<GetInTouch />} />
          <Route path="/glowdayStory" element={<GlowdayStory />} />
          <Route path="/glowdayTeam" element={<GlowdayTeam />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/site-map" element={<LocationHub />} />
          <Route path="aesthetic/:slug/:slug" element={<IndividualSiteMap />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
