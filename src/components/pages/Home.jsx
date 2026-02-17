import React from "react";
import { NavLink, useNavigate } from "react-router";
import { SwiperComponent } from "../ui/SwiperComponent/SwiperComponent.jsx";
import { Card } from "../ui/Card/Card.jsx";
import { data } from "../../../data.js";

/**
 * Компонент страница Home. * *
 */
export const Home = () => {

  // useNavigate() возвращает функцию navigate (управление навигацией без <Link>)
  const navigate = useNavigate();

  return (
    <>
      <SwiperComponent />
      {/* блок с заголовком и кнопкой View All */}
      <div className="mt-16 mb-10 w-full flex justify-between items-center">
        {/* заголовок */}
        <h2 className="text-3xl font-medium">Shop The Latest</h2>
        {/* кнокпа для перехода на страницу Shop */}
        <NavLink
          to="/shop"
          className="btn text-xl font-medium text-[#A18A68] hover:text-[#070707]"
        >
          View All
        </NavLink>
      </div>
      {/* блок с карточками */}
      <div className="mt-10 mb-62.5 flex justify-between flex-wrap gap-y-21.5">
        {data &&
          data?.length > 0 &&
          data?.map((product) => (
            <Card
              details={product}
              key={product?.id}
              onOpenDetails={() => navigate(`/card-details${product?.id}`)}
              size={{
                width: 380,
                height: 472,
                heightImg: 380,
              }}
            />
          ))}
      </div>
    </>
  );
};
