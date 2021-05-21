import React, { useEffect, useState } from 'react';
import logo from '../../../images/staffIT.png';
import { Link } from 'react-router-dom';
import loading from '../../../images/loading.gif';
import bookingImg from '../../../images/booking.png';
import './BookingList.css';
import CustomerSideBar from '../CustomerSideBar/CustomerSideBar';

const BookingList = () => {
    const name = JSON.parse(localStorage.getItem("name"));
    const email = JSON.parse(localStorage.getItem("email"));

    const [BookingListData, setBookingListData] = useState([]);

    useEffect(() => {
        fetch('https://glacial-bayou-10112.herokuapp.com/order?email=' + email)
            .then(res => res.json())
            .then(data => {
                setBookingListData(data);
            })
    }, [email])

    return (
        <section className="booking-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-12 py-3">
                        <Link to="/home" >
                            <img src={logo} alt="" className="logo w-25" />
                        </Link>
                    </div>
                    <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4 className="text-brand">Booking List</h4>
                        <div className="profile">
                            <h4>
                                {name}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-3">
                        <CustomerSideBar />
                    </div>
                    <div className="col-md-9 col-9 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        <div className="row d-flex justify-content-between booking-card">
                            {
                                BookingListData.length === 0 && <div className="text-center">
                                    <h4>You have no bookings!</h4>
                                    <img src={loading} alt="loading" className="mt-3 w-25" />
                                </div>
                            }
                            {
                                BookingListData.map(service =>
                                    <div className="card col-md-5 my-2" key={service._id}>
                                        <div className="card-header d-flex justify-content-between">
                                            <img className="img-fluid" src={bookingImg} alt="serviceImage" width="60" />
                                            <h6 className="pt-3 px-3 rounded" style={{ backgroundColor: '#FFE3E3', color: '#FF4545' }}>Pending</h6>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="card-text font-weight-bold">{service.service}</h6>
                                            <p className="card-text text-success">Order Id: {service._id}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingList;