angular
    .module('App')
    .controller('EditorController', EditorController);


function EditorController($scope) {
    $scope.editing = true;

    /*$scope.state = {
        editing: false
    };*/
}