import React, { useState } from "react";

type Props = {};

export default function Contact({}: Props) {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    number: "",
    maker: "",
    model: "",
    desc: "",
    // checkBox: false,
  });
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(Object.values(data).every((el) => el.length > 2)){
    if (Object.values(data).every((el) => el.length > 2)) {
      console.log("podlgo");
    } else {
      console.log("pokratko");
    }
  }
  return (
    <div className="container-fluid text-center  p-sm-5">
      
      <h1 className="fs-2">Sell your watch with confidence </h1>
      <h1 className="fs-1">Your privacy and security are our top priority</h1>
      <form onSubmit={handleSubmit} className="p-md-5">
        <div className="row">
          <div className="col-12 mx-auto col-md-8">
            <div className="row mx-auto ">
              <div className="col-12 col-md-6 p-2 ">
                <input
                  // required
                  type="text"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="form-control shadow-none"
                  placeholder="First name"
                />
              </div>
              <div className="col-12 col-md-6 p-2 ">
                <input
                  // required
                  type="text"
                  value={data.lastName}
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                  className="form-control shadow-none"
                  placeholder="Last name"
                />
              </div>
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
                  // value={data.model}
                  // onChange={(e) => setData({ ...data, model: e.target.value })}
                  className="form-control shadow-none"
                  placeholder="Reference number "
                />
              </div>
              <div className="col-12 col-md-4  p-2 ">
                <input
                  // required
                  type="text"
                  value={data.maker}
                  onChange={(e) => setData({ ...data, maker: e.target.value })}
                  className="form-control shadow-none"
                  placeholder="Production Year"
                />
              </div>
              <div className="col-12   p-2 ">
                <input
                  // required
                  type="text"
                  value={data.maker}
                  onChange={(e) => setData({ ...data, maker: e.target.value })}
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
                  // checked={data.checkBox}
                  // onChange={(e) =>
                  //   setData({ ...data, checkBox: e.target.checked })
                  // }
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
                  // checked={data.checkBox}
                  // onChange={(e) =>
                  //   setData({ ...data, checkBox: e.target.checked })
                  // }
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
                  // checked={data.checkBox}
                  // onChange={(e) =>
                  //   setData({ ...data, checkBox: e.target.checked })
                  // }
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
                  // checked={data.checkBox}
                  // onChange={(e) =>
                  //   setData({ ...data, checkBox: e.target.checked })
                  // }
                />
                <label htmlFor="contactInfo" className="fw-light px-2">
                  I agree with sending my contact Information to RM Watches Munich to be
                  contacted.
                </label>
              </div>
              <div className="col-12 p-2">
                <button
                  type="submit"
                  // disabled={data.checkBox ? false : true}
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
