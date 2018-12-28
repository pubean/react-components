import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

test('ensure default props are correct', () => {
  const button = shallow(<Button />);
  const defaultClassName = 'pb-btn pb-btn-default pb-btn-medium pb-btn-square';
  expect(button.props().className).toEqual(defaultClassName);
});

test('ensure prop size is correct', () => {
  const button = shallow(<Button size="large" />);
  expect(button.props().className).toContain('pb-btn-large');
  button.setProps({ size: 'mini' });
  expect(button.props().className).toContain('pb-btn-mini');
});

test('ensure prop block is correct', () => {
  const button = shallow(<Button />);
  expect(button.props().className).not.toContain('pb-btn-block');
  button.setProps({ block: true });
  expect(button.props().className).toContain('pb-btn-block');
});

test('ensure Button can be a link', () => {
  const button = shallow(<Button href="https://pubean.com" />);
  expect(button.type()).toEqual('a');
});

test('ensure loading state functions well', () => {
  const button = shallow(<Button loading />);
  expect(button.props().className).toContain('pb-btn-loading');
  button.setProps({ loadingText: 'changedLoadingText' });
  expect(button.children('span').text()).toEqual('changedLoadingText');
});

test('ensure onClick callback functions well', () => {
  const onButtonClick = jest.fn();
  const button = shallow(<Button onClick={onButtonClick} />);
  button.simulate('click');
  expect(onButtonClick.mock.calls.length).toBe(1);
});