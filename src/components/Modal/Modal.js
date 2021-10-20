import React from 'react'
import PropType from 'prop-types'
import styles from './modal.module.css'
import { useEffect, useRef,useState } from 'react';
import onClickOutside from 'react-onclickoutside'

function Modal({show , onClose,childern,backdropStyles , modalStyles}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    Modal.handleClickOutside = () => setIsOpen(false);
    return (
        <>
        <div className={styles.backdrop} style={{...backdropStyles}}>
            <div className={styles.modal} style={{...modalStyles}}>
                <div className={styles.modalContent}>
                    {childern}
                </div>
            </div>
        </div>
        </>   
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => {Modal.handleClickOutside}
    
  };

Modal.prototypes={
    show:PropType.bool.isRequired,
    onClose:PropType.func.isRequired,
    childern:PropType.node.isRequired,
    backdropStyles:PropType.object,
    modalStyles:PropType.object
}

export default onClickOutside(Modal, clickOutsideConfig);
