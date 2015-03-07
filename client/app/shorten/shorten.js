angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = {url: null};

  $scope.addLink = function(){
    var link = $scope.link;
    $scope.link = {url: ''};
    return Links.addLink(link);

  }

});
