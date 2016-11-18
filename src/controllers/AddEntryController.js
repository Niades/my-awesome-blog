const AddEntryController = ($rootScope, $scope, $state, Restangular) => {
    $scope.entry = {};
    $scope.save = () => {
        Restangular
            .all('blog-entry')
            .post($scope.entry)
            .then(() => {
                $rootScope.$broadcast('blog-entry:created');
                $state.go('main');
            });
    };
};

export default AddEntryController;