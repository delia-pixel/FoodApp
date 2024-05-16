import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function Header() {
  const CartCtx = useContext(CartContext);

  const totalCartItems = CartCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Restaurant" />
        <h1>Food App</h1>
      </div>
      <nav>
        <Button textOnly>Cart({totalCartItems})</Button>
      </nav>
    </header>
  );
}
