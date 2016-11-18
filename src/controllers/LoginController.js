function LoginController($scope, $state, Restangular) {
    $scope.credentials = {};
    $scope.login = () => {
        Restangular
            .all('login')
            .customPOST($scope.credentials)
            .then((response) => {
                if(response.status === 'ok') {
                    $state.go('main');
                } else {
                    $scope.errorMsg = response.msg;
                }
            });
    };
};

export default LoginController;