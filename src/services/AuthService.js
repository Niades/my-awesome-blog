function AuthService($q, Restangular) {
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
                    deferred.resolve(user);
                }
            })
        return deferred.promise;
    };
    return this;
};

export default AuthService;