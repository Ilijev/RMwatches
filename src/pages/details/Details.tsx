import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Watch } from "./../../interfaces/interfaces";
import ImageGallery from "react-image-gallery";
import styles from "./details.module.css";
import AlertWithForm from "../../components/modals/requestForWatch";
type Props = {};

export default function Details({}: Props) {
  const { id } = useParams();
  const [watches, setWatches] = useState<Watch>();
  const [filteredWatch, setFilteredWatch] = useState<Watch>();
  const navigate = useNavigate();
  const [images, setImages] = useState<any>([]);
  const [descToggle, setDescToggle] = useState(true)
  const baseURL = "https://shielded-depths-59676.herokuapp.com" 
  
  useEffect(() => {
    fetch(`https://shielded-depths-59676.herokuapp.com/api/watches/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setWatches(data.data);
        console.log(data)
      });
  }, []);

  // useEffect(() => {
  //  let imgArray :any =[]
  //  watches && watches.attributes.imgLinks && Object.values(watches.attributes.imgLinks).forEach((item: any) => {
       
  //   // setImages([...images,  {original:'http://localhost:1337' + item, thumbnail:'http://localhost:1337' + item} ])
  //  imgArray.push( {original:'https://shielded-depths-59676.herokuapp.com' + item, thumbnail:'https://shielded-depths-59676.herokuapp.com' + item} )
   
  //      console.log(item)
  //   });
  //   setImages(imgArray)
  // }, [watches]);

  return (
    <>
      {!watches && (
        <div className="text-center fs-1 p-5 ">Loading...</div>
      )}

      {watches && (
        <div className={`container-fluid py-3 ${styles.detailsContainer} `}>
          <div className="row px-md-5  ">
            <div className="col-12 col-md-5  px-3 ">
              {/* { images  && <p>{JSON.stringify(images)}</p> } */}
              {/* { images  && <ImageGallery
                showPlayButton={false}
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
                <p className="col fs-1 mb-0">
                  {watches.attributes.model}
                </p>
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
                          {watches.attributes.year}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Condition
                        </th>
                        <td className="text-end px-2 pb-3">
                          {watches.attributes.condition}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Papers
                        </th>
                        <td className="text-end px-2 pb-3">
                          {watches.attributes.papers}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Box
                        </th>
                        <td className="text-end px-2 pb-3">
                          {watches.attributes.box}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Material
                        </th>
                        <td className="text-end px-2 pb-3">
                          {watches.attributes.material}
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
                          {watches.attributes.movement}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Case size
                        </th>
                        <td className="text-end px-2 pb-3">
                          {watches.attributes.diameter}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Dial color
                        </th>
                        <td className="text-end px-2 pb-3">
                          {watches.attributes.colorDial}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className=" px-2 pb-3">
                          Band
                        </th>
                        <td className="text-end px-2 pb-3">
                          {watches.attributes.watchBand}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <AlertWithForm />
              </div>
              
              <div className="row">
                <div onClick={()=>setDescToggle(!descToggle)} className="col-12 border-bottom px-3 py-2">
                  <h5 className=" fs-4" >Description {descToggle?<i className="fa-sharp fa-solid fa-chevron-up"></i>:<i className="fa-sharp fa-solid fa-chevron-down"></i>}</h5>
              <p className={` ${descToggle?"d-block": "d-none"}`}>{watches.attributes.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
