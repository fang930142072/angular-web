(function (angular) {
    "use strict";

    // start your ride
    var app = angular.module('moviecat',[
        'moviecat.auto',
    	'moviecat.http-server',
    	'moviecat.home',
        'moviecat.top250'

    ]);
    
    app.controller('mainController',['$scope','$location',function($scope,$location){
    	$scope.query='';
    	$scope.search = function(){
//  		/v2/movie/search?q={text}
			$location.url('/search?q='+$scope.query);
    	};
    }])
})(angular);