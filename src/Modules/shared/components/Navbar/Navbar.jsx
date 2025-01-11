import React, { useContext } from 'react'
import avatar from "../../../../assets/avatar.png"
import { AuthContext } from '../../../context/AuthContext';

export default function Navbar() {

  let {loginData}=useContext(AuthContext)
  return (
    <div className="p-2  my-2 text-end rounded-3 bg-light_green d-flex  w-100">

      <div className=' mx-4 w-100'>  <img src={avatar} alt="user name" className="mx-2 " /> {loginData.userName}</div>
    </div>
  );}
