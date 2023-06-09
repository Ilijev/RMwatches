import React, { useState } from "react";

export default function WatchService() {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    number: "",
    maker: "",
    model: "",
    desc: "",
    year: "",
    price: "",
    refNumber: "",
    originalBox:false,
    originalPapers:false,
    notOriginalBox:false,
    checkBox: false,
  });
  const [validated, setValidated] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Perform form submission logic here
      console.log("email:", ``);
    }

    setValidated(true);
  }
  return (
    <div className="container h-100 py-5">
      <div className="row text-center">
        <h1>Expert Watch Servicing and Repairs</h1>
      </div>
      <form onSubmit={handleSubmit} className={`p-md-5 ${validated ? 'was-validated' : ''} `} noValidate >
        <div className="row">
          <div className="col-12 mx-auto col-md-8">
            <div className="row mx-auto ">
              <div className="col-12 col-md-8  p-2 ">
                <input
                  // required
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="form-control shadow-none"
                  placeholder="Email"
                />
              </div>
              <div className="col-12 col-md-4  p-2 ">
                <input
                  // required
                  type="number"
                  value={data.number}
                  onChange={(e) => setData({ ...data, number: e.target.value })}
                  className="form-control shadow-none"
                  placeholder="Phone Number "
                />
              </div>
              <div className="col-12 col-md-4  p-2 ">
                <input
                  // required
                  type="text"
                  value={data.maker}
                  onChange={(e) => setData({ ...data, maker: e.target.value })}
                  className="form-control shadow-none"
                  placeholder="Watch Brand"
                />
              </div>
              <div className="col-12 col-md-8  p-2 ">
                <input
                  // required
                  type="text"
                  value={data.model}
                  onChange={(e) => setData({ ...data, model: e.target.value })}
                  className="form-control shadow-none"
                  placeholder="Model "
                />
              </div>
              <div className="col-12 col-md-8  p-2 ">
                <input
                  // required
                  type="text"
                  value={data.refNumber}
                  onChange={(e) => setData({ ...data, refNumber: e.target.value })}
                  className="form-control shadow-none"
                  placeholder="Reference number "
                />
              </div>
              <div className="col-12 col-md-4  p-2 ">
                <input
                  // required
                  type="text"
                  value={data.year}
                  onChange={(e) => setData({ ...data, year: e.target.value })}
                  className="form-control shadow-none"
                  placeholder="Production Year"
                />
              </div>
              <div className="col-12   p-2 ">
                <input
                  // required
                  type="text"
                  value={data.price}
                  onChange={(e) => setData({ ...data, price: e.target.value })}
                  className="form-control shadow-none"
                  placeholder="Price"
                />
              </div>
              <div className="col-12 p-2">
                <textarea
                  name=""
                  value={data.desc}
                  onChange={(e) => setData({ ...data, desc: e.target.value })}
                  id=""
                  cols={10}
                  rows={3}
                  className=" shadow-none   form-control"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col d-flex">
                <input
                  // required
                  type="checkbox"
                  name=""
                  id="boxInfo"
                  checked={data.originalBox}
                  onChange={(e) =>
                    setData({ ...data, originalBox: e.target.checked })
                  }
                />
                <label htmlFor="boxInfo" className="fw-light px-2">
                  Original Box
                </label>
              </div>
              <div className="col d-flex">
                <input
                  // required
                  type="checkbox"
                  name=""
                  id="originalPapers"
                  checked={data.originalPapers}
                  onChange={(e) =>
                    setData({ ...data, originalPapers: e.target.checked })
                  }
                />
                <label htmlFor="originalPapers" className="fw-light px-2">
                  Original Papers
                </label>
              </div>
              <div className="col d-flex">
                <input
                  // required
                  type="checkbox"
                  name=""
                  id="notOriginalBox"
                  checked={data.notOriginalBox}
                  onChange={(e) =>
                    setData({ ...data, notOriginalBox: e.target.checked })
                  }
                />
                <label htmlFor="notOriginalBox" className="fw-light px-2">
                  Not Original Box
                </label>
              </div>
              <div className="col-12 d-flex">
                <input
                  // required
                  type="checkbox"
                  name=""
                  id="contactInfo"
                  checked={data.checkBox}
                  onChange={(e) =>
                    setData({ ...data, checkBox: e.target.checked })
                  }
                />
                <label htmlFor="contactInfo" className="fw-light px-2">
                  I agree with sending my contact Information to RM Watches
                  Munich to be contacted.
                </label>
              </div>
              <div className="col-12 p-2">
                <button
                  type="submit"
                  disabled={data.checkBox ? false : true}
                  className="btn w-100 border"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
