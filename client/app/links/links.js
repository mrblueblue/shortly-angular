angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks().then(function(data){
      $scope.data.links = data.data;
    });
  };

  $scope.init = function(){
    $scope.getLinks();
  };

  $scope.init()

});
