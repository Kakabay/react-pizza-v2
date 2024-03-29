import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";
import pizzas from "./assets/pizzas.json";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    fetch("https://65f6f6e7b4f842e80884e0a1.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {items.map((pizza: any) => (
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
        </div>
      </div>
    </>
  );
}

export default App;
