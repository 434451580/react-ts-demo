import React, { FC } from 'react'
import { Layout } from 'antd'
import { LayoutProps } from 'antd/lib/layout'
import classNames from 'classnames'

const { Content } = Layout

/**
 * 页面主内容
 * @param props extends antd Layout props
 *
 */
const EzMain: FC<EzMainProps> = (props) => {

    return <Content children={props.children} {...props} className={classNames('ez-main', props.className)} />
}

export interface EzMainProps extends LayoutProps {

}

export { EzMain }


