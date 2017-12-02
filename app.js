(function(){

  'use strict';

   angular.module('TableApp',[])

    .controller('TableController',TableController);

     TableController.$inject = ['$scope'];

     function TableController($scope){

          $scope.data = {"UserMobileInfoDetails" : [{"UserId" : "U123456", "RouteManifestId" : "LEMP-84000822-10100011089",
													"MobileDeviceId" : "MW72347477847", "Timestamp" : "20171130095555", "Status" : "ACTIVE"},
													{"UserId" : "U123456", "RouteManifestId" : "LEMP-84000822-10100011089",
													"MobileDeviceId" : "MW72347477847", "Timestamp" : "20171130095555", "Status" : "ACTIVE"},
													{"UserId" : "U123456", "RouteManifestId" : "LEMP-84000822-10100011089",
													"MobileDeviceId" : "MW72347477847", "Timestamp" : "20171130095555", "Status" : "ACTIVE"}]
						}
        
     };

})();
