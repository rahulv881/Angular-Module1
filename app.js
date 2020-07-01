(
	function (){

		angular.module("LunchCheck",[])
		.controller("LunchCheckController", LunchCheckController);

		LunchCheckController.$inject =  ['$scope'];

		function LunchCheckController($scope)
		{
			$scope.displayMessage = function(){

			  $scope.values = $scope.values.split(',');

				if( $scope.values.length === 1 && $scope.values[0]=== '')
				{
					$scope.message = "Emtpy";
				}
				else if($scope.values.length <= 3)
				{
					$scope.message = "Enjoy!";
					//$scope.message = $scope.values.length;
				}
				else
				{
					$scope.message = "Too much";
					//$scope.message = $scope.values.length;
				}

			};
		};
})();
