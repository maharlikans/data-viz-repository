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
        title: 'Aaron Koblin: Artfully visualizing our humanity',
        url: 'https://youtu.be/4v4XxlfVk3o',
        embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4v4XxlfVk3o" frameborder="0" allowfullscreen></iframe>'
      },
      {
        title: 'Nathalie Miebach: Art made of storms',
        url: 'https://youtu.be/MbhNaj88uL4',
        embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MbhNaj88uL4" frameborder="0" allowfullscreen></iframe>'
      },
      {
        title: 'Enactive Mandala - Audio-visualizing Brain Waves',
        url: 'https://youtu.be/1Y0BNSbOwQs',
        embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1Y0BNSbOwQs" frameborder="0" allowfullscreen></iframe>'
      },
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
