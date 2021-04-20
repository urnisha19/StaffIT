import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentAlt, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './CustomerSideBar.css';

const CustomerSideBar = () => {
    return (
        <div className="sidebar d-flex flex-column">
            <Link to="/customer/serviceBooking" className="py-1">
                <h6 className="d-inline text-brand"><FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Service Booking</h6>
            </Link>
            <Link to="/customer/bookingList" className="py-1">
                <h6 className="d-inline  text-brand"><FontAwesomeIcon icon={faClipboardCheck} className="mr-2" /> Booking List</h6>
            </Link>
            <Link to="/customer/addReview" className="py-1">
                <h6 className="d-inline  text-brand"><FontAwesomeIcon icon={faCommentAlt} className="mr-2" /> Add Review</h6>
            </Link>
        </div>
    );
};

export default CustomerSideBar;