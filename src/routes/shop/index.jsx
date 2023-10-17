import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
    // const { products } = useContext(CategoriesContext);
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
          {Object.keys(categoriesMap).map((title) => (
            <Fragment key={title}>
              <h2>{title}</h2>
              <div className='products-container'>
                {categoriesMap[title].map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </Fragment>
          ))}
        </Fragment>
      );
};

export default Shop;