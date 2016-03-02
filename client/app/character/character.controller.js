'use strict';

(function() {

  class CharacterController {
    /*@ngInject*/
    constructor($state) {
      console.log('CharacterController is alive!');
      this._$state = $state;
    }
    goCharInfo() {
      console.log('going to character info state');
      this._$state.go('character.info');
    };

    goCharBody() {
      this._$state.go('character.body');
    };
    goCharOutfit() {
      this._$state.go('character.outfit');
    }
  }

  angular.module('mebooksApp.character')
    .controller('CharacterController', CharacterController);

})();
