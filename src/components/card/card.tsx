import React from "react";
import { Link } from "react-router-dom";
import { Watch } from "../../interfaces/interfaces";
import styles from "./card.module.css";

interface Props{
  img?:string
    watchData:Watch
}
export default function Card({watchData}:Props) {
    return (
        <div className={`${styles.card} rounded-0 bg-white`} >
            <Link  to={watchData.id? `details/${watchData.id}`:''}>
            <img src={watchData.attributes.img? watchData.attributes.img :"https://via.placeholder.com/400x300"} className="rounded-0 card-img-top" alt="..."/>
            <div className="card-body text-center py-3">
                <h5 className="text-secondary fs-4 fw-light">{watchData.attributes.model}</h5>
                <h6 className="text-secondary fs-4 fw-light">{watchData.attributes.maker}</h6>
                <small className="text-secondary  fw-light">{watchData.attributes.referenceNumber}</small>
                <h3 className="fs-3 my-4 ">{watchData.attributes.price}</h3>
            </div>
           
            </Link>
        </div>
    );
}
