/**
 * Created by Administrator on 2017/6/16.
 */
var numfile=new Array();
var ifile=0;
var allfile=new Array();
var numfile1=new Array();
var ifile1=0;
var allfile1=new Array();
var numfile2=new Array();
var ifile2=0;
var allfile2=new Array();
//    流程上传功能
var flagflag=false;
var flagflagone=false;
$('#file_input1').change(function(){
    var rex=/^(.*?)\.(png|jpg|gif|jpeg)$/i;
    if(!rex.test($(this).val())){
        return false;
    }
    var nowfile=document.getElementById('file_input1').files[0];
    numfile[numfile.length]=ifile;
    allfile[ifile]=nowfile;
    ifile++;
    $(this).val('');
});
function upload(id,obj,filetype){
    $('#'+id).find('input:eq(0)').val('');
    var form=document.getElementById(id);
    var formData=new FormData(form);
    for(var j=0;j<obj.length;j++){
        if(!(obj[j]=='')){
            formData.append('file[]',obj[j]);
        }
    }
    formData.append('contractnum',contaracthetongbianhao);
    formData.append('contractid',contaracthetongid);
    formData.append('filetype',filetype);
    formData.append('userid',userid);
    formData.append('uuid',uuid);
    $.ajax({
        // url: 'http://a.wryray.com/gate/cccc',
        url: host+'/uploads',
        type: 'POST',
        async:true,
        cache: false,
        data: formData,
        processData: false,
        contentType: false
    }).done(function(res) {
        if(res.data.code==200){
            state2=true;
            if(state2){
                for(var j=0;j<allfile.length;j++){
                    allfile[j]="";
                }
                $('#report1').find('.ImgClose').remove();
                mui.alert("保存成功");
                $("#formCheBao-submit").removeAttr("disabled");
                $("#formFangBao-submit").removeAttr("disabled");
                //window.location.href="contractListP.html";
                $('.main').hide();
                mask.close();
            }
        }else if(res.data.code==500){
            if(!flagflagone){
                flagflagone=true;
                mui.alert("用户已经离线，请重新登录");
                $('.main').hide();
                mask.close();
            }
        }

    }).fail(function(res) {
        flagflag=true;
    });
}
function formtijiao(){
    // var form=document.getElementById('formdataDemo');
    // var formData=new FormData(form);
    // for(var j=0;j<allfile.length;j++){
    //     if(!(allfile[j]=='')){
    //         formData.append('file[]',allfile[j]);
    //     }
    // }
    // formData.append('contractnum','hetongbianhao');
    // formData.append('contractid','hetongid');
    // formData.append('filetype','gphotos');
    // formData.append('userid','18025863');
    // $.ajax({
    //     // url: 'http://a.wryray.com/gate/cccc',
    //     url: 'host+"/uploads',
    //     type: 'POST',
    //     async:true,
    //     cache: false,
    //     data: formData,
    //     processData: false,
    //     contentType: false
    // }).done(function(res) {
    //     alert(1);
    // }).fail(function(res) {
    //     alert(2);
    // });
        if(baobeitype==0){
            upload('formdataDemo',allfile,'house');
        }else{
            upload('formdataDemo',allfile,'drivingcards');
    }

        if(flagflag){
            mui.alert("保存失败");
            $('.main').hide();
            mask.close();
        }
}
//$('#form-submit').click(function(){
//    flagstate=false;
//    flagstate1=false;
//    flagstate2=false;
//    state4=false;
//    if($('#report1').find('img').length<1){
//        mui.alert("合影照片必须上传");
//        return false;
//    }
//    // var form=document.getElementById('formdataDemo');
//    // var formData=new FormData(form);
//    // for(var j=0;j<allfile.length;j++){
//    //     if(!(allfile[j]=='')){
//    //         formData.append('file[]',allfile[j]);
//    //     }
//    // }
//    // formData.append('contractnum','hetongbianhao');
//    // formData.append('contractid','hetongid');
//    // formData.append('filetype','gphotos');
//    // formData.append('userid','18025863');
//    // $.ajax({
//    //     // url: 'http://a.wryray.com/gate/cccc',
//    //     url: 'host+"/uploads',
//    //     type: 'POST',
//    //     async:true,
//    //     cache: false,
//    //     data: formData,
//    //     processData: false,
//    //     contentType: false
//    // }).done(function(res) {
//    //     alert(1);
//    // }).fail(function(res) {
//    //     alert(2);
//    // });
//    if(state5&&state6&&state7){
//        upload('formdataDemo',allfile,'gphotos');
//        upload('formdataDemo',allfile1,'identcard');
//        upload('formdataDemo',allfile2,'others');
//    }
//});
//    流程上传功能结束