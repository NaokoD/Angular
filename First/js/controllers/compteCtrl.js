'use strict';

myApp.controller('compteCtrl', function($scope, Comptes) {
    $scope.comptes = Comptes.comptes;
});
