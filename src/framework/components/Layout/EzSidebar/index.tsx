import React, { FC } from 'react'
import { Layout } from 'antd'
import { LayoutProps } from 'antd/lib/layout'
import classNames from 'classnames'
const { Sider } = Layout
/**
 * 侧边栏
 * @param props extends antd Layout props
 *
 */
const EzSidebar: FC<EzSidebarProps> = (props) => {

    return <Sider children={props.children} {...props} className={classNames('ez-Sider', props.className)} />
}

export interface EzSidebarProps extends LayoutProps {

}

export { EzSidebar }


