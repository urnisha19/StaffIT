import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import logo from '../../../images/staffIT.png';
import { Link } from 'react-router-dom';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    // const [isAdmin, setIsAdmin] = useState(false);
    // useEffect(() => {
    //     if (loggedInUser) {
    //         fetch('http://localhost:5000/showAllAdmin', {
    //             method: "POST",
    //             headers: { 'Content-type': 'application/json' },
    //             body: JSON.stringify({ email: loggedInUser.email })
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 setIsAdmin(data)
    //             })
    //     }
    // }, [])


    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/admin/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Admin Added successfully!");
                document.getElementById("myForm").reset();
            })
            .catch(err => {
                console.error(err);
            })
    };

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
                        <h4 className="text-brand">Make Admin</h4>
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
                    <div className="col-md-10 col-10 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        {/* {!isAdmin && <h4 className="text-danger">Sorry! You are not admin. </h4>}
                        {isAdmin && */}
                            <form onSubmit={handleSubmit(onSubmit)} className="form-row py-5 px-4" id="myForm" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" placeholder="admin@gmail.com" className="form-control" ref={register({ required: true })} />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group col-md-6" style={{ paddingTop: '31px' }}>
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </form>
                        {/* } */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;