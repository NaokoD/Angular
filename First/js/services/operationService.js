myApp.service('operationService', function($http) {
    this.url = 'http://10.3.104.57:8081/netbank/rest/operations';
    this.get = function(id, idcompte) {
        if (id === undefined || compteid === undefined) {
            return $http.get(this.url + "/lister?userId=1&compteId=15").then(function(response) {
                return response.data;
            });
        } else {
            return $http.get(this.url + "/lister?userId=" + id + "&compteId=" + idcompte).then(function(response) {
                return response.data;
            });
        }
    };
});
