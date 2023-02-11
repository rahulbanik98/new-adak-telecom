import React from 'react'
import '../App.css';
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

export default function Header() {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6"><p className="text-white pb-0"> Free Shipping Over 5000Rs || No COD Avilable</p></div>
                        <div className="col-6"><p className='text-end text-white pb-0'>Helpline: <a href="tel:+91 8013240357" className='text-white'>+91 8013240357</a></p></div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4><Link className='text-white'>New Adak Telecome</Link></h4>
                        </div>
                        <div className="col-4">
                            <div className="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2"><BsSearch/></span>
                            </div>
                        </div>
                        <div className="col-5" />
                    </div>
                </div>
            </header>
        </>
    )
}
