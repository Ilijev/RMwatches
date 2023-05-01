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
  const [brands, setBrands] = useState<any>([]);
  const [models, setModels] = useState<any>([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/watches")
      .then((res) => res.json())
      .then((data) => {      
        setBrands(Array.from(new Set(data.data.map((obj: any) => obj.attributes.maker))));
        setModels(Array.from(new Set(data.data.map((obj: any) => obj.attributes.model))));
        setWatches(data.data);
      });
  }, []);

  return (
    <div className="container-fluid h-100 bg-light-custom ">
      {!watches && <p>Loading</p>}
      {watches && watches.length && (
        <div className="row py-4 ">
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
                  {brands.length > 0 && brands?.map((brend: any, idx: number) => (
                    <button key={idx} className="btn w-100 text-start">
                      {brend}
                    </button>
                  ))}
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
                  {models.length > 0 && models?.map((model: any, idx: number) => (
                      <button key={idx} className="btn w-100 text-start">
                        {model}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 py-3">
            <div className="row px-3">
              {watches.map(
                (watch, index) =>
                  watch.attributes.published && (
                    <div
                      key={index}
                      className="col-sm-6 col-md-6 col-lg-4 py-2"
                    >
                      <Card watchData={watch} />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
