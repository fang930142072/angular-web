(function(angular){
	//创建首页的模块
	var app = angular.module('moviecat.home',['ngRoute']);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/home_page',{
			templateUrl:'./home_page/view.html'
		})
	}])
})(angular)
