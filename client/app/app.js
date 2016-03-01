'use strict';

angular.module('mebooksApp', [
  'mebooksApp.auth',
  'mebooksApp.admin',
  'mebooksApp.character',
  'mebooksApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngAnimate'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
