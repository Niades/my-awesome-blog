export default ($rootScope, AuthService) => {
    AuthService
        .checkLogin()
        .then(
            (user) => {
                $rootScope.isAuthenticated = true;
                $rootScope.currentUser = user;
            },
            () => {
                $rootScope.isAuthenticated = false;
            }
        );
};