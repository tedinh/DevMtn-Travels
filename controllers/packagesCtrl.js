angular.module('devmtnTravel').controller('packagesController', function($scope, mainSrv, $stateParams){


$scope.packages = mainSrv.packageInfo.filter(function(c, i, a){
  return c.country === $stateParams.country;
  });
})
