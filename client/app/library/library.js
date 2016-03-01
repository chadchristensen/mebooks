'use strict';

angular.module('mebooksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('library', {
        url: '/library',
        templateUrl: 'app/library/library.html',
        controller: 'LibraryCtrl',
        controllerAs: 'vm'
      });
  });
