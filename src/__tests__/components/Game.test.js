import React from 'react';
import { shallow } from 'enzyme';
import Game from '../../components/Game';

describe('Game Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper).toBeDefined();
    expect(wrapper.getElement().type).toBe('div');
    expect(wrapper.find('Header')).toHaveLength(1);
    expect(wrapper.find('Button')).toHaveLength(1);
    expect(wrapper.find('Answer')).toHaveLength(1);
    expect(wrapper.find('Numbers')).toHaveLength(1);
    expect(wrapper.find('Instructions')).toHaveLength(0);
    expect(wrapper.find('DoneFrame')).toHaveLength(0);
  });

  it('should show the instructions screen when help button is clicked', () => {
    const wrapper = shallow(<Game />);
    wrapper.find('Header').dive().find('button').at(0).simulate('click');
    expect(wrapper.find('Answer')).toHaveLength(0);
    expect(wrapper.instance().state.showHowToPlay).toBe(true);
    expect(wrapper.find('Instructions')).toHaveLength(1);
  });

  it('should increase the selected numbers count when a number is selected', () => {
    const wrapper = shallow(<Game />);
    const spy = jest.spyOn(wrapper.instance(), 'selectNumber');

    wrapper.find('Numbers').dive().find('span').at(2).simulate('click');
    expect(wrapper.instance().state.selectedNumbers.length).toBe(1);

    wrapper.find('Numbers').dive().find('span').at(2).simulate('click');
    expect(wrapper.instance().state.selectedNumbers.length).toBe(1);

    wrapper.find('Numbers').dive().find('span').at(1).simulate('click');
    expect(wrapper.instance().state.selectedNumbers.length).toBe(2);
    expect(spy).toHaveBeenCalled();
  });

  it('should call remove number after a number selected is clicked', () => {
    const wrapper = shallow(<Game />);
    const spy = jest.spyOn(wrapper.instance(), 'removeSelectedNumber');

    wrapper.find('Numbers').dive().find('span').at(2).simulate('click');
    expect(wrapper.instance().state.selectedNumbers.length).toBe(1);

    wrapper.find('Answer').dive().find('span').at(0).simulate('click');
    expect(wrapper.instance().state.selectedNumbers.length).toBe(0);
    expect(spy).toHaveBeenCalled();
  });

  it('should call check answer when button is clicked', () => {
    const wrapper = shallow(<Game />);
    const spy = jest.spyOn(wrapper.instance(), 'checkAnswer');

    wrapper.find('Numbers').dive().find('span').at(2).simulate('click');
    expect(wrapper.instance().state.selectedNumbers.length).toBe(1);

    wrapper.find('Button').dive().find('button').at(0).simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should call accept answer when accept button is clicked', () => {
    const wrapper = shallow(<Game />);
    const spy = jest.spyOn(wrapper.instance(), 'acceptAnswer');

    wrapper.instance().setState({
      randomNumberOfStars: 3
    });

    wrapper.find('Numbers').dive().find('span').at(2).simulate('click');
    expect(wrapper.instance().state.selectedNumbers.length).toBe(1);

    wrapper.find('Button').dive().find('button').at(0).simulate('click');
    wrapper.find('Button').dive().find('button').at(0).simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should reduce number of redraws when the redraw button is clicked', () => {
    const wrapper = shallow(<Game />);
    const spy = jest.spyOn(wrapper.instance(), 'redraw');

    wrapper.find('Button').dive().find('button').at(1).simulate('click');
    expect(wrapper.instance().state.redraws).toBe(4);
    wrapper.find('Button').dive().find('button').at(1).simulate('click');
    expect(wrapper.instance().state.redraws).toBe(3);
    expect(spy).toHaveBeenCalled();
  });

  it('should not set state when number of redraws is 0', () => {
    const wrapper = shallow(<Game />);
    wrapper.instance().setState({
      redraws: 0
    })
    wrapper.find('Button').dive().find('button').at(1).simulate('click');
    expect(wrapper.instance().state.redraws).toBe(0);
  });

  it('should end game and show the done frame', () => {
    const wrapper = shallow(<Game />);
    const spy = jest.spyOn(wrapper.instance(), 'updateDoneStatus');

    wrapper.instance().setState({
      randomNumberOfStars: 1,
      redraws: 1,
      usedNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });

    wrapper.find('Button').dive().find('button').at(1).simulate('click');
    expect(wrapper.instance().state.doneStatus).toBe('Game Over, you lose!');
    expect(wrapper.find('Numbers')).toHaveLength(0);
    expect(wrapper.find('DoneFrame')).toHaveLength(1);
    expect(wrapper.find('DoneFrame').dive().find('h2').text())
      .toBe('Game Over, you lose!');
    expect(spy).toHaveBeenCalled();
  });

  it('should end game and show you won', () => {
    const wrapper = shallow(<Game />);
    const spy = jest.spyOn(wrapper.instance(), 'updateDoneStatus');

    wrapper.instance().setState({
      randomNumberOfStars: 3,
      redraws: 5,
      usedNumbers: [1, 2, 4, 5, 6, 7, 8, 9]
    });

    wrapper.find('Numbers').dive().find('span').at(2).simulate('click');

    wrapper.find('Button').dive().find('button').at(0).simulate('click');
    wrapper.find('Button').dive().find('button').at(0).simulate('click');

    expect(wrapper.instance().state.doneStatus).toBe('Hurray, you won!');
    expect(wrapper.find('Numbers')).toHaveLength(0);
    expect(wrapper.find('DoneFrame')).toHaveLength(1);
    expect(wrapper.find('DoneFrame').dive().find('h2').text())
      .toBe('Hurray, you won!');
    expect(spy).toHaveBeenCalled();
  });

  it('should call restart game when restart button is clicked', () => {
    const wrapper = shallow(<Game />);
    const spy = jest.spyOn(wrapper.instance(), 'restart');

    wrapper.instance().setState({
      randomNumberOfStars: 3,
      redraws: 5,
      usedNumbers: [1, 2, 4, 5, 6, 7, 8, 9]
    });

    wrapper.find('Numbers').dive().find('span').at(2).simulate('click');

    wrapper.find('Button').dive().find('button').at(0).simulate('click');
    wrapper.find('Button').dive().find('button').at(0).simulate('click');
    expect(wrapper.find('DoneFrame')).toHaveLength(1);
    wrapper.find('DoneFrame').dive().find('button').at(0).simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});