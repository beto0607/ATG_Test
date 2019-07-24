import React from 'react';
import { shallow } from 'enzyme';
import GameSchedule, { getDateFromString, groupByDay, GameInfoDayProps, GameInfoDay, GameScheduleProps } from '../GameSchedule';
import toJson from 'enzyme-to-json'
import { GameInfo } from '../../../types/index';
import { } from 'react-bootstrap';
import GameInfoComponent from '../GameInfoComponent';

const dateExample: string = "2019-07-24T11:20:04.492Z";
const dateExample2: string = "2019-07-25T11:20:04.492Z";
const mockGameInfo: GameInfo = {
    id: "1",
    startTime: dateExample,
    tracks: [],
    favorites: []
};
const mockGameInfoDayProps: GameInfoDayProps = {
    day: '2019-07-24',
    games: []
};
const mockGameScheduleProps: GameScheduleProps = {
    title: 'a title',
    games: []
};
describe('getDateFromString ', () => {
    it('should return the first part of an ISO date string', () => {
        expect(getDateFromString(dateExample)).toEqual('2019-07-24');
    });
});
describe('groupByDay', () => {
    it('should return an array with length 0', () => {
        const games: Array<GameInfo> = [];
        expect(groupByDay(games)).toHaveLength(0);
    });
    it('should return an array with length 2', () => {
        const games: Array<GameInfo> = [
            {
                ...mockGameInfo,
            },
            {
                ...mockGameInfo,
                id: "2",
                startTime: dateExample2
            }
        ];
        expect(groupByDay(games)).toHaveLength(2);
    });
});
describe('GameInfoDay', () => {
    it('renders without crashing', () => {
        const props: GameInfoDayProps = mockGameInfoDayProps;
        const component = shallow((<GameInfoDay {...props} />));
        expect(toJson(component)).toMatchSnapshot()
    });
    it('renders one GamInfoComponent', () => {
        const props: GameInfoDayProps = {
            ...mockGameInfoDayProps,
            games: [mockGameInfo]
        };
        const component = shallow((<GameInfoDay {...props} />));
        expect(component.find(GameInfoComponent)).toHaveLength(1)
    });
});
describe('GameSchedule', () => {
    it('renders without chashing', () => {
        const props: GameScheduleProps = mockGameScheduleProps;
        const component = shallow((<GameSchedule {...props} />));
        expect(toJson(component)).toMatchSnapshot()
    });
    it('should render 2 GameIfoDay components', () => {
        const games: Array<GameInfo> = [
            {
                ...mockGameInfo,
            },
            {
                ...mockGameInfo,
                id: "2",
                startTime: dateExample2
            }
        ];
        const props: GameScheduleProps = {
            ...mockGameScheduleProps,
            games: games
        };
        const component = shallow((<GameSchedule {...props} />));
        expect(component.find(GameInfoDay)).toHaveLength(2);
    });
});