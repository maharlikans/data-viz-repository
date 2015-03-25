'use strict';

/**
 * @ngdoc function
 * @name dataVizRepositoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dataVizRepositoryApp
 */
angular.module('dataVizRepositoryApp')
.controller('LinksCtrl', function ($scope, $controller) {
  var childScope = $scope.$new(true);
  $controller('ChunkCtrl', {$scope: childScope});
  $scope.links = [
  {
    title: 'Superconductor',
    url: 'http://superconductor.github.io/superconductor/',
    description: 'Create real time 3D interactive data visualizations with up to 1,000,000 data points. Utilizes WebCL, WebGL, and web workers. Only available for Mac OS.'
  },
  {
    title: 'Epoch',
    url: 'http://fastly.github.io/epoch/',
    description: 'A general purpose real-time charting library for building beautiful, smooth, and high performance visualizations. Uses d3 and HTML5 Canvas.'
  },
    {
      title: 'vvvv.js',
      url: 'http://www.vvvvjs.com/',
      description: 'VVVV.js is a great toolkit for prototyping and developing rich data visualization, advanced user interfaces, games, and more all by connecting nodes, spreading slices and letting the data flow. '
    },
    {
      title: 'Processing.js',
      url: 'http://processingjs.org/',
      description: 'Processing.js is a visual programming language originally based on Java used to make visualizations of many kinds. It is especially good for beginners to start with.'
    },
      {
        title: 'Audio Landscapes',
        url: 'http://dan.nea.me/audiolandscape/',
        description: 'Abstract landscapes created from music pre-processing!'
      },
      {
        title: 'Abstract Birds',
        url: 'http://www.abstractbirds.com/',
        description: 'An artistic duo who does abstract visualizations of music and other things!'
      }
  ];
  $scope.rowLinks = childScope.chunk($scope.links, 3);
});
