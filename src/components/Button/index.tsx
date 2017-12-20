import * as React from 'react'
import * as cn from 'classnames'
import { Icon as AntIcon } from 'antd'
import * as css from './button.less'

const FONT_SIZE = {
  small: 16,
  default: 22,
  large: 22
}

export interface ButtonProps {
  /** Тип кнопки */
  type?: 'default' | 'primary' | 'flat' | 'icon' | 'link';
  /** HTML тип кнопки. Например 'button' или 'submit' */
  htmlType?: string;
  /** Размер кнопки */
  size?: 'small' | 'default' | 'large';
  /** Текст кнопки для все типов кроме 'icon' */
  btnText?: string;
  /** Тип иконки из Ant Design */
  icon?: string;
  /** Размер иконки в px */
  iconSize?: number;
  /** Положение иконки относительно текста кнопки */
  iconPos?: 'left' | 'right';
  /** Дополнительные стили иконки */
  iconStyle?: React.CSSProperties;
  /** Дополнительные стили кнопки */
  style?: React.CSSProperties;
  /** Дополнительный класс кнопки */
  className?: string;
  /** Disable */
  disable?: boolean;
  /** Функция, срабатывающая при клике на кнопку */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Функция, срабатывающая при фокусе на кнопку */
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  /** Функция, срабатывающая на событие 'mouseleave' */
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  /** Функция, срабатывающая на событие 'mouseenter' */
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
}

export class Button extends React.Component<ButtonProps, {}> {
  static defaultProps: ButtonProps = {
    type: 'default',
    htmlType: 'default',
    size: 'default',
    btnText: '',
    style: {padding: '0 16px'},
    icon: '',
    iconSize: 24,
    iconPos: 'left',
    iconStyle: {},
    className: '',
    disable: false,
    onClick: () => {},
    onFocus: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {}
  }

  constructor(props: ButtonProps) {
    super(props)
    this.state = {}
  }

  handlerClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (this.props.htmlType !== 'submit') {
      this.props.onClick(e)
    }
  }

  render() {
    const { type, htmlType, size, btnText, style, className, icon, iconSize, iconPos, iconStyle, disable, onFocus, onMouseEnter, onMouseLeave} = this.props

    const rootClass = cn((css as any).button, className, (css as any)[`button-size-${size}`], (css as any)[`button-${type}`])
    const btnStyle = Object.assign({}, style)
    const btnIconStyle = Object.assign({fontSize: `${size}px`}, iconStyle)
    let btnTextStyle: {[key: string]: string} = {}

    if (type === 'icon' || type === 'link') {
			btnStyle.padding = '0'
		}
		if (this.props.icon) {
			btnTextStyle = iconPos === 'left' ? { paddingLeft: '6px' } : { paddingRight: '6px' }
		}
		if (type === 'link') {
			btnTextStyle.lineHeight = `${FONT_SIZE[size] || 16}px`
		}

    return (
      <button
        type={htmlType || 'button'}
        style={btnStyle || {} }
        className={rootClass || ''}
        {...(disable ? { disabled: true } : {})}
        onClick={(ev: React.MouseEvent<HTMLButtonElement>) => { this.handlerClick(ev) }}
        onFocus={(ev: React.FocusEvent<HTMLButtonElement>) => { this.props.onFocus(ev) }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        {
          icon &&
          iconPos === 'left' && 
          (<AntIcon type={icon} style={btnIconStyle} />)
        }
        {
          type !== 'icon' &&
          <span style={btnTextStyle}>{btnText}</span>
        }
        {
          icon &&
          iconPos === 'right' && 
          (<AntIcon type={icon} style={btnIconStyle} />)
        }
      </button>
		)

  }
}

export default Button
