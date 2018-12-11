import React from 'react';
import { shallow } from 'enzyme';
import Numbers from '../../components/Numbers';

const props = {
  selectedNumbers: [],
  selectNumber: jest.fn(),
  usedNumbers: []
}

describe('Numbers Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Numbers {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.getElement().type).toBe('div');
    expect(wrapper.find('span')).toHaveLength(9);
    expect(wrapper.find('span.rounded-span')).toHaveLength(9);
  });

  it('should show a different class name for selected numbers', () => {
    const newProps = { ...props };
    newProps.selectedNumbers = [1, 3, 5];

    const wrapper = shallow(<Numbers {...newProps} />);
    expect(wrapper.find('span.selected')).toHaveLength(3);
  });

  it('should show a different class name for used numbers', () => {
    const newProps = { ...props };
    newProps.usedNumbers = [1, 5];

    const wrapper = shallow(<Numbers {...newProps} />);
    expect(wrapper.find('span.used')).toHaveLength(2);
  });

  it('should call the select number prop when a number is clicked', () => {
    const wrapper = shallow(<Numbers {...props} />);

    const selectNumberSpy = jest.spyOn(props, 'selectNumber');
    wrapper.find('span').at(3).simulate('click');
    expect(selectNumberSpy).toHaveBeenCalled;
  });
});