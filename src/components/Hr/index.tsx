import * as React from 'react'
import * as css from './styles.less'

console.log(css)

export interface HrProps {
  margin?: number,
  style?: Object
}

export const Hr = (props: HrProps) => {

  const style = {
    marginTop: props.margin,
    marginBottom: props.margin
  }

  return <div style={style}></div>
}

// className={css.hr}