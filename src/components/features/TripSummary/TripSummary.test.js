import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render link to  correct adress', () =>{
    const correct = 'abc';
    const component = shallow(<TripSummary id={correct} tags={[]}/> ); //??
    expect(component.find('.link').prop('to')).toEqual(`/trip/${correct}`);
    console.log(component.debug());
  });
});
