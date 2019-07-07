import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({submitFn, closeModalFn}) => (
    <div className={styles.wrapper} onSubmit={submitFn}>
        <button className={styles.closeBtn} onClick={closeModalFn}>X</button>
        <Form />
    </div>
);

export default Modal;