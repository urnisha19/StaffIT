import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import logo from '../../../images/staffIT.png';
import { Link, useHistory } from 'react-router-dom';
import CustomerSideBar from '../CustomerSideBar/CustomerSideBar';
import ProcessPayment from './ProcessPayment/ProcessPayment';


const ServiceBooking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [services, setServices] = useState();
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:5000/services', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
                setServices(result)
            })
    }, [])

    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/customer/serviceBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Order Added successfully!");
                history.push("/customer/bookingList");
                console.log(data);
                console.log('posted');
            })
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-12 py-3">
                        <Link to="/home" >
                            <img src={logo} alt="logo" className="logo w-25" />
                        </Link>
                    </div>
                    <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4 className="text-brand">Service Booking</h4>
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
                        <CustomerSideBar />
                    </div>
                    <div className="col-md-9 col-9 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input defaultValue={loggedInUser.displayName} name="name" type="text" placeholder="Name" className="form-control" ref={register({ required: true })} />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input defaultValue={loggedInUser.email} type="text" name="email" placeholder="Email" className="form-control" ref={register({ required: true })} />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group mt-3">
                                <select name="service" ref={register({ required: true })} className="form-control mb-3" >
                                    <option >Select our service</option>
                                    {services && services.map(item => <option value={item._id}>{item.title} </option>)}
                                </select>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6 mt-3">
                                    <p>Pay With:</p>
                                    <input type="radio" id="CreditCard" name="payWith" value="CreditCard" />
                                    <label for="CreditCard">Credit Card</label>
                                </div>
                                <div className="form-group col-md-6 mt-5">
                                    <ProcessPayment />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success mt-3">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBooking;