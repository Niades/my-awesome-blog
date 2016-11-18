const AddEntryController = ($scope, $state, Restangular) => {
    $scope.entry = {};
    $scope.save = () => {
        Restangular
            .all('blog-entry')
            .post($scope.entry)
            .then(() => {
                $state.go('main');
            });
    };
};

export default AddEntryController;