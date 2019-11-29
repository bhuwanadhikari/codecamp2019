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
    'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/77402507_1441871672644987_8662428039319126016_n.jpg?_nc_cat=108&_nc_ohc=FkhZ1TV1YfYAQmxZcA8RGUMufGdMvS_8LSnxZglyLbkdZV88H47V5NCBQ&_nc_ht=scontent.fktm3-1.fna&oh=a1a5e353b972d6dc703232621ed1e8a8&oe=5E8C389C',
    'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/78210099_499735567298258_5837795457975189504_n.jpg?_nc_cat=105&_nc_ohc=_qiQiFkZ_P8AQntTG6oLYfCKwE_J6lyN4ggsDvfUSdqBDMUBdkgIAx-ww&_nc_ht=scontent.fktm3-1.fna&oh=3150d8f5fb961af602391ea98d6613fe&oe=5E427F3B',
    'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/76949349_500043767521171_5378965080996052992_n.jpg?_nc_cat=105&_nc_ohc=gVs_7AyKWpAAQkZZsmpupO9ELvGTxxnjV0KehZdL7Rq_bt4PuyEIrTqUg&_nc_ht=scontent.fktm3-1.fna&oh=672b973e047d5bfaaf6ac83b2330b629&oe=5E808C61',
    'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/75446572_556477328500187_6792593750464921600_n.jpg?_nc_cat=111&_nc_ohc=iPdEcVU3MEAAQm5T7f8Y7Pxbz3_RSXJBMdf6CqjARerit8EO-GjkzeTiQ&_nc_ht=scontent.fktm3-1.fna&oh=3262cfe04a176c896060c839a3f7e9c0&oe=5E841F35',
    'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/74348663_577015189781305_921321874275696640_n.jpg?_nc_cat=110&_nc_ohc=YDXRw_2cMC0AQkHX3zeT-3IvzLXg0QldC7eY79YILi7Prg8hISQgoM2fg&_nc_ht=scontent.fktm3-1.fna&oh=820e0b848b841c354689e7ec462425bc&oe=5E85BF6C',
    'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/78071044_422351238435240_8040768988222849024_n.jpg?_nc_cat=107&_nc_ohc=OOyluUd-6BMAQkfwIKXCulQw2bQPan4Q2ZHFYTTlj7DNmtgeh_FJ0obQQ&_nc_ht=scontent.fktm3-1.fna&oh=471c168a029a4ece6ac283654ad8a8b5&oe=5E4BE57C',
    'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/78173429_1409701055849688_2563820383056691200_n.jpg?_nc_cat=108&_nc_ohc=91mQtqLQLdIAQksYqa8rPCWVVISL3sDhogBWRN80UeyKXQDPB_ITcM-Jg&_nc_ht=scontent.fktm3-1.fna&oh=33809fc285037dc29c804a93df92a447&oe=5E438302',
    'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/78421730_489010865298105_4068678586003881984_n.jpg?_nc_cat=110&_nc_ohc=Q7mFws-FshIAQkcuz1jCS5eCW2KqPHSkHyoG04URhJPp0fsqkYYXI-COg&_nc_ht=scontent.fktm3-1.fna&oh=8b4de62fd27d260b018a68cf17af7cbf&oe=5E8AC86D',

]


class DeskCarousel extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 4,
            initialSlide: 4,
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
                <h2 style={{ textAlign: 'center', marginTop: '80px' }} id='faqs'>Gallery</h2>
                <p className=" isCentered ralewayFonted" style={{ position: 'relative', top: '-20px', textAlign: 'center', fontSize: '0.9em', }}>Glimpse of Genese CodeCamp 2018</p>
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
            <h2 style={{ textAlign: 'center', marginTop: '80px' }} id='gallery'>Gallery</h2>
            <p className=" isCentered ralewayFonted" style={{ position: 'relative', top: '-20px', textAlign: 'center', fontSize: '0.9em', }}>Glimpse of Genese CodeCamp 2018</p>

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