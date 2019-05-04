import Test from '../pages/test'
import { MultipleTabs } from '../pages/multipleTabs'

interface Imenus {
  key: string
  title: string
  icon: string
  component?: any
  subs?: Object[]
}

interface Iroute {
  menus: Imenus[]
}

const route: Iroute = {
  menus: [ // 菜单相关路由
    { key: '/index/dashboard', title: '测试页', component: Test, icon: 'dashboard' },

    {
      key: '/index/interface', title: '接口管理', icon: 'project',
      subs: [
        { key: '/index/interface/multipleTabs', title: '接口列表', icon: 'cluster', component: MultipleTabs },
      ],
    },

    /* { key: '/index', title: '首页', component: 'Dashboard' },
    {
      key: '/test', title: 'UI', icon: 'scan',
      subs: [
        { key: '/app/ui/buttons', title: '按钮', component: 'Buttons' },
      ],
    },
    {
      key: '/subs4', title: '页面', icon: 'switcher',
      subs: [
        { key: '/login', title: '登录' },
        { key: '/404', title: '404' },
      ],
    }, */
  ],
  // others: [] // 非菜单相关路由
}

export default route