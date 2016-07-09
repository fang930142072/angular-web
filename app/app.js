(function (angular) {
    "use strict";

    // start your ride
    var app = angular.module('moviecat',[

    

    	'moviecat.http-server',//jsonp封装
    	'moviecat.detail',//详情页
    	'moviecat.home',//首页
        'moviecat.list',//其他页
        'moviecat.auto'
        

    ]);
    
    
    //搜索模块
    app.controller('mainController',['$scope','$location',function($scope,$location){
    	$scope.query='';
    	$scope.search = function(){
//  		/v2/movie/search?q={text}
			$location.url('/search?q='+$scope.query);
    	};
    }])
})(angular);