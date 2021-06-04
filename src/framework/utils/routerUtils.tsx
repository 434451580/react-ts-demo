import React, { useState, useEffect, ReactNode } from 'react'
import _ from 'lodash'
import { ezMenuItem, routerItemType } from '..'
import { Route } from 'react-router'

const convertInner = (defaultValue: any, paramValue: any) => {
    // TODO:暂不支持数组
    if (paramValue) {
        if (_.isString(defaultValue)) {
            return paramValue
        }
        if (_.isBoolean(defaultValue)) {
            if (paramValue == '1' || paramValue == 'true') {
                return true
            }
            if (paramValue == '0' || paramValue == 'false') {
                return false
            }
            return defaultValue
        }
        if (_.isInteger(defaultValue)) {
            try {
                let val = parseInt(paramValue)
                return isNaN(val) ? defaultValue : val
            }
            catch {
                return defaultValue
            }
        }
        if (_.isNumber(defaultValue)) {
            try {
                return parseFloat(paramValue)
            }
            catch {
                return defaultValue
            }
        }
        if (_.isFunction(defaultValue)) {
            return defaultValue(paramValue)
        }
        if (_.isObject(defaultValue)) {
            let params: any = {}
            try {
                params = JSON.parse(paramValue)
            }
            catch { }
            _.forEach(defaultValue, (value, key) => {
                if (params[key]) {
                    params[key] = convertInner(value, params[key])
                } else {
                    params[key] = value
                }
            })
            return params
        }
    } else {
        if (_.isFunction(defaultValue)) {
            return defaultValue()
        } else {
            return defaultValue
        }
    }
    return paramValue
}

export interface IPath {
    path: string
    query: string
    hash: string
}

/**
 * 路由公共方法
 */
const routeUtils = {
    /**
       * 解析路径地址
       * @param path 路径地址
       */
    parsePath: (path: string): IPath => {
        let hash = ''
        let query = ''

        const hashIndex = path.indexOf('#')
        if (hashIndex >= 0) {
            hash = path.slice(hashIndex)
            path = path.slice(0, hashIndex)
        }

        const queryIndex = path.indexOf('?')
        if (queryIndex >= 0) {
            query = path.slice(queryIndex + 1)
            path = path.slice(0, queryIndex)
        }
        return { path, query, hash }
    },
    /**
     * url查询字符串转对象
     * @param locationSearch url查询字符串
     * @param defaultValue 默认值，支持对象
     */
    searchStringToObject: (locationSearch: string, defaultValue: any): any => {
        let result: any = {}
        let params = new URLSearchParams(locationSearch)
        _.forEach(defaultValue, (value, key) => {
            result[key] = convertInner(value, params.get(key))
        })
        return result
    },
    /**
     * 对象转url查询字符串
     * @param queryParams 对象
     */
    objectToSearchString: (queryParams: any): string => {
        let params = new URLSearchParams()
        for (const key in queryParams) {
            if (_.isObject(queryParams[key]) || _.isArray(queryParams[key])) {
                params.set(key, JSON.stringify(queryParams[key]))
                continue
            }
            params.set(key, queryParams[key])
        }
        let str = params.toString()
        return str ? `?${str}` : ''
    },
    /**
     * 路由集合生成路由组件
     * @param routes 路由定义集合
     */
    buildRouteNodes: (routes: routerItemType[]): ReactNode[] => {
        let nodes: ReactNode[] = []
        if (routes) {
            for (const route of routes) {
                if (route.route) {
                    nodes.push(route.route)
                } else {
                    let Component = route.component!
                    if (_.isArray(route.children) && route.children.length > 0) {
                        let exact = route.exact == null ? false : route.exact
                        nodes.push(<Route key={_.uniqueId('route_')} path={route.path} exact={exact}
                            render={(props) => <Component {...props} > {routeUtils.buildRouteNodes(route.children!)} </Component>}
                        />)
                    } else {
                        let exact = route.exact == null ? true : route.exact
                        nodes.push(<Route key={_.uniqueId('route_')} path={route.path} exact={exact} component={route.component} />)
                    }
                }
            }
        }
        return nodes
    },
    /** 
     * 从菜单集合中获取第一个有效的跳转路径
     * @param menus 菜单定义集合
     */
    getFirstPathFromMenu: (menus: ezMenuItem[]): string | undefined => {
        let recursion = (items: ezMenuItem[] | undefined): string | undefined => {
            if (items && items.length > 0) {
                for (const item of items) {
                    if (item.path) {
                        return item.path
                    }
                    let result = recursion(item.children)
                    if (result) {
                        return result
                    }
                }
            }
        }
        return recursion(menus)
    }
}

export { routeUtils }