import React, { useEffect, useState } from 'react';
import logo from '../../../images/staffIT.png';
import './OrderList.css'
import { Link } from 'react-router-dom';
import loading from '../../../images/loading.gif';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import OrderListDetails from './OrderListDetails';

const OrderList = () => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    const name = JSON.parse(localStorage.getItem("name"));

    const [totalOrderList, setTotalOrderList] = useState([]);

    useEffect(() => {
        fetch(`https://glacial-bayou-10112.herokuapp.com/admin/orderList`)
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
                        <h4 className="text-brand">All Order List</h4>
                        <div className="profile">
                            <h4>
                                {name}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-2">
                        <AdminSideBar />
                    </div>
                    <div className="col-md-10 col-10 container p-4" style={{ backgroundColor: 'lavender' }}>
                        <table className="table">
                            <thead style={{ backgroundColor: 'paleVioletRed', color: 'white' }}>
                                <tr>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Service</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            {!isAdmin && <h4 className="text-danger">Sorry! You are not admin. </h4>}
                            {isAdmin &&
                                <tbody>
                                    {
                                        totalOrderList.length === 0 && <div className="d-flex justify-content-center">
                                            <img src={loading} alt="loading" className="mt-3 w-25" />
                                        </div>
                                    }
                                    {
                                        totalOrderList.map(order => <OrderListDetails order={order} />)
                                    }
                                </tbody>

                            }
                        </table>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OrderList;