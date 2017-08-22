var app = angular.module('plunker', []);

app.controller('MainCtrl', ['$scope', '$timeout', '$http', '$interval', function($scope, $timeout, $http, $interval) {
    var init = function() {
        $scope.country = "INDIA";
    };

    init();
}]);
