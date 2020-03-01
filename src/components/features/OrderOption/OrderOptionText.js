import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = (props) => {
  return (
    <div className={styles.text}>
      <input
        type='text'
        className={styles.text}
        value={props.currentValue}
        onChange={event => props.setOptionValue(event.currentTarget.value)}
      />

    </div>
  );
};

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  type: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
