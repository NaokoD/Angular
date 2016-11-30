myApp.config(routesConfig);

function routesConfig($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/comptes', {
      templateUrl: 'views/comptes.html',
      controller : 'compteCtrl'
    })
    .when('/operations',{
    templateUrl: 'views/operations.html',
    controller : 'operationCtrl'
  })
    .otherwise({
      redirectTo:"/"
    });
}
