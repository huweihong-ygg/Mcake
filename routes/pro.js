const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象 
var router=express.Router();
//添加路由
// index
		
//1.登录
		router.get("/v1/login/:uname&:upwd",function(req,res){
		 var $uname=req.params.uname;
		 var $upwd=req.params.upwd;
		 var $uid = req.session.uid;
		 console.log($uid)
		 var sql="select uid from cake_user where uname=? and upwd=?";
		pool.query(sql,[$uname,$upwd],function(err,result){
		 if(err) throw err;
		 if(result.length>0){
		  res.send({state:true,message:"登录成功",})	  
		 }else{
		   res.send("0");
		  }
		 
		})
		})

//2.查询所有用户列表
	router.get("/v1/userlist",function(req,res){
	 var sql="select * from xz_user"
	 pool.query(sql,function(err,result){
	  if(err) throw err;
	   console.log(typeof(result))
	   res.send(result);
	  
	 })
	})


//3.根据id查询用户
   router.get("/v1/seluserbyid/:uid",function(req,res){
//接受数据
		 var $uid=req.params.uid;
		var sql="select * from xz_user where uid=?";
		pool.query(sql,[$uid],function(err,result){
		  if(err) throw err;
		  if(result.length>0){
          console.log(result);
		  res.send(result);
		   return;
		  }else{
		  res.send("0");
		  }
		 
		})
		})

 //查询所有用户信息!!!!!!
 //练习2：创建接口 getAll，06_getUsers.html 使用get方法，查询所有用户信息；在页面的div中显示；
 router.get("/getalls",function(req,res){
  var sql="select * from xz_user";
  pool.query(sql,(err,result)=>{
   if(result.length>0){
	  console.log(result,typeof(result))
      res.send(result);
   }
  })
  
 })




//4.根据id删除数据
 router.delete("/v1/deluser/:uid",function(req,res){
//接收数据
	 var $uid=req.params.uid;
	 var sql="delete from xz_user where uid=?";
	pool.query(sql,[$uid],function(err,result){
	 if(err) throw err;
	   res.send("1");
	})
	})

//5.根据id修改用户；
	router.put('/v1/updateuser',function(req,res){
	var obj=req.body;
	var i=400;
	for(var key in obj){
		i++;
		if(!obj[key]){
			res.send({code:i,msg:key+" required"});
			return;
		}
	}
	pool.query('UPDATE xz_user SET? WHERE uid=?',[obj,obj.uid],function(err,result){
		if(err) throw err;
		res.send("1");
	});
});







//6
router.get("/v1/seluser/:uname",function(req,res){
	  //接收数据		 
	  var $uname=req.params.uname;
	   var sql="select * from cake_user where uname=?";  pool.query(sql,[$uname],function(err,result){
	    if(err) throw err;
		if(result.length>0){
		console.log("用户名重复")
		res.send({state:true,message:"用户已被注册"})
		  return;
		}else{
		 res.send("0")
		}
		
	})
		 	
	})
		
		//用户名不重复则进行注册
router.post("/v1/reguser",function(req,res){
//获取数据
  var obj=req.body;
//非空验证
  for(var key in obj){
    if(!obj[key]){
	  res.send("0");
	  return;
	} 
  }

var sql="insert into cake_user set?";
pool.query(sql,[obj],function(err,result){
 if(err) throw err;
  if(result.affectedRows>0){
    res.send({state:true,message:"注册成功",})
  }else{
   res.send("0");
  }

})

})




console.log("路由器已连接")
//导出路由器对象
module.exports=router;








