/**
 * Created by 我就是我 on 2016/7/4.
 */

(function (angular) {
    var moudule = angular.module("moviecat.list",['ngRoute','moviecat.http-server']);
    //module.controller("contr",["$scope", function ($scope) {
    //
    //}])
    moudule.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when('/:movreType/:page?',{
            // 指定一个模板路径,注意，模板字符串文件的路径是主模块所在目录开始计算.是相对于主模块文件所在路径计算的.
            templateUrl:'./view.html',
            controller:'listController'
        })
    }])

    moudule.controller('listController',['$scope','MyService',
        '$routeParams',//把路由参数中的所有参数添加到自己的对象中
        '$route',//改变url锚点值的参数
        function ($scope,MyService,$routeParams,$route) {
        $scope.data;
        $scope.loading = true;
        var count =10;
        $scope.page = ($routeParams.page||'1')-0;
        var start = ($scope.page-1)*count;
        
        
        $scope.mov = $routeParams.movreType;
        //angular get请求
        //$http.get('/AngularJS/moviecat%20start/app/json.json').then(
        //    function (response) {
        //        console.log(response)
        //    $scope.data = response.data;
        //}, function (err) {
        //
        //})
    //    angular jsonp请求
    //    $http.jsonp('https://api.douban.com/v2/movie/in_theaters').then(function (data) {
    //        $scope.data = data;
    //    })
          var totalPage = 0;
        //自定义的jsonp请求
        var newurl = 'https://api.douban.com/v2/movie/'+$routeParams.movreType+"?q="+$routeParams.q;
        MyService.jsonp(newurl,
            {start:start,count:count},
            function (data) {
                $scope.data=data;//不能监视变化改变页面数据
                totalPage = Math.ceil($scope.data.total/count);
                $scope.totalPage = totalPage;
                $scope.loading = false;//当获取到数据并且渲染出来后，隐藏遮罩层

//告诉angular数据模型发生改变,改变一次页面数据
                $scope.$apply();
            });

            //单击事件
            $scope.gopage= function (nowPage) {
                if(nowPage<=0||nowPage>totalPage){
                    return;
                }
                $route.updateParams({page:nowPage})

            }

    }])
})(angular)