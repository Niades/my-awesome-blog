const MainController = ($scope, Restangular) => {
    Restangular
        .all('blog-entry')
        .getList()
        .then((entries) => $scope.entries = entries);
};


export default MainController;