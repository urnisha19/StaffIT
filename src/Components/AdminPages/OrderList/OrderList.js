import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/staffIT.png';
import './OrderList.css'
import { Link } from 'react-router-dom';
import loading from '../../../images/loading.gif';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [totalOrderList, setTotalOrderList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/admin/orderList`)
            .then(res => res.json())
            .then(data => {
                setTotalOrderList(data);
            })
    }, [])
    return (
        <section className="order-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-12 py-3">
                        <Link to="/home" >
                            <img src={logo} alt="" className="logo w-25" />
                        </Link>
                    </div>
                    <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4 className="text-brand">Order List</h4>
                        <div className="profile">
                            <h4>
                                <img style={{ height: '30px', width: '30px', marginRight: '10px' }} src={loggedInUser.photoURL} alt="" />
                                {loggedInUser.displayName}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-2">
                        <AdminSideBar />
                    </div>
                    <div className="col-md-10 col-10 container p-4" style={{ backgroundColor: 'lavender' }}>
                        <div className="row py-2" style={{ backgroundColor: 'paleVioletRed', color: 'white' }}>
                            <div className="col-md-2">
                                <h6>Name</h6>
                            </div>
                            <div className="col-md-3">
                                <h6>Email ID</h6>
                            </div>
                            <div className="col-md-2">
                                <h6>Service</h6>
                            </div>
                            <div className="col-md-3">
                                <h6>Pay With</h6>
                            </div>
                            <div className="col-md-2">
                                <h6>Status</h6>
                            </div>
                        </div>
                        {
                            totalOrderList.length === 0 && <div className="d-flex justify-content-center">
                                <img src={loading} alt="loading" className="mt-3 w-25"/>
                            </div>
                        }
                        {
                            totalOrderList.map(service =>
                                <div className="service-list-items" key={service._id}>
                                    <div className="row bg-white pt-1 border-bottom">
                                        <div className="col-md-2">
                                            <p>{service.name}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{service.email}</p>
                                        </div>
                                        <div className="col-md-2">
                                            <p>{service.service}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{service.payWith}</p>
                                        </div>
                                        <div className="col-md-2">
                                            <div>
                                                <select id="status" name="status" style={{ border: '0' }}>
                                                    <option value="pending" className="text-danger">Pending</option>
                                                    <option value="done" className="text-success">Done</option>
                                                    <option value="ongoing" className="text-warning">On going</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderList;