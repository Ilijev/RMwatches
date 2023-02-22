import React from "react";
import { Link } from "react-router-dom";

interface Props{
    id:number
}
export default function Card({id}:Props) {
    return (
        <div className="card">
            <Link to={`details/${id}`}>
            <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
            </Link>
        </div>
    );
}
