
var vm=new Vue({
el:"#app",
data:{
msg:`
        <div class="navigation-bar row mx-0">
                <div class="logo-box col-lg-2">
                    <img src="../logo.png" alt="">
                </div>
             <div class="col-lg-10 px-0 "> 

               <div class="navigation-bar-top">
                <div class="row mx-0 pr-7 disnone">  
                  <div class="wallbox-wallcenter">
                       <!-- /* 这是购物车那一栏 */ -->
                    <div class=" col-sm-12 px-0">  
                      <div class="wallbox-walltop">
   
                          <div class="shopping-box">
                               <!-- 购物车盒子 -->
                                  <ul>
                                      <li><a href="">
                                          <img src="../shopping.png" alt="" class="gowuche">
                                          购物车
                                       </a></li>
                                      <li><a href="../login.html" target="_blank">登录</a></li>
                                      <li><a href="../cake-reg.html" target="_blank">注册</a></li>
                                  </ul>
                            

                          </div>
                      </div>
                    </div> 

                  <div class="col-md-12 px-0">  
                      <div class="wallbox-wallbottom">
                       <!-- 四个导航栏模块  -->
                          <div class="navigation-bar-bottom">
                             <ul>
                                 <li class="underline">
                                     <a href="../CAKE.html">Nos Produits<br>
                                               <span> 全部产品</span>
                                               </a>  
                                               </li>
                                 <li class="border1">
                                     <a href="">Napoléon<br>
                                 <span>拿破仑系列</span> 
                                    </a>
                                </li>
                                 <li class="border2">
                                    <a href="">Événements<br>
                                 <span>热门活动</span> 
                                   </a>
                                   <ul class="sub">
                                      <li><a href="./yinghang.html">银行活动</a> </li>
                                      <li><a href="./activity.html">最新活动</a> </li>
                                  </ul>
                               </li>
                                 <li>
                                       <a href="">Mon M'CAKE<br>
                                    <span>会员中心</span>  
                                      </a>
                               </li>
                             </ul>
                             <div class="phone">
                                <div class="phone-box">
                                    <div> 
                                        <img src="../电话.png" alt=""> 
                                        <span><a href="#">4006-123-099</a> </span>
                                    </div>
                                    <div>
                                           <img src="../laba.png" alt=""> 
                                           <span class="pei"><a href="#">配送范围查询</a></span>
                                 </div>
                                </div>
                                <!-- 地标 -->
                              <div class="sites">
                                   <ul class="site">
                                       <li class="border3">
                                       <img src="../地址.png" alt="">
                                           <a href="">上海市 </a> 
                                           <ul class="dizhi">
                                              <li>北京市</li>
                                              <li>杭州市</li>
                                              <li>苏州市</li>
                                              <li>成都市</li>
                                          </ul>   
                                       </li>
                                   </ul>                               
                               </div>            
                             </div>
                          </div>                
                      </div>
                     </div> 


                  </div> 
                </div>        
               </div>
             </div>  
            </div> `
}
})
