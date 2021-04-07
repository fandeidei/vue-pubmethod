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
   }
}