'use strict';

/**
 * @ngdoc function
 * @name dataVizRepositoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dataVizRepositoryApp
 */
angular.module('dataVizRepositoryApp')
  .controller('VideosCtrl', function ($scope) {
    $scope.videos = [
      {
        title: 'Partitura 001 from Abstract Birds',
        url: 'https://vimeo.com/abstractbirds/partitura001',
        embed: '<iframe src="https://player.vimeo.com/video/23316783?color=ffffff&byline=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/23316783">Partitura 001</a> from <a href="https://vimeo.com/abstractbirds">Abstract Birds</a> on <a href="https://vimeo.com">Vimeo</a>.</p>'
      }
    ];
  })
  .filter('to_trusted', ['$sce', function($sce) {
    return function(text) {
      return $sce.trustAsHtml(text);
    };
  }]);
