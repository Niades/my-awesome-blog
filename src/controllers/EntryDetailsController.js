const EntryDetailsController = ($scope, $stateParams, Restangular) => {
    let id = $stateParams.id;
    Restangular
        .one('blog-entry', id)
        .get()
        .then((entry) => $scope.entry = entry);
};

export default EntryDetailsController;