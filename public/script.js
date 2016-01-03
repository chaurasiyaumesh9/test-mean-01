var scotchApp = angular.module('scotchApp', ['ngRoute']);


scotchApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		})
		.when('/users', {
			templateUrl : 'pages/users.html',
			controller  : 'usersController'
		})
		.when('/user/:id', {
			templateUrl : 'pages/user.html',
			controller  : 'userController'
		});
});
scotchApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});

scotchApp.controller('usersController', function($scope, $http) {
	$scope.message = 'Fetching and showing user list on this page!';
	
	fetchContactList();
	
	function fetchContactList(){
		$http.get('/users').success( function( response ){
			console.log('i recied the data requested - ', response);
			$scope.contactList = response;
		});
		
		/*$scope.contactList  = [
			{ID:10, name:"UMCH", email:"chaurasiyaumesh@gmail.com", number:"123344"},
		{ID:1, name:"UMCH", email:"dgd@gmail.com", number:"123344"},
		{ID:2, name:"fe", email:"dsfs@gmail.com", number:"123344"},
		{ID:3, name:"thyrt", email:"chaurayuytsiyaumesh@gmail.com", number:"123344"},
		{ID:4, name:"rr", email:"fefw@gmail.com", number:"123344"},
		{ID:10, name:"UMCH", email:"chaurasiyaumesh@gmail.com", number:"123344"},
		{ID:1, name:"UMCH", email:"dgd@gmail.com", number:"123344"},
		{ID:2, name:"fe", email:"dsfs@gmail.com", number:"123344"},
		{ID:3, name:"thyrt", email:"chaurayuytsiyaumesh@gmail.com", number:"123344"},
		{ID:4, name:"rr", email:"fefw@gmail.com", number:"123344"},
		{ID:10, name:"UMCH", email:"chaurasiyaumesh@gmail.com", number:"123344"},
		{ID:1, name:"UMCH", email:"dgd@gmail.com", number:"123344"},
		{ID:2, name:"fe", email:"dsfs@gmail.com", number:"123344"},
		{ID:3, name:"thyrt", email:"chaurayuytsiyaumesh@gmail.com", number:"123344"},
		{ID:4, name:"rr", email:"fefw@gmail.com", number:"123344"}];
		*/
	}

});

scotchApp.controller('userController', function($scope,  $http, $routeParams) {
	$scope.message = 'This is a individual user page!';
	var userId = $routeParams.id;

	fetchContactById( userId );
	
	function fetchContactById( id ){
		$http.get('/user/' + id  ).success( function( response ){
			$scope.contact = response;
		});
	}

	$scope.submitForm = function(){
		$http.post('/user/' + $scope.contact.ID, $scope.contact ).success( function( response ){
			console.log('data posted : ' , response);
		});
	}

	function updateContactById(){
		
	}

});

