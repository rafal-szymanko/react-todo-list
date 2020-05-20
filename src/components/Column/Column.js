import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
// import Card from '../Card/Card.js';
// import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import Card from '../Card/Card';
// import { settings } from '../../data/dataStore';


class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
  }

  render() {
    const { title, icon, cards } = this.props;
    console.log(cards);
    return (
      <section className={styles.component}>
        <h2 className={styles.title}>{title}</h2>
        <h3>
          <span className={styles.icon}><Icon name={icon} /></span>
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        {/* <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div> */}
      </section>
    );
  }
}

export default Column;
