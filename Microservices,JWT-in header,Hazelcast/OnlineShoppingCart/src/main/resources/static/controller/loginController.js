microservice.controller('loginController',function($scope,$location,loginService,$cookieStore,$rootScope,$window){
 	$scope.error = false;
 	$rootScope.isLogin = false;
 	$rootScope.isLogout=false;
 	$rootScope.customerName=null;
 	$scope.fistName=null;
 	$scope.lastName= null;
	$scope.success=function(data){
		$scope.msg=data;
		
	}
		
	$scope.login = function(){
		
		
		loginService.getDisplayName($scope.username, $scope.password, function(data){
			
			if(data!=null){
		/*	angular.forEach(data, function(value, key) {
				 if(key=="userName"&&value==$scope.username){
					 angular.forEach(data, function(value, key) { 
					 if(key=="firstName")
						 $scope.fistName=value;
					 if(key=="lastName")
						 $scope.lastName=value;
					 
					 if(key=="customerid")
						 $scope.customerid=value;
					 
					 });	*/
					//alert("firstName= "+$scope.fistName+" "+"lastName= "+$scope.lastName);
			
					 $window.sessionStorage.setItem("user_Details", JSON
			                    .stringify(data));
					
					 $window.sessionStorage.setItem("customerName", JSON
			                    .stringify(data.fistName+" "+data.lastName));
					
				 }
			/*	});
		*/
		});
		
		

			loginService.generateJwtToken($scope.username, $scope.password, function(data){
				//alert("inside generating token");
			
			//alert("Token : "+data);
			
				if (data!= null && data!="" ) {
					 /*$window.sessionStorage.setItem("user_Details", JSON
			                    .stringify($scope.username));*/
					$cookieStore.put('cookiejwtToken',data);
					loginService.setJwttoken(data);					
				
					if($cookieStore.get('cookiejwtToken') !=null){
					
						
						$scope.isLogin = true;
						$scope.isLogout=true;
						$scope.afterlogin="loggedin";
						$location.path("/success");
						window.location.reload(); 
						$scope.token=$cookieStore.get('cookiejwtToken');
						
					}
				}
				
				else{
					
					alert("Username or password is wrong!!!!");
				}
					
				});
			
			
			
			
	
	};

	
	
    $scope.logout = function() {
    	 $cookieStore.remove('cookiejwtToken');
         
		 $location.path("/logout");
		 window.location.reload();
	};
		
	
});

