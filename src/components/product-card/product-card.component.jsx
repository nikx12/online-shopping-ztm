import { useContext } from 'react';
import { ProductCardContainer, ProductCardFooter } from './product-card.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({product}) => {
    const { addItemToCart } = useContext(CartContext);

    const { name, price, imageUrl } = product;

    const AddPoductToCart = () => addItemToCart(product);
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ProductCardFooter>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </ProductCardFooter>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={AddPoductToCart}>Add to Cart</Button>
        </ProductCardContainer>
    );
};
export default ProductCard;
