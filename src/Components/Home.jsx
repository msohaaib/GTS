import banner1 from '../../public/cable-pulling.jpeg';
import banner2 from '../../public/cable-lying.jpg';
import banner3 from '../../public/demolition.jpg';
import banner4 from '../../public/water-proofing.webp';
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
];

const Hero = () => {
    let setting = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
    };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex items-center justify-center text-black duration-200'>
            {/* Hero Section */}
            <div className='w-full max-w-screen-xl mx-auto pb-8 sm:pb-0'>
                <Slider {...setting}>
                    {imageList.map((data) => (
                        <div key={data.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                {/* Text content section */}
                                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                        {data.title}
                                    </h1>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        className='text-sm'>
                                        {data.discription}
                                        <div
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                            data-aos-delay="300">
                                            <button
                                                className='bg-gradient-to-r from-primary to-secondary hover:scale-105 bg-opacity-25 duration-200 text-black py-2 px-4 rounded-full my-4'>
                                                What We Do?
                                            </button>
                                        </div>
                                    </p>
                                </div>
                                {/* Image section */}
                                <div className='order-2 sm:order-1'>
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        className='relative z-10'>
                                        <img src={data.img} alt=""
                                            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto' />
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
