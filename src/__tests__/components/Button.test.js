import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

const props = {
  selectedNumbers: [], 
  answerIsCorrect: null,
  checkAnswer: jest.fn(),
  acceptAnswer: jest.fn(),
  redraw: jest.fn(),
  redraws: 5,
  doneStatus: null
}

describe('Button Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.getElement().type).toBe('div');
    expect(wrapper.find('button')).toHaveLength(2);
    expect(wrapper.find('button').at(0).props().disabled).toBe(true);
    expect(wrapper.find('button').at(1).props()).toBeDefined();
  });

  it('disables the redraw button when redraws is zero', () => {
    const newProps = { ...props };
    newProps.redraws = 0;

    const wrapper = shallow(<Button {...newProps} />);
    expect(wrapper.find('button').at(1).props().disabled).toBe(true);
  });

  it('updates class name of first button to btn-warning when answers are selected',
   () => {
    const newProps = { ...props };
    newProps.selectedNumbers = [1, 3];

    const wrapper = shallow(<Button {...newProps} />);
    expect(wrapper.find('button').at(0).props().className).toBe('btn btn-warning');
  });

  it('updates class name of first button to success when answersIsCorrect is true',
    () => {
      const newProps = { ...props };
      newProps.selectedNumbers = [1, 3];
      newProps.answerIsCorrect = true;

      const wrapper = shallow(<Button {...newProps} />);
      expect(wrapper.find('button').at(0).props().className).toBe('btn btn-success');
    });

  it('updates the class name of first button to btn-dabger when answerIsCorrect is false',
    () => {
      const newProps = { ...props };
      newProps.selectedNumbers = [1, 3];
      newProps.answerIsCorrect = false;

      const wrapper = shallow(<Button {...newProps} />);
      expect(wrapper.find('button').at(0).props().className).toBe('btn btn-danger');
    });
});