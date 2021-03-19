import React from 'react';
import { Background, Content, ModalBox,CloseButton, Header } from './styles';
import { FiX } from 'react-icons/fi';

interface IModalData {
    openModal(): void;
    showModal: boolean;
}
const List: React.FC<IModalData> = ({ showModal,openModal,children, ...rest }) => (
  <>
    {showModal && (<Background>
      <ModalBox>
        <Header>
          <h1>Editar Produto</h1>
          <CloseButton onClick={openModal}><FiX size={32}/></CloseButton>
        </Header>
        <Content>
            
        </Content>
      </ModalBox>
  </Background>)}
  </>
);
export default List;