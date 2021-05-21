import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import logo from '../../../images/staffIT.png';
import { Link, useHistory } from 'react-router-dom';
import CustomerSideBar from '../CustomerSideBar/CustomerSideBar';
// import ProcessPayment from './ProcessPayment/ProcessPayment';

const ServiceBooking = () => {
    const name = JSON.parse(localStorage.getItem("name"));
    const email = JSON.parse(localStorage.getItem("email"));
    const serviceId = JSON.parse(localStorage.getItem("serviceId"));

    const history = useHistory();
    const [orderService, setOrderService] = useState({});
    const [services, setServices] = useState();
    const { errors } = useForm();
    const [info, setInfo] = useState({
        name: name,
        email: email,
        // status: 'Pending',
    });

    useEffect(() => {
        fetch('https://glacial-bayou-10112.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                const myService = data.find(e => e._id === serviceId);
                setOrderService(myService);
                setServices(data);
                const myInfo = { ...info };
                if (myService) {
                    myInfo.service = myService.title;
                }
                setInfo(myInfo);
            });
    }, [])

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('service', info.service);
        // formData.append('price', info.price);
        // formData.append('status', info.status);
        fetch('https://glacial-bayou-10112.herokuapp.com/customer/serviceBooking', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                alert("Order Added successfully!");
                history.replace('/');
                history.go(0);
            });
        e.preventDefault();
        alert("Added review successfully!");
        JSON.parse(localStorage.removeItem("serviceId"))
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
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Your name" name="name" value={name} required />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" placeholder="Your email address" name="email" value={email} required />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group mt-3">
                                {
                                    orderService ? <input onBlur={handleBlur} name="service" className="form-control" type="text" placeholder="Service Name"
                                        value={orderService && orderService.title} required />
                                        :
                                        <select onBlur={handleBlur} name="service" className="form-control" required>
                                            <option >Select our service</option>
                                            {services && services.map(item => <option value={item.title}>{item.title} </option>)}
                                        </select>
                                }
                            </div>
                            {/* <div className="form-group">
                            <input onBlur={handleBlur} className="form-control" type="number" name='price' placeholder="Price" required /><br />
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
                            </div> */}
                            <div className="form-group">
                                <input type="submit" value="Send" className="btn btn-success mt-3" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBooking;