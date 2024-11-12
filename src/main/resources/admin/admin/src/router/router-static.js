import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import tuandui from '@/views/modules/tuandui/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhuangxiu from '@/views/modules/zhuangxiu/list'
    import zhuangxiuCollection from '@/views/modules/zhuangxiuCollection/list'
    import zhuangxiuOrder from '@/views/modules/zhuangxiuOrder/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryZhuangxiu from '@/views/modules/dictionaryZhuangxiu/list'
    import dictionaryZhuangxiuCollection from '@/views/modules/dictionaryZhuangxiuCollection/list'
    import dictionaryZhuangxiuOrder from '@/views/modules/dictionaryZhuangxiuOrder/list'
    import dictionaryZhuangxiuOrderPayment from '@/views/modules/dictionaryZhuangxiuOrderPayment/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryZhuangxiu',
        name: '装修类型',
        component: dictionaryZhuangxiu
    }
    ,{
        path: '/dictionaryZhuangxiuCollection',
        name: '收藏表类型',
        component: dictionaryZhuangxiuCollection
    }
    ,{
        path: '/dictionaryZhuangxiuOrder',
        name: '订单类型',
        component: dictionaryZhuangxiuOrder
    }
    ,{
        path: '/dictionaryZhuangxiuOrderPayment',
        name: '订单支付类型',
        component: dictionaryZhuangxiuOrderPayment
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/tuandui',
        name: '装修队',
        component: tuandui
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhuangxiu',
        name: '装修',
        component: zhuangxiu
      }
    ,{
        path: '/zhuangxiuCollection',
        name: '装修收藏',
        component: zhuangxiuCollection
      }
    ,{
        path: '/zhuangxiuOrder',
        name: '装修订单',
        component: zhuangxiuOrder
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;