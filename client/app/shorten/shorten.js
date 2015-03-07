angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = {url: $location.path};

  $scope.addLink = function(newLink){
    return Links.addLink(newLink);
  }

});
