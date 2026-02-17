import React from "react";
import { CartProvider } from "../../CartProvider.jsx";
import { useNavigate } from "react-router";
import { Card } from "../ui/Card/Card.jsx";
import { Select } from "../ui/Select/Select.jsx";
import { Search } from "../ui/Search/Search.jsx";
import { Trackbar } from "../ui/Trackbar/Trackbar.jsx";
import { Toggle } from "../ui/Toggle/Toggle.jsx";
import { Counter } from "../ui/Counter/Counter.jsx";
import { data } from "../../../data.js";

/**
 * Компонент страница Shop.
 *
 */
export const Shop = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-31 pt-24 border-t" style={{ border: "#D8D8D8" }}>
        <h2 className="text-4xl font-medium mb-10">Shop The Latest</h2>
        <div className="flex">
          <div>
            <Search />
            <Select first={{ id: 0, title: "Shop by" }} />
            <Select first={{ id: 0, title: "Sort by" }} />
            <Trackbar />
            <Toggle nameToggle={"On sale"} />
            <Toggle nameToggle={"On stock"} />
          </div>
          <div className="flex flex-wrap justify-between gap-y-17.5 mb-62">
            {data &&
              data?.length > 0 &&
              data?.map((product) => (
                <Card
                  details={product}
                  key={product?.id}
                  onOpenDetails={() => navigate(`/card-details/${product?.id}`)}
                  size={{
                    width: 300,
                    height: 392,
                    heightImg: 300,
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
