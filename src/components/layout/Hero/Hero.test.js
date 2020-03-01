import React from 'react';
import { shallow } from 'enzyme';
import Hero from  './Hero';

// describe collect tests -- secound argument arrow function
describe('Component Hero', () => {
  //responsible for indyvidual test -- secound argument arrow function
  it('should render without crashing', () => {
    const component = shallow(<Hero titleText='lorem'/>);
    expect(component).toBeTruthy();
  });
});
