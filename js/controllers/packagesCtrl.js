/**
 * Created by cjpowers on 5/30/16.
 */
angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrv){
    $scope.packages = mainSrv.travelInfo;
    $scope.Package = '';

    if($stateParams.id){
        for(var i = 0; i < $scope.packages.length; i++){
            if($stateParams.id === $scope.packages[i].id){
                $scope.Package = $scope.packages[i];
            }
        }
    }
})