import {connect} from 'react-redux';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';
import OrderForm from '../OrderForm/OrderForm';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => {
  return {
    setOrderOption: (option) =>{
      console.log(option);
      dispatch(setOrderOption(option));
    },
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(OrderForm);
