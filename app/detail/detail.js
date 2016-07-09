(function(angular){
	var app = angular.module('moviecat.detail',['ngRoute','moviecat.http-server']);
	
	app.config(['$routeProvider',function($routeProvider){
//		/details
		$routeProvider.when('/details/:id',{
			controller:'detailsController',
			templateUrl:'detail/view.html'

		});
		
		
		
	}])
	app.controller('detailsController',['$scope','$routeParams','MyService',
			function($scope,$routeParams,MyService){
				console.log($routeParams)
				MyService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{},
				function(data){
//					console.log(data)
					$scope.data = data;
					$scope.$apply();
				})
			}
		])
	//  app.controller('detailController', [
//      '$scope',
//      '$routeParams',
//      'HttpService',
//      function($scope, $routeParams, HttpService) {
//          // httpService
//          
//          HttpService.jsonp('http://api.douban.com/v2/movie/subject/' + $routeParams.id, {},
//              function(data) {
//                  console.log(data)
//              });
//      }
//  ]);
})(angular)
//(function(angular) {
//  // 创建模块
//  var app = angular.module('moviecat.detail', [
//      'ngRoute', 'moviecat.http-server'
//  ]);
//
//  // 路由配置
//  app.config(['$routeProvider', function($routeProvider) {
//      $routeProvider.when('/detail/:id', {
//          controller: 'detailController',
//          templateUrl: 'detail/view.html'
//      });
//  }]);
//
//  // 创建控制器

//})(angular)
