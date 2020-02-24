import React from 'react';
import styles from './OrderOption';
import PropTypes from 'prop-types';


const  OrderOption = ({name}) => {


  console.log('NAM',name);
  return (
    <div className={styles.component}>
      <h3 className={styles.title}>
        {name}
      </h3>

    </div>

  );
};

OrderOption.propTypes = {
  name: PropTypes.string,
};

export default OrderOption;

