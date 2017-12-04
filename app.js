(function(){

  'use strict';

   angular.module('TableApp',[])

    .controller('TableController',TableController);

     TableController.$inject = ['$scope','$http'];

     function TableController($scope,$http){

          $scope.data = null;
		  $scope.searchedUserId = '';
		  					
		$scope.fetchUserDetails = function(){
						
						$http({
									method: 'GET',
									url: 'https://am-we-v13-01.azure-api.net/DB/MMS/v1.0/Tasks/internal/userDetails',
									params: {UserId: $scope.searchedUserId},
									headers: {
										'Ocp-Apim-Trace' : true,
										'Ocp-Apim-Subscription-Key' : 'a692637f62fd49638022f101ff42a72d'
									}
							}).then(function successCallback(response) {
							// this callback will be called asynchronously
								$scope.data = response; 
							
							}, function errorCallback(response) {
    // called asynchronously if an error occurs
    
							});
						
		}		
        
     };

})();
