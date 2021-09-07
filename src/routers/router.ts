import routers from './index'
import { RouteItem } from "../types/route"

export const getMenus = () => {
  return routers.filter((el: RouteItem) => {
    return el.isShowHeader
  })
}

const handleChildMenus = () => {
  let subs: Array<RouteItem> = []
  routers.forEach(el => {
    if (el.children) {
      subs = [...subs, ...el.children]
    }
  })
  return subs
}

/*****
 * router: 传进来的路由
 * contentMenus 收集返回的路由
 */
export const getContentMenus = (router: Array<RouteItem> = handleChildMenus(), contentMenus: Array<RouteItem> = []) => {
  router.forEach(el => {
    if (el.children) {
      getContentMenus(el.children, contentMenus)
    } else {
      contentMenus.push(el)
    }
  })
  return contentMenus
}

export const getSiderMenus = (path: string) => {
  let cur: RouteItem | undefined = routers.find(el => el.path === path);
  if (cur) {
    return cur.children || []
  }
  return []
}