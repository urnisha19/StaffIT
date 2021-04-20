import React from 'react';
import { Button } from 'react-bootstrap';
import topBanner from '../../../images/topBanner.jpg';
import NabBar from './NavBar';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <section className="top-banner">
            <div className="container">
                <NabBar/>
                <div className="row d-flex align-items-center top-banner-content p-5">
                    <div className="col-md-6 col-12 col-sm-6">
                        <h1 className="text-brand">Staff IT <br />Intend To Take Your Brand <br />Next Level</h1>
                        <p className="py-3">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                        <Button className="header-button">Hire Us</Button>
                    </div>
                    <div className="col-md-6 col-12 col-sm-6">
                        <img src={topBanner} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;