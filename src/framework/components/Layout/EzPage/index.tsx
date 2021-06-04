import React, { ReactNode, CSSProperties } from 'react'
import classNames, { Argument as ClassValue } from 'classnames'

const EzPage: React.FC<EzPageProps> = (props) => {
  return <div style={props.style} {...props} className={classNames('ez-page', props.className)}>{props.children}</div>
}

export interface EzPageProps {
  style?: CSSProperties
  className?: ClassValue
  children?: ReactNode
}

export { EzPage }
