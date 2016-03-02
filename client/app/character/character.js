'use strict';

angular.module('mebooksApp.character')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('character', {
        url: '/character',
        templateUrl: 'app/character/character.html',
        controller:  'CharacterController',
        controllerAs: 'vm',
        abstract: true,
        authenticate: 'character'
      })
      .state('character.info', {
        url: '/info',
        templateUrl: 'app/character/character.info.html',
        authenticate: 'character'
      })
      .state('character.body', {
        url: '/body',
        templateUrl: 'app/character/character.body.html',
        authenticate: 'character'
      })
      .state('character.outfit', {
        url: '/outfit',
        templateUrl: 'app/character/character.outfit.html',
        authenticate: 'character'
      });

      // set default child state
      $urlRouterProvider.when('/character', '/character/info');
  });
