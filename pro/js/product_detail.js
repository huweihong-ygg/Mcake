(function(){
$("#maximg").click(function(e){
    var $img=$(e.target);
    if($img.is(".min")){
    $(".max").attr("src",$img.attr("data-target")
    )
    }
    })
})()

//dom四部
//1.查找触发事件的元素
//2.绑定事件处理函数
$(function(){
$("[data-toggle=king]").click(function(e){
  //3.查找要修改的元素
  var $nums=$(e.target);
  var $span=parseInt($("[data-num=num]").attr("data-value"));
  //↓让每次切换点击时都让数量值为1↓;
  $("[data-up=sub] :nth-child(3)").html(1);
  if($nums.is("a")){
    var $n= parseInt($nums.html().slice(0,1));
    var sum=$span*$n;
    $(".pro_pire>span[data-num=num]").html("198.00")
    if($n>1){//重量大于1打0.6折
    $(".pro_pire>span[data-num=num]").html((sum*0.6).toFixed(2));
  }
  } 
})

//
$("[data-up=sub]").click(function(e){
 var $sub=$(e.target);
 if($sub.is("button")){
     var $span=$("[data-up=sub] :nth-child(3)");
     var $n=parseInt($span.html())
     var $kin=$("[data-toggle=king] .active").attr("data-value");
     var $money=$("[data-num=num]")
     if($sub.html()=="+"){
        $span.html($n+1);
        $money.html((($n+1)*$kin).toFixed(2))
     }else if($n>1){
        $span.html($n-1) 
        $money.html((($n-1)*$kin).toFixed(2))   
     }
 }
})

})



