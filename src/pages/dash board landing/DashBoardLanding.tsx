import React, { useEffect, useState } from "react";
import { Watch } from "../../interfaces/interfaces";
import styles from "./dashBoardLanding.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function DashBoardLanding({}: Props) {
  const [watches, setWatches] = useState<any[]>();
  const [filtered, setFiltered] = useState<Watch[]>();
  const navigate = useNavigate();
  async function fetchWatches() {
    // const res = await fetch("http://localhost:3004/watches");
    const res = await fetch("http://localhost:1337/api/watches");
    const data = await res.json();
    setWatches(data.data);
    
    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    }
  }
  useEffect(() => {
    fetchWatches();
  }, []);
  useEffect(() => {
    setFiltered(watches);
    // console.log(watches)
    // watches && console.log(watches[0].attributes)
  }, [watches]);

  function handleFIltered(e: React.ChangeEvent<HTMLInputElement>) {
    setFiltered(
      watches?.filter(
        (item) =>
          item.reference_number
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.model.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.maker.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-between my-3 ">
          <div className="col col-md-5  ">
            <input
              type="search"
              onChange={handleFIltered}
              className=" form-control p-3 rounded-0 shadow-none "
              placeholder="Search Watches"
            />
          </div>
          <div className="col-1 d-none d-lg-block align-self-end">
            <button className="btn" onClick={() => navigate(-1)}>
              Go Back
            </button>{" "}
          </div>
        </div>
        {filtered &&
          filtered?.map((watch) => (
            <div
              key={watch.attributes.referenceNumber}
              className={`row ${styles.cardStyle} my-3 border `}
            >
              <div className="col-12 col-sm-4 col-md-3  col-xl-2 mb-2 mb-sm-0">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt=""
                  className={`${styles.imgStyle} `}
                />
              </div>
              <div className="col-8  col-sm-4 mb-2">
                <span className="fs-4 text-capitalize fw-normal">
                  {watch.attributes.maker}
                </span>
                <span className="d-block mx-2 mx-lg-0 text-capitalize fs-5">
                  {watch.attributes.model}
                </span>
                <span className="d-block mx-2 mx-lg-0 text-capitalize fs-5">
                  ref: {watch.attributes.referenceNumber}
                </span>
                <span className="d-block mx-2 mx-lg-0 text-capitalize fs-5">
                  price: {watch.attributes.price}
                </span>
                <span className="d-block mx-2 mx-lg-0 text-capitalize fs-5">
                  box & papers: {watch.attributes.boxPapers ? "yes" : "no"}
                </span>
              </div>
              <div className="d-flex flex-wrap col-lg col-4 justify-content-end align-items-end p-3">
                <Link
                  to={`form/${watch.id?.toString() || ""}`}
                  className="btn mb-2 mx-2   btn-primary px-4"
                >
                  Edit
                </Link>

                <button className="btn  mb-2 mx-2 btn-danger px-3">
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
