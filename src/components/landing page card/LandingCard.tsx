import React from "react";
import { Link } from "react-router-dom";
import { Watch } from "../../interfaces/interfaces";
import styles from "./landingCardStyles.module.css";

interface Props {
  img?: string;
  watchData: Watch;
}

export default function LandingCard({ img, watchData }: Props) {
  return (
    <div className={`${styles.card} rounded-0 bg-dark-custom h-100`}>
      <Link to={watchData.id ? `details/${watchData.id}` : ""}>
        <img
          src={
            watchData.attributes.img
              ? "http://localhost:1337" + watchData.attributes.img
              : img
              ? img
              : "https://via.placeholder.com/400x300"
          }
          className="rounded-0 card-img-top"
          alt="..."
        />
        <div className="card-body  text-white  py-2 px-3 ">
          <span className=" text-uppercase ">
            {watchData.attributes.maker}
          </span>
          <span className="">-</span>
          <span className=" fw-light">{watchData.attributes.model} </span>
          <span className="">-</span>
          <span className=" fw-light">
            {watchData.attributes.referenceNumber}
          </span>
          <p className=" mb-0 fs-5 ">

          {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(watchData?.attributes.price || 0)}
            </p>
        </div>
      </Link>
    </div>
  );
}
