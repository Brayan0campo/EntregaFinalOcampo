import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="item-count">
        <div className="item-count__controls">
          <button className="item-count__buttons" onClick={decrement}>
            -
          </button>
          <h4 className="item-count__number">{count}</h4>
          <button className="item-count__buttons" onClick={increment}>
            +
          </button>
        </div>
        <div>
          <button
            className="item-count__button3"
            onClick={() => onAdd(count)}
            disabled={!stock}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
