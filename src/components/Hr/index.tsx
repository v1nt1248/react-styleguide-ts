import * as React from 'react'
import * as css from './hr.less'

export interface HrProps {
  margin?: number,
}

export const Hr = (props: HrProps) => {

  const style = {
    marginTop: props.margin,
    marginBottom: props.margin
  }

  return <div className={(css as any).root} style={style}></div>
}

export default Hr
