/**
 * 路由配置项
 */
export interface routerItemType {
    name?: string,
    path: string,
    component?: any,
    auth?: boolean,
    children?: routerItemType[]
}
