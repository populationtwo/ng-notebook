angular
    .module('App')
    .controller('EditorController', EditorController);


function EditorController($scope, $http) {
    $scope.editing = true;

    $http.get('/notes').success(function (data) {
        $scope.notes = data;
    }).error(function (err) {
        $scope.error = "Could not load notes";

    })

}