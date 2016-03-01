'use strict';

angular.module('mebooksApp.character')
  .config(function($stateProvider) {
    $stateProvider
      .state('character', {
        url: '/character',
        templateUrl: 'app/character/character.html',
        authenticate: 'character'
      });
  });
