import React from 'react';
import Imagem from './Imagem';

const Produtos = ({ produtos }) => {
  const renderList = () => {
    return produtos.map(({
      titulo,
      descricao,
      imagem: { path, desc, classe }
    }) => (
      <li>
        <Imagem 
          source={path}
          descricaoImagem={desc} 
          classe={classe}
        />
        <h2>{titulo}</h2>
        <p>{descricao}</p>
      </li>
    ))
  }
  return (
    <section>
      <ul>
        { renderList() }
      </ul>
    </section>
  )
}

export default Produtos;