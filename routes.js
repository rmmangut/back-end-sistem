const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage 1234567890';
        },
    },
    
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        },
    },
    
    {
        method: 'GET',
        path: '/test',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
    
    {
        method: 'POST',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    
    
];

module.exports = routes;
