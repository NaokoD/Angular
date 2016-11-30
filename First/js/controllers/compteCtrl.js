'use strict';

myApp.controller('compteCtrl', function($scope, Comptes, compteService, $routeParams) {
    $scope.comptes = {};
    $scope.comptes = Comptes.comptes;
    compteService.get($routeParams.id).then(function(data) {
        $scope.data = data.liste;
        console.log($scope.data);
        for (let i = 0; i < $scope.data.length; i++) {
            $scope.comptes.push($scope.data[i]);
        }
    });
    console.log($scope.comptes);
});
