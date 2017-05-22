microservice.service("successService", function($http, $location, loginService,config) {

	

	this.saveOrder = function(jwttoken,callback) {
		
		var responsePromise = $http({
			url : config.protocol+"://"+config.host+":"+config.port+"/order-service/orders/createOrder",
			method : "POST",
			
			headers : {
				'Content-Type' : 'application/json',
				
				'Access-Control-Allow-Origin': config.protocol+"://"+config.host+":"+config.port,
				'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD',
			
				"jwttoken" : jwttoken
			}
		});

		responsePromise.success(function(data, status, headers, config) {
			//alert("Inside Order service with jwt token");
	
			callback(data);

		});
		responsePromise.error(function(data, status, headers, config) {
			alert("AJAX failed! because no webservice is attached yet");
		});

	}
	
	


});
