import React from 'react';
import { shallow } from 'enzyme';
import { ConnectedForm, ConnectedFormProps } from '../FormSection';
import toJson from 'enzyme-to-json'
import { Form, Button } from 'react-bootstrap'

const inputValue: string = 'input_value';
const inputValueEvent: any = { currentTarget: { value: inputValue } };
const emptyString: string = '';
const emptyStringEvent: any = { currentTarget: { value: emptyString } };
describe('ConnectedForm', () => {
  it('renders without crashing given the required props', () => {
    const component = shallow((<ConnectedForm {...{ getGameSchedule: jest.fn((text: string) => text) }} />));
    expect(toJson(component)).toMatchSnapshot()
  });

  it('should call getGameSchedule on submit with inputValue', () => {
    const props: ConnectedFormProps = { getGameSchedule: jest.fn((text: string) => text) };
    const component = shallow((<ConnectedForm {...props} />));
    // Updates text
    component.find(Form.Control).simulate('change', inputValueEvent);
    // Submits form
    component.find(Form).simulate('submit', { preventDefault: jest.fn() });
    expect(props.getGameSchedule).toHaveBeenCalledWith(inputValue);
  });

  it("should NOT call getGameSchedule on submit when input it's empty", () => {
    const props: ConnectedFormProps = { getGameSchedule: jest.fn((text: string) => text) };
    const component = shallow((<ConnectedForm {...props} />));
    // Updates text
    component.find(Form.Control).simulate('change', emptyStringEvent);
    // component.find(Button).simulate('click');
    component.find(Form).simulate('submit', { preventDefault: jest.fn() });
    expect(props.getGameSchedule).not.toHaveBeenCalled();
  });

  it("Button should be disabled as default", () => {
    const component = shallow((<ConnectedForm {...{ getGameSchedule: jest.fn((text: string) => text) }} />));
    expect(component.find(Button).props().disabled).toEqual(true);
  });

  it('Button should be enabled when text is NOT an empty string', () => {
    const component = shallow((<ConnectedForm {...{ getGameSchedule: jest.fn((text: string) => text) }} />));
    // Updates text
    component.find(Form.Control).simulate('change', inputValueEvent);
    expect(component.find(Button).props().disabled).toEqual(false);
  });

  it("Button should be disabled when input value is an empty string", () => {
    const component = shallow((<ConnectedForm {...{ getGameSchedule: jest.fn((text: string) => text) }} />));
    // Updates text
    component.find(Form.Control).simulate('change', emptyStringEvent);
    expect(component.find(Button).props().disabled).toEqual(true);
  });
})
