function LoginController($scope, $state, AuthService, Restangular) {
    $scope.credentials = {};
    $scope.login = () => {
        AuthService
            .login($scope.credentials)
            .then(
                () => $state.go('main'),
                (response) => {
                    $scope.errorMsg = response.msg;
                }
            );
    };
};

export default LoginController;