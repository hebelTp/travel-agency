import {connect} from 'react-redux';
import {getOrderOptions, setOrderOptions} from '../../../redux/orderRedux';
import OrderForm from '../OrderForm/OrderForm';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => {
  return {
    setOrderOptions: (option) =>{
      console.log(option);
      dispatch(setOrderOptions('OPTIONS', option));
    },
  };
};
export default connect (mapStateToProps, mapDispatchToProps)(OrderForm);
