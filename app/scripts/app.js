'use strict';

/**
 * @ngdoc overview
 * @name dataVizRepositoryApp
 * @description
 * # dataVizRepositoryApp
 *
 * Main module of the application.
 */
angular
  .module('dataVizRepositoryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'LinksCtrl'
      })
      .when('/papers', {
        templateUrl: 'views/papers.html',
        controller: 'PapersCtrl'
      })
      .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
