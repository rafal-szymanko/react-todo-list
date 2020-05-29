import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';


const Column = ({title, icon, cards, addCard }) => {
  return (
    <section className={styles.component}>
      <h2 className={styles.title}>{title}</h2>
      <h3>
        <span className={styles.icon}><Icon name={icon} /></span>
      </h3>
      {cards.map(cardData => (
        <Card key={cardData.id} {...cardData} />
      ))}
      <div className={styles.creator}>
        <Creator text={settings.cardCreatorText} action={addCard} />
      </div>
    </section>
  );

};


Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

Column.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  cards: PropTypes.array,
  addCard: PropTypes.func,
};


export default Column;
