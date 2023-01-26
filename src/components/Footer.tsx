import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark-custom text-center text-white">
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Facebook --> */}
          <a className="btn btn-outline-light btn-floating m-1" href="#!">
            <i className="fab fa-facebook-f"></i>
          </a>

        

          {/* <!-- Google --> */}
          <a className="btn btn-outline-light btn-floating m-1" href="#!">
            <i className=" fa-regular fa-envelope"></i>{" "}
          </a>

          {/* <!-- Instagram --> */}
          <a className="btn btn-outline-light btn-floating m-1" href="#!">
            <i className="fab fa-instagram"></i>
          </a>

       
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}
      <div className="container-fluid" >
        <div className="col-md-6 mx-auto">
          <div className="row">
            <div className="col-md-6">
              <p>
                RM Watches Munich An- und Verkauf von Luxusuhren
                Uhrmacherwerkstatt
              </p>
            </div>
            <div className="col-md-6">
                <ul className="list-group">
                    <li className="list-item">+49 173 897 1063</li>
                    <li className="list-item">info@rmwatches.de</li>
                    <li className="list-item">Feringastr. 6, 85774 Unterföhring</li>

                </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright --> */}
      <div className="text-center p-3 bg-dark-custom">© 2022 Copyright:</div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}
