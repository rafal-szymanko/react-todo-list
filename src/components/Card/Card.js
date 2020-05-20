import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


const Card = ({title = this.props}) => (
  <div className={styles.component}>
    <p>{title}</p>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;