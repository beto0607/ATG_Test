import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import toJson from 'enzyme-to-json'

describe('App', () => {
  it('renders without crashing without props', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('renders without crashing with props', () => {
    const props = { any: 'any' };
    const wrapper = shallow(<App {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});