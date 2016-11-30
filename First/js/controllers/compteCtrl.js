'use strict';

myApp.controller('compteCtrl', function($scope, Comptes, compteService, $routeParams) {
    $scope.comptes = [];
    console.log("First Control");
    console.log($scope.comptes);
    console.log($routeParams.id);
    if ($routeParams.id == 4){
        $scope.comptes = Comptes.comptes;
      }else{
        compteService.get($routeParams.id).then(function(data) {
            $scope.data = data.liste;
            console.log($scope.data);
            for (let i = 0; i < $scope.data.length; i++) {
                $scope.comptes.push($scope.data[i]);
            }
        });
      }
    // $scope.comptes = Comptes.comptes;

    console.log($scope.comptes);
});
