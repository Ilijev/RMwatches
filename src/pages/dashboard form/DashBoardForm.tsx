import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import { Watch } from "../../interfaces/interfaces";
import styles from "./dashBoardFormStyles.module.css";
import { useNavigate, useParams } from "react-router-dom";
type Props = {};

export default function DashBoardForm({}: Props) {
  const [selectedFile, setSelectedFile] = useState<any>([]);
  const [preview, setPreview] = useState<any>();
  const [watch, setWatch] = useState<Watch>({
    id:0,
    attributes:{
    code: 0,
    model: "",
    maker: "",
    price: 0,
    referenceNumber: "",
    movement: "",
    material: "",
    diameter: 0,
    colorDial: "",
    watchBand: "",
    boxPapers: false,
    year: 0,
    condition: "",
    description: "",
    }
    
   
    // tuka img:"" fale i trgni go gore Watch stay any za erroro
  });
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    id && fetch(`http://localhost:1337/api/watches/${id}`)
    .then(res=>res.json())
    .then(data=>{setWatch(data.data)
    console.log(id)
    })
  }, []);

  useEffect(() => {
    if (!selectedFile[0]) {
      setPreview(preview);
      return;
    }

    setPreview(URL.createObjectURL(selectedFile[0]));
  }, [selectedFile]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile([...selectedFile]);
      //   setSelectedFile((items:any)=> items.concat(Array.from(selectedFile)));
      //   console.log(selectedFile)
      return;
    }

    // console.log(selectedFile);
    // setSelectedFile([...selectedFile, e.target.files[0]]); ovoa e prvicnoto ama vaka e samo poedinecni fajlovi
    setSelectedFile([
      ...selectedFile,
      e.target.files.length > 1 ? e.target.files : e.target.files[0],
    ]);
    // tuka stavi poedinecen ako imas eden ama na vtoro stavanje ako izberes povekje gi stave u votr item ama kako lista u votrio item
    // imas logovi vidi ke vides so dumam opravi ako mozes
  };
  function handleSubmit(e: any) {
    e.preventDefault();
    // Object.entries(watch).every(item=>item )
    console.log(watch);
    // console.log(selectedFile);
    fetch(`http://localhost:1337/api/watches${id?`/${id}`:""}`,{
     
    // Adding method type
    method: id?"PUT":"POST",
     
    // Adding body or contents to send
    body: JSON.stringify(watch)
     
   
  })
  }

  return (
    <div className="container-fluid">
      <div className="row"> <div className="col-1 d-none d-lg-block mx-3 mt-3"><button className="btn" onClick={()=>navigate(-1)}>Go Back</button> </div></div>
      <div className="row p-4">
        <div className="col col-md-7 col-lg-9 ">
          <form
            action="#"
            onSubmit={handleSubmit}
            className="needs-validation "
          >
            <div className="row align-items-center">
              {/* <div className="form-group my-2 col-12 col-lg-6">
                <input
                  type="file"
                  onChange={onSelectFile}
                  className="form-control shadow-none -file "
                />
              </div> */}
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchCode">Watch code</label>
                <input
                  type="number"
                  value={watch.attributes.code}
                  className={`form-control shadow-none  ${
                    watch?.attributes.code ? "" : styles.error
                  }`}
                  id="watchCode"
                  placeholder="Watch code"
                  // onChange={(e) =>
                  //   setWatch({ ...watch, attributes.code:e.target.valueAsNumber  })
                  // }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchMaker">Watch Maker</label>
                <input
                  type="text"
                  value={watch.attributes.maker}

                  className={`form-control shadow-none  ${
                    watch?.attributes.maker ? "" : styles.error
                  }`}
                  id="watchMaker"
                  placeholder="Watch Maker"
                  // onChange={(e) =>
                  //   setWatch({ ...watch, maker: e.target.value })
                  // }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchModel">Watch Model</label>
                <input
                  type="text"
                  value={watch.attributes.model}

                  className={`form-control shadow-none  ${
                    watch?.attributes.model ? "" : styles.error
                  }`}
                  id="watchModel"
                  placeholder="Watch Model"
                  // onChange={(e) =>
                  //   setWatch({ ...watch, model: e.target.value })
                  // }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchPrice">Watch Price</label>
                <input
                  type="number"
                  value={watch.attributes.price}

                  className={`form-control shadow-none  ${
                    watch?.attributes.price ? "" : styles.error
                  }`}
                  id="watchPrice"
                  placeholder="Watch Price"
                  // onChange={(e) =>
                  //   setWatch({ ...watch, price: e.target.valueAsNumber })
                  // }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchReferenceNumber">
                  Watch Reference Number
                </label>
                <input
                  type="text"
                  // value={watch.reference_number}

                  className={`form-control shadow-none  ${
                    watch?.attributes.referenceNumber ? "" : styles.error
                  }`}
                  id="watchReferenceNumber"
                  placeholder="Watch Reference Number"
                  // onChange={(e) =>
                  //   setWatch({ ...watch, reference_number: e.target.value })
                  // }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchMovement">Watch Movement Type</label>
                <input
                  type="text"
                  value={watch.attributes.movement}

                  className={`form-control shadow-none  ${
                    watch?.attributes.movement ? "" : styles.error
                  }`}
                  id="watchMovement"
                  placeholder="Watch Movement Type"
                  // onChange={(e) =>
                  //   setWatch({ ...watch, movement: e.target.value })
                  // }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchMaterial">Watch Material Type</label>
                <input
                  type="text"
                  value={watch.attributes.material}

                  className={`form-control shadow-none  ${
                    watch?.attributes.material ? "" : styles.error
                  }`}
                  id="watchMaterial"
                  placeholder="Watch Material Type"
                  // onChange={(e) =>
                  //   setWatch({ ...watch, material: e.target.value })
                  // }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchDiametar">Watch Diametar</label>
                <input
                  type="number"
                  value={watch.attributes.diameter}

                  className={`form-control shadow-none  ${
                    watch?.attributes.diameter ? "" : styles.error
                  }`}
                  id="watchDiametar"
                  placeholder="Watch Diametar"
                  // onChange={(e) =>
                  //   setWatch({ ...watch, diameter: e.target.valueAsNumber })
                  // }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchDialColor">Watch Dial Color</label>
                <input
                  type="text"
                  value={watch.attributes.colorDial}

                  className={`form-control shadow-none  ${
                    watch?.attributes.colorDial ? "" : styles.error
                  }`}
                  id="watchDialColor"
                  placeholder="Watch Dial Color"
                  // onChange={(e) =>
                  //   setWatch({ ...watch, color_dial: e.target.value })
                  // }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchBand">Watch Band</label>
                <input
                  type="text"
                  value={watch.attributes.watchBand}

                  className={`form-control shadow-none  ${
                    watch?.attributes.watchBand ? "" : styles.error
                  }`}
                  id="watchBand"
                  placeholder="Watch Band"
                  // onChange={(e) =>
                  //   setWatch({ ...watch, watchBand: e.target.value })
                  // }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchYear">Watch Production Year</label>
                <input
                  type="number"
                  value={watch.attributes.year}

                  className={`form-control shadow-none  ${
                    watch?.attributes.year ? "" : styles.error
                  }`}
                  id="watchYear"
                  placeholder="Watch Production Year"
                  // onChange={(e) =>
                  //   setWatch({ ...watch, year: e.target.valueAsNumber })
                  // }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchCodition">Watch Codition</label>
                <input
                  type="text"
                  value={watch.attributes.condition}

                  className={`form-control shadow-none  ${
                    watch?.attributes.condition ? "" : styles.error
                  }`}
                  id="watchCodition"
                  placeholder="Watch Codition"
                  // onChange={(e) =>
                  //   setWatch({ ...watch, condition: e.target.value })
                  // }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchDescription">Watch Description</label>
                <textarea
                  className={`form-control shadow-none  ${
                    watch?.attributes.description ? "" : styles.error
                  }`}
                  value={watch.attributes.description}

                  id="watchDescription"
                  placeholder="Watch Description..."
                  // onChange={(e) =>
                  //   setWatch({ ...watch, description: e.target.value })
                  // }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <input
                  type="file"
                  multiple
                  onChange={onSelectFile}
                  className="form-control shadow-none -file "
                />
              </div>
              <div className=" my-2 col-12  ">
                <input
                  type="checkbox"
                  checked={watch.attributes.boxPapers}

                  className=""
                  id="watchBoxAndPapers"
                  // onChange={(e) =>
                  //   setWatch({ ...watch, box_papers: e.target.checked })
                  // }
                />
                <label htmlFor="watchBoxAndPapers" className="mx-2">
                  Watch Box And Papers
                </label>
              </div>
              <button className="btn bg-dark-custom text-white">
                Create Watch
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-5 col-lg-3">
          <Card img={preview} />
          {/* {selectedFile &&  <img src={preview} /> } */}
        </div>
      </div>
    </div>
  );
}
