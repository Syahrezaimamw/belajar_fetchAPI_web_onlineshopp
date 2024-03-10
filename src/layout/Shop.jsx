import React, { useState } from 'react'
import Atas from '../components/Atas'
import MainCo from '../components/MainCo'
import Loading from '../components/Loading'
import { Navbar } from 'react-bootstrap'
export const Shop = () => {
    const [loading,setLoading]=useState(false)
    const [harga,setHarga]=useState(0.00)
  return (
    <div className='container-fluid position-relative p-0'>
        <div className='position-sticky bg-white sticky-top w-100 '>
        <Atas harga={harga}/>
        </div>
        {loading==true?
          <div className='position-absolute loading h-100 w-100 d-flex justify-content-center align-items-center' style={{zIndex:99}}>
            <Loading/>
            </div>:<></>
        }
        <MainCo setharga={setHarga}  harga={harga} setloading={setLoading}/>
    </div>
  )
}
