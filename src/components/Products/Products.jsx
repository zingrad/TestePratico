import { useState } from 'react';
import Modal from '../ModalProducts/ModalProducts';


function Products({ productsList }) {

    const [cart, setCart] = useState([])
 
    const handleAddToCart = (id) => {
                const phone = productsList.find( (phone) => phone.id === id)
                const alreadyInShoppingCart = cart.find(item => item.product.id === id)
                if(alreadyInShoppingCart){
                    const newShoppingCart =  cart.map(item => {
                        if(item.product.id === id)({
                            ...item, 
                            quantity: item.quantity++
                            })
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

    const handleRemoveToCart = (id) => {
        const alreadyInShoppingCart = cart.find((item) => item.product.id === id);
    
        if (alreadyInShoppingCart && alreadyInShoppingCart.quantity > 1) {
            const newShoppingCart = cart.map((item) =>
                item.product.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            );
            setCart(newShoppingCart);
        } else {
            const newShoppingCart = cart.filter((item) => item.product.id !== id);
            setCart(newShoppingCart);
        }
    };



    const totalCart = cart.reduce((total,current) => {
        return total + (current.product.price * current.quantity)
    },0)

    return (
<>
        <section className='container p-4 p-sm-5 mt-sm-5 mt-md-0 align-items-center'>
            <h2>Produtos</h2>
            <div className="row">
                {productsList.map(({id,productName,price,image}) =>(
                    <div key={id} className="col-lg-3 col-md-6 d-flex justify-content-center mt-3">
                        <div  className="card" style={{ width: "15rem" }}>
                        <img src={image} alt="" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-text fs-6 fw-bold mb-2">
                               {productName}
                            </p>
                            <span>{price} R$</span>
                            <button type='button' className='w-100 mt-1 btn btn-primary' onClick={()=> handleAddToCart(id)}>
                                Adicionar ao Carrinho {cart.find(item => item.product.id === id)?.quantity > 0 && `(${cart.find(item => item.product.id === id)?.quantity})`}
                            </button>
                        </div>
                    </div>
                      </div>
                ))}
            </div>
        </section>
                <Modal  cart={cart} handleRemoveToCart={handleRemoveToCart} total={totalCart}/>
        </>
    )
}

export default Products;