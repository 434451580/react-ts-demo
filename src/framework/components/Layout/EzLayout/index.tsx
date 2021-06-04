import React, { FC } from 'react'
import { Layout } from 'antd'
import { LayoutProps } from 'antd/lib/layout'
import classNames from 'classnames'

/**
 * 页面布局
 * @param props extends antd Layout props
 *
 */
const EzLayut: FC<EzLayutProps> = (props) => {

    return <Layout children={props.children} {...props} className={classNames('ez-layout', props.className)} />
}

export interface EzLayutProps extends LayoutProps {

}

export { EzLayut }


