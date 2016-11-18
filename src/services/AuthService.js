function AuthService($q, $rootScope, Restangular) {
    let user;
    this.checkLogin = () => {
        let deferred = $q.defer();
        Restangular
            .all('profile')
            .customGET()
            .then((response) => {
                if(response.status && response.status === 'error') {
                    deferred.reject();
                } else {
                    user = response;
                    $rootScope.isAuthenticated = true;
                    $rootScope.currentUser = user;
                    deferred.resolve(user);
                }
            })
        return deferred.promise;
    };
    this.login = (credentials) => {
        let deferred = $q.defer();
        Restangular
            .all('login')
            .customPOST(credentials)
            .then((response) => {
                if(response.status && response.status === 'error') {
                    deferred.reject(response);
                } else {
                    user = response;
                    $rootScope.isAuthenticated = true;
                    $rootScope.currentUser = user;
                    deferred.resolve();
                }
            });
        return deferred.promise;
    }
};

export default AuthService;