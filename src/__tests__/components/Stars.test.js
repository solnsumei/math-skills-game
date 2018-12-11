import React from 'react';
import { shallow } from 'enzyme';
import Stars from '../../components/Stars';

const props = {
  numberOfStars: 5
}

describe('Stars Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Stars {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.getElement().type).toBe('div');
    expect(wrapper.find('i')).toHaveLength(5);
    expect(wrapper.find('i').at(0).props().className).toBe('fa fa-star');
  });
});