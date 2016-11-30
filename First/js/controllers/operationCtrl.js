'use strict';

myApp.controller('operationCtrl', function($scope, Operations, operationService, $routeParams) {
    $scope.operations = [];
    console.log("First Control");
    console.log($scope.operations);
    console.log($routeParams.id);
    console.log($routeParams.compteid);
    if ($routeParams.id == 4){
        $scope.operations = Operations.operations;
      }else{
        operationService.get($routeParams.id, $routeParams.compteid).then(function(data) {
            $scope.data = data.liste;
            console.log($scope.data);
            for (let i = 0; i < $scope.data.length; i++) {
                $scope.operations.push($scope.data[i]);
            }
        });
      }
    // $scope.comptes = Comptes.comptes;

    console.log($scope.operations);
});
