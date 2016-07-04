/**
 * Created by 我就是我 on 2016/7/4.
 */

(function (angular) {
  var app = angular.module('moviecat.http-server',[]);
    app.service('MyService',['$window',function ($window) {
        this.jsonp=function (url,arg,fn){
            //合并参数到url(传递的参数)
            var quertString ='';
            for(var key in arg){
                quertString+=key+"="+arg[key]+"&";
            }
            url = url +"?"+quertString;
            //传递过来的函数给个名字
            $window.myCallback = fn;
            var mycal = 'jsonp_'+Math.random().toString().substr(2);
            //方法执行后移除script标签
            $window[mycal] = function (data) {
                fn(data);
                $window.document.body.removeChild(scriptN);
            }
            url = url+'callback='+mycal;
            //动态创建script标签
            var scriptN = $window.document.createElement('script');
            scriptN.src = url;
            //console.dir(scriptN)
            document.body.appendChild(scriptN);
        }
    }])
})(angular)