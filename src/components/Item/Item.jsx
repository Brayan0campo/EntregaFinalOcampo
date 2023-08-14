import { Link } from "react-router-dom";

const Item = ({ id, name, image, price, stock }) => {
  return (
    <div className="item-container">
      <article className="item-container__card">
        <picture>
          <img src={image} alt={name} />
        </picture>
        <header>
          <h2>{name}</h2>
        </header>
        <section>
          <p>${price}</p>
          <p>Stock: {stock}</p>
        </section>
        <footer className="item-container__link">
          <Link to={`/item/${id}`} className="Option">
            Ver detalle
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default Item;
