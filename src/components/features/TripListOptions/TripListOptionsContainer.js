import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addTag, removeTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => {
  console.log(changeSearchPhrase);
  return {
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: (tag) => removeTag(removeTag(tag)),
};
};
  // TODO - add more dispatchers for other filters


export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
