'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
  $http.get('movements/movements.json').success(function(data) {
    $scope.movements = data;
  });

  $scope.orderProp = 'identifier';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];
