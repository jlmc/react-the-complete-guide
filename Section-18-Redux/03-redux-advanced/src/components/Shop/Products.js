import ProductItem from './ProductItem';
import classes from './Products.module.css';

const SOME_DUMMY_PRODUCTS = [
    {
        id: 1,
        title: 'React for Dummies',
        price: 6,
        description: 'The first book I ever wrote',
    },
    {
        id: 2,
        title: 'Terminator',
        price: 5,
        description: 'Best movie every',
    }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {SOME_DUMMY_PRODUCTS.map(product => {
              return  <ProductItem key={product.id}
                  title={product.title}
                  price={product.price}
                  id={product.id}
                  description={product.description}
                />
          })}

      </ul>


    </section>
  );
};

export default Products;
