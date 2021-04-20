import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/staffIT.png';
import { Link } from 'react-router-dom';
import bookingImg from '../../../images/booking.png';
import './BookingList.css';
import CustomerSideBar from '../CustomerSideBar/CustomerSideBar';


const BookingList = () => {
    const [BookingListData, setBookingListData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://glacial-bayou-10112.herokuapp.com/order?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setBookingListData(data);
            })
    }, [])
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
                                <img style={{ height: '30px', width: '30px', marginRight: '10px' }} src={loggedInUser.photoURL} alt="" />
                                {loggedInUser.displayName}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-3">
                       <CustomerSideBar/>
                    </div>
                    <div className="col-md-9 col-9 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        <div className="row d-flex justify-content-between booking-card">
                            {
                                BookingListData.map(service =>
                                    <div className="card col-md-5 my-2" key={service._id}>
                                        <div className="card-header d-flex justify-content-between">
                                            <img className="img-fluid" src={bookingImg} alt="serviceImage" width="60" />
                                            <h6 className="pt-3 px-3 rounded" style={{ backgroundColor: '#FFE3E3', color: '#FF4545' }}>Pending</h6>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="card-text font-weight-bold">{service.serviceName}</h6>
                                            <p className="card-text text-secondary">{service.projectDetails}</p>
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