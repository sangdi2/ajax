$(function(){
    $("#btnSend").on("click",function(){
        var text =$("#ipt").val().trim();
        if(text.length<=0)
        {
           return $("#ipt").val("");
        }
        $("#talk_list").append('<li class="right_word"><img src="img/person02.png" /> <span>'+text+'</span></li>');
        $("#ipt").val("");
        resetui();
        getmsg(text);
    })
    function getmsg(text){
        $.ajax({
            method:'get',
            url:'http://ajax.frontend.itheima.net:3006/api/robot',
            data:{
                text:text
            },
            success:function(res){
                if(res.message === 'success')
                {
                    var msg = res.data.info.text
                    $("#talk_list").append('<li class="left_word"><img src="img/person01.png" /> <span>'+msg+'</span></li>');
                    resetui();
                    getvoice(text);
                }
            }
        })
    }
    function getvoice(text){
        $.ajax({
            method:'get',
            url:'http://ajax.frontend.itheima.net:3006/api/synthesize',
            data: {
                text:text
            },
            success:function(res){
                if(res.status === 200)
                {
                   $("#voice").attr("src",res.voiceUrl);
                }
            }
        })
    }
    $('#ipt').on('keyup', function (e) {
        // console.log(e.keyCode)
        if (e.keyCode === 13) {
          // console.log('用户弹起了回车键')
          $('#btnSend').click()
        }
      })
})