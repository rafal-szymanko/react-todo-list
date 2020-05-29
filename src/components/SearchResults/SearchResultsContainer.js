import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearch} from '../../redux/CardRedux';

const mapStateToProps = (state, props) => {
  const text = props.match.params.text;
  return {
    cards: getCardsForSearch(state, text),
  };
};

export default connect(mapStateToProps)(SearchResults);
