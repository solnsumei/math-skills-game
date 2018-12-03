import React from 'react';
import { shallow } from 'enzyme';
import Instructions from '../../components/Instructions';

const props = {
  setShowHowToPlay: jest.fn(),
}

describe('Instructions Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Instructions {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.getElement().type).toBe('div');
    expect(wrapper.find('div').at(0).props().className).toBe('card');
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').props().onClick).toBe(props.setShowHowToPlay);
  });
});