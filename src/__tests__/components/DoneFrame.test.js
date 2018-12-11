import React from 'react';
import { shallow } from 'enzyme';
import DoneFrame from '../../components/DoneFrame';

const props = {
  doneStatus: 'Hurray, you won!',
  restartGame: jest.fn()
}

describe('DoneFrame Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<DoneFrame {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.getElement().type).toBe('div');
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').at(0).props().className).toBe('text-success');
  });

  it('disables the redraw button when redraws is zero', () => {
    const newProps = { ...props };
    newProps.doneStatus = 'Ouch You lost';

    const wrapper = shallow(<DoneFrame {...newProps} />);
    expect(wrapper.find('h2').props().className).toBe('text-danger');
  });
});