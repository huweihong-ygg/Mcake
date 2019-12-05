function getdata(){   
    //接收数据
    var $uname=uname.value;
  if(!$uname||$uname==""){
      alert("用户名为空");
        return;
    }
  

    // $.ajax({
   axios.get( 
         config.baseUrl+"/pro/v1/seluser/"+$uname,
         //默认get
       ).then(result=>{//类似于回调函数
        if(result.data.state==true){
              alert(result.data.message);
              return;
           }else{
                //调用注册的函数
             console.log("ok")
             insert();
          } 
       })



// $.ajax({
//    url:"/pro/v1/seluser/"+$uname,
//    //默认get
//  }).then(result=>{//类似于回调函数
//   if(result=="1"){
//         alert("用户已被注册");
//         return;
//      }else{
//           //调用注册的函数
//        console.log("ok")
//        insert();
//     } 
//  })


  // ajax(
  //   "/pro/v1/seluser/"+$uname,
  //   "get",
  //   function(result){
  //     // console.log(result)
  //     if(result=="1"){
  //       alert("用户已被注册");
  //       return;
  //     }else{
  //       //调用注册的函数
  //       console.log("ok")
  //      insert();
  //     }  
  //   }
  // )  
}


// _____*****************************************************************************____________________

function insert(){
//获取数据
console.log("连接成功")
var $uname=uname.value;
if($uname.length<2 || $uname.length>6){
uname_span.innerHTML="请输入3~6位的用户名";
alert("请输入3~6位的用户名");
return;
} 
var $upwd=upwd.value;
var $cpwd=cpwd.value;
if($cpwd!==$upwd){
alert("两次密码输入不一致");
return;
}
var $email=email.value;
var i=$email.search(/^\w+[@]\w{2,5}([.]\w{2,3}){1,3}$/i);
if(i==-1){
alert("邮箱格式不对");
return;
}
var $phone=phone.value;
if($phone.length!==11){
alert("请输入有效的手机号格式");
return;
}
var $user_name=user_name.value;    
var $gender="1";
if(man.checked){
$gender="1";
}else{
$gender="0"; 
}	

// $.ajax({
  axios({
  url:config.baseUrl+"/pro/v1/reguser",
  method:'post',
  responseType:'json',
  data:"uname="+$uname+"&upwd="+$upwd+"&email="+$email+"&phone="+$phone+"&user_name="+$user_name+"&gender="+$gender
  }).then(result=>{
    console.log(result)
  if(result.data.state==true){
  alert(result.data.message);
  }else{
  alert("注册失败");
  } 
  })



//promise 
// $.ajax({
// url:"/pro/v1/reguser",
// type:"post",
// data:"uname="+$uname+"&upwd="+$upwd+"&email="+$email+"&phone="+$phone+"&user_name="+$user_name+"&gender="+$gender
// }).then(result=>{
//   console.log(result)
// if(result=="1"){
// alert("注册成功");
// }else{
// alert("注册失败");
// } 
// })

// ajax(
// "/pro/v1/reguser",
// "post",
// function(result){
// // console.log(result)
// if(result=="1"){
// alert("注册成功");
// }else{
// alert("注册失败");
// } 
// },
// "uname="+$uname+"&upwd="+$upwd+"&email="+$email+"&phone="+$phone+"&user_name="+$user_name+"&gender="+$gender
// )  
}


function namedrop(){
uname.placeholder="请输入用户名";
if(uname.value==""){
uname_span.innerHTML="请输入用户名";
}else if(uname.value.length<2||uname.value.length>6){
uname_span.innerHTML="用户名格式错误";
alert("用户名格式错误");
return;
}else{
uname_span.innerHTML="有效的用户名"; 
}
}
function nameget(){
uname.placeholder="";
uname_span.innerHTML="请输入2~6位的用户名";
} 

function mimadrop(){
upwd.placeholder="请输入密码";
if(upwd.value==""){
uname_upwd.innerHTML="密码不能为空";
}else if(upwd.value.length<6 ||  upwd.value.length>12){
uname_upwd.innerHTML="格式错误";
}else{
uname_upwd.innerHTML="正确";
}

}

function mimaget(){
upwd.placeholder="";
uname_upwd.innerHTML="长度在6~12";
}
function cpwddrop(){
cpwd.placeholder="请确认密码";
if(cpwd.value==""){
cpwd_span.innerHTML="密码不能为空";
}else if(cpwd.value.length<6 ||  cpwd.value.length>12){
cpwd_span.innerHTML="格式错误";
}else if(cpwd.value!==upwd.value){
cpwd_span.innerHTML="两次密码输入不一致";
}else{
cpwd_span.innerHTML="正确";
}
}

function cpwdget(){
cpwd.placeholder="";
cpwd_span.innerHTML="长度在6~12";
}
function phonedrop(){
phone.placeholder="请输入手机号";
if(phone.value==""){
phone_sapn.innerHTML="手机号不能为空";
}else if(phone.value.length<11 ||  phone.value.length>11){
phone_sapn.innerHTML="请输入11位手机号";
}else{
phone_sapn.innerHTML="正确";
}

}
function emailget(){
email.placeholder="";
} 
function phoneget(){
phone.placeholder="";
} 
function emaildrop(){
var $email=email.value;
email.placeholder="请输入邮箱号";
var i=$email.search(/^\w+[@]\w{2,5}([.]\w{2,3}){1,3}$/i);
if(email.value==""){
email_sapn.innerHTML="邮箱号不能为空";
}else if(i==-1){
email_sapn.innerHTML=`<span id="email_sapn" style="color:red">邮箱格式错误</span>`;
return;
}else{
email_sapn.innerHTML=`<span id="email_sapn" style="color:green">邮箱格式正确</span>`
}

}
function u_nameget(){
user_name.placeholder="";
} 
function  u_namedrop(){
user_name.placeholder="你的真实姓名";
if( user_name.value==""){
u_name_sapn.innerHTML="真实姓名不能为空";
}else if( user_name.value.length<2 ||  user_name.value.length>10){
u_name_sapn.innerHTML="请输入有效姓名";
}else{
u_name_sapn.innerHTML="正确";
}
} 