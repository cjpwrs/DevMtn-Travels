/**
 * Created by cjpowers on 5/30/16.
 */
angular.module('devmtnTravel').controller('locationsCtrl', function($scope, $stateParams, mainSrv){
    $scope.locations = mainSrv.travelInfo;

})