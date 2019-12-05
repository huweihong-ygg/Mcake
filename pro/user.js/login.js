

function login(){
//1.dom获取数据
var $uname=document.getElementById("uname").value;
var $upwd=document.getElementById("upwd").value;
//判断是否为空
if(!$uname || $uname==""){
alert("用户名为空");return;
}
if(!$upwd || $upwd==""){
alert("用户密码为空");return;
}


// $.ajax({  
   axios.get(
   config.baseUrl+"/pro/v1/login/"+$uname+"&"+$upwd)
   .then(result=>{
    //    console.log(result,result.data,result.data.state)
        if(result.data.state==true){
            alert(result.data.message);
            console.log(result,result.data,result.data.state)
            location.href=("http://127.0.0.1:8080/otherHTML/monmcake.html");
            }else {
            console.log(result)
            alert("登录失败")
            }
    })
    


//promise版本
// $.ajax({
//     url:"/pro/v1/login/"+$uname+"&"+$upwd,
//     }).then(result=>{
//         if(result=="1"){
//             alert("登录成功");
//             location.href=("http://127.0.0.1:8080/otherHTML/monmcake.html");
//             return;
//             }else {
//             alert("登录失败")
//             }
//     })


//调用ajax请求
//  回调版本
// ajax(
// "/pro/v1/login/"+$uname+"&"+$upwd,
// "get",
// function(result){
// if(result=="1"){
// alert("登录成功");
// location.href=("http://127.0.0.1:8080/otherHTML/monmcake.html");
// return;
// }else {
// alert("登录失败")
// }
// },
// )
}





// //xhr四部曲
// //1.创建异步对象
//  var xhr=new XMLHttpRequest();
// //4.接受响应数据
//   xhr.onreadystatechange=function(){
//      if(xhr.readyState==4 && xhr.status==200){
//         var result=xhr.responseText;
     
//        }
//     }
// //2.创建请求
//  xhr.open("get","/pro/v1/login/"+$uname+"&"+$upwd,true);
// //3.发送请求
// xhr.send();
// 


