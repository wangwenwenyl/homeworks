/**
 * Created by Administrator on 2017/6/16.
 */
var flagstate=false;
var flagstate1=false;
var flagstate2=false;
var flagstate3=false;
var flagstate4=false;
var flagstate5=false;
var flagstate6=false;
var flagstate7=false;
var flagstate8=false;
var flagflag=false;
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
var numfile6=new Array();
var ifile6=0;
var allfile6=new Array();
var numfile7=new Array();
var ifile7=0;
var allfile7=new Array();
var numfile8=new Array();
var ifile8=0;
var allfile8=new Array();
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
$('#file_input7').change(function(){
    var rex=/^(.*?)\.(png|jpg|gif|jpeg)$/i;
    if(!rex.test($(this).val())){
        return false;
    }
    var nowfile=document.getElementById('file_input7').files[0];
    numfile6[numfile6.length]=ifile6;
    allfile6[ifile6]=nowfile;
    ifile6++;
    $(this).val('');
});
$('#file_input8').change(function(){
    var rex=/^(.*?)\.(png|jpg|gif|jpeg)$/i;
    if(!rex.test($(this).val())){
        return false;
    }
    var nowfile=document.getElementById('file_input8').files[0];
    numfile7[numfile7.length]=ifile7;
    allfile7[ifile7]=nowfile;
    ifile7++;
    $(this).val('');
});
$('#file_input9').change(function(){
    var rex=/^(.*?)\.(png|jpg|gif|jpeg)$/i;
    if(!rex.test($(this).val())){
        return false;
    }
    var nowfile=document.getElementById('file_input9').files[0];
    numfile8[numfile8.length]=ifile8;
    allfile8[ifile8]=nowfile;
    ifile8++;
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
        contentType: false,
        success:function(res){
            if(res.data.code==200){
                if(filetype=="gphotos"){
                    flagstate=true;
                    for(var j=0;j<allfile.length;j++){
                        allfile[j]="";
                    }
                    $('#report1').find('.ImgClose').remove();
                }else if(filetype=="identcard"){
                    flagstate1=true;
                    for(var j=0;j<allfile1.length;j++){
                        allfile1[j]="";
                    }
                    $('#report2').find('.ImgClose').remove();
                }else if(filetype=="house"){
                    flagstate2=true;
                    for(var j=0;j<allfile2.length;j++){
                        allfile2[j]="";
                    }
                    $('#report3').find('.ImgClose').remove();
                }else if(filetype=="silvermaster"){
                    flagstate3=true;
                    for(var j=0;j<allfile3.length;j++){
                        allfile3[j]="";
                    }
                    $('#report4').find('.ImgClose').remove();
                }else if(filetype=="housebook"){
                    flagstate4=true;
                    for(var j=0;j<allfile4.length;j++){
                        allfile4[j]="";
                    }
                    $('#report5').find('.ImgClose').remove();
                }else if(filetype=="marriageinfo"){
                    flagstate5=true;
                    for(var j=0;j<allfile5.length;j++){
                        allfile5[j]="";
                    }
                    $('#report6').find('.ImgClose').remove();
                }else if(filetype=="notarization"){
                    flagstate6=true;
                    for(var j=0;j<allfile6.length;j++){
                        allfile6[j]="";
                    }
                    $('#report7').find('.ImgClose').remove();
                }else if(filetype=="paymentinfo"){
                    flagstate7=true;
                    for(var j=0;j<allfile7.length;j++){
                        allfile7[j]="";
                    }
                    $('#report8').find('.ImgClose').remove();
                }else if(filetype=="drivingcards"){
                    flagstate8=true;
                    for(var j=0;j<allfile8.length;j++){
                        allfile8[j]="";
                    }
                    $('#report9').find('.ImgClose').remove();
                }
                if(zhiyafanhetongselect==0){
                    if(flagstate&&flagstate1&&flagstate2&&flagstate3&&flagstate4&&flagstate5&&flagstate6&&flagstate7){
                        state4=true;
                    }
                    if(state4){
                        mui.alert("流程附件保存成功");
                        $('.main').hide();
                        mask.close();

                    }
                    // if(state1&&state2&&state3&&state4&&state8&&state9&&state10){
                    //     //调取总接口
                    //     mui.ajax("host+"/app/loadReportZhi?contractid="+contaracthetongid+"&userid="+userid+"&loantype="+$("#zyfhtsel").val(),{
                    //         dataType: 'JSON',
                    //         type: 'POST',
                    //         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    //         success:function(data){
                    //             if(data){
                    //                 if(step==0){
                    //                     window.location.href="contractListP.html";
                    //                 }
                    //             }
                    //         }
                    //     })
                    // }
                }else if(zhiyafanhetongselect==1){
                    if(flagstate&&flagstate1&&flagstate4&&flagstate5&&flagstate7){
                        state4=true;
                    }
                    if(state4){
                        mui.alert("流程附件保存成功");
                        $('.main').hide();
                        mask.close();
                    }
                    // if(state1&&state2&&state3&&state4&&state8&&state9&&state10){
                    //     //调取总接口
                    //     mui.ajax("host+"/app/loadReportZhi?contractid="+contaracthetongid+"&userid="+userid+"&loantype="+$("#zyfhtsel").val(),{
                    //         dataType: 'JSON',
                    //         type: 'POST',
                    //         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    //         success:function(data){
                    //             if(data){
                    //                 if(step==0){
                    //                     window.location.href="contractListP.html";
                    //                 }
                    //             }
                    //         }
                    //     })
                    // }
                }else if(zhiyafanhetongselect==2){
                    if(flagstate&&flagstate1&&flagstate4&&flagstate5&&flagstate6){
                        state4=true;
                    }
                    if(state4){
                        mui.alert("流程附件保存成功");
                        $('.main').hide();
                        mask.close();
                    }
                    // if(state1&&state2&&state3&&state4&&state8&&state9&&state10){
                    //     //调取总接口
                    //     mui.ajax("host+"/app/loadReportZhi?contractid="+contaracthetongid+"&userid="+userid+"&loantype="+$("#zyfhtsel").val(),{
                    //         dataType: 'JSON',
                    //         type: 'POST',
                    //         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    //         success:function(data){
                    //             if(data){
                    //                 if(step==0){
                    //                     window.location.href="contractListP.html";
                    //                 }
                    //             }
                    //         }
                    //     })
                    // }
                }else if(zhiyafanhetongselect==3){
                    if(flagstate&&flagstate1&&flagstate8){
                        state4=true;
                    }
                    // if(state1&&state2&&state3&&state4&&state8&&state9&&state10){
                    //     //调取总接口
                    //     mui.ajax("host+"/app/loadReportZhi?contractid="+contaracthetongid+"&userid="+userid+"&loantype="+$("#zyfhtsel").val(),{
                    //         dataType: 'JSON',
                    //         type: 'POST',
                    //         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    //         success:function(data){
                    //             if(data){
                    //                 $("#form-submit").removeAttr("disabled");
                    //                 if(ziyarole==0){
                    //                     window.location.href="contractListP.html";
                    //                 }
                    //             }
                    //         },
                    //         error: function (xhr, type, errorThrown) {
                    //             mui.alert('路上堵车，停车休息一会儿吧！');
                    //             $("#form-submit").removeAttr("disabled");
                    //         }
                    //     })
                    // }
                    if(state4){
                        mui.alert("流程附件保存成功");
                        $('.main').hide();
                        mask.close();
                    }
                }
            }else if(res.data.code==500){
                if(!flagflagone){
                    flagflagone=true;
                    mui.alert("用户已经离线，请重新登录");
                    $('.main').hide();
                    mask.close();
                }
            }
        }
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
    flagstate6=false;
    flagstate7=false;
    flagstate8=false;
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
    if(zhiyafanhetongselect==0){
        upload('formdataDemo',allfile,'gphotos');
        upload('formdataDemo1',allfile1,'identcard');
        upload('formdataDemo2',allfile2,'house');
        upload('formdataDemo3',allfile3,'silvermaster');
        upload('formdataDemo4',allfile4,'housebook');
        upload('formdataDemo5',allfile5,'marriageinfo');
        upload('formdataDemo6',allfile6,'notarization');
        upload('formdataDemo7',allfile7,'paymentinfo');

    }else if(zhiyafanhetongselect==1){
        upload('formdataDemo',allfile,'gphotos');
        upload('formdataDemo1',allfile1,'identcard');
        //upload('formdataDemo2',allfile2,'house');
        upload('formdataDemo4',allfile4,'housebook');
        upload('formdataDemo5',allfile5,'marriageinfo');
        upload('formdataDemo7',allfile7,'paymentinfo');
    }else if(zhiyafanhetongselect==2){
        upload('formdataDemo',allfile,'gphotos');
        upload('formdataDemo1',allfile1,'identcard');
        //upload('formdataDemo2',allfile2,'house');
        upload('formdataDemo4',allfile4,'housebook');
        upload('formdataDemo5',allfile5,'marriageinfo');
        upload('formdataDemo6',allfile6,'notarization');
    }else if(zhiyafanhetongselect==3){
        upload('formdataDemo',allfile,'gphotos');
        upload('formdataDemo1',allfile1,'identcard');
        upload('formdataDemo8',allfile8,'drivingcards');
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

//金额转大写
function changeMoneyToChinese(money)
{
    var cnNums = new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖"); //汉字的数字
    var cnIntRadice = new Array("","拾","佰","仟"); //基本单位
    var cnIntUnits = new Array("","万","亿","兆"); //对应整数部分扩展单位
    var cnDecUnits = new Array("角","分","毫","厘"); //对应小数部分单位
    var cnInteger = ""; //整数金额时后面跟的字符
    var cnIntLast = ""; //整型完以后的单位
    var maxNum = 999999999999999.9999; //最大处理的数字

    var IntegerNum; //金额整数部分
    var DecimalNum; //金额小数部分
    var ChineseStr=""; //输出的中文金额字符串
    var parts; //分离金额后用的数组，预定义

    if( money == "" ){
        return "";
    }

    money = parseFloat(money);
//alert(money);
    if( money >= maxNum ){
        $.alert('超出最大处理数字');
        return "";
    }
    if( money == 0 ){
        ChineseStr = cnNums[0]+cnIntLast+cnInteger;
//document.getElementById("show").value=ChineseStr;
        return ChineseStr;
    }
    money = money.toString(); //转换为字符串
    if( money.indexOf(".") == -1 ){
        IntegerNum = money;
        DecimalNum = '';
    }else{
        parts = money.split(".");
        IntegerNum = parts[0];
        DecimalNum = parts[1].substr(0,4);
    }
    if( parseInt(IntegerNum,10) > 0 ){//获取整型部分转换
        zeroCount = 0;
        IntLen = IntegerNum.length;
        for( i=0;i<IntLen;i++ ){
            n = IntegerNum.substr(i,1);
            p = IntLen - i - 1;
            q = p / 4;
            m = p % 4;
            if( n == "0" ){
                zeroCount++;
            }else{
                if( zeroCount > 0 ){
                    ChineseStr += cnNums[0];
                }
                zeroCount = 0; //归零
                ChineseStr += cnNums[parseInt(n)]+cnIntRadice[m];
            }
            if( m==0 && zeroCount<4 ){
                ChineseStr += cnIntUnits[q];
            }
        }
        ChineseStr += cnIntLast;
//整型部分处理完毕
    }
    if( DecimalNum!= '' ){//小数部分
        decLen = DecimalNum.length;
        for( i=0; i<decLen; i++ ){
            n = DecimalNum.substr(i,1);
            if( n != '0' ){
                ChineseStr += cnNums[Number(n)]+cnDecUnits[i];
            }
        }
    }
    if( ChineseStr == '' ){
        ChineseStr += cnNums[0]+cnIntLast+cnInteger;
    }
    else if( DecimalNum == '' ){
        ChineseStr += cnInteger;
    }
    return ChineseStr;

}