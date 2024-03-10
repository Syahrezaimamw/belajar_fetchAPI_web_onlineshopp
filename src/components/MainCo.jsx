import React, { useRef, useState } from 'react'
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { getApi, searchProduct, category } from '../service/api';
import { useEffect } from 'react';
import Loading from './Loading';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const MainCo = ({ setloading,setharga,harga }) => {
    const warna = {
        color: "rgb(0,146,136)",
        fontSize: 500
    }
    const border = {
        border: "1px solid black"
    }
    const data = [
        {
            name: 'Bulk'
        },
        {
            name: 'Cookie Bites'
        },
        {
            name: 'Gifts'
        },
        {
            name: 'Grain Free'
        },
        {
            name: 'Granola'
        },
        {
            name: 'Nut Butter'
        },
        {
            name: 'Nuts'
        },
        {
            name: 'Oatmeal Cups'
        },
    ]
    const [dataApi, setDataApi] = useState([])
    const [searchApi, setSearchApi] = useState([])
    useEffect(() => {
        getApi().then(data => setDataApi(data))
    }, [])
    const show = useRef(null)
    function showw() {
        if (textshowc == false) {

            setTextshow('Close More')
            setTextshowc(true)
        } else {
            setTextshow('Show More')
            setTextshowc(false)

        }
        show.current.classList.toggle('taDoom')
    }
    const [textshow, setTextshow] = useState('Show more')
    const [textshowc, setTextshowc] = useState(false)
    const valuesearch = useRef(null)
    function searchdata() {
        setloading(true)
        const val = valuesearch.current.value
        searchProduct(val).then(data => {
            setloading(false)
            return setDataApi(data)
        })

    }
    // console.log(searchApi)
    // console.log(dataApi)
    const [showww, setShow] = useState(false);
    const [modaldata, setdataModal] = useState([])
    const [gambar, setGambar] = useState([])

    const handleClose = () => {
        setShow(false)
        setdataModal([])

    };
    const handleShow = async (id) => {
        setShow(true)
        return axios.get('https://api.escuelajs.co/api/v1/products/' + id + '/')
            .then(a => {
                setdataModal(a.data)
                setGambar(a.data.images)
            })
    };

    const [cetegoryy, setcategory] = useState([])
    useEffect(() => {
        category().then(a => setcategory(a))
    }, [])

    async function caricategory(a) {
        const ull = a.target.parentElement
        const coletion = ull.children
        for (let i = 0; i < coletion.length; i++) {
            const list = coletion[i]
            if (list.classList.contains('liiDom')) {
                list.classList.remove('liiDom')
            }
        }
        setloading(true)
        a.target.classList.add('liiDom')
        const ambil = await getApi()
        const text = a.target.innerText
        const databaru = ambil.filter(a => {
            const nama = a.category.name
            if (text == nama) {
                setloading(false)
                return a
            }
        })
        setDataApi(databaru)

    }
    const [qty,setQty]=useState(1)

    function tambahh(a){
        setQty(1)
        const totalHarga=qty*a
        setharga(harga+totalHarga)
        console.log(a)
console.log('ajsdhu')
    }
    const [parse, setparse] = useState(1)
    return (
        <div className='  container position-relative'>

            <div className='mt-4 d-flex '>


                <Modal
                    show={showww}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size='lg'
                    centered
                    className='modal-dialog-centered'
                >
                    <Modal.Header closeButton className='border-0'>
                    </Modal.Header>

                    <Modal.Body className='col-12 pb-4 d-flex modal-dialog-centered'>
                        <div className='col-12 d-flex'>
                            <div className='col-5 ' style={{ height: '300px' }}>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    className=' h-100'
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => swiper}
                                >
                                    {gambar.map((a, i) => (

                                        <SwiperSlide className=' col-12 h-100 grap' key={i}>
                                            <img src={a} className='img-fluid h-100' alt="" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className='col-7 ps-4 mt-3'>
                                <button className='border-0 rounded-1 fw-bold text-white px-4 py-2' style={{ backgroundColor: warna.color }}>${modaldata.price}</button>
                                <h1 className='mt-3'>{modaldata.title}</h1>
                                <p className='mt-3'>{modaldata.description} </p>
                                <div className='d-flex mt-5 justify-content-end'>
                                    <div className='d-flex' >
                                        <div className='py-0 d-flex trc align-items-center me-1 px-3 border-1' style={{ cursor: 'pointer' }} onClick={()=>setQty(qty==1?qty-0:qty-1)} >-</div>
                                        <div className='py-0 d-flex trc align-items-center me-1 px-3 border-1'>{qty}</div>
                                        <div className='py-0 d-flex trc align-items-center me-1 px-3 border-1 me-4' style={{ cursor: 'pointer' }} onClick={()=>setQty(qty+1)}>+</div>
                                    </div>
                                    <button className='border-0 px-4 py-2 mt-2 rounded-pill butonactive text-white' style={{ backgroundColor: "rgb(157,157,157)" }} onClick={()=>tambahh(modaldata.price)}>Add To Card</button>
                                </div>
                            </div>

                        </div>

                    </Modal.Body>

                </Modal>
                <div className='col-4 d-flex flex-column pe-5 align-items-center' >
                    <div className='d-flex flex-column col-12'>
                        <input type="text" className='py-3  px-3' placeholder='Search Product...' style={{fontSize:"14px"}} ref={valuesearch} />
                        <button style={{ alignSelf: 'end', backgroundColor: warna.color, fontWeight: warna.fontSize,fontSize:"16px" }} className='mt-3 text-white rounded-pill border-0 bts px-4 pt-1 pb-2 ' onClick={searchdata}>Search</button></div>
                    <div className=' col-12 mt-5'>
                        <h5 className='m-0 position-relative  ctr ps-3' style={{fontSize:"15px"}}>CATEGORIES</h5>
                        <ul className='list-unstyled mt-3' >
                            {cetegoryy.map((a) => (

                                <li key={a.name} onClick={(b) => caricategory(b)} className='lii  mt-3 d-flex align-items-center ' style={{ fontSize: '15px', letterSpacing: '' }}><div className=' rounded-circle me-2' style={{ height: '17px', width: "17px" }}></div>{a.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='col-8 brds d-flex justify-content-start ps-5'>
                    <div className='col-12'>

                        <div className='d-flex align-items-center btrt pt-2 pb-3'>
                            <div style={{ height: '40px', width: "40px" }} className='me-3 brM d-flex justify-content-center align-items-center '><FaTableCellsLarge className='fs-4' /></div>
                            <div style={{ height: '40px', width: "40px" }} className='brM me-3 d-flex justify-content-center align-items-center'><FaBars className='fs-5' /></div>
                            <select name="" className="px-2"  style={{fontSize:'14px'}}id="">
                                <option value="" >Default Sorting</option>
                                <option value="">s</option>
                                <option value="">s</option>
                            </select>
                        </div>
                        <div className='d-flex mt-4   justify-content-between  flex-wrap'>
                            {dataApi.map((a, i) => {
                                if (i < 3) {

                                    return (

                                        <div className=' ' key={a.id}>
                                            <div className=' product rounded' style={{ height: '240px' }}
                                            >
                                                <div className=' position-absolute w-100 ya h-100' onMouseEnter={(e) => e.target.classList.add('yaDOM')} onMouseLeave={(e) => e.target.classList.remove('yaDOM')}>

                                                    <div className='view position-absolute  d-flex  py-2 text-white col-12 justify-content-center align-items-center ' style={{ bottom: '0px', fontWeight: 500, fontSize: '14px' }} onClick={() => handleShow(a.id)} ><FaEye className='me-2 text-white mb-1 'style={{fontSize:'15px'}} />QUICK VIEW
                                                    </div>
                                                </div>
                                                <img src={a.images[0]} className='img-fluid rounded h-100 w-100' alt="" />
                                            </div>
                                            <div className='d-flex flex-column align-items-center mt-3'>
                                                <p className='m-0 wm' style={{ fontSize: "14px" }}>{a.category.name}</p>
                                                <h3 className='m-0  text-center mt-2' style={{ fontFamily: '"Hind", sans-serif', fontSize: '20px', fontWeight: 600 }}>{a.title.substring(0, 19.)} </h3>
                                                <div className='mt-2'>
                                                    <p className='m-0 text-center d-flex align-items-center justify-content-center' style={{ color: warna.color, }}>${a.price} <span className='m-0 ms-2 position-relative px-1  discount text-white' style={{ backgroundColor: warna.color, fontSize: '10px' }} > 15%</span></p>
                                                    <button className='rounded-1 border-0 mt-2 py-2 px-4 text-white fw-bold' style={{ backgroundColor: warna.color, letterSpacing: '1px', fontSize: '12px' }}>Select Option</button>
                                                </div>

                                            </div>
                                        </div>

                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>


{/* //show more */}
            <div className=' gap-5   d-flex  justify-content-start flex-wrap' style={{marginTop:'100px'}}>
                <div className='col-12 d-flex justify-content-end pb-4'>
                    <button onClick={showw} className='rounded-2 px-4  py-2 bg-white' style={{ border: `2px solid ${warna.color}`,fontSize:"14px", color: warna.color, fontWeight: 700 }}>{textshow}</button>
                </div>
                <div className='ta gap-5 pb-5 col-12  mt-0 justify-content-between flex-wrap' ref={show}>
                    {dataApi.map((a, i) => {
                        if (i >= 3) {

                            return (

                                <div className=' col-2'  key={a.id}>
                                    <div className='bg-secondary product rounded' style={{ height: '260px' }}
                                    >
                                        <div className=' position-absolute w-100 ya h-100' onMouseEnter={(e) => e.target.classList.add('yaDOM')} onMouseLeave={(e) => e.target.classList.remove('yaDOM')}>

                                            <div className='view position-absolute  d-flex  py-2 text-white col-12 justify-content-center align-items-center ' style={{ bottom: '0px', fontWeight: 500, fontSize: '14px' }} onClick={() => handleShow(a.id)} ><FaEye className='me-2 mb-1 text-white' style={{fontSize:"15px"}} />QUICK VIEW
                                            </div>
                                        </div>
                                        <img src={a.images[0]} className='img-fluid rounded h-100 w-100' alt="" />

                                    </div>
                                    <div className='d-flex flex-column align-items-center mt-3'>
                                        <p className='m-0 wm' style={{ fontSize: "14px" }}>{a.category.name}</p>
                                        <h3 className='m-0  text-center mt-2' style={{ fontFamily: '"Hind", sans-serif', fontSize: '20px', fontWeight: 600 }}>{a.title}</h3>
                                        <div className='mt-2'>
                                            <p className='m-0 text-center d-flex align-items-center justify-content-center' style={{ color: warna.color, }}>${a.price} <span className='m-0 ms-2 position-relative px-1  discount text-white' style={{ backgroundColor: warna.color, fontSize: '10px' }} > 15%</span></p>
                                            <button className='rounded-1 border-0 mt-2 py-2 px-4 text-white fw-bold' style={{ backgroundColor: warna.color, letterSpacing: '1px', fontSize: '12px' }}>Select Option</button>
                                        </div>

                                    </div>
                                </div>

                            )
                        }
                    })}
                </div>
            </div>

        </div>
    )
}

export default MainCo
