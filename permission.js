/**
 * 路由权限拦截
 * 类似切面
 */
import router from '@/router/index'

/**
 * 访问前
 */
router.beforeEach(async (to, from, next) => {
    console.log(to)
    console.log(from)
    console.log(next)
    // // start progress bar
    // NProgress.start()
    //
    // // set page title
    // document.title = getPageTitle(to.meta.title)
    //
    // // determine whether the user has logged in
    // const hasToken = getToken()
    //
    // if (hasToken) {
    //   if (to.path === '/login') {
    //     // if is logged in, redirect to the home page
    //     next({ path: '/' })
    //     NProgress.done()
    //   } else {
    //     const hasGetUserInfo = store.getters.name
    //     if (hasGetUserInfo) {
    //       next()
    //     } else {
    //       try {
    //         // get user info
    //         // await store.dispatch('user/getInfo')
    //
    //         next()
    //       } catch (error) {
    //         // remove token and go to login page to re-login
    //         await store.dispatch('user/resetToken')
    //         Message.error(error || 'Has Error')
    //         next(`/login?redirect=${to.path}`)
    //         NProgress.done()
    //       }
    //     }
    //   }
    // } else {
    //   /* has no token*/
    //
    //   if (whiteList.indexOf(to.path) !== -1) {
    //     // in the free login whitelist, go directly
    //     next()
    //   } else {
    //     // other pages that do not have permission to access are redirected to the login page.
    //     next(`/login?redirect=${to.path}`)
    //     NProgress.done()
    //   }
    // }
    next();
})

/**
 * 访问过后
 */
router.afterEach(() => {
    // finish progress bar
})
