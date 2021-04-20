import { faClipboardList, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    return (
        <div className="sidebar d-flex flex-column">
            <Link to="/admin/orderList" className="py-1 text-brand">
                <h6 className="d-inline"><FontAwesomeIcon icon={faClipboardList} className="mr-2" /> Order List</h6>
            </Link>
            <Link to="/admin/addService" className="py-1 text-brand">
                <h6 className="d-inline"><FontAwesomeIcon icon={faPlus} className="mr-2" />Add Service</h6>
            </Link>
            <Link to="/admin/makeAdmin" className="py-1 text-brand">
                <h6 className="d-inline"><FontAwesomeIcon icon={faUserPlus} className="mr-2" />Make Admin</h6>
            </Link>
        </div>
    );
};

export default AdminSideBar;