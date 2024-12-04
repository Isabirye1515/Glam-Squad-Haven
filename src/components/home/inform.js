import React from 'react';
import icon from "./../../assets/a.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Inform = () => {
    const slide = [
        {
            id: 1,
            name: "A truly exquisite beauty experience. I highly recommend the Rose Oil Infusion, simply divine.",
            infor: "John DOE",
            image: icon,
            title: "Manager of BeautyCo",
        },
        {
            id: 2,
            infor: "Cozy and inviting, our salon offers a tranquil atmosphere and exceptional service. Especially our soothing aromatherapy treatments.",
            name: "Iris DOE",
            image: icon,
            title: "CEO of Beauty Bliss",
        },
        {
            id: 3,
            infor: "This place is perfect for groups or a relaxing spa day with friends.",
            name: "Iris DOE",
            image: icon,
            title: "CCO of BeautyCo",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div  >
            <center>
            
            <Slider {...settings} className='slider shadow' >
                {slide.map((item) => (
                    <div key={item.id} className='slide' >
                        <h2 className='fw-lighter' >{item.infor}</h2>
                        <img
                            src={item.image}
                            height={40}
                            width={40}
                            alt={`${item.name}'s icon`}
                            style={{ borderRadius: '10px' }}
                        />
                        <p>{item.name}</p>
                        <h5>{item.title}</h5>
                    </div>
                ))}
            </Slider>
            </center>
        </div>
    );
};

export default Inform;
