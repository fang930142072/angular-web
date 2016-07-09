(function (angular) {
    "use strict";

    // start your ride
    var app = angular.module('moviecat',[
        'moviecat.auto',
    	'moviecat.http-server',
    	'moviecat.home',
        'moviecat.top250'

    ]);
})(angular);