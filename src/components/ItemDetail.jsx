import { useParams } from "react-router-dom";

const ItemDetail = ({ productos }) => {
  const { category, title } = useParams();
  const item = productos.find(
    (item) => item.title === title && item.category === category
  );

  return (
    <div className="inicio detail">
      <h2 className="title-detail">{item.title.toUpperCase()}</h2>
      <div className="flexAround">
        <img className="img-detail" src={item.image} alt={item.title} />
        <div className="description">
          <p>{item.description}</p>
          <strong>$ {item.price}</strong>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
