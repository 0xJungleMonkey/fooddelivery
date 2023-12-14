
import { Cart3 } from "react-bootstrap-icons";

export const CartWidget = ({ productsCount }) => {
  return (
    <button className="cartwidget-container">
      <span className="cartwidget-productsCount">{productsCount}</span>
      <Cart3 size={30} />
    </button>
  );
};
