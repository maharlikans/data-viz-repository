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
        title: 'Enactive Mandala: Sonigraphical Brainwave Display',
        authors: [
          'Lyons, M. J.',
          'Tokunaga, T.'
        ],
        url: 'http://dl.acm.org/citation.cfm?id=2542306',
        abs: 'We are exploring the design and implementation of artificial expressions, kinetic audio-visual representations of real-time physiological data which reflect emotional and cognitive state. We demonstrate the Enactive Mandala, which maps EEG signals to ambient audio-visual music. Transparent real-time feedback of brainwave qualities supports intuitive insight into the connection between thoughts and physiological states.'
      },
      {
        title: 'Real-time EEG-based human emotion recognition and visualization.',
        authors: [
          'Liu, Y.',
          'Sourina, O.',
          'Nguyen, M. K.'
        ],
        url: 'http://dl.acm.org/citation.cfm?id=2028496',
        abs: "Since emotions play an important role in the daily life of human beings, the need and importance of automatic emotion recognition has grown with increasing role of human computer interface applications. Emotion recognition could be done from the text, speech, facial expression or gesture. In this paper, we concentrate on recognition of 'inner' emotions from electroencephalogram (EEG) signals. We propose real-time fractal dimension based algorithm of quantification of basic emotions using Arousal-Valence emotion model. Two emotion induction experiments with music stimuli and sound stimuli from International Affective Digitized Sounds (IADS) database were proposed and implemented. Finally, the real-time algorithm was proposed, implemented and tested to recognize six emotions such as fear, frustrated, sad, happy, pleasant and satisfied. Real-time applications were proposed and implemented in 3D virtual environments. The user emotions are recognized and visualized in real time on his/her avatar adding one more so-called 'emotion dimension' to human computer interfaces. An EEG-enabled music therapy site was proposed and implemented. The music played to the patients helps them deal with problems such as pain and depression. An EEG-based web-enable music player which can display the music according to the user's current emotion states was designed and implemented."
      },
      {
        title: 'Multichannel EEG Visualization',
        authors: [
          'Caat, M.'
        ],
        url: 'http://dissertations.ub.rug.nl/faculties/science/2008/m.ten.caat/',
        abs: 'Not available.'
      },
      {
        title: 'Performance visualization: a new challenge to music through visualization.',
        authors: [
          'Hiraga, R.',
          'Mizaki, R.', 
          'Fujishiro, I.'
        ],
        url: 'http://dl.acm.org/citation.cfm?id=641007.641054&coll=DL&dl=ACM&CFID=616677840&CFTOKEN=14243115',
        abs: 'This paper describes performance visualization with its purposes, significance, and our prototype system. Performance visualization provides us with a new user interface for music systems, a non-subjective explanation and judgment for musical expression, and a visual aid to understand, analyze, and compare performances and their musical structures. It will also introduce a more challenging research on designing a musical data mining interface not by tags nor by contents but by the mood. Other challenges include finding qualitative characteristics of music with analysis methods for information visualization and synesthesia between visualized and sonified information. We will describe which information should be shown on the visualized figures for expressive performance. Then we will show our prototype system to visualize expressive performance consisting of several instruments.'
      },
      {
        title: 'Performance visualization: a new challenge to music through visualization.',
        authors: [
          'Hiraga, R.',
          'Mizaki, R.', 
          'Fujishiro, I.'
        ],
        url: 'http://dl.acm.org/citation.cfm?id=641007.641054&coll=DL&dl=ACM&CFID=616677840&CFTOKEN=14243115',
        abs: 'This paper describes performance visualization with its purposes, significance, and our prototype system. Performance visualization provides us with a new user interface for music systems, a non-subjective explanation and judgment for musical expression, and a visual aid to understand, analyze, and compare performances and their musical structures. It will also introduce a more challenging research on designing a musical data mining interface not by tags nor by contents but by the mood. Other challenges include finding qualitative characteristics of music with analysis methods for information visualization and synesthesia between visualized and sonified information. We will describe which information should be shown on the visualized figures for expressive performance. Then we will show our prototype system to visualize expressive performance consisting of several instruments.'
      },
      {
        title: 'Dive in!: enabling progressive loading for real-time navigation of data visualizations',
        authors: [
          'Glueck, M.',
          'Khan, A.', 
          'Wigdor, D. J.'
        ],
        url: 'http://dl.acm.org/citation.cfm?id=2556288.2557195&coll=DL&dl=ACM&CFID=616677840&CFTOKEN=14243115',
        abs: 'We introduce Splash, a framework reducing development overhead for both data curators and visualization developers of client-server visualization systems. Splash streamlines the process of creating a multiple level-of-detail version of the data and facilitates progressive data download, thereby enabling real-time, on-demand navigation with existing visualization toolkits. As a result, system responsiveness is increased and the user experience is improved. We demonstrate the benefit of progressive loading for user interaction on slower networks. Additionally, case study evaluations of Splash with real-world data curators suggest that Splash supports iterative refinement of visualizations and promotes the use of exploratory data analysis.'
      }
    ];
  });
