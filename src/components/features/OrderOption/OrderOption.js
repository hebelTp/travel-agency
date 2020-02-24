import React from 'react';
import styles from './OrderOption';
import PropTypes from 'prop-types';
import  OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcon from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcon,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};
//console.log(optionTypes);

const  OrderOption = ({name, type,id ,setOrderOption ,  ...othetProps}) => {
  const OptionComponent = optionTypes[type];

  if(!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>
          {name}
        </h3>
        <OptionComponent {...othetProps} setOptionValue={value => setOrderOption({[id]: value})}/>
      </div>
    );

  }
};


OrderOption.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  setOrderOption: PropTypes.func,
  //type: PropTypes.string,
};

export default OrderOption;

