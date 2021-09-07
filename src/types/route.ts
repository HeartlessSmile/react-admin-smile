export interface RouteItem {
  path: string,
  exact?: boolean, //是否精准匹配
  name?: string, // name
  component?: any, //展示的组件
  children?: Array<RouteItem>,
  noinspect?: boolean,
  redirect?: string,
  key?: any,
  isShowHeader?: Boolean,
  isShowSider?: Boolean
}