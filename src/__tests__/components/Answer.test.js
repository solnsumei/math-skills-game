import React from 'react';
import { shallow } from 'enzyme';
import Answer from '../../components/Answer';

const props = {
  selectedNumbers: [],
  removeNumber: jest.fn(),
}

describe('Answer Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Answer {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.getElement().type).toBe('div');
    expect(wrapper.find('span.rounded-span')).toHaveLength(0);
  });

  it('should show star count as the length of selectedNumbers', () => {
    const newProps = { ...props };
    newProps.selectedNumbers = [1, 3, 5];

    const wrapper = shallow(<Answer {...newProps} />);
    expect(wrapper.find('span.rounded-span')).toHaveLength(3);
  });

  it('should call the remove number prop when a selected number is clicked', () => {
    const newProps = { ...props };
    newProps.selectedNumbers = [1, 3, 5];

    const wrapper = shallow(<Answer {...newProps} />);

    const removeNumberSpy = jest.spyOn(props, 'removeNumber');
    wrapper.find('span.rounded-span').at(0).simulate('click');
    expect(removeNumberSpy).toHaveBeenCalled;
  });
});