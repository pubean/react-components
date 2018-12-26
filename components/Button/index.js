import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * 按钮组件
 *
 * @visibleName Button 按钮
 */
export default class Button extends React.Component {
  
  static propTypes = {
    /** 按钮大小 */
    size: PropTypes.oneOf(['mini', 'small', 'large']),
    /** 是否撑满父容器 */
    block: PropTypes.bool,
    /** 按钮类型  */
    type: PropTypes.oneOf(['default', 'primary', 'danger', 'warning', 'success']),
    /** 按钮状态 */
    disabled: PropTypes.bool,
    /** 按钮形状 */
    shape: PropTypes.oneOf(['', 'circle', 'rounded']),
    /** 按钮标签  */
    htmlType: PropTypes.oneOf(['button', 'a']),
    /** 按钮链接 */
    href: PropTypes.string,
    /** 链接打开方式 */
    target: PropTypes.string,
    /** 加载状态 */
    loading: PropTypes.bool,
    /** 加载提示信息 */
    loadingText: PropTypes.string,
    /** 点击事件 */
    onClick: PropTypes.func
  }

  static defaultProps = {
    size: 'small',
    type: 'primary',
    shape: '',
    disabled: false,
    htmlType: 'button',
    href: '',
    target: '',
    loading: false,
    loadingText: '加载中...',
    onClick: null,
    block: false
  }

  composeClassNames() {
    const {type, size, shape, disabled, loading, block} = this.props;
    const classNames = [
      'btn',
      `btn-${size}`,
      `btn-${type}`,
      shape ? `btn-${shape}` : '',
      block ? 'btn-block' : '',
      loading ? 'btn-loading' : '',
      disabled ? 'btn-disabled' : ''
    ];
    return classNames.filter((cn) => {return cn}).join(' ');
  }

  composeChild() {
    const {loading, loadingText, children} = this.props;
    if (loading) {
      return <span>{loadingText}</span>;
    }
    return <span>{children}</span>;
  }

  render() {
    const {htmlType, href, target, disabled, onClick} = this.props;
    const classNames = this.composeClassNames();
    const childNode = this.composeChild();
    if (htmlType === 'a' || href !== '') {
      return <a href={href} className={classNames} target={target} onClick={!disabled ? onClick : null}>
          {childNode}
        </a>;
    }
    return <button type="button" className={classNames} disabled={disabled} onClick={!disabled ? onClick : null}>
        {childNode}
      </button>;
  }
}