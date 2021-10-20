import React from 'react'
import PropType from 'prop-types'
import styles from './modal.module.css'



function Modal({ show, onClose, children, backdropStyles, modalStyles }) {
    console.log(children);
    return (
        <>
            <div className={styles.backdrop} style={{ ...backdropStyles }}>
                <div className={styles.modal} style={{ ...modalStyles }}>
                    <div className={styles.modalContent}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

Modal.prototypes = {
    show: PropType.bool.isRequired,
    onClose: PropType.func.isRequired,
    children: PropType.node.isRequired,
    backdropStyles: PropType.object,
    modalStyles: PropType.object
}

export default Modal
