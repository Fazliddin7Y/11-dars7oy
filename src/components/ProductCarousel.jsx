import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const ProductCarousel = () => {
  const slides = [
    {
      id: 1,
      img: '',
      title: "LET'S MAKE A BETTER ",
      highlight: 'PLANET',
      btnText: 'SHOP NOW',
    },
    {
      id: 2,
      img: '',
      title: "LET'S LIVE IN A BETTER ",
      highlight: 'PLANET',
      btnText: "LET'S START",
    },
    {
      id: 3,
      img: '',
      title: "LET'S OBSERVE A BETTER ",
      highlight: 'PLANET',
      btnText: 'GET CREDITS',
    },
    {
      id: 4,
      img: '',
      title: 'BRING HOME THE BEAUTY OF',
      highlight: 'FLOWERS',
      btnText: 'EXPLORE NOW',
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="w-full h-[400px] md:h-[500px]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="flex justify-center items-center bg-white">
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-4 mx-auto">
            <div className="text-center md:text-left max-w-lg">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                {slide.title} <span className="text-green-600">{slide.highlight}</span>
              </h2>
              <p className="mt-4 text-gray-600">
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an urban jungle. Order your favorite plants!
              </p>
              <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-700">
                {slide.btnText}
              </button>
            </div>
            <img
              src={slide.img}
              alt="Slide image"
              className="w-[60%] md:w-[40%] max-w-lg object-contain mt-6 md:mt-0 rounded-xl shadow-lg"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductCarousel;
