import React from 'react'
import { FaBars } from "react-icons/fa6"
import { useRef } from 'react'
import { FaBagShopping } from "react-icons/fa6"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const warna = {
    color: "rgb(0,146,136)"
}
const weight = {
    fontWeight: 500
}

const Atas = ({ harga }) => {
    const font = useRef(null)
    window.addEventListener('scroll', function () {
        let yaxis = Math.round(this.window.scrollY)
        if (yaxis > 45) {

            // font.current.style.fontSize='35px';
        } else if (yaxis < 42) {

            // font.current.style.fontSize='50px';
        }
    });

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3" className=' py-2 text-white' style={{backgroundColor:warna.color}}>Shopping Cart</Popover.Header>
            <Popover.Body>
                <table>
                    <thead>
                        <th className='pe-2'> Quantity</th>
                        <th className='pe-2'>Product</th>
                        <th className='pe-2'>Price</th>
                        <th className='p-2'>Action</th>
                    </thead>
                    <tbody>
                        <td>1</td>
                        <td>Baju</td>
                        <td>TY</td>
                        <td></td>

                    </tbody>
                </table>
            </Popover.Body>
        </Popover>
    );
    return (
        <div className=' d-flex flex-column justify-content-center col-12 pb-3 sh' style={{}}>
            <div className='container mt-2 p-0 d-flex d-lg-none align-items-center justify-content-between' style={{ height: '30px' }}>
                <div className='d-flex  align-items-end ' style={{ ...warna }}>
                    <p className='m-0  me-2  fs-6' style={{ fontSize: '15px' }} >CALLL NOW</p>
                    <p className='m-0'>717-890-456</p>
                </div>
                <div className=' d-flex align-items-center'>
                    <FaBagShopping className='me-2' style={{ ...warna, }} />
                    <div className='px-2 text-white rounded-2' style={{ backgroundColor: warna.color }}>O</div>
                    <p className='m-0 ms-1' style={{ ...weight }}>$ {harga}</p>

                </div>
            </div>
            <div className='d-flex align-items-center mt-0 justify-content-between container pb-3 mt-3 mt-lg-5 p-0 brd'>
                <div className='d-none d-lg-flex  flex-column  align-items-center' style={{ ...warna }}>
                    <p className='m-0 ' style={{ fontSize: '21px' }} >CALLL NOW</p>
                    <p className='m-0'>717-890-456</p>
                </div>
                <div><h1 className='fw-bold' style={{ ...warna, fontSize: "40px" }} ref={font} >Logo</h1></div>
                <div className='d-lg-none'>
                    <div><FaBars className='fs-5 d-block ' /></div>
                </div>
                <div className='d-none d-lg-flex col-1  flex-md-column align-items-end'>
                    <OverlayTrigger className='p-0' trigger="click" placement="bottom" overlay={popover}>
                        <div variant="white" className='p-0'>


                            <div className='d-flex align-items-center qty '>
                                <FaBagShopping className='me-2' style={{ ...warna, }} />
                                <div className='px-2 text-white rounded-2' style={{ backgroundColor: warna.color }}>O</div>
                            </div>
                        </div>
                    </OverlayTrigger>

                    <p className='m-0 ms-1' style={{ ...weight }}>${harga}</p>

                </div>
            </div>
            <div className=' container d-none d-lg-flex p-0 mt-2 d-flex justify-content-center'>
                <div className='col-10 mt-1'>
                    <ul className='d-flex  col-12 justify-content-between align-items-center h-100  list-unstyled ' style={{ fontSize: "17px", fontWeight: 700 }}>
                        <li>HOME</li>
                        <li>SHOP</li>
                        <li>OUR STORY</li>
                        <li>WHERE TO BUY</li>
                        <li>RECIPES</li>
                        <li>NEWS</li>
                        <li>CONTANT</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Atas
