import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';


const Column = props => (

    <section className={styles.component}>
        <h2 className={styles.title}>{props.text}</h2>
    </section>
);

Column.propTypes = {
    text: PropTypes.string,
  };

export default Column;