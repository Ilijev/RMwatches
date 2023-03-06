import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";

type Props = {};

export default function DashBoard({}: Props) {
  const [selectedFile, setSelectedFile] = useState<any>([]);
  const [preview, setPreview] = useState<any>();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile[0]) {
      setPreview(undefined);
      return;
    }

    setPreview(URL.createObjectURL(selectedFile[0]));
    // setPreview(objectUrl)

    // return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile([...selectedFile, e.target.files[0]]);
    console.log(selectedFile);
  };

  return (
    <div className="container-fluid">
      <div className="row p-4">
        <div className="col col-md-7 col-lg-9 ">
          <form action="#">
            <div className="row align-items-center">
              {/* <div className="form-group my-2 col-12 col-lg-6">
                <input
                  type="file"
                  onChange={onSelectFile}
                  className="form-control-file "
                />
              </div> */}
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchCode">Watch code</label>
                <input
                  type="text"
                  className="form-control"
                  id="watchCode"
                  placeholder="Watch code"
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchMaker">Watch Maker</label>
                <input
                  type="text"
                  className="form-control"
                  id="watchMaker"
                  placeholder="Watch Maker"
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchModel">Watch Model</label>
                <input
                  type="text"
                  className="form-control"
                  id="watchModel"
                  placeholder="Watch Model"
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchPrice">Watch Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="watchPrice"
                  placeholder="Watch Price"
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchReferenceNumber">
                  Watch Reference Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="watchReferenceNumber"
                  placeholder="Watch Reference Number"
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchMovement">Watch Movement Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="watchMovement"
                  placeholder="Watch Movement Type"
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchMaterial">Watch Material Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="watchMaterial"
                  placeholder="Watch Material Type"
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchDiametar">Watch Diametar</label>
                <input
                  type="text"
                  className="form-control"
                  id="watchDiametar"
                  placeholder="Watch Diametar"
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchDialColor">Watch Dial Color</label>
                <input
                  type="text"
                  className="form-control"
                  id="watchDialColor"
                  placeholder="Watch Dial Color"
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchBand">Watch Band</label>
                <input
                  type="text"
                  className="form-control"
                  id="watchBand"
                  placeholder="Watch Band"
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchYear">Watch Production Year</label>
                <input
                  type="text"
                  className="form-control"
                  id="watchYear"
                  placeholder="Watch Production Year"
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchCodition">Watch Codition</label>
                <input
                  type="text"
                  className="form-control"
                  id="watchCodition"
                  placeholder="Watch Codition"
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <label htmlFor="watchDescription">Watch Description</label>
                <textarea
                  className="form-control"
                  id="watchDescription"
                  placeholder="Watch Description..."
                />
              </div>
              <div className="form-group my-2 col-12 col-lg-6">
                <input
                  type="file"
                  onChange={onSelectFile}
                  className="form-control-file "
                />
              </div>
              <div className=" my-2 col-12  ">
                <input type="checkbox" className="" id="watchBoxAndPapers" />
                <label htmlFor="watchBoxAndPapers" className="mx-2">
                  Watch Box And Papers
                </label>
              </div>
            </div>
          </form>
        </div>
        <div
          className="col-12 col-md-5 col-lg-3"
          onClick={(e) => e.stopPropagation()}
        >
          <Card img={preview} />
          {/* {selectedFile &&  <img src={preview} /> } */}
        </div>
      </div>
    </div>
  );
}
