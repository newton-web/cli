module.exports = {
    database: {
        databaseURL: 'mongodb://localhost/projectName'
    },

    apps: [
        // 'appOne'
    ],

    templates: {
        templateEngine: 'ejs',
    },

    //Your app will run at localhost:'port'
    port: 8000,

    staticURL: '/static/',

    mediaURL: '/media/',

    userModel: 'default'
}
