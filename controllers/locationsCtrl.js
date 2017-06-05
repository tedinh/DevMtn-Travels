angular.module('devmtnTravel').controller('locationsController', function($scope, mainSrv){

$scope.locations = mainSrv.travelInfo;


})
