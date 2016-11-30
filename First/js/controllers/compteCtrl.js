'use strict';

myApp.controller('compteCtrl', function($scope) {
    $scope.comptes = [{
        id: 1,
        libelle: 'courant',
        solde: 202.50
    }, {
        id: 2,
        libelle: 'epargne',
        solde: 350.50
    }];
});
