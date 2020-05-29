import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';


const SearchResults = ({ cards }) => {
  return (
    <Container>
      <section className={styles.component}>
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </section>
    </Container>
  );

};


SearchResults.defaultProps = {
  icon: settings.defaultColumnIcon,
};

SearchResults.propTypes = {
  cards: PropTypes.array,
};


export default SearchResults;

