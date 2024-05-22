import {sampleProducts} from './data'
import "./App.css"
function App() {

  return (
    <>
      <header>A.Win Shop</header>
      <main>
        <ul>
          {sampleProducts.map((product)=>(
            <li key={product.slug}>
              <img src={product.image} alt={product.image} className='product-image'/>

              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All right reserved</footer>
    </>
  )
}

export default App
