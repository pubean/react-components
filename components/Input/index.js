import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * 这是一个最简单的输入框组件
 *
 * @visibleName 输入框
 */
export default function Input({ placeholder }) {
  return <input className="red" placeholder={placeholder} />;
}

Input.propTypes = {
  /** 提示文案 */
  placeholder: PropTypes.string.isRequired,
};
