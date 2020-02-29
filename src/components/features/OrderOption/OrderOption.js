import React from 'react';
import styles from './OrderOption';
import PropTypes from 'prop-types';
import  OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionText from './OrderOptionText';
import OrderOptionDate from './OrderOptionDate';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionDate,
};
//console.log(optionTypes);

const  OrderOption = ({name, type,setOrderOption ,id,  ...otherProps}) => {
  const OptionComponent = optionTypes[type];

  if(!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>
          {name}
        </h3>
        <OptionComponent setOptionValue={value => setOrderOption({[id]: value})}
          {...otherProps}
        />
      </div>
    );

  }
};


OrderOption.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  setOrderOption: PropTypes.func,
  type: PropTypes.string,
  //
  values: PropTypes.array,
  defaultValue: PropTypes.node,
  required: PropTypes.bool,
  limits: PropTypes.object,
  price: PropTypes.string,
};

export default OrderOption;

