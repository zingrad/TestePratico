

const Modal = ({quantity,remove,nameProduct,precoProduct}) => {

  

  return (
    <>
  
   <section className='container p-5'>
         <div className="d-flex product">
         <img src='https://picsum.photos/100/120' alt='produto'/>
         <div className="d-flex flex-column ms-5">
               <span>Produto: {nameProduct} </span>
               <span>Valor: {precoProduct}</span>
               <span>Quantidade: {quantity}</span>
                   <button type="button" onClick={remove}>Remover</button>
         </div>
       </div>
   </section>
   </>

  );
};

export default Modal;