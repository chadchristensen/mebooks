'use strict';

(function() {

  class CharacterController {
    /*@ngInject*/
    constructor($state, $http) {
      console.log('CharacterController is alive!');
      this._$state = $state;
      this._$http = $http;
      this.getCharacter();


      // var character = {
      //   name: ('' || this.character.name),
      //   hometown: ('' || this.character.hometown),
      //   friendname: ('' || this.character.friendname) ,
      //   headoption: ('head-option-1' || this.character.headoption),
      //   eyesoption: ('eyes-option-1' || this.character.eyesoption),
      //   mouthoption: ('mouth-option-1' || this.character.mouthoption),
      //   torsooption: ('torso-option-1' || this.character.torsooption),
      //   shirtoption: ('shirt-option-1' || this.character.shirtoption),
      //   shortsoption: ('shorts-option-1' || this.character.shortsoption),
      //   shoesoption: ('shoes-option-1' || this.character.shoesoption)
      // } // End of character
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

    getCharacter() {
      this._$http.get('/api/characters')
      .then((response) => {
        this.characters = response.data;
        console.log(this.characters);
      });
    } // End of getCharacter

    // saveCharacter() {
    //   this.$http
    // } // End of saveCharacter

    changeClass(option, part) {
      // Get .charhead element from character display side
      var element = angular.element(part);
      element.removeClass();
      element.addClass(option);

      if (part === "#charhead") {
        var optionNumber = option.substr(-1);
        var torso = angular.element("#chartorso");
        torso.removeClass();
        torso.addClass("torso-option-" + optionNumber);
      };
    }; // End of changeClass
  } // End of CharacterController

  angular.module('mebooksApp.character')
    .controller('CharacterController', CharacterController);

})();
