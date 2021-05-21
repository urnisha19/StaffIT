import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    const history = useHistory();

    const handleOrder = () => {
        localStorage.setItem("serviceId", JSON.stringify(service._id));
        history.replace('/customer/serviceBooking');
    }

    return (
        <div className="col-md-4 py-md-5 my-md-3 text-center rounded serviceDetail">
            <div onClick={handleOrder} >
                {
                    service.image ?
                        <img style={{ height: '80px' }} src={`data:image/png;base64,${service.image.img}`} alt="service" />
                        :
                        <img style={{ height: '80px' }} src={`https://glacial-bayou-10112.herokuapp.com/${service.img}`} alt="service" />
                }
                <h5 className="my-3">{service.title}</h5>
                <p className="text-secondary">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;