import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';

const OrderForm = ({options, tripCost, setOrderOptions}) => {
  console.log(options);
  return (
    <Row>
      {pricing.map(option => (
      //        console.log('NAMEEEE',option),
        <Col md={4} key={option.Id}>
          <OrderOption {...option} currentValue={options[option.id]} setOrderOptions={setOrderOptions}/>
        </Col>
      )
      )}

      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options}/>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOptions: PropTypes.func,


};


export default OrderForm;
