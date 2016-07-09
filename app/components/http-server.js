/**
 * Created by �Ҿ����� on 2016/7/4.
 */


//jsonp实现
(function (angular) {
  var app = angular.module('moviecat.http-server',[]);
    app.service('MyService',['$window',function ($window) {
        this.jsonp=function (url,arg,fn){
            //�ϲ�����url(���ݵĲ���)
            var quertString ='';
            for(var key in arg){
                quertString+=key+"="+arg[key]+"&";
            }
            url = url +"?"+quertString;
            //���ݹ����ĺ���������
            $window.myCallback = fn;
            var mycal = 'jsonp_'+Math.random().toString().substr(2);
            //����ִ�к��Ƴ�script��ǩ
            $window[mycal] = function (data) {
                fn(data);
                $window.document.body.removeChild(scriptN);
            }
            url = url+'callback='+mycal;
            //��̬����script��ǩ
            var scriptN = $window.document.createElement('script');
            scriptN.src = url;
            //console.dir(scriptN)
            document.body.appendChild(scriptN);
        }
    }])
})(angular)