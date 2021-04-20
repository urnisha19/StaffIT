import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import work1 from '../../../images/work1.png';
import work2 from '../../../images/work2.jpg';
import work3 from '../../../images/work3.jpg';
import work4 from '../../../images/work4.jpg';
import work5 from '../../../images/work5.jpg';
import work6 from '../../../images/work6.jpg';
import "./OurWorks.css";

const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 20,
    dots: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 3
        }
    }
}

const OurWorks = () => {
    return (
        <section className="py-5 carousel-bg">
            <h2 className="text-brand text-center mt-3">Here are some of our works</h2>
            <div className="container">
                <OwlCarousel className='owl-theme mt-5 pb-md-0 mb-5' {...options}>
                    <div><img src={work1} alt="" className="work-img"/></div>
                    <div><img src={work2} alt="" className="work-img"/></div>
                    <div><img src={work3} alt="" className="work-img"/></div>
                    <div><img src={work4} alt="" className="work-img"/></div>
                    <div><img src={work5} alt="" className="work-img" /></div>
                    <div><img src={work6} alt="" className="work-img"/></div>
                </OwlCarousel>
            </div>
        </section>
    );
};

export default OurWorks;