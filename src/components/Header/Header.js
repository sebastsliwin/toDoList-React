import React from 'react';
import styles from './Header.module.scss';
import Button from './../Button/Button';

const Header = ({ openModalFn }) => (
    <header className={styles.wrapper}>
        <h1 className={styles.header}>toDoList.</h1>
        <Button onClick={openModalFn}>add new item</Button>
    </header>
);

export default Header;