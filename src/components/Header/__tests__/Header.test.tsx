import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import toJson from 'enzyme-to-json'

describe('Header', () => {
    it('renders without crashing', () => {
        const component = shallow((<Header />));
        expect(toJson(component)).toMatchSnapshot()
    });
});