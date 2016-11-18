const EntryDetailsController = ($scope, $stateParams, Restangular) => {
    let refresh = () => {
        Restangular
            .one('blog-entry', id)
            .get()
            .then((entry) => $scope.entry = entry);
    };

    let id = $stateParams.id;
    $scope.newComment = {};

    $scope.addComment = () => {
        let comment = Restangular.copy($scope.newComment);
        comment.entry = id;
        Restangular
            .all('entry-comment')
            .post(comment)
            .then(() => {
                refresh();
                $scope.newComment = {};
            });
    };

    refresh();
};

export default EntryDetailsController;