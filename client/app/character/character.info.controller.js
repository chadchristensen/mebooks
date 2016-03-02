'use strict';

(function() {

  class CharacterInfoController {
    /*@ngInject*/
    constructor() {
      console.log('CharacterInfoController is alive!');
    }
  }

  angular.module('mebooksApp.character')
    .controller('CharacterInfoController', CharacterInfoController);

})();
