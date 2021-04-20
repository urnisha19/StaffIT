import React, { useEffect, useState } from 'react';
import ServiceDetail from './ServiceDetail';
import loading from '../../../images/loading.gif';

const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])

    return (
        <section className="services-container my-5 py-5">
            <div className="text-center">
                <h2>Our <span className="text-brand">Services</span></h2>
            </div>
            <div className="d-flex justify-content-center my-5">
                <div className="row w-75">
                    {
                        serviceData.length === 0 && <img src={loading} alt="loading" className="mx-auto w-50" />
                    }
                    {
                        serviceData.map(service =>
                            <ServiceDetail
                                key={service._id}
                                service={service}
                            ></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;