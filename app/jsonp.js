/**
 * Created by �Ҿ����� on 2016/7/4.
 */
function myJsonp(url,arg,fn){
    //�ϲ�������url(���ݵĲ���)
    var quertString ='';
    for(var key in arg){
        quertString+=key+"="+arg[key]+"&"
    }
    url = url +"?"+quertString;
    //���ݹ����ĺ�����������
    window.myCallback = fn;
    url = url+'callback='+'mycallback';
    //��̬����script��ǩ
    var scriptN = document.getElementById('script');
    document.body.appendChild(scriptN);
}