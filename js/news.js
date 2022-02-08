
$(function(){
    function bulin(n){
      if(n<=9)
      {
          return '0'+n
      }else{
          return n
      }
    }
    template.defaults.imports.dateFormat=function(tr){
       var sh=new Date(tr);
       var y=sh.getFullYear();
       var m=sh.getMonth();
       var d=sh.getDay();
       var h=sh.getHours();
       var mi=sh.getMinutes();
       var s=sh.getSeconds();
       return y+'-'+bulin(m)+'-'+bulin(d)+'-'+bulin(h)+'-'+bulin(mi)+'-'+bulin(s)
    }
    function getnews(){
        $.get('http://www.liulongbin.top:3006/api/news',function(res){
           if(res.status!=200)
           {
               return alert("请求新闻列表失败")
           }
           for(var i=0;i<res.data.length;i++)
           {
               res.data[i].tags=res.data[i].tags.split(",");
           }
           var htmlstr =template('tpl-news',res);
           $("#news-list").html(htmlstr);
    
        })
    }
    getnews();
    
})