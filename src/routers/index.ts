
import Home from '../pages/home'
import PageError from '../pages/errorPage'
import { RouteItem } from "../types/route"
import Layout from "../layout"
import infoFlowUser from "../pages/promotionGetCustomer/infoFlowUser"
import searchUser from "../pages/promotionGetCustomer/searchUser"
import Article from '../pages/marketing/menuOne/article';
import ArticleEdit from '../pages/marketing/menuOne/article/edit';
import File from '../pages/marketing/menuOne/file';
import FileEdit from '../pages/marketing/menuOne/file/edit';
import MenuTwo from '../pages/marketing/menuTwo';
const routers: Array<RouteItem> = [
  {
    path: '/',
    exact: true,
    name: '',
    redirect:'/home',
    noinspect: true
  },
  {
    path: '/home',
    name: '首页',
    key:'name',
    component: Layout,
    children: [
      {
        path: '/home',
        component: Home
      }
    ],
    isShowHeader: true,
    noinspect: true
  },
  {
    path: '/promotionGetCustomer',
    redirect: '/promotionGetCustomer/searchUser',
    name: '推广获客',
    component: Layout,
    isShowHeader: true,
    children: [
      {
        path: '/promotionGetCustomer/searchUser',
        name: '搜索账户',
        isShowSider:true,
        component: searchUser
      },
      {
        path: '/promotionGetCustomer/infoFlowUser',
        name: '信息流账户',
        isShowSider:true,
        component: infoFlowUser
      }
    ],
    noinspect: true
  },
  {
    path: '/marketing',
    name: '营销中心',
    redirect: '/marketing/menuOne/article',
    component: Layout,
    isShowSider:true,
    children: [
      {
        path: '/marketing/menuOne',
        name: '营销素材',
        isShowSider:true,
        children: [
          {
            path: '/marketing/menuOne/article',
            name: '文章',
            isShowSider:true,
            component: Article
          },
          {
            path: '/marketing/menuOne/article/edit',
            name: '文章编辑',
            component: ArticleEdit
          },
          {
            path: '/marketing/menuOne/file',
            name: '文件',
            isShowSider:true,
            component: File
          },
          {
            path: '/marketing/menuOne/file/edit',
            name: '文件编辑',
            component: FileEdit
          }
        ]
      },
      {
        path: '/marketing/menuTwo',
        name: '页面二',
        isShowSider:true,
        component: MenuTwo
      }
    ],
    isShowHeader: true,
    noinspect: true
  },
  {
    path: '',
    exact: false,
    name: 'error',
    component: PageError,
    noinspect: true
  }
]
export default routers