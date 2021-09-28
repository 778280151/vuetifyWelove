/**
 *自己写的动态路由获取
 */
import router, {constantRoutes, loadView} from '@/router/index'
import menujs from '@/api/menu'
import Layout from '@/layout'

let refersh = true

router.beforeEach((to, from, next) => {
    if (refersh) {
        getmenu()
        refersh = false
    }
    next()
})

function getmenu() {
    menujs.getallmenu()
        .then(resf => {
            console.log(constantRoutes.length)
            const data = resf.data
            for (let i = 0; i < data.length; i++) {
                const menu = {
                    path: data[i].path,
                    name: data[i].name,
                    meta: JSON.parse(data[i].meta),
                    component: Layout,
                    children: []
                }
                if (data[i].children.length > 0) {
                    for (let j = 0; j < data[i].children.length; j++) {
                        menu.children.push({
                            path: data[i].children[j].path,
                            name: data[i].children[j].name,
                            meta: JSON.parse(data[i].children[j].meta),
                            component: loadView(data[i].children[j].component)
                        })
                    }
                }
                constantRoutes.push(menu)
            }
            // 404 page must be placed at the end !!!
            constantRoutes.push({path: '*', redirect: '/404', hidden: true})
            // resetRouter()
            // router.options.routes = constantRoutes
            router.addRoutes(constantRoutes)
            // console.log(constantRoutes.length)
        })
}

