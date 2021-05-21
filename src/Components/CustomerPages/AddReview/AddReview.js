import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import logo from '../../../images/staffIT.png';
import { Link, useHistory } from 'react-router-dom';
import CustomerSideBar from '../CustomerSideBar/CustomerSideBar';

const AddReview = () => {
    const name = JSON.parse(localStorage.getItem("name"));
    const photoURL = JSON.parse(localStorage.getItem("photoURL"));

    const history = useHistory();
    const { errors } = useForm();
    const [addReviewInfo, setAddReviewInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...addReviewInfo };
        newInfo[e.target.name] = e.target.value;
        setAddReviewInfo(newInfo);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('companyName', addReviewInfo.companyName);
        formData.append('description', addReviewInfo.description);
        formData.append('img', photoURL);
        fetch('https://glacial-bayou-10112.herokuapp.com/customer/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                history.replace('/');
                history.go(0);
            })
        e.preventDefault();
        alert("Added review successfully!");
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-12 py-3">
                        <Link to="/home" >
                            <img src={logo} alt="" className="logo w-25" />
                        </Link>
                    </div>
                    <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4 className="text-brand">Review</h4>
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
                                <input name="name" type="text" value={name} placeholder="Name" className="form-control" required="true" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} name="companyName" placeholder="Company’s name, Designation" className="form-control" required="true" />
                                {errors.companyName && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea onBlur={handleBlur} name="description" placeholder="Description" className="form-control" required="true" rows="3"></textarea>
                                {errors.description && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success mt-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddReview;