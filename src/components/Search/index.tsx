import React from 'react';

import {Container} from './styles';
import { FiSearch } from 'react-icons/fi';
import {Form} from '@unform/web'

import Input from '../Input'
import Button from '../Button'

const Search: React.FC = () => {
    function handleSubmit(data:object):void{
        console.log(data);
    }
  return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input name="search" icon={FiSearch} placeholder="Search"/>
            <button type="submit">Pesquisar</button>
        </Form>
        
    </Container>
  );
};

export default Search;