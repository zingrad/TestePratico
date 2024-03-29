

const Modal = ({ cart, handleRemoveToCart,total }) => {
    return (
      <>
   <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-body">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2>Carrinho de compras</h2>
            <h3>Subtotal:  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)} </h3>
          </div>
          {cart.map((item) => (
            <div key={item.product.id} className="d-flex mt-3">
              <img src={item.product.image} alt='produto' width={150}/>
              <div className="d-flex flex-column ms-5 w-50 mt-5">
                <span>Produto: {item.product.productName} </span>
                <span>Valor:  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.product.price)} </span>
                <span>Quantidade: {item.quantity}</span>
                <span>Total:   {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                .format(item.quantity * item.product.price)} 
                </span>
                <button type="button" className="btn btn-danger mt-2" onClick={() => handleRemoveToCart(item.product.id)}>Remover</button>
              </div>
            </div>
          ))}
            {total === 0 && (
                  <h3 className="mt-5">Não há produtos no carrinho</h3>        
              )}
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        {total !== 0 && (
                   <button type="submit" className="btn btn-success" data-bs-dismiss="modal" onClick={() => window.location.reload()}>Finalizar Compra</button>    
              )}
      </div>
    </div>
  </div>
</div>
      </>
    );
  }
  

export default Modal;





