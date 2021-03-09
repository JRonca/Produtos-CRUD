import React from 'react';
import { Container, ProductInfo,Buttons } from './styles';
import { FiTrash2, FiEdit } from 'react-icons/fi';

const Product: React.FC = ({ children, ...rest }) => (
  <Container {...rest}>
    <ProductInfo>
      <h2>Produto</h2>
      <img src="https://images.lojanike.com.br/1024x1024/produto/259100_2218363_20200616134949.jpg" alt="tenis"/>
      <h2>R$ 52,00</h2>
    </ProductInfo>
    <Buttons>
      <button><FiEdit size={24}/></button>
      <button><FiTrash2 size={24}/></button>
    </Buttons>
  </Container>
);
export default Product;