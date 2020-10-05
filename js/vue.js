const Home = {
    template: '<h1>Home</h1>',
    name: "Home"
}

const UserSettigns = {
    template: '<h1>User Settigns</h1>',
    name: "UserSettigns"
}

const ProductList = {
    template: '<h1>Product List</h1>',
    name: "Product List"
}

const ShoppingCart = {
    template: '<h1>Shopping Cart</h1>',
    name: "ShoppingCart"
}

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/user-settings', component: UserSettigns, name: 'UserSettigns' },
    { path: '/product-list', component: ProductList, name: 'ProductList' },
    { path: '/shopping-cart', component: ShoppingCart, name: 'ShoppingCart' },
]

const router = new VueRouter ({
    routes
})

const vue = new Vue ({
    router
}).$mount('#app');