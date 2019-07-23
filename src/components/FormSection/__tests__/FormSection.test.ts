import React from 'react';
import { shallow } from 'enzyme';
import FormSection from '../FormSection';

describe('FormSection', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<FormSection/>);
    
    expect(component).toMatchSnapshot();
  });
  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const component = shallow(<FormSection list={strings} />);
    expect(component).toMatchSnapshot();
  });
});
