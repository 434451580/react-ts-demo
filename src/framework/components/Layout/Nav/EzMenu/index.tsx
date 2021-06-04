import React, { FC, ReactNode, useState, useEffect, useRef } from 'react'
import { useLocation, useHistory } from 'react-router'
import _ from 'lodash'
import pathToRegexp from 'path-to-regexp'
import { Menu } from 'antd'
import { MenuProps } from 'antd/lib/menu'
import classNames from 'classnames'
import { Icon } from '@ant-design/compatible'
const { SubMenu } = Menu

/**
 * 菜单组件
 * 
 */
const EzMenu: FC<EzMenuProps> = (props) => {
    const history = useHistory()
    const location = useLocation()
    const [openKeys, setOpenKeys] = useState<string[]>([])
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])
    const menuNodes = useRef<ReactNode[] | undefined>()
    
    

    return <div className={classNames('ez_menu', props.className)}>
        <Menu></Menu>
    </div>
}


export interface EzMenuProps extends MenuProps {
    menus: ezMenuItem[]
    /**
   * 菜单和路由的额外关联关系
   */
    relevants?: ezMenuRelevants
    /**
     * 扩展路径
     */
    extraPaths?: ezMenuExtraPath
}

export interface ezMenuItem {
    /** 
     * Key
     */
    key: string
    /** 
     * 显示内容
     */
    name: ReactNode
    /** 
     * 跳转路径 
     */
    path?: string
    /** 
     * 图标，string：antd icon name
     * @type string | ReactNode
     */
    icon?: string | ReactNode
    /** 
     * 子菜单
     */
    children?: ezMenuItem[],
    /** 
     * 关联其他路径 
     */
    relevantPaths?: (string | RegExp)[]
}

export interface ezMenuRelevants {
    [customId: string]: (string | RegExp)[]
}

export interface ezMenuExtraPath {
    [key: string]: (path: string) => string
}

export { EzMenu }