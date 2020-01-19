import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";



import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';


import "./Carousel.css";
import { relative } from "path";

const photos = [
    'https://firebasestorage.googleapis.com/v0/b/bhuwan-forum.appspot.com/o/codecamp-photos%2F1.png?alt=media&token=7cfd6df9-c43d-4fde-a317-82d87aa2fc42',
    'https://firebasestorage.googleapis.com/v0/b/bhuwan-forum.appspot.com/o/codecamp-photos%2F2.png?alt=media&token=666b7bf4-195e-4db4-9a19-0faaedeac94d',
    'https://firebasestorage.googleapis.com/v0/b/bhuwan-forum.appspot.com/o/codecamp-photos%2F3.png?alt=media&token=7db93d96-beb3-4fe9-9f4a-c3320d5bc32c',

]


class DeskCarousel extends Component {



    render() {

        // const currentDay = new Date().getDate()
        const currentDay = 22
        let initialPhoto;
        if (parseInt(currentDay) === 23) initialPhoto = 1
        if (parseInt(currentDay) === 24) initialPhoto = 2
        if (parseInt(currentDay) === 25) initialPhoto = 3
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: initialPhoto,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                }
            ]
        };



        return (
            <div style={{ width: '99%', maxWidth: '1100px', margin: 'auto', marginBottom: '100px' }}>
                <h2 style={{ textAlign: 'center', marginTop: '20px' }} id='schedule'>Schedule</h2>
                <div className="gallery">
                    <Slider {...settings}>

                        {photos.map((item, index) => {
                            return (
                                <div key={index} className='photoBox'>
                                    <img className='gallPhoto' src={item} />
                                </div>
                            )
                        })}


                    </Slider>
                </div>
            </div >
        );
    }
}











const MobileCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = photos.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <div style={{ margin: '40px' }}>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }} id='gallery'>Schedule</h2>

            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={photos} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            <p className=" isCentered ralewayFonted" style={{ position: 'relative', top: '-20px', textAlign: 'center', fontSize: '0.9em', }}></p>

        </div>
    );
}

let exported;

if (window.innerWidth > 600) {
    exported = DeskCarousel;
} else {
    exported = MobileCarousel;
}

export default exported;