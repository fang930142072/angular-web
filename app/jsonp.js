/**
 * Created by 我就是我 on 2016/7/4.
 */
function myJsonp(url,arg,fn){
    //合并参数到url(传递的参数)
    var quertString ='';
    for(var key in arg){
        quertString+=key+"="+arg[key]+"&"
    }
    url = url +"?"+quertString;
    //传递过来的函数给个名字
    window.myCallback = fn;
    url = url+'callback='+'mycallback';
    //动态创建script标签
    var scriptN = document.getElementById('script');
    document.body.appendChild(scriptN);
}