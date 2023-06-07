import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Watch } from "../../interfaces/interfaces";
import styles from "./details.module.css";
import AlertWithForm from "../../components/modals/requestForWatch";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Details() {
  const { id } = useParams();
  const [watches, setWatches] = useState<Watch>();
  const navigate = useNavigate();
  const [images, setImages] = useState<any>([]);
  const [descToggle, setDescToggle] = useState(true);

  useEffect(() => {
    fetch(`https://shielded-depths-59676.herokuapp.com/api/watches/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setWatches(data.data);
        // console.log(data.data)
      });
  }, []);

  useEffect(() => {
    let imgArray: any = [];
    watches &&
      watches.attributes.imgLinks &&
      Object.values(watches.attributes.imgLinks).forEach((item: any) => {
        // setImages([...images,  {original:'http://localhost:1337' + item, thumbnail:'http://localhost:1337' + item} ])
        imgArray.push({
          original: "https://shielded-depths-59676.herokuapp.com" + item,
          thumbnail: "https://shielded-depths-59676.herokuapp.com" + item,
        });

        //  console.log(item)
      });
    setImages(imgArray);
  }, [watches]);

  return (
    <>
      {!watches && <div className="text-center fs-1 p-5 ">Loading...</div>}

      {watches && (
        <div className={`container-fluid py-3 ${styles.detailsContainer} `}>
          <div className="row px-md-5  ">
            <div className="col-12 col-md-5  px-3 ">
              {/* { images  && <p>{JSON.stringify(images)}</p> } */}
              {images && (
                <ImageGallery
                  items={images}
                  showThumbnails={true}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showNav={true}
                />
              )}

              {/* { images  && <ImageGallery
                showPlayButton={false}
                showThumbnails={false}
                showNav={false}
                autoPlay={false}
                items={images}
              />} */}
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
                  {watches.attributes.maker}
                </p>
              </div>
              <div className="row">
                <p className="col fs-1 mb-0">{watches.attributes.model}</p>
              </div>
              <div className="row ">
                <p className="col mb-1 text-secondary text-uppercase  ">
                  ref.{watches.attributes.referenceNumber}
                </p>
              </div>
              <div className="row mt-4">
                <p className="col mb-1  text-uppercase  fs-3 ">
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  }).format(watches?.attributes.price || 0)}
                </p>
                <small>Free Shipping</small>
              </div>
              <div className="row mt-5">
                <div className="col-sm-6 px-0">
                  <table className="table ">
                    <tbody>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Code
                        </th>
                        <td className="text-end text-capitalize px-2 pb-3">
                          {watches.attributes.code}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Movement
                        </th>
                        <td className="text-end text-capitalize px-2 pb-3">
                          {watches.attributes.movement}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Material
                        </th>
                        <td className="text-end text-capitalize px-2 pb-3">
                          {watches.attributes.material}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Case size
                        </th>
                        <td className="text-end text-capitalize px-2 pb-3">
                          {watches.attributes.diameter}mm
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Dial colour
                        </th>
                        <td className="text-end text-capitalize px-2 pb-3">
                          {watches.attributes.colorDial}
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
                          Papers
                        </th>
                        <td className="text-end text-capitalize px-2 pb-3">
                          {watches.attributes.papers}
                        </td>
                      </tr>

                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Box
                        </th>
                        <td className="text-end text-capitalize px-2 pb-3">
                          {watches.attributes.box}
                        </td>
                      </tr>

                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Year
                        </th>
                        <td className="text-end text-capitalize px-2 pb-3">
                          {watches.attributes.year}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Condition
                        </th>
                        <td className="text-end text-capitalize px-2 pb-3">
                          {watches.attributes.condition}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <div className="row">
                <AlertWithForm />
              </div> */}

              <div className="row mb-3">
                <div
                  onClick={() => setDescToggle(!descToggle)}
                  className="col-12 border-bottom px-3 py-2"
                >
                  <h5 className=" fs-4">
                    About this watch{" "}
                    {descToggle ? (
                      <i className="fa-sharp fa-solid fa-chevron-up"></i>
                    ) : (
                      <i className="fa-sharp fa-solid fa-chevron-down"></i>
                    )}
                  </h5>
                  <p className={` ${descToggle ? "d-block" : "d-none"}`}>
                    {watches.attributes.description}
                  </p>
                </div>
              </div>
              <div className="row">
                <AlertWithForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
