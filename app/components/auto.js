//(function(angular){
////	'use strict'
//	//自定义指令模块，用于按钮样式的改变
//	var app = angular.module('moviecat.auto',[]);
//	
////	创建自定义指令,名字必需以驼峰命名法的形式来书写
//	app.directive('autoActive',['$location',function($location){
//		return {
//			//单击改变样式
//			link:function(scope,element,attributes){
//			//scope ,暴露数据到模板中使用
//			//element是自定义指令说在标签的jqLite对象
//			//attributes自定义指令所在标签的说有属性的集合
//			element.on('click',function(){
//				element.parent().children().removeClass('active');
//				element.addClass('active');
//			});
////			//自定义指令也有$watch方法
////			scope.loca = $location;
////
////			scope.$watch('loca.url()',function(newValue.oldValue){
////			console.log(2)
////			})
//			
//			
//		}
//		
//
//
//		
//		}
//	}])
//})(angular)

(function(angular) {
    'use sctrict';
    // 创建模块
    var app = angular.module('moviecat.auto', []);
    // 创建自定义指令 auto-active
//  app.directive('autoActive',['$location',function($location){
//		return {
//			//单击改变样式
//			link:function(scope,element,attributes){
//			//scope ,暴露数据到模板中使用
//			//element是自定义指令说在标签的jqLite对象
//			//attributes自定义指令所在标签的说有属性的集合
//			element.on('click',function(){
//				element.parent().children().removeClass('active');
//				element.addClass('active');
//			});
////			//自定义指令也有$watch方法
////			scope.loca = $location;
////
////			scope.$watch('loca.url()',function(newValue.oldValue){
////			console.log(2)
////			})
//			
//			
//		}
    app.directive('autoActive', ['$location', function($location) {
        return {
            // 当指令作用某个元素后，触发一次
            link: function(scope, element, attributes) {
                var hash = $location.url();

                // 在初始加载时，不能获取焦点。
                // element.on('click',function(){
                //    element.parent().children().removeClass('active');
                //    element.addClass('active');
                // });                
                scope.location = $location;
                scope.$watch('location.url()', function(now, old) {
                    // 判断url锚点是不是a链接开头
                    var aLink = element.children().attr('href').substr(1);
                    if (now.startsWith(aLink)) {
                        element.parent().children().removeClass('active');
                        element.addClass('active');
                    }

                });
                // scope.$location = $location;
                // scope.$watch('$location.url()', function(now, old) {
                //     // /in_theaters
                //     var aLink = element.children().attr('href').substr(1);
                //     if (now.startsWith(aLink)) {
                //         // 干掉兄弟节点上active
                //         element.parent().children().removeClass(attributes.autoActive);
                //         // 给当前元素加上active样式
                //         element.addClass(attributes.autoActive);
                //     }
                // });
            }
        }
    }]);
})(angular);

