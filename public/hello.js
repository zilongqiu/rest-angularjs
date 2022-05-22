angular.module('demo', [])
    .controller('Hello', function($scope, $http) {
        $http.get('http://localhost:8081/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
    });
