import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import PizzaBlockSkeleton from "../components/PizzaBlock/PizzaBlockSkeleton";
import Sort from "../components/Sort";

const Home = () => {
  const [items, setItems] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://65f6f6e7b4f842e80884e0a1.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setItems(json);
      });

    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => (
              <PizzaBlockSkeleton key={index} />
            ))
          : items.map((pizza: any) => (
              <PizzaBlock
                key={pizza.id}
                title={pizza.title}
                price={pizza.price}
                imageUrl={pizza.imageUrl}
                sizes={pizza.sizes}
                types={pizza.types}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
