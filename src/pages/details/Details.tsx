import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Watch } from "./../../interfaces/interfaces";
import ImageGallery from "react-image-gallery";
import styles from "./details.module.css";
import image1 from "../../images/thumbnail3.jpg";
import image2 from "../../images/thumbnail1.jpg";
import image3 from "../../images/thumbnail2.jpg";
import image4 from "../../images/rmLogoHorizontalBlack.jpg";
import AlertWithForm from "../../components/modals/requestForWatch";
type Props = {};

export default function Details({}: Props) {
  const { id } = useParams();
  const [watches, setWatches] = useState<Watch[]>();
  const [filteredWatch, setFilteredWatch] = useState<Watch>();
  const navigate = useNavigate();

  const images = [
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image4,
      thumbnail: image4,
    },
  ];
  useEffect(() => {
    fetch("http://localhost:3004/watches")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  useEffect(() => {
    id && setFilteredWatch(watches?.find((item) => item.id === +id));
    filteredWatch &&
      console.log(
        new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(filteredWatch?.attributes.price)
      );
  }, [watches]);

  return (
    <>
      {!filteredWatch && (
        <div className="text-center fs-1 p-5 ">Loading...</div>
      )}

      {filteredWatch && (
        <div className={`container-fluid py-3 ${styles.detailsContainer} `}>
          <div className="row px-md-5  ">
            <div className="col-12 col-md-5  px-3 ">
              <ImageGallery
                showPlayButton={false}
                autoPlay={false}
                items={images}
              />
            </div>
            <div className="col-12 col-md-7  px-3 py-3">
              <div className="row">
                <div className="col text-end">
                  <button
                    onClick={() => navigate(-1)}
                    className=" btn  fw-light text-secondary "
                  >
                    Go Back
                  </button>
                </div>
              </div>
              <div className="row ">
                <p className="col mb-1 text-secondary text-capitalize fs-5 ">
                  {filteredWatch.attributes.maker}
                </p>
              </div>
              <div className="row">
                <p className="col fs-1 mb-0">{filteredWatch.attributes.model}</p>
              </div>
              <div className="row ">
                <p className="col mb-1 text-secondary text-uppercase  ">
                  ref.{filteredWatch.attributes.referenceNumber}
                </p>
              </div>
              <div className="row mt-4">
                <p className="col mb-1  text-uppercase  fs-3 ">
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  }).format(filteredWatch?.attributes.price)}
                </p>
              </div>
              <div className="row my-5">
                <div className="col-sm-6 px-0">
                  <table className="table ">
                    <tbody>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Year
                        </th>
                        <td className="text-end px-2 pb-3">
                          {filteredWatch.attributes.year}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Condition
                        </th>
                        <td className="text-end px-2 pb-3">
                          {filteredWatch.attributes.condition}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Box
                        </th>
                        <td className="text-end px-2 pb-3">
                          {filteredWatch.attributes.boxPapers ? "Yes" : "No"}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Material
                        </th>
                        <td className="text-end px-2 pb-3">
                          {filteredWatch.attributes.material}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-6 px-0">
                  <table className="table ">
                    <tbody>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Movement
                        </th>
                        <td className="text-end px-2 pb-3">
                          {filteredWatch.attributes.movement}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Case size
                        </th>
                        <td className="text-end px-2 pb-3">
                          {filteredWatch.attributes.diameter}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Dial color
                        </th>
                        <td className="text-end px-2 pb-3">
                          {filteredWatch.attributes.colorDial}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Band
                        </th>
                        <td className="text-end px-2 pb-3">
                          {filteredWatch.attributes.watchBand}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <AlertWithForm/>
              </div>
              <div className="row mt-4">
            <div className="col">
              <div className="accordion " id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Descroption
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {filteredWatch.attributes.description}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Polishing
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      its fucking polished 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Maintenance
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, omnis commodi? Ut delectus nisi repellendus distinctio vitae praesentium quibusdam eum.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
}
