/* eslint-disable indent */



/* SELECTORS /*
    /* FUNCTION THAT FILTER SOME PART STATE OF APLICATION */

export const getAllFilters = ({filters}) => filters;
/** ALTER
export const getAllFilters = (state) => state.filters;
*/

/* ACTIONS */

// action name creator
     /* NAME OF STATE PROPERTY ON WICH WE WILL PERFORM ACTIONS */
const reducerName = 'filters';
    /* CHANGE NAME OF ACTION FOR LONGER IDENTIFIER*/
    /* USING BACKTICK */
const createActionName = name => `app/${reducerName}/${name}`;


// action types
    /** DEFINE ACTION TYPE  */
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
// TODO - add other action types

// action creators
    /**FUNCTION THAT CREATE ACTION, ACTION THERE IS OBJECT THAT CONTAINS TWO PARAMETERS:
     * TYPE - SPECIFYING THE TYPE OF ACTION
     * PAYLOAD WHICH CONTAIN ALL DATA TO PERFORM THIS ACTION
       PAYLOAD
     */

export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const addTag = payload => ({payload, type: ADD_TAG});
export const removeTag = payload => ({payload, type: REMOVE_TAG});
export const changeDuration = payload => ({payload:payload, type: CHANGE_DURATION});
/*
export const changeDuration = payload => {
  return {
    type: '/app/filters/CHANGE_DURATION',
    payload,
  };
};
*/
console.log('CHANGE_DURATION', changeDuration);
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  /** SWITCH WORKS LIKE IF ...ELSE,
   * WE CHECK TYPE OF ACTION IF NOT CASE THEN DEFAULT --> IN THE END
    */
  console.log('new action', action);
    switch (action.type) {

    case CHANGE_PHRASE:

      return {

        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case ADD_TAG:
      //console.log(action);
      return {
        ...statePart,
        tags:[
          ...statePart.tags,
          action.payload,
        ],
      };
    case REMOVE_TAG:
      //console.log(action);

      return {
        ...statePart,

        tags: [...statePart.tags.filter(tag => tag !== action.payload)],
      };
      case 'app/filters/CHANGE_DURATION':
        //console.log('statepart',...statePart);
        return {
            // take current state, all state == initial state
            ...statePart,
            // change object duration, overwrite duration
            duration: {
             ...statePart.duration,
             [action.payload.type]: action.payload.value },
        };
    default:
      return statePart;
  }
}
