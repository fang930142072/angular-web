/**
 * Created by 我就是我 on 2016/7/4.
 */
(function (angular) {
    var app = angular.module('moviecat.list', [
        'ngRoute',
        'moviecat.services.http']);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:category/:page?', {
                controller: 'movie_listController',
                templateUrl: 'movie_list/view.html'
            }
        );
    }]);
})(angular)
