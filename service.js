var app = angular.module('madlibModule');

app.service('guesswords', function() {

  var words = {};

  this.getWords = function() {
    return words;
  }

  this.setWords = function(wordsObj) {
    words = wordsObj;
    // console.log('service has received the object', words);
  }

  this.sayHelloToUser = function() {
    alert('Hello user!');
  }

});
