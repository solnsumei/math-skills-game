import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

const props = {
  setShowHowToPlay: jest.fn(),
  showHowToPlay: false
}

describe('Header Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.getElement().type).toBe('div');
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').props().title).toBe('');
  });

  it('it shows the close icon when showHowToPlay is true', () => {
    const newProps = { ...props };
    newProps.showHowToPlay = true;

    const wrapper = shallow(<Header {...newProps} />);
    expect(wrapper.find('button').props().title).toBe('Close');
  });
});