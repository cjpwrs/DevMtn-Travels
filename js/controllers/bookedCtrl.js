/**
 * Created by cjpowers on 5/30/16.
 */
angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv){
    $scope.packages = mainSrv.travelInfo;
    $scope.Package = '';

    if($stateParams.id){
        console.log("Entered");
        for(var i = 0; i < $scope.packages.length; i++){
            console.log($scope.packages[i]);
            if($stateParams.id == $scope.packages[i].id){
                $scope.Package = $scope.packages[i];
            }
        }
        console.log($scope.Package);
    }

})