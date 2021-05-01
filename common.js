export default {
   install(Vue){
       //全屏和退出全屏方法
       Vue.prototype.fullScreen = function(){
                var docElm = document.documentElement; 
                if(sessionStorage.getItem('f11') == null){
                            if (docElm.requestFullscreen) {  
                            docElm.requestFullscreen(); 
                            sessionStorage.setItem('f11',1) 
                            }  
                                //FireFox   
                            else if (docElm.mozRequestFullScreen) {  
                                docElm.mozRequestFullScreen(); 
                                sessionStorage.setItem('f11',1)  
                            }   //Chrome等   
                            else if (docElm.webkitRequestFullScreen) {  
                                docElm.webkitRequestFullScreen();  
                                sessionStorage.setItem('f11',1) 
                            } 
                }else{
                            if (document.exitFullscreen) {  
                                document.exitFullscreen();  
                                sessionStorage.removeItem('f11') 
                            }  
                            else if (document.mozCancelFullScreen) {  
                                document.mozCancelFullScreen(); 
                                sessionStorage.removeItem('f11') 
                            }  
                            else if (document.webkitCancelFullScreen) {  
                                document.webkitCancelFullScreen();
                                sessionStorage.removeItem('f11')  
                            }  
                            else if (document.msExitFullscreen) {  
                                document.msExitFullscreen();  
                                sessionStorage.removeItem('f11')
                            }  
                }
       }

       //验证电话号码格式是否正确
       Vue.prototype.verifyPhone = function(data){
           let reg = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
           if(!reg.test(data)){
               alert('当前电话格式不正确,请重新输入~')
           }else{
               console.log('当前电话号码正确')
           }
       }

       //数字每隔三位数字加个小数点.号
       Vue.prototype.alterNumber = function(data){
            let num = data.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
            return num
       }

       //验证邮箱格式是否正确
       Vue.prototype.verifyEmail = function(data){
          let reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/;
          if(!reg.test(data)){
              alert('当前邮箱格式不正确,请重新输入~')
          }else{
              console.log('当前邮箱格式正确')
          }     
       }

       //获取时间
       Vue.prototype.getTime = function(){
        var time=new Date();
        var year=time.getFullYear();  //获取年份
        var month=time.getMonth()+1;  //获取月份
        var day=time.getDate();   //获取日期
        var hour=checkTime(time.getHours());   //获取时
        var minite=checkTime(time.getMinutes());  //获取分
        var second=checkTime(time.getSeconds());  //获取秒
        /****当时、分、秒、小于10时，则添加0****/
        function checkTime(i){
            if(i<10) return "0"+i;
            return i;
        }
        const timer = year+"年"+month+"月"+day+"日"+hour+":"+minite+":"+second;
        return timer
       }

       //验证身份证是否正确
       Vue.prototype.verifyIdentity = function(data){
           let reg = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
           if(!reg.test(data)){
              alert('当前身份证格式不正确,请重新输入~')
            }else{
                console.log('当前身份证格式正确')
            }   
        }

       //点击回车触发方法
      Vue.prototype.clickEnter = function(event,method){
         let key = event.keycode
         if(key == 13){
             method()
         }

      }

   }
}