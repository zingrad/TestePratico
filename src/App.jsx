import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/HeadPhones';
import Products from './components/Products/Products';
import { useState, useEffect } from 'react';
// import Modal from './components/ModalProducts/ModalProducts';

function App() {
  const [product, setProduct] = useState(false)
  const [productsList, setProductsList] = useState([])

 
  useEffect(() => {
      fetch('http://localhost:3000/produtos')
      .then(res => res.json())
      .then(resJson => {
              setProductsList(resJson)
              console.log(resJson)
      })
  }, [])

  return (
    <>
      <Header productItem={product}/>
      <Products  productsList={productsList} count={()=> setProduct(product + 1)}/>
      {/* {product &&(
        <Modal quantidade={product} remove={()=> setProduct(0) } carList={productsList}/>
      )} */}
    </>
  )
}

export default App
