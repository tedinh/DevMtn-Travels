angular.module('devmtnTravel').controller('bookedController', function($scope, mainSrv, $state){
var packages = mainSrv.packageInfo;
for  (var i = 0; i < packages.length; ++i){
  if(packages[i].id === Number.parseInt($state.params.id)){
    $scope.package = packages[i];
  }
};


})
