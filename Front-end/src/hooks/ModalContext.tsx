import React, {createContext, useCallback, useContext, useState} from 'react';

import Modal from '../components/Modal';
interface IModalContextData {
    openModal(): void;
}

const ModalContext = createContext<IModalContextData>({} as IModalContextData);

const ModalProvider: React.FC = ({children}) => {
    const [showModal,setShowModal] = useState(false);
    const openModal = useCallback(()=>{
        setShowModal(prev => !prev);
    },[]);
    return (
        <ModalContext.Provider value={{openModal}}>
            <Modal openModal={openModal} showModal={showModal}/>
            {children}
        </ModalContext.Provider>
    )
}

function  useModal(): IModalContextData {
    const context = useContext(ModalContext);

    if(!context){
        throw new Error('useModal must be used within a ModalProvider')
    }
    return context;
}
export {ModalProvider, useModal}