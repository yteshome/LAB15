var app = angular.module('madlibModule');

app.controller('inputCtrl', function($scope, guesswords, $location) {

  $scope.submitWords = function(wordsObj) {
    guesswords.setWords(wordsObj);
    $location.path('/output');
  };

  $scope.sayHi = function() {
    wordFactory.sayHelloToUser();
  }

})
