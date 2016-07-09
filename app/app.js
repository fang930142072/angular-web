(function (angular) {
    "use strict";

    // start your ride
    var app = angular.module('moviecat',[
    	'moviecat.http-server',
        'moviecat.top250',
        'moviecat.auto'
    ]);
})(angular);