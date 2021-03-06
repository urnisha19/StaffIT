import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import logo from '../../../images/staffIT.png';
import { Link, useHistory } from 'react-router-dom';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const AddService = () => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    const name = JSON.parse(localStorage.getItem("name"));

    const history = useHistory();
    const [addServiceInfo, setAddServiceInfo] = useState({});
    const { errors } = useForm();
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...addServiceInfo };
        newInfo[e.target.name] = e.target.value;
        setAddServiceInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', addServiceInfo.title)
        formData.append('description', addServiceInfo.description)
        fetch('https://glacial-bayou-10112.herokuapp.com/admin/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                history.replace('/');
                history.go(0);
            })
        e.preventDefault();
        alert("New Service added successfully!");
    }

    return (
        <section className="add-service">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-12 py-3">
                        <Link to="/home" >
                            <img src={logo} alt="" className="logo w-25" />
                        </Link>
                    </div>
                    <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4 className="text-brand">Add Services</h4>
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
                    <div className="col-md-10 col-10 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        {!isAdmin && <h4 className="text-danger">Sorry! You are not admin. </h4>}
                        {isAdmin &&
                            <form action="" onSubmit={handleSubmit} className="py-5 px-4" style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="title">Service Title</label>
                                        <input onBlur={handleBlur} name="title" type="text" placeholder="Enter title" className="form-control" required="true" />
                                        {errors.title && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="icon">Icon</label>
                                        <input onChange={handleFileChange} name="icon" type="file" className="form-control" required="true" />
                                        {errors.icon && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="description">Description</label>
                                        <textarea onBlur={handleBlur} name="description" placeholder="Enter Designation" className="form-control" required="true" rows="3"></textarea>
                                        {errors.description && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>
                                <div className="form-group d-flex justify-content-end">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;