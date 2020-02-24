import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';

const OrderForm = props => {
  //console.log(props);
  return (
    <Row>
      {pricing.map(option => (
      //        console.log('NAMEEEE',option),
        <Col md={4} key={option.Id}>
          <OrderOption {...option}/>
        </Col>
      )
      )}

      <Col xs={12}>
        <OrderSummary tripCost={props.tripCost} options={props.options}/>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,

};


export default OrderForm;
