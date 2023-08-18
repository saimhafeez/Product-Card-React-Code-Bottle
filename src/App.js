import ProductCard from './ProductCard';
import products from './products.json'

function App() {
  return (
    <div className='container'>
      {products.map((product) => {
        return <ProductCard
          {...product}
        />
      })}
    </div>
  );
}

export default App;
