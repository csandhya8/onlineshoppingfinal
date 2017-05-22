microservice.service('loginService',function($http,$location,config) {
	var protocol = config.protocol;
	var responsePromise =null;
	var responsePromise1 =null;

	var jwttoken = {};
	this.setJwttoken = function(Jwttokendata) {
		jwttoken = Jwttokendata;
	}

	this.getJwttoken = function() {
		return jwttoken;
	}

	var  isLogin ={}
	this.setIsUserLogin  =function(isUserloggedin){
		isLogin  = this.isUserloggedin;
	}
	
	this.getIsUserLogin  =function(){
		return isLogin;
	}
	
	
	
this.getDisplayName = function(username, password, callback){

	
	var user = {
			"userName" : username,
			"password" : password
		};	
	

	responsePromise1 = $http({
		url :config.protocol+"://"+config.host+":"+config.port+"/customer-service/customer/getCust",
		//url : "http://localhost:8223/customer/getCust",
		method : "POST",
		data : user,
		headers : {
			'Content-Type' : 'application/json',
			
			'Access-Control-Allow-Origin': config.protocol+"://"+config.host+":"+config.port,
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD'
			
		}
		
	});
	
	
	
	responsePromise1.success(function(data, status, headers, config) {
		
	
		callback(data);		
			

		});
		responsePromise1.error(function(data, status, headers, config) {
			alert("AJAX failed! because no webservice is attached yet in getting firstName: "+responsePromise);
		});
	
};

	this.generateJwtToken = function(username, password, callback) {
	
	
		
		var user = {
				"userName" : username,
				"password" : password
			};	
		
		
		
	

		
		responsePromise = $http({
			url : config.protocol+"://"+config.host+":"+config.port+"/jwt-service/loginService/generateToken",
			//url : "http://localhost:8221/loginService/generateToken",
			method : "POST",
			data : user,
			headers : {
				'Content-Type' : 'application/json',
				
				'Access-Control-Allow-Origin': config.protocol+"://"+config.host+":"+config.port,
				'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD'
				
			}
			
		});

		
		responsePromise.success(function(data, status, headers, config) {
			//alert("jwt token= "+data);
			callback(data);	
	
		});
		responsePromise.error(function(data, status, headers, config) {
			alert("AJAX failed! because no webservice is attached yet in login service generate jwt token: "+responsePromise);
		});

	}

});
