import React from 'react';
import Button from '../Button/Button';
import styles from './Form.module.scss';

const Form = () => (
    <form className={styles.form}>
        <input placeholder="name" name="name" />
        <textarea placeholder="description" name="description" />
        <Button type="submit">add item</Button>
    </form>
);

export default Form;