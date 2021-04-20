import React from 'react';
import img from '../../../images/customer.jpg';
import './ReviewDetail.css';

const ReviewDetail = (props) => {
    const { name, companyName, description } = props.review;
    return (
        <div className="col-md-4 py-md-3 my-md-3 my-2 ">
            <div className="rounded reviewDetail">
                <div className="d-flex align-items-center mt-2">
                    <img className="img-fluid mx-3" src={img} alt="reviewImage" width="60" />
                    <div>
                        <h6 className="font-weight-bold">{name}</h6>
                        <p><small className="text-secondary">{companyName}</small></p>
                    </div>
                </div>
                <div className="reviewDetail-text p-3">
                    <p className="text-secondary">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetail;