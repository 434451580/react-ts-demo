import { ReactNode } from "react";
import { RouteComponentProps } from "react-router";

/**
 * 路由配置项
 */
export interface routerItemType {
    name?: string,
    path: string,
    auth?: boolean,
    /**  */
    exact?: boolean
    /** 组件的文件路径，component和file必须传一个 */
    file?: string
    /** 组件
     * component优先于file
     * component和file必须传一个 
    */
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
    /** 
     * 直接使用Route
     * 设置后将忽略 path,exact,file,component,children 属性 
     * 设置后 name 将不会自动生成
    */
    route?: ReactNode
    children?: routerItemType[]
}
