import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

const ListItem = ({name, description}) => (
    <li className={styles.listItem}>
        <h2>{name}</h2>
        <p>{description}</p>
    </li>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default ListItem;