myApp.config(routesConfig);

function routesConfig($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider
    // .when('/comptes', {
    //   templateUrl: 'views/comptes.html',
    //   controller : 'compteCtrl'
    // })
    .when('/comptes/:id', {
      templateUrl: 'views/comptes.html',
      controller : 'compteCtrl'
    })
    .when('/comptes/:id/operations/:compteid',{
    templateUrl: 'views/operations.html',
    controller : 'operationCtrl'
  })
    .otherwise({
      redirectTo:"/"
    });
}
