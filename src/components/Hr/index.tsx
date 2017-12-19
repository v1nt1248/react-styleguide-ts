import * as React from 'react'
// import css from './index.less'

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

// return <div className={css.hr} style={style}></div>
