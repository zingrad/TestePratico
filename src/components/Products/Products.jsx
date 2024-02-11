import { useState } from 'react';
import card1 from '../../assets/productsImages/Card.png'


function Products({ productsList,count }) {

    const [cart, setCart] = useState([])
 
    const handleAddToCart = (id) => {

                const phone = productsList.find( (phone) => phone.id === id)
                const alreadyInShoppingCart = cart.find(item => item.product.id === id)
                if(alreadyInShoppingCart){
                    const newShoppingCart =  cart.map(item => {
                        if(item.product.id === id)({
                            ...item, 
                            quantity: item.quantity++
                            } )
                            return item
                    })
                    setCart(newShoppingCart)
                    return
                }
        const productItem = {
            product: phone,
            quantity: 1,
        }
        const newShoppingCart = [...cart,productItem]
        setCart(newShoppingCart)
        
    }


    const handleClick = (id) => {
        handleAddToCart(id); // Adiciona o produto ao carrinho
        count(()=> { return})
      }

    const handleRemoveToCart = (id) => {

    }
    

    return (
<>
        <section className='container p-5'>
            <h2>Produtos</h2>
            <div className="row">
                {productsList.map(({id,productName,price,image}) =>(
                    <div key={id} className="col-md-3">
                        <div  className="card" style={{ width: "15rem" }}>
                        <img src={card1} alt="" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-text fs-6 fw-bold">
                               {productName}
                            </p>
                            <span>{price} R$</span>
                            <button type='button' className='w-100 mt-1' onClick={()=> handleClick(id)}>Adicionar ao Carrinho </button>
                        </div>
                    </div>
                      </div>
                ))}
            </div>
        </section>
        
        <h2>Shopping Cart</h2>
            {cart.map((item) =>(
                          <div className="d-flex product">
                          <img src='https://picsum.photos/100/120' alt='produto'/>
                          <div className="d-flex flex-column ms-5">
                                <span>Produto: {item.product.productName} </span>
                                <span>Valor: {item.product.price}</span>
                                <span>Quantidade: {item.quantity}</span>
                                <span>Total: {item.quantity * item.product.price}</span>
                                 <button type="button" onClick={()=> handleRemoveToCart(item.id)}>Remover</button>
                          </div>
                        </div>
                ))}
        </>
    )
}

export default Products;