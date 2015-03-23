'use strict';

/**
 * @ngdoc function
 * @name dataVizRepositoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dataVizRepositoryApp
 */
angular.module('dataVizRepositoryApp')
  .controller('PapersCtrl', function ($scope) {
    $scope.papers = [
      {
        title: 'Build an operating system from scratch: a project for an introductory operating systems course',
        url: 'http://dl.acm.org/citation.cfm?id=1509022&CFID=616677840&CFTOKEN=14243115',
        abs: 'This paper describes a semester project where students design an operating system from the ground-up, capable of booting from a floppy disk on an actual machine. Unlike previous projects of this kind, this project was designed for students with only one semester of programming experience and no prior exposure to data structures, assembly language, or computer organization. Students nevertheless wrote a full system consisting of system calls, program execution, a file system, a command-line shell, and support for multiprocessing. The project was assigned to a class and successfully completed by nearly every student.'
      },
      {
        title: 'Build an operating system from scratch: a project for an introductory operating systems course',
        url: 'http://dl.acm.org/citation.cfm?id=1509022&CFID=616677840&CFTOKEN=14243115',
        abs: 'This paper describes a semester project where students design an operating system from the ground-up, capable of booting from a floppy disk on an actual machine. Unlike previous projects of this kind, this project was designed for students with only one semester of programming experience and no prior exposure to data structures, assembly language, or computer organization. Students nevertheless wrote a full system consisting of system calls, program execution, a file system, a command-line shell, and support for multiprocessing. The project was assigned to a class and successfully completed by nearly every student.'
      },
      {
        title: 'Build an operating system from scratch: a project for an introductory operating systems course',
        url: 'http://dl.acm.org/citation.cfm?id=1509022&CFID=616677840&CFTOKEN=14243115',
        abs: 'This paper describes a semester project where students design an operating system from the ground-up, capable of booting from a floppy disk on an actual machine. Unlike previous projects of this kind, this project was designed for students with only one semester of programming experience and no prior exposure to data structures, assembly language, or computer organization. Students nevertheless wrote a full system consisting of system calls, program execution, a file system, a command-line shell, and support for multiprocessing. The project was assigned to a class and successfully completed by nearly every student.'
      }
    ];
  });
