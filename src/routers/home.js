export default [
    {
        path: '/home',
        component: () => import('../views/home/Index'),
        children: [
            {
                name: 'Tela Inicial',
                path: '',
                component: () => import('../views/home/Home'),
            }
        ]
    }
]