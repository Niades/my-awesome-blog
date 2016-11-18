const MainController = ($scope, Restangular) => {
    let refresh = () => {
        Restangular
            .all('blog-entry')
            .getList()
            .then((entries) => $scope.entries = entries);
    };

    $scope.$on('blog-entry:created', refresh);

    refresh();
};


export default MainController;