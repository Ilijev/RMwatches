import React from "react";
import { Link } from "react-router-dom";

interface Props{
    id?:number
    img?:string
}
export default function Card({id,img}:Props) {
    return (
        <div className="card rounded-0">
            <Link  to={id? `details/${id}`:''}>
            <img src={img? img :"https://via.placeholder.com/400x300"} className="rounded-0 card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
           
            </Link>
        </div>
    );
}
