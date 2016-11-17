import States from './states.js';


const Config = ($stateProvider, $urlRouterProvider, RestangularProvider) => {
    $urlRouterProvider.otherwise('/');

    _.each(States, (state) => $stateProvider.state(state.name, state.data));

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('/');

    let $cookies;
    angular.injector(['ngCookies']).invoke(['$cookies', (_$cookies) => {
        $cookies = _$cookies;
    }]);
    RestangularProvider.addResponseInterceptor((data, operation) => {
        let extractedData = data;
        return extractedData;       
    });
    RestangularProvider.addFullRequestInterceptor((element, operation, what, url, headers, params) => {
        if(operation === 'put' || operation === 'post' || operation == 'remove') {
            return {
                headers: {
                    'X-CSRFToken': $cookies.get('csrftoken')
                }
            };
        } else {
            return {};
        }
    });
}

Config.$inject = ['$stateProvider', '$urlRouterProvider', 'RestangularProvider'];

export default Config;