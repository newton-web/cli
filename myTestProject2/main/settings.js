module.exports = {
    database: {
        databaseURL: 'mongodb://localhost/myTestProject2'
    },

    apps: [
        // 'appOne'
    ],

    views: {
        templateEngine: 'ejs',
        directories: [

        ]
    },

    //Your app will run at localhost:'port'
    port: 8000,

    staticURL: '/static/',

    mediaURL: '/media/',

    userModel: 'default',

    sessionSecretKey: 'RANDOM'
}
