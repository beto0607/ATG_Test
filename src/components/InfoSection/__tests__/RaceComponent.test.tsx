import React from 'react';
import { shallow } from 'enzyme';
import { StartComponent, RaceComponent } from '../RaceComponent';
import toJson from 'enzyme-to-json'
import { Race, RaceStart, Person, Horse } from '../../../types/index';
import { Collapse } from 'react-bootstrap';

const mockDriver: Person = {
    firstName: 'driver_first_name',
    lastName: 'driver_last_name'
};
const mockTrainer: Person = {
    firstName: 'trainer_name',
    lastName: 'trainer_last_name'
};
const mockHorse: Horse = {
    name: 'horse_one',
    trainer: mockTrainer,
    pedigree: { father: { name: 'father_horse' } }
}
const mockStart: RaceStart = {
    number: 1,
    driver: mockDriver,
    horse: mockHorse
}
const mockRace: Race = {
    id: 'an_id',
    name: 'a_name',
    number: 1,
    scheduledStartTime: "2019-07-24T11:20:04.492Z",
    starts: []
};
describe('StartComponent', () => {
    it('renders without crashing', () => {
        const props: RaceStart = mockStart;
        const component = shallow((<StartComponent {...props} />));
        expect(toJson(component)).toMatchSnapshot()
    });
    it('renders collapsed by default', () => {
        const props: RaceStart = mockStart;
        const component = shallow((<StartComponent {...props} />));
        expect(component.find(Collapse).prop('in')).toEqual(false);
    });
    it('renders expands when click', () => {
        const props: RaceStart = mockStart;
        const component = shallow((<StartComponent {...props} />));
        component.simulate('click');
        expect(component.find(Collapse).prop('in')).toEqual(true);
    });
});

describe('RaceComponent', () => {
    it('renders without crashing', () => {
        const props: Race = mockRace;
        const component = shallow((<RaceComponent {...props} />));
        expect(toJson(component)).toMatchSnapshot()
    });
    it('renders without crashing, name can be empty', () => {
        const props: Race = {...mockRace, name:''};
        const component = shallow((<RaceComponent {...props} />));
        expect(toJson(component)).toMatchSnapshot()
    });
    it('renders exactly 1 RaceStart', () => {
        const props: Race = { ...mockRace, starts: [mockStart] };
        const component = shallow((<RaceComponent {...props} />));
        expect(component.find(StartComponent)).toHaveLength(1)
    });
});

