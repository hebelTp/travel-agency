import React from 'react';
import styles from '../OrderOption/OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => {
  console.log(values);
  return (

    <select
      className={styles.dropdown}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
      {required ? '' : (
        <option key='null' value=''>---</option>
      )}
      {values.map(value => (
        <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
      ))}
    </select>
  );

};



OrderOptionDropdown.propTypes = {
  values: PropTypes.array,
  required: PropTypes.node,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.node,
};

export default OrderOptionDropdown;
