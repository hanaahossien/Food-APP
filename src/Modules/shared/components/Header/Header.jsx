/* eslint-disable react/prop-types */
import React from "react";
import man from "../../../../assets/girl.png";

export default function Header({ title, item, desc }) {
  return (
    <>
      {/* <div className=" container-fluid">
    <div className="row " >
      <div className= "header2 d-flex  align-items-center mb-4">
      <div className="col-md-7 ps-5 text-white">
      <h3 className="fw-bold h1 my-4">Welcome <span className="yellow ">{title}</span></h3>
      <span>You can add project and assign tasks to your team </span>
    </div>
    </div>
    </div>

  </div> */}
        <div className="header my-3   d-flex justify-content-center align-items-center">
          <div className="col-md-6  text-white text-md-start text-sm-center">
            <div className="mx-2">
              <h3 className="fw-bold h2 my-3 h1">
                {title} <span className="fw-light">{item}</span>
              </h3>
              <span>{desc} </span>
            </div>
          </div>

          <div className="col-md-5 text-md-end text-center  d-md-block d-none">
            <img src={man} className=" my-2 img-fluid w-50 " alt="" />
          </div>
      </div>
    </>
  );
}
