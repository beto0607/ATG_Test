import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import toJson from 'enzyme-to-json'
import { Navbar } from 'react-bootstrap'

describe('Header', () => {
    it('renders without crashing', () => {
        const component = shallow((<Header />));
        expect(toJson(component)).toMatchSnapshot()
    });
});