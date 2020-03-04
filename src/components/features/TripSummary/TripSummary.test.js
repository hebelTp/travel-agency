import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render link to  correct adress', () =>{
    const correct = 'abc';
    const component = shallow(<TripSummary id={correct} tags={[]}/> ); //??
    const correctLink = component.find('.link').prop('to');
    console.log(correctLink);
    expect(correctLink).toEqual(`/trip/${correct}`);
    console.log(component.debug());
  });

  it('img render correct props', () => {
    const expectedImage = 'image.jpg';
    const expectedAlterText = 'name';

    const component = shallow(<TripSummary tags={[]} image={expectedImage} name={expectedAlterText} />);

    const renderedImage = component.find('img').prop('src') ;
    const renderAlterText = component.find('img').prop('alt');

    expect(renderedImage).toEqual(expectedImage);
    expect(renderAlterText).toEqual(expectedAlterText);
  });

  it ('exist correect render props', () => {
    const expectedName = 'Janusz';
    const expectedCost = '1111';
    const expectedDays = 3;

    const component = shallow(<TripSummary tags={[]} name={expectedName} cost={expectedCost} days={expectedDays} />);

    expect(component).toBeTruthy;
  });
});
