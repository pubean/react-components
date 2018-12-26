import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import Button from '../index';

describe('<Button />', () => {
  it('ensure default props are correct', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.props().className).to.equal('btn btn-small btn-primary');
  });

  it('ensure prop size is correct', () => {
    const wrapper = shallow(<Button size="large" />);
    expect(wrapper.props().className).to.include('btn-large');
    wrapper.setProps({size: 'mini'});
    expect(wrapper.props().className).to.include('btn-mini');
  });

  it('ensure prop block is correct', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.props().className).to.not.include('btn-block');
    wrapper.setProps({ block: true });
    expect(wrapper.props().className).to.include('btn-block');
  });

  it('ensure Button can be a link', () => {
    const wrapper = shallow(<Button href="https://pubean.com" />);
    expect(wrapper.type()).to.equal('a');
  });

  it('ensure loading state functions well', () => {
    const wrapper = shallow(<Button loading={true} />);
    expect(wrapper.props().className).to.include('btn-loading');
    wrapper.setProps({ loadingText: 'changedLoadingText' });
    expect(wrapper.children('span').text()).to.equal('changedLoadingText');
  });

  it('ensure onClick callback functions well', () => {
    const onButtonClick = spy();
    const wrapper = shallow(<Button onClick={onButtonClick} />);
    wrapper.simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
