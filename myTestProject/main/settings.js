module.exports = {
    database: {
        databaseURL: 'mongodb://localhost/myTestProject'
    },

    apps: [
        'myTestApp'
    ],

    views: {
        templateEngine: 'ejs',
        directories: [
            'views'
        ]
    },

    //Your app will run at localhost:'port'
    port: 8000,

    staticURL: '/static/',

    mediaURL: '/media/',

    userModel: 'default',

    sessionSecretKey: 'RANDOM'
}
