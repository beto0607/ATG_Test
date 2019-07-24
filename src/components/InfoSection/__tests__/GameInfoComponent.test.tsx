import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { GameInfo } from '../../../types/index';
import { Collapse, Button } from 'react-bootstrap';
import GameInfoComponent from '../GameInfoComponent';

const mockGameInfo: GameInfo = {
    id: '',
    startTime: "2019-07-24T12:45:47.450Z",
    favorites: [],
    tracks: []
};
describe('getDateFromString ', () => {
    it('should render without crashing', () => {
        const props: GameInfo = mockGameInfo;
        const component = shallow((<GameInfoComponent {...props} />));
        expect(toJson(component)).toMatchSnapshot()
    });
    it('should render collapsed by default', () => {
        const props: GameInfo = mockGameInfo;
        const component = shallow((<GameInfoComponent {...props} />));
        expect(component.find(Collapse).prop('in')).toEqual(false);
    })
    it('shold open when button clicked', () => {
        const props: GameInfo = mockGameInfo;
        const component = shallow((<GameInfoComponent {...props} />));
        component.find(Button).simulate('click');
        expect(component.find(Collapse).prop('in')).toEqual(true);
    })
});
