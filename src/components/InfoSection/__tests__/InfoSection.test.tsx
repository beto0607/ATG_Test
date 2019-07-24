import React from 'react';
import { shallow } from 'enzyme';
import { ConnectedInfoSection, ConnectedInfoSectionProps, Title, TitleProps } from '../InfoSection';
import toJson from 'enzyme-to-json'
import { Alert } from 'react-bootstrap';
import { GameInfo } from '../../../types';
import GameSchedule from '../GameSchedule';

describe('Title', () => {
    it('renders without crashing', () => {
        const props: TitleProps = { text: '', betType: '' }
        const component = shallow((<Title {...props} />));
        expect(toJson(component)).toMatchSnapshot()
    });
    it('should show info Alert when text it\'s an empty string', () => {
        const props: TitleProps = { text: '', betType: '' }
        const component = shallow((<Title {...props} />));
        expect(component.find(Alert).prop('variant')).toEqual('info');
    });
    it('should show danger Alert when betType it\'s an empty string', () => {
        const props: TitleProps = { text: 'test', betType: '' }
        const component = shallow((<Title {...props} />));
        expect(component.find(Alert).prop('variant')).toEqual('danger');
    });
    it('should show success Alert when betType it\'s a string', () => {
        const props: TitleProps = { text: 'test', betType: 'test' }
        const component = shallow((<Title {...props} />));
        expect(component.find(Alert).prop('variant')).toEqual('success');
    });
});

const mockGameInfo: GameInfo = {
    id: 'an_id',
    startTime: 'a_start_time',
    tracks: [],
    favorites: []
};
describe('ConnectedInfoSection', () => {
    it('renders without crashing', () => {
        const props: ConnectedInfoSectionProps = {
            text: '',
            gameSchedule: {
                betType: '',
                upcoming: [],
                results: []
            }
        }
        const component = shallow((<ConnectedInfoSection {...props} />));
        expect(toJson(component)).toMatchSnapshot()
    });
    it('renders 1 upcoming GameComponent', () => {
        const props: ConnectedInfoSectionProps = {
            text: '',
            gameSchedule: {
                betType: '',
                upcoming: [mockGameInfo],
                results: []
            }
        }
        const component = shallow((<ConnectedInfoSection {...props} />));
        expect(component.find(GameSchedule)).toHaveLength(1)
    });
    it('renders 1 result GameComponent', () => {
        const props: ConnectedInfoSectionProps = {
            text: '',
            gameSchedule: {
                betType: '',
                upcoming: [],
                results: [mockGameInfo]
            }
        }
        const component = shallow((<ConnectedInfoSection {...props} />));
        expect(component.find(GameSchedule)).toHaveLength(1)
    });
});

