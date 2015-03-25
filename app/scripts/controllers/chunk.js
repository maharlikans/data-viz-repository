'use strict';

/**
 * @ngdoc function
 * @name dataVizRepositoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dataVizRepositoryApp
 */
angular.module('dataVizRepositoryApp')
  .controller('ChunkCtrl', function ($scope) {
    $scope.chunk = function (arr, size) {
      var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      return newArr;
    }
  });
