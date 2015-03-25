'use strict';

/**
 * @ngdoc function
 * @name dataVizRepositoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dataVizRepositoryApp
 */
angular.module('dataVizRepositoryApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    this.nav = ['Home', 'Links', 'Papers', 'Videos'];

    this.isNavActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  });
