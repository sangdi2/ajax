function getcontent(){
    $.ajax({
        method:'get',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        data:{},
        success:function(res){
            if(res.status!=200) return alert("获取评论列表失败！")
            var rows=[];
            $.each(res.data,function(i,ele){
                
                rows.push('<li class="list-group-item"><span class="badge" style="background-color: #efab4d;">评论时间：'+ele.time+'</span><span class="badge" style="background-color: #5dbedc;">评论人：'+ele.username+'</span>'+ele.content+'</li>')
                $(".list-group").empty().append(rows);
            })
            
        }
    })
}
getcontent();
$(function(){
    $("#panel-body").on("submit",function(e){
        e.preventDefault();
        var data =$(this).serialize();
        $.post('http://www.liulongbin.top:3006/api/addcmt',data,function(res){
            if(res.status!=201){
                return alert("发表评论失败");
            }
            getcontent();
    
        })
        $("#panel-body")[0].reset();
    })
})
