'use strict';

angular.module('guidbookApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/chapter/:chapterId', {
        controller: 'ChaptersController',
        templateUrl: 'view/chapters.html'
      })
      .when('/addNote/:chapterId', {
        controller: 'AddNoteController',
        templateUrl: 'view/addNote.html'
      })
      .when('/deleteNote/:chapterId/:noteId', {
        controller: 'DeleteNoteController',
        templateUrl: 'view/addNote.html'
      })
      ;
      };

      var Guidebook = angular.module('Guidbook', []).config(guidebookConfig);
  
