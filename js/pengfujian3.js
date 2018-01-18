/**
 * Created by Administrator on 2017/6/16.
 */
var flagstate=false;
var flagstate1=false;
var flagstate2=false;
var flagstate3=false;
var flagstate4=false;
var flagstate5=false;
var numfile=new Array();
var ifile=0;
var allfile=new Array();
var numfile1=new Array();
var ifile1=0;
var allfile1=new Array();
var numfile2=new Array();
var ifile2=0;
var allfile2=new Array();
var numfile3=new Array();
var ifile3=0;
var allfile3=new Array();
var numfile4=new Array();
var ifile4=0;
var allfile4=new Array();
var numfile5=new Array();
var ifile5=0;
var allfile5=new Array();
var flagflag=false;
var flagflagone=false;
//    流程上传功能
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
$('#file_input2').change(function(){
    var rex=/^(.*?)\.(png|jpg|gif|jpeg)$/i;
    if(!rex.test($(this).val())){
        return false;
    }
    var nowfile=document.getElementById('file_input2').files[0];
    numfile1[numfile1.length]=ifile1;
    allfile1[ifile1]=nowfile;
    ifile1++;
    $(this).val('');
});
$('#file_input3').change(function(){
    var rex=/^(.*?)\.(png|jpg|gif|jpeg)$/i;
    if(!rex.test($(this).val())){
        return false;
    }
    var nowfile=document.getElementById('file_input3').files[0];
    numfile2[numfile2.length]=ifile2;
    allfile2[ifile2]=nowfile;
    ifile2++;
    $(this).val('');
});
$('#file_input4').change(function(){
    var rex=/^(.*?)\.(png|jpg|gif|jpeg)$/i;
    if(!rex.test($(this).val())){
        return false;
    }
    var nowfile=document.getElementById('file_input4').files[0];
    numfile3[numfile3.length]=ifile3;
    allfile3[ifile3]=nowfile;
    ifile3++;
    $(this).val('');
});
$('#file_input5').change(function(){
    var rex=/^(.*?)\.(png|jpg|gif|jpeg)$/i;
    if(!rex.test($(this).val())){
        return false;
    }
    var nowfile=document.getElementById('file_input5').files[0];
    numfile4[numfile4.length]=ifile4;
    allfile4[ifile4]=nowfile;
    ifile4++;
    $(this).val('');
});
$('#file_input6').change(function(){
    var rex=/^(.*?)\.(png|jpg|gif|jpeg)$/i;
    if(!rex.test($(this).val())){
        return false;
    }
    var nowfile=document.getElementById('file_input6').files[0];
    numfile5[numfile5.length]=ifile5;
    allfile5[ifile5]=nowfile;
    ifile5++;
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
            if(filetype=='gphotos'){
                flagstate=true;
                for(var j=0;j<allfile.length;j++){
                    allfile[j]="";
                }
                $('#report1').find('.ImgClose').remove();
            }else if(filetype=='identcard'){
                flagstate1=true;
                for(var j=0;j<allfile1.length;j++){
                    allfile1[j]="";
                }
                $('#report2').find('.ImgClose').remove();
            }else if(filetype=='house'){
                flagstate2=true;
                for(var j=0;j<allfile2.length;j++){
                    allfile2[j]="";
                }
                $('#report3').find('.ImgClose').remove();
            }else if(filetype=='marriageinfo'){
                flagstate3=true;
                for(var j=0;j<allfile3.length;j++){
                    allfile3[j]="";
                }
                $('#report4').find('.ImgClose').remove();
            }else if(filetype=='relationinfo'){
                flagstate4=true;
                for(var j=0;j<allfile4.length;j++){
                    allfile4[j]="";
                }
                $('#report5').find('.ImgClose').remove();
            }else if(filetype=='relationcard'){
                flagstate5=true;
                for(var j=0;j<allfile5.length;j++){
                    allfile5[j]="";
                }
                $('#report6').find('.ImgClose').remove();
            }
            if(flagstate&&flagstate1&&flagstate2&&flagstate3&&flagstate4&&flagstate5){
                state4=true;
            }
            if(state4){
                mui.alert("上传成功");
                $("#formLiuCheng-submit").removeAttr("disabled");
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

       //if(state1&&state2&&state3&&state4&&state5&&state6){
       //    mui.ajax("host+"/app/loadReportXD?contractid="+contaracthetongid+"&userid="+userid,{
       //        dataType: 'JSON',
       //        type: 'POST',
       //        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
       //        success:function(data){
       //            $('.main').hide();
       //            mask.close();
       //            $("#form-submit").removeAttr("disabled");
       //            if(data){
       //                if(xinyongrole==0){
       //                    window.location.href="contractListP.html";
       //                }
       //            }
       //        },
       //        error: function (xhr, type, errorThrown) {
       //            mui.alert('路上堵车，停车休息一会儿吧！');
       //            $("#form-submit").removeAttr("disabled");
       //            $('.main').hide();
       //            mask.close();
       //        }
       //    })
       //    //if(xinyongrole==1){
       //    //    window.location.href="contractListP.html";
       //    //}else if(xinyongrole==2||xinyongrole==3){
       //    //    window.location.href="returnContractApprovalP.html";
       //    //}
       //}
    }).fail(function(res) {
        flagflag=true;
    });
}
function formtijiao(){
    flagstate=false;
    flagstate1=false;
    flagstate2=false;
    flagstate3=false;
    flagstate4=false;
    flagstate5=false;
    state4=false;
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
    //if(state5&&state6&&state7){
        upload('formdataDemo',allfile,'gphotos');
        upload('formdataDemo1',allfile1,'identcard');
        upload('formdataDemo2',allfile2,'house');
    upload('formdataDemo3',allfile3,'marriageinfo');
    upload('formdataDemo4',allfile4,'relationinfo');
    upload('formdataDemo5',allfile5,'relationcard');
    //}
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