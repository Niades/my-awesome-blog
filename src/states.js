export default [
    {
        name: 'main',
        data: {
            url: '/',
            controller: 'MainController',
            template: require('partials/main.jade')
        }
    },
    {
        name: 'main.login',
        data: {
            url: 'login',
            controller: 'LoginController',
            template: require('partials/login.jade')
        }
    },
    {
        name: 'main.new-entry',
        data: {
            url: 'new-entry',
            controller: 'AddEntryController',
            template: require('partials/add-entry.jade')
        }
    }
];