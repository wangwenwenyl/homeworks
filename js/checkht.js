//验证用户是否在线
function checkYh(obj){
    var uname=$.cookie('uaccount');
    var uuid=$.cookie('uuid');
    var flag=true;
    console.log(uuid)
    console.log(uname)
        $.ajax({
              url:host+'/app/isLogined',
//          url:'http://a.wryray.com/gate/ddd',
            dataType:'text',
            data:{'uname':uname,'uuid':uuid},
              type:'post',
//          type:'get',
            success:function(res){
            	console.log(res)
                  if(res==200){
//              if(res="1111"){
                    flag=true;
                }else if(res==400){
                    flag =false;
                }
            },
            async:false
        })
    return flag;
}
function checkXl(){
    var uname=$.cookie('uaccount');
    var uuid=$.cookie('uuid');
    console.log(uuid)
    var flag=true;
    $.ajax({
        url:host+'/app/isLogined',
        //url:'http://a.wryray.com/gate/ddd',
        dataType:'text',
        data:{'uname':uname,'uuid':uuid},
        type:'post',
        //type:'get',
        success:function(res){
            if(res==200){
            //if(res="1111"){
                flag=true;
            }else if(res==400){
                flag =false;
            }
        },
        async:false
    })
    return flag;
}
function checkYhTap(obj){
    var uname=$.cookie('uaccount');
    var uuid=$.cookie('uuid');
    var flag=true;
        $.ajax({
            url:host+'/app/isLogined',
            //url:'http://a.wryray.com/gate/ddd',
            dataType:'text',
            data:{'uname':uname,'uuid':uuid},
            type:'post',
            //type:'get',
            success:function(res){
                if(res==200){
                    //if(res="1111"){
                    flag=true;
                }else if(res==400){
                    flag =false;
                }
            },
            async:false
        })
    return flag;
}