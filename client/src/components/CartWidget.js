import { Cart3 } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
export const CartWidget = ({ productsCount }) => {
  return (
    <button className="cartwidget-container">
      <Cart3 size={30} />
      <Badge bg="secondary" className="cartwidget-productsCount">
        {productsCount}
      </Badge>
    </button>
  );
};
