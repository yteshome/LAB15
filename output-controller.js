var app = angular.module('madlibModule' );

app.controller('outputCtrl', function($scope, guesswords) {

  $scope.pullWords = guesswords.getWords();

  $scope.sayHi = function() {
    guesswords.sayHelloToUser();
  }

});
