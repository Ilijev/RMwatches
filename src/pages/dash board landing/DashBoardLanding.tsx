import React, { useEffect, useState } from "react";
import { Watch } from "../../interfaces/interfaces";
import styles from "./dashBoardLanding.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function DashBoardLanding({}: Props) {
  const [watches, setWatches] = useState<Watch[]>();
  const [filtered, setFiltered] = useState<Watch[]>();
  const navigate = useNavigate();

  async function fetchWatches() {
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
  }, [watches]);

  function handleFIltered(e: React.ChangeEvent<HTMLInputElement>) {
    setFiltered(
      watches?.filter(
        (item) =>
          (item.attributes.referenceNumber &&
            item.attributes.referenceNumber
              .toLowerCase()
              .includes(e.target.value.toLowerCase())) ||
          (item.attributes.model &&
            item.attributes.model
              .toLowerCase()
              .includes(e.target.value.toLowerCase())) ||
          (item.attributes.maker &&
            item.attributes.maker
              .toLowerCase()
              .includes(e.target.value.toLowerCase()))
      )
    );
  }
  function publishWatch(id: any) {
    let item = filtered?.find((item) => item.id === id);
    fetch(`http://localhost:1337/api/watches/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        data: {
          published: !item?.attributes.published, // override the published key
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const updatedArray = filtered?.map(item => {          
          if (item.id === data.data.id) {                     
            return data.data; // create a new object with the updated name
          } else {
            return item; // keep the original object
          }
        });
        setFiltered(updatedArray);
      })
      .catch((error) => {
        console.error("Error updating object:", error);
      });
  }

  function deleteWatch(id: any) {
    fetch(`http://localhost:1337/api/watches/${id}`, { method: "DELETE" }).then(
      (res) => console.log(res)
    );
    setFiltered(filtered?.filter((item) => item.id !== id));
    console.log(id);
  }
  return (
    <>
      <div className="container-fluid h-100">
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
        <div className="row  ">
          <div className="col-2 ">
            <Link to="form" className="btn btn-success ">
              Add new watch
            </Link>{" "}
          </div>
        </div>
        {filtered &&
          filtered?.map((watch, idx:number) => (
            <div
              key={idx}
              className={`row ${styles.cardStyle} my-3 border `}
            >
              <div className="col-12 col-sm-4 col-md-3  col-xl-2 mb-2 mb-sm-0">
                <img
                  // src="https://via.placeholder.com/400x300"
                  src={"http://localhost:1337" + watch.attributes.img}
                  alt=""
                  className={`${styles.imgStyle} `}
                />
              </div>
              <div className="col-8  col-sm-4 mb-2">
                <span className="fs-4 text-capitalize fw-normal">
                  {watch.attributes.model}
                </span>
                <span className="d-block mx-2 mx-lg-0 text-capitalize fs-5">
                  {watch.attributes.maker}
                </span>
                <span className="d-block mx-2 mx-lg-0 text-capitalize fs-5">
                  ref: {watch.attributes.referenceNumber}
                </span>
                <span className="d-block mx-2 mx-lg-0 text-capitalize fs-5">
                  price: {watch.attributes.price}
                </span>
                <span className="d-block mx-2 mx-lg-0 text-capitalize fs-5">
                  papers: {watch.attributes.papers}
                </span>
                <span className="d-block mx-2 mx-lg-0 text-capitalize fs-5">
                  box: {watch.attributes.box}
                </span>
              </div>
              <div className="d-flex flex-wrap col-lg col-4 justify-content-end align-items-end p-3">
                <Link
                  to={`form/${watch.id?.toString() || ""}`}
                  className="btn mb-2 mx-2   btn-primary px-4"
                >
                  Edit
                </Link>
                <button
                  onClick={() => publishWatch(watch.id)}
                  className="btn  mb-2 mx-2 btn-success px-3"
                >
                  {watch.attributes.published? "Unpublish": "Publish"}
                </button>
                <button
                  onClick={() => deleteWatch(watch.id)}
                  className="btn  mb-2 mx-2 btn-danger px-3"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
