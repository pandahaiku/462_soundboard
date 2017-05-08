var app = angular.module('sbApp',[]);

app.controller('sbController', function($scope, $http) {

    $scope.name = 'Soundboard';

});

app.controller('jController', function($scope, $http) {

    $scope.name = 'Journal';

});