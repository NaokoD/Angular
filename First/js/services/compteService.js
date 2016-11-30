myApp.service('compteService', function($http) {
    this.url = 'http://10.3.104.57:8081/netbank/rest/comptes';
    this.get = function(id) {
        if (id === undefined) {
            return $http.get(this.url + "/lister?userId=1").then(function(response) {
                return response.data;
            });
        } else {
            return $http.get(this.url + "/lister?userId=" + id).then(function(response) {
                return response.data;
            });
        }
    };
});
