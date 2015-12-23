(function(window){
 window.uploader = (function(){
     var Promise = function(){
         this.success = this.error = function(){}
     }
     Promise.prototype.then = function(success,error){
         this.success = success;
         this.error = error;
     }
     function Deferred(){
         this.promise = new Promise();
         this.status = 'init';
     }
     Deferred.prototype = {
         resolve:function(data){
             this.status = 'success';
             this.promise.success(data);
         },
         reject:function(data){
             this.status = 'fail';
             this.promise.error(data);
         }
     }
     // url 上传的路径  id 文件域的ID
     return function(config){
       var deferred = new Deferred();
       var xhr = new XMLHttpRequest();
       xhr.open('POST',config.url,true);
       xhr.onreadystatechange = function(){
           if(xhr.readyState == 4){
               var result = xhr.responseText;
               if(/2\d{2}/.test(xhr.status)){
                   deferred.resolve(result);
               }else{
                   deferred.error(result);
               }
           }
       }
       var file = document.getElementById(config.id).files[0];
       var formData = new FormData();
       formData.append('avatar',file);
       xhr.send(formData);
       return deferred.promise;
     }
 })();
})(window)