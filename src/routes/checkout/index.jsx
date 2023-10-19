import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {CheckoutContainer, CheckoutHeader, CheckoutBlock, Total} from "./styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div>
      <CheckoutContainer>
        <CheckoutHeader>
          <CheckoutBlock>
            <span>Product</span>
          </CheckoutBlock>
          <CheckoutBlock>
            <span>Description</span>
          </CheckoutBlock>
          <CheckoutBlock>
            <span>Quantity</span>
          </CheckoutBlock>
          <CheckoutBlock>
            <span>Price</span>
          </CheckoutBlock>
          <CheckoutBlock>
            <span>Remove</span>
          </CheckoutBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <Total>TOTAL: ${cartTotal}</Total>
      </CheckoutContainer>
    </div>
  );
};

export default Checkout;
