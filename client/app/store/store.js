'use strict';

angular.module('mebooksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('store', {
        url: '/store',
        templateUrl: 'app/store/store.html',
        controller: 'StoreCtrl'
      });
  });
