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
   }
}