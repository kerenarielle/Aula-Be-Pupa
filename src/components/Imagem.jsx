import React from 'react';

const Imagem = ({ source, descricaoImagem, classe }) => {
  return (
    <img src={source} alt={descricaoImagem} className={classe} />
  )
}

export default Imagem;

