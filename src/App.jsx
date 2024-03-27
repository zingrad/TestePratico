import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import 'bootstrap/dist/js/bootstrap.min.js';
import Pagination from './Hooks/Pagination/Pagination';

function App() {
  const [productsList, setProductsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); 

  useEffect(() => {
    fetch('https://api.npoint.io/07a7edbc97ae6d20e886/produtos')
      .then(res => res.json())
      .then(resJson => {
        setProductsList(resJson);
        console.log(resJson);
      });
  }, []);


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsList.slice(indexOfFirstProduct, indexOfLastProduct);

  // Função para alterar a página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <Products productsList={currentProducts} />
      {/* Adicione controles de página aqui, por exemplo, números de página ou botões de próxima/anterior */}
      {/* Exemplo: */}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={productsList.length}
        paginate={paginate}
      />
    </>
  );
}

export default App;
