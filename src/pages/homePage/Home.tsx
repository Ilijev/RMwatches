import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import LandingBanner from "../../components/landingBanner/LandingBanner";
import styles from "./homePage.module.css";
import Card from "../../components/card/card";
import { NavLink } from "react-router-dom";
import { Watch } from "../../interfaces/interfaces";
import LandingCard from "../../components/landing page card/LandingCard";

type Props = {};

export default function Home({}: Props) {
  const [watches, setWatches] = useState<Watch[]>();
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Ilijev/watchesjson/watches")
      .then((res) => res.json())
      .then((data) => {
        // setWatches(data.data);
        setWatches(data);
      });
  }, []);

  // const [cardsData] = useState(dummy_data.watches.slice(0, 9));

  return (
    <div className="bg-light-custom">
      <LandingBanner />
      <div className="container ">
        <div className="row py-3 justify-content-between">
          <div className="col-6 mx-auto text-center ">
            <h3 className="fs-1 mb-0">New Arrivals</h3>
          </div>
          {/* <div className="col-4">
            <select className="form-select" aria-label="Default select">
              <option>Default</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div> */}
        </div>
        {watches && (
          <div className="row py-3   ">
            {watches.map((watch, index) => {
              return (
                <div key={index} className="col-sm-6 col-md-6 col-lg-4    my-2">
                  <LandingCard watchData={watch} />
                </div>
              );
            })}
          </div>
        )}
        <div className="row justify-content-center py-3">
          <NavLink
            to="/products"
            className={`col-4 btn btn-outline-dark ${styles.btnHover}`}
          >
            VIEW ALL
          </NavLink>
        </div>
      </div>
    </div>
  );
}
