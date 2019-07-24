import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { GameData } from '../../../types/index';
import { GameDataProps, GameDataComponentConnected } from '../GameDataComponent';
import { RaceComponent } from '../RaceComponent';

const mockGameData: GameData = {
    id: 'id',
    status: 'status',
    races: [{
        id: 'race_1',
        number: 1,
        scheduledStartTime: '',
        starts: []
    }]
};
const mockGameDataProps: GameDataProps = {
    parent_id: '',
    gameData: null,
    loadGameData: jest.fn(),
    load: false
};


describe('GameDataComponentConnected', () => {
    it('renders without crashing', () => {
        const props: GameDataProps = mockGameDataProps;
        const component = shallow(<GameDataComponentConnected {...props} />);
        expect(toJson(component)).toMatchSnapshot()
    });
    it('should call loadGameData when load is true', () => {
        const props: GameDataProps = {
            ...mockGameDataProps,
            load: true,
            loadGameData: jest.fn()
        };
        shallow(<GameDataComponentConnected {...props} />);
        expect(props.loadGameData).toHaveBeenCalled()
    });
    it('should call loadGameData when load is true', () => {
        const props: GameDataProps = {
            ...mockGameDataProps,
            load: true,
            loadGameData: jest.fn()
        };
        shallow(<GameDataComponentConnected {...props} />);
        expect(props.loadGameData).toHaveBeenCalled()
    });
    it('should render 1 RaceComponent', () => {
        const props: GameDataProps = {
            ...mockGameDataProps,
            gameData: mockGameData
        };
        const component = shallow(<GameDataComponentConnected {...props} />);
        expect(component.find(RaceComponent)).toHaveLength(1);
    })
});
