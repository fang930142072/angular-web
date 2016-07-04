/**
 * Created by 我就是我 on 2016/7/4.
 */

var modlue = angular.module("coming_soon",['ngRoute']);
modlue.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/coming_soon',{
        templateUrl:'./coming_soon/coming_soon.js',
        conteoller:'co'
    })
}])
modlue.controller('co',['$scope', function ($scope) {
    
}])