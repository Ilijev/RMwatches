import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import { Watch } from "./../../interfaces/interfaces";
import styles from "./productsStyles.module.css";
type Props = {};

export default function Products({}: Props) {
  const [watches, setWatches] = useState<Watch[]>();
  const [toggleMenu, setToggleMenu] = useState<boolean>(
    window.innerWidth > 769 ? true : false
  );
  const [toggleBrands, setToggleBrands] = useState<boolean>(true);
  const [toggleModel, setToggleModel] = useState<boolean>(true);
 
  useEffect(() => {
    fetch("http://localhost:3004/watches")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <div className="container-fluid">
      {watches && watches.length && (
        <div className="row py-4">
          <div className="col px-md-3 py-3">
            <div className={` ${toggleMenu ? "" : styles.hideFilter}`}>
              <div className="d-flex justify-content-between">
              <p
                className="fs-2 m-0 py-2 px-1 w-100  "
                onClick={(e) => {
                  e.stopPropagation();
                  setToggleMenu(!toggleMenu);
                  
                }}
              >
                Filters
              </p>
              <span className={`fs-2 m-0 py-2 px-1 `}>+</span>
              </div>

              <div className={`${toggleBrands ? styles.hideFilter : ""}`}>
                <p
                  className="fs-4 m-0 my-2 mx-1 border-bottom "
                  onClick={(e) => {
                    setToggleBrands(!toggleBrands);
                  }}
                >
                  Brands
                </p>

                <div className="">
                  {watches.map((brend, idx) => (
                    <button key={idx} className="btn w-100 text-start">
                      {brend.attributes.maker}
                    </button>
                  ))}

                  <button className="btn w-100 text-start">Omega</button>
                </div>
              </div>
              <div className={`${toggleModel ? styles.hideFilter : ""}`}>
                <p
                  className="fs-4 m-0 my-2 mx-1 border-bottom "
                  onClick={(e) => {
                    setToggleModel(!toggleModel);
                  }}
                >
                  Models
                </p>

                <div className="">
                  <button className="btn w-100 text-start">Rolex</button>

                  <button className="btn w-100 text-start">Omega</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 py-3">
            <div className="row px-3">
              {watches.map((watch, index) => {
                return (
                  <div key={index} className="col-sm-6 col-md-6 col-lg-4 py-2">
                    <Card id={watch.id} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
