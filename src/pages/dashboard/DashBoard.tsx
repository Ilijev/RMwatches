import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import { Watch } from "./../../interfaces/interfaces";
import styles from "./dasboardStyles.module.css";
import { useParams } from "react-router-dom";
type Props = {};

export default function DashBoard({}: Props) {
  const [selectedFile, setSelectedFile] = useState<any>([]);
  const [preview, setPreview] = useState<any>();
  const [watch, setWatch] = useState<Watch>({
    id: 0,
    code: 0,
    model: "",
    maker: "",
    price: 0,
    reference_number: "",
    movement: "",
    material: "",
    diameter: 0,
    color_dial: "",
    watch_band: "",
    box_papers: false,
    year: 0,
    condition: "",
    description: "",
    date_created: "",
    date_lastUpdate: "",
    creator: 0,
    // tuka img:"" fale i trgni go gore Watch stay any za erroro
  });
  const { id } = useParams();

  useEffect(() => {
    id && fetch(`http://localhost:3004/watches/${id}`)
    .then(res=>res.json())
    .then(data=>{setWatch(data)
    console.log(data)
    })
  }, []);

  useEffect(() => {
    if (!selectedFile[0]) {
      setPreview([...selectedFile]);
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

    console.log(selectedFile);
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
    // console.log(watch);
    console.log(selectedFile);
  }

  return (
    <div className="container-fluid">
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
                  value={watch.code}
                  className={`form-control shadow-none  ${
                    watch?.code ? "" : styles.error
                  }`}
                  id="watchCode"
                  placeholder="Watch code"
                  onChange={(e) =>
                    setWatch({ ...watch, code: e.target.valueAsNumber })
                  }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchMaker">Watch Maker</label>
                <input
                  type="text"
                  value={watch.maker}

                  className={`form-control shadow-none  ${
                    watch?.maker ? "" : styles.error
                  }`}
                  id="watchMaker"
                  placeholder="Watch Maker"
                  onChange={(e) =>
                    setWatch({ ...watch, maker: e.target.value })
                  }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchModel">Watch Model</label>
                <input
                  type="text"
                  value={watch.model}

                  className={`form-control shadow-none  ${
                    watch?.model ? "" : styles.error
                  }`}
                  id="watchModel"
                  placeholder="Watch Model"
                  onChange={(e) =>
                    setWatch({ ...watch, model: e.target.value })
                  }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchPrice">Watch Price</label>
                <input
                  type="number"
                  value={watch.price}

                  className={`form-control shadow-none  ${
                    watch?.price ? "" : styles.error
                  }`}
                  id="watchPrice"
                  placeholder="Watch Price"
                  onChange={(e) =>
                    setWatch({ ...watch, price: e.target.valueAsNumber })
                  }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchReferenceNumber">
                  Watch Reference Number
                </label>
                <input
                  type="text"
                  value={watch.reference_number}

                  className={`form-control shadow-none  ${
                    watch?.reference_number ? "" : styles.error
                  }`}
                  id="watchReferenceNumber"
                  placeholder="Watch Reference Number"
                  onChange={(e) =>
                    setWatch({ ...watch, reference_number: e.target.value })
                  }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchMovement">Watch Movement Type</label>
                <input
                  type="text"
                  value={watch.movement}

                  className={`form-control shadow-none  ${
                    watch?.movement ? "" : styles.error
                  }`}
                  id="watchMovement"
                  placeholder="Watch Movement Type"
                  onChange={(e) =>
                    setWatch({ ...watch, movement: e.target.value })
                  }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchMaterial">Watch Material Type</label>
                <input
                  type="text"
                  value={watch.material}

                  className={`form-control shadow-none  ${
                    watch?.material ? "" : styles.error
                  }`}
                  id="watchMaterial"
                  placeholder="Watch Material Type"
                  onChange={(e) =>
                    setWatch({ ...watch, material: e.target.value })
                  }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchDiametar">Watch Diametar</label>
                <input
                  type="number"
                  value={watch.diameter}

                  className={`form-control shadow-none  ${
                    watch?.diameter ? "" : styles.error
                  }`}
                  id="watchDiametar"
                  placeholder="Watch Diametar"
                  onChange={(e) =>
                    setWatch({ ...watch, diameter: e.target.valueAsNumber })
                  }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchDialColor">Watch Dial Color</label>
                <input
                  type="text"
                  value={watch.color_dial}

                  className={`form-control shadow-none  ${
                    watch?.color_dial ? "" : styles.error
                  }`}
                  id="watchDialColor"
                  placeholder="Watch Dial Color"
                  onChange={(e) =>
                    setWatch({ ...watch, color_dial: e.target.value })
                  }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchBand">Watch Band</label>
                <input
                  type="text"
                  value={watch.watch_band}

                  className={`form-control shadow-none  ${
                    watch?.watch_band ? "" : styles.error
                  }`}
                  id="watchBand"
                  placeholder="Watch Band"
                  onChange={(e) =>
                    setWatch({ ...watch, watch_band: e.target.value })
                  }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchYear">Watch Production Year</label>
                <input
                  type="number"
                  value={watch.year}

                  className={`form-control shadow-none  ${
                    watch?.year ? "" : styles.error
                  }`}
                  id="watchYear"
                  placeholder="Watch Production Year"
                  onChange={(e) =>
                    setWatch({ ...watch, year: e.target.valueAsNumber })
                  }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchCodition">Watch Codition</label>
                <input
                  type="text"
                  value={watch.condition}

                  className={`form-control shadow-none  ${
                    watch?.condition ? "" : styles.error
                  }`}
                  id="watchCodition"
                  placeholder="Watch Codition"
                  onChange={(e) =>
                    setWatch({ ...watch, condition: e.target.value })
                  }
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchDescription">Watch Description</label>
                <textarea
                  className={`form-control shadow-none  ${
                    watch?.description ? "" : styles.error
                  }`}
                  value={watch.description}

                  id="watchDescription"
                  placeholder="Watch Description..."
                  onChange={(e) =>
                    setWatch({ ...watch, description: e.target.value })
                  }
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
                  checked={watch.box_papers}

                  className=""
                  id="watchBoxAndPapers"
                  onChange={(e) =>
                    setWatch({ ...watch, box_papers: e.target.checked })
                  }
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
