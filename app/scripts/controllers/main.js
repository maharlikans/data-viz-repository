'use strict';

/**
 * @ngdoc function
 * @name dataVizRepositoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dataVizRepositoryApp
 */
angular.module('dataVizRepositoryApp')
  .controller('MainCtrl', function ($scope) {
    $scope.active = 1;
    $scope.nav = ["Home", "Links", "Papers", "Videos"];
    $scope.isNavActive = function(isNavActive) {
      return isNavActive === $scope.active;
    };
    $scope.setNavActive = function(setNavActive) {
      $scope.active = setNavActive;
    };

  });
