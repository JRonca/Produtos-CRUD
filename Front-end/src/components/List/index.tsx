import React from 'react';
import { Container } from './styles';

import Product from '../Product';

const List: React.FC = ({ children, ...rest }) => (
  <Container {...rest}>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
  </Container>
);
export default List;