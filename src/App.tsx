import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Naviagtion";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/not found/NotFound";
import Products from "./pages/products/Products";
import Details from "./pages/details/Details";
import CallButton from "./components/callButton/CallButton";
import AboutUs from "./pages/about us/AboutUs";
import Contact from "./pages/contact page/Contact";
import DashBoardForm from "./pages/dashboard form/DashBoardForm";
import CookiesBanner from "./components/handle cookies/CookiesBanner";
import DashBoardLanding from "./pages/dash board landing/DashBoardLanding";
import LoginForm from "./pages/logInForm/LogInForm";
import WatchService from "./pages/watch service/WatchService";
import AuthChecker from "./components/GuardedRoute/AuthChecker";
import TermsAndConditions from "./pages/privacy and cookies policy/TermsAndConditions";


function App() {
  const [showBanner, setShowBanner] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    try {
      fetch("https://shielded-depths-59676.herokuapp.com/api/users/me")
        .then((response) => {
          setIsAuthenticated(true);
        })
        .catch(() => {
          setIsAuthenticated(false);
          sessionStorage.removeItem("jwt");
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container-fluid p-0 ">
      <div className="row p-0 m-0">
        <div className="col p-0">
          <Navigation />
          <CallButton />
          <CookiesBanner
            handleCookies={setShowBanner}
            showBanner={showBanner}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/termsAndConditions" element={<TermsAndConditions />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/details/:id" element={<Details />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<WatchService />} />
            {/* <Route path='/dashboard' element={<DashBoardLanding/>}/> */}
            <Route
              path="/dashboard/form"
              element={
                <AuthChecker isAuthenticated={isAuthenticated} >
                  <DashBoardForm />
                </AuthChecker>
              }
            />
            <Route path="/dashboard/form/:id" element={<DashBoardForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/dashboard"
              element={
                <AuthChecker isAuthenticated={isAuthenticated}>
                  <DashBoardLanding />
                </AuthChecker>
              }
            />
          </Routes>
          {/* <GuardedRoute path='/dashboard/form' component={<DashBoardForm/>} auth={isAuthenticated}/> */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
