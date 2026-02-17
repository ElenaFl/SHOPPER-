import {React, useState } from "react";
import { Link, useParams } from "react-router";
import { Counter } from "../../components/ui/Counter/Counter.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { data } from "../../../data.js";

/**
 * Компонент страница Product.*
 *
 */

export const Product = () => {
  // id карточки из url
  const { id } = useParams();

  //переменная-состояние count для счетчика
  const [count, setCount] = useState(0);

  //информация о товаре из data.js
  const product = data.find((item) => item.id === id);

  if (!product) {
    return (
      <div>
        <div className="mt-31 pt-24 border-t border-[#D8D8D8]">
          <p>Товар не найден</p>
        </div>
      </div>
    );
  }

  console.log(count);

  return (
    <>
      {/* общий блок */}
      <div className="mt-31 pt-24 border-t border-[#D8D8D8]">
        {/* верхний блок */}
        <div className="flex justify-between items-center gap-x-9px mb-25">
          {/* свайпер */}
          <div className="w-30">
            <div className="relative">
              <Swiper
                className="w-30 h-150 cursor-pointer absolute top-2 left-0"
                modules={[Pagination, Autoplay]}
                direction="vertical" // Вертикальная прокрутка
                pagination={{ clickable: true }}
                slidesPerView={4} // Показывает 1 полный слайд + части соседних
                centeredSlides={false} // Центральный слайд по центру
                loop={true}
                autoplay={{ delay: 4000 }}
                spaceBetween={10} // Отступ между слайдами
                speed={600}
                touchRatio={1}
              >
                {data?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="w-30 h-30 relative">
                      <img
                        src={`../${item.img}`}
                        alt={item.title}
                        className="w-full h-full rounded-sm"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* блок с большой картинкой и описанием товара */}
          <div className=" w-272 flex justify-between items-center gap-x-12px">
            {/* изображение */}
            <div className="w-135 h-145">
              <img
                src={`../.${product.img}`}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* информация о товаре */}
            <div className="w-121.5">
              {/* название товара */}
              <h3 className="text-2xl mb-6">{product.title}</h3>
              {/* цена товара */}
              <p className="text-xl text-medium mb-16">
                {product.currency} {product.price.toFixed(2)}
              </p>
              {/* рейтинг */}
              <div className="w-73 h-6 flex justify-between items-center mb-5">
                <div className="w-32.5 flex justify-between items-center cursor-pointer">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src="/assets/images/star.svg" alt="star" />
                  ))}
                </div>
                <div className="w-34.5 flex justify-between items-center">
                  <div>n</div>
                  <div className="text-[#707070]">customer review</div>
                </div>
              </div>
              {/* описание */}
              <p className="mb-12" style={{ color: "#707070" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis.
              </p>
              {/* счетчик и кнопка */}
              <div className="flex justify-between items-center mb-20">
                <Counter count={count} setCount={setCount} />
                <Link
                  to="/cart"
                  state={{ product, quantity: count }}
                  className="w-90 h-13 font-semibold border rounded-sm cursor-pointer flex justify-center items-center text-center"
                >
                  ADD TO CART
                </Link>
              </div>
              {/* иконки: сердце, инстаграм */}
              <div className="w-60 h-4.5 mb-9 flex justify-between items-center ">
                <img
                  src="/assets/images/heart.svg"
                  alt="heart"
                  className="cursor-pointer"
                />
                <div>|</div>
                <img
                  src="/assets/images/instagam.svg"
                  alt="instagram"
                  className="cursor-pointer"
                />
              </div>
              {/* SKU */}
              <div className="w-17 h-6.7 mb-2 flex justify-between items-center">
                <p>SKU:</p>
                <p style={{ color: "#707070" }}>n</p>
              </div>
              {/* категории */}
              <div className="w-51 h-6.7 flex justify-between items-center">
                <p className="">Categories:</p>
                <p style={{ color: "#707070" }}>Fashion, Style</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
