import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import banner1 from '../../public/cable-pulling.jpeg';
import banner2 from '../../public/cable-lying.jpg';
import banner3 from '../../public/demolition.jpg';
import banner4 from '../../public/water-proofing.webp';
import banner5 from '../../public/excavation.webp';
import banner6 from '../../public/electricity-transmittion.jpg';

import Slider from 'react-slick';

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageList = [
    {
        id: 1,
        img: banner1,
        title: "Cable pulling",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum adipisci tempora ex quae, iusto quod inventore quibusdam culpa? Consequatur velit tempore corrupti placeat ipsam quo distinctio vitae voluptate dolorum."
    },
    {
        id: 2,
        img: banner2,
        title: "Cable lying",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum adipisci laceat ipsam quo distinctio vitae voluptate dolorum."
    },
    {
        id: 3,
        img: banner3,
        title: "Demolition",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum adipisci tempora ex quae, iusto quod in."
    },
    {
        id: 4,
        img: banner4,
        title: "Water Proofing",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum adipisci tempora ex quae, iusto quod in."
    },
    {
        id: 5,
        img: banner5,
        title: "Excavation",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum adipisci tempora ex quae, iusto quod in."
    },
    {
        id: 6,
        img: banner6,
        title: "Electricity Transmition",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum adipisci tempora ex quae, iusto quod in."
    },
];

const Hero = () => {
    const navigate = useNavigate();  // Initialize the useNavigate hook

    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 768,  // Below this width
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 1024,  // Below this width
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    const handleButtonClick = () => {
        navigate('/services');  // Navigate to the Services page
    };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex items-center justify-center text-black duration-200'>
            {/* Hero Section */}
            <div className='w-full max-w-screen-xl mx-auto px-4 pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {imageList.map((data) => (
                        <div key={data.id} className='flex items-center justify-center'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                {/* Text content section */}
                                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 px-4'>
                                    <h1
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
                                        {data.title}
                                    </h1>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        className='text-base sm:text-lg'>
                                        {data.discription}
                                    </p>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="300">
                                        <button
                                            onClick={handleButtonClick}  // Add onClick handler
                                            className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full my-4'>
                                            Explore More
                                        </button>
                                    </div>
                                </div>
                                {/* Image section */}
                                <div className='order-2 sm:order-1 flex items-center justify-center'>
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        className='relative z-10'>
                                        <img src={data.img} alt=""
                                            className='w-[250px] h-[250px] sm:h-[400px] sm:w-[400px] object-contain mx-auto rounded-2xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
