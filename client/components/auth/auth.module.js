'use strict';

angular.module('mebooksApp.auth', [
  'mebooksApp.constants',
  'mebooksApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
