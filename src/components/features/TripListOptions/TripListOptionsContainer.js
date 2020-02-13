import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addTag, removeTag, changeDuration} from '../../../redux/filtersRedux';

const mapStateToProps = state => {
  console.log('STATE', state);
  return {
    tags: getAllTags(state),
    filters: getAllFilters(state),
  };
};



const mapDispatchToProps = dispatch => {
  //console.log(addTag);
  return {
    /**EXP changeSearchPhrase(phrase)
     *     addTag(tag)
     *     changeDuration(type, value)
     * THERE ARE OBJECT`S, ALWAYS HAVE TYPE AND SOMETIMES PAYLOAD
     */

    changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
    addTag: tag => dispatch(addTag(tag)),
    removeTag: tag => dispatch(removeTag(tag)),
    changeDuration: (type, value) => {
      console.log('change change duration from container ', type, value );
      dispatch(changeDuration(type,value));
    },
  };
};
  // TODO - add more dispatchers for other filters


export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
