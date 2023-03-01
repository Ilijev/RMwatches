import React, { useState } from "react";

type Props = {};

export default function Contact({}: Props) {
    const [data, setData]= useState({
        name:'',
        lastName:'',
        email:'',
        number:'',
        maker:'',
        model:'',
        desc:"",
        checkBox:false
    })
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(data);
        // sent post quest here for email
        
        
    }
  return (
    <div className="container-fluid text-center  p-sm-5">
      <h4>Contact us </h4>
      <h1 className="fs-1">Let's talk about watches </h1>
      <form onSubmit={handleSubmit} className="p-md-5">
        <div className="row">
          <div className="col-12 mx-auto col-md-8">
            <div className="row mx-auto ">
              <div className="col-12 col-md-6 p-2 ">
                <input
                  type="text"
                  value={data.name}
                  onChange={e=> setData({...data,name:e.target.value})}
                  className="form-control shadow-none"
                  placeholder="First name"
                />
              </div>
              <div className="col-12 col-md-6 p-2 ">
                <input
                  type="text"
                  value={data.lastName}
                  onChange={e=> setData({...data,lastName:e.target.value})}

                  className="form-control shadow-none"
                  placeholder="Last name"
                />
              </div>
              <div className="col-12 col-md-8  p-2 ">
                <input
                  type="email"
                  value={data.email}
                  onChange={e=> setData({...data,email:e.target.value})}

                  className="form-control shadow-none"
                  placeholder="Email"
                />
              </div>
              <div className="col-12 col-md-4  p-2 ">
                <input
                  type="number"
                  value={data.number}
                  onChange={e=> setData({...data,number:e.target.value})}

                  className="form-control shadow-none"
                  placeholder="Phone Number "
                />
              </div>
              <div className="col-12 col-md-4  p-2 ">
                <input
                  type="text"
                  value={data.maker}
                  onChange={e=> setData({...data,maker:e.target.value})}

                  className="form-control shadow-none"
                  placeholder="Watch Maker "
                />
              </div>
              <div className="col-12 col-md-8  p-2 ">
                <input
                  type="text"
                  value={data.model}
                  onChange={e=> setData({...data,model:e.target.value})}

                  className="form-control shadow-none"
                  placeholder="Watch Model "
                />
              </div>
              <div className="col-12 p-2">
                <textarea
                  name=""
                  value={data.desc}
                  onChange={e=> setData({...data,desc:e.target.value})}

                  id=""
                  cols={10}
                  rows={3}
                  className=" shadow-none   form-control"
                  placeholder="Tell us the subject of your interests."
                ></textarea>
              </div>
              <div className="col-12 d-flex">
                <input required type="checkbox" name="" id="contactInfo" checked={data.checkBox} onChange={e => setData({...data,checkBox:e.target.checked})} />
                <label htmlFor="contactInfo" className="fw-light px-2">
                  I agree with sending my contact Information to RMWatches to be
                  contacted.
                </label>
              </div>
              <div className="col-12 p-2">
                <button type="submit" disabled={data.checkBox?false:true} className="btn w-100 border">
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
