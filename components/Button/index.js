import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.scss';

/**
 * 按钮组件用于开始一个即时操作或跳转至某个链接。
 *
 * @visibleName Button 按钮
 */
export default class Button extends React.PureComponent {
  static propTypes = {
    /** 按钮 HTML 类型  */
    htmlType: PropTypes.oneOf(['button', 'link']),
    /** 按钮类型  */
    type: PropTypes.oneOf([
      'default',
      'primary',
      'danger',
      'warning',
      'success',
      'dark',
      'red',
      'orange',
      'yellow',
      'green',
      'teal',
      'blue',
      'indigo',
      'purple',
      'pink',
    ]),
    /** 按钮大小 */
    size: PropTypes.oneOf(['mini', 'small', 'medium', 'large']),
    /** 按钮形状 */
    shape: PropTypes.oneOf(['square', 'rounded', 'circle']),
    /** 是否撑满父容器 */
    block: PropTypes.bool,
    /** 可点击状态 */
    disabled: PropTypes.bool,
    /** 加载状态 */
    loading: PropTypes.bool,
    /** 加载提示信息 */
    loadingText: PropTypes.string,
    /** 按钮链接 */
    href: PropTypes.string,
    /** 链接打开方式 */
    target: PropTypes.string,
    /** 按钮子元素 */
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    /** 点击事件 */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    htmlType: 'button',
    type: 'default',
    size: 'medium',
    shape: 'square',
    block: false,
    disabled: false,
    loading: false,
    loadingText: '加载中...',
    href: '',
    target: null,
    children: null,
    onClick: null,
  };

  composeClassNames = () => {
    const { type, size, shape, disabled, loading, block } = this.props;
    return classnames({
      'pb-btn': true,
      [`pb-btn-${type}`]: true,
      [`pb-btn-${size}`]: true,
      [`pb-btn-${shape}`]: true,
      [`pb-btn-${block}`]: block,
      [`pb-btn-${disabled}`]: disabled,
      [`pb-btn-${loading}`]: loading,
    });
  };

  composeChildren = () => {
    const { loading, loadingText, children } = this.props;
    return loading ? <span>{loadingText}</span> : <span>{children}</span>;
  };

  render() {
    const classNames = this.composeClassNames();
    const childrenNode = this.composeChildren();
    const { htmlType, href, target, disabled, loading, onClick } = this.props;

    return htmlType === 'link' || href !== '' ? (
      <a
        role="button"
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener' : null}
        className={classNames}
        onClick={!disabled || !loading ? onClick : () => false}
      >
        {childrenNode}
      </a>
    ) : (
      <button
        type="button"
        disabled={disabled || loading}
        className={classNames}
        onClick={!disabled || !loading ? onClick : () => false}
      >
        {childrenNode}
      </button>
    );
  }
}
