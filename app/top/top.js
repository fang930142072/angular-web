/**
 * Created by 我就是我 on 2016/7/4.
 */

(function (angular) {
    var mod = angular.module('top',['$ngRoute']);
    mod.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/top250',{
            templateUrl:'./top250/view.html',
            controller:'top'
        })
    }])
    mod.controller('top',['$scope', function ($scope) {
        
    }])
})(angular)