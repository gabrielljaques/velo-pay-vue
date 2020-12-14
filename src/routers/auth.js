export default [
    {
        path: '/login',
        component: () => import('../views/login/Index'),
        children: [
            {
                name: 'Tela de Login',
                path: '',
                component: () => import('../views/login/Login'),
            }
        ]
    }
]