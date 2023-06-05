import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container" style={{height:`calc(100vh - +286px)`}}>
      <div className="row align-items-center h-100" >
        <div className="col text-center">
          <p className="fs-1 fw-bold">404 Not Found</p>
          <Link to='/' className="mx-2 fs-5">Go Back Home</Link>
          <Link to='products' className="mx-2 fs-5">Go To Products</Link>
        </div>
      </div>
    </div>
  );
}
