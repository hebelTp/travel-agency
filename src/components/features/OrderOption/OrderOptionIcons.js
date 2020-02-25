import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = (props) => {
  console.log(props.values);
  console.log(props.currentValue);
  return (
    <div className={styles.icon }>
      {props.values.map(value => (
        // CONDITION ? EXPRESSION1 : EXPRESSION 2
        // if condition true then expresion 1 otherwise expresion 2
        <div className={styles.icon,
        /** if condition */ value.id === props.currentValue ? styles.iconActive : ''}
        key={value.id}
        onClick = {()=> props.setOptionValue(value.id)}>
          <Icon name={value.icon}/> {value.name} ({formatPrice(value.price)})
        </div>
      ))}
    </div>
  );
};



OrderOptionIcons.propTypes ={
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  icon: PropTypes.node,
};

export default OrderOptionIcons;


