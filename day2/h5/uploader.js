(function(window){
 window.uploader = (function(){
     // url 上传的路径  id 文件域的ID
     return function(config){
       var xhr = new XMLHttpRequest();
       xhr.open('POST',config.url,true);
       xhr.onreadystatechange = function(){
           if(xhr.readyState == 4){
               var result = xhr.responseText;
               if(/2\d{2}/.test(xhr.status)){
                   //成功
                   var result = JSON.parse(result);
                   var msg = result.msg;
                   var img = document.createElement('img');
                   img.src = msg;
                   img.className = 'img-responsive';
                   document.body.appendChild(img);
               }else{
                   //失败
               }
           }
       }
       var file = document.getElementById(config.id).files[0];
       var formData = new FormData();
       formData.append('avatar',file);
       xhr.send(formData);
     }
 })();
})(window)