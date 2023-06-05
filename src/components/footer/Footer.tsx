import React from "react";
import Maps from "../maps/Maps";
import styles from'./Footer.module.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer bg-dark-custom text-center text-white ">
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Facebook --> */}
          <a className={`btn btn-outline-light btn-floating m-1 ${styles.footer}`} rel="noreferrer" href="https://www.facebook.com/rmwatchesmunich" target={'_blank'}>
            <i className="fab fa-facebook-f text-white"></i>
          </a>

          {/* <!-- Google --> */}
          <a className={`btn btn-outline-light btn-floating m-1 ${styles.footer}`} href="#!">
            <i className=" fa-regular fa-envelope text-white"></i>{" "}
          </a>

          {/* <!-- Instagram --> */}
          <a className={`btn btn-outline-light btn-floating m-1 ${styles.footer}`}  href="https://www.instagram.com/rmwatchesmunich/" target={'_blank'} rel="noreferrer">
            <i className="fab fa-instagram text-white"></i>
          </a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}
      <div className="container-fluid">
        <div className="col-md-9 mx-auto">
          <div className="row align-items-center">
            <div className="col-md-4">
              <p>
                RM Watches Munich An- und Verkauf von Luxusuhren
                Uhrmacherwerkstatt
              </p>
            </div>
            <div className="col-md-4 ">
              <div className="">
                <Maps />
              </div>
            </div>
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-item">+49 173 897 1063</li>
                <li className="list-item">info@rmwatches.de</li>
                <li className="list-item">Feringastr. 6 85774 Unterföhring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright --> */}
      <div className="text-center pt-3 pb-2 bg-dark-custom" > <Link to="policy" className="text-white">Privacy & Cookie Policy </Link> </div>

      <div className="text-center pb-3 bg-dark-custom">© 2022 Copyright:</div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}
