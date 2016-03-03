'use strict';

(function() {

  class StoreController {
    /*@ngInject*/
    constructor($state, $http) {
      console.log('StoreController is alive!');
      this._$state = $state;
      this._$http = $http;
      this.getBooks();
    }
    getBooks() {
      this._$http.get('/api/books')
      .then((response) => {
        this.books = response.data;
      });
    };
  }

  angular.module('mebooksApp')
    .controller('StoreController', StoreController);
})();
