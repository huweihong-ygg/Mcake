
// function ajax({url,type="get",data}){
// //url ：要请求的数据  type：不同的请求类型 data：要发送的请求值 必须是：""变量值1=值1&变量值2=值2&..."
//                      // door   err 
//  return  new Promise(function(resolve,reject){
// var xhr=new XMLHttpRequest();//不变
// //4.接收响应数据
// if(type=="get"&&data!==undefined){//如果
// url+="?"+data;
// }   
// // console.log(url,type,callback,data) 
// xhr.onreadystatechange=function(){
// if(xhr.readyState == 4 && xhr.status == 200){
// var result=JSON.parse(xhr.responseText) ;
// // ↓door()
// resolve(result);//开门，并将结果反馈到外部，功能类似于普通函数的return
// //callback(result)
// }
// }
// xhr.open(type,url,true);
// if(type=="post"){//只有是post请求时才需要添加请求头
// xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
// xhr.send(data);
// }else{
// xhr.send();
// }   
// })
// }



