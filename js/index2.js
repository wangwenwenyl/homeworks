(function () {
    // var input =  $('#file_input');
    // alert('vv');

    $('.file_input').change( function () {
         // console.log($(this));
        var rex=/^(.*?)\.(png|jpg|gif|jpeg)$/i;
        if(!rex.test($(this).val())){
            return false;
        }
        var peng = $(this);
        // console.log($(this).parent('div').parent('ul'));
        var pengul = $(this).parent('div').parent('ul');    //相册<ul>
        lrz(this.files[0], {width: 200}, function (results) {
            // 你需要的数据都在这里，可以以字符串的形式传送base64给服务端转存为图片。
            // 以下为演示用内容
            var tip = document.querySelector('#tip'),
                report = document.querySelector('.report'),
                footer = document.querySelector('footer');
            demo_report(results.base64, results.base64.length * 0.8,pengul,peng);

        });
    });

    /**
     * 演示报告
     * @param title
     * @param src
     * @param size
     */
    function demo_report(src, size, pengul,obj) {
        console.log(obj.attr('info'));
        var idd=numfile[numfile.length-1];
        var idd1=numfile1[numfile1.length-1];
        var idd2=numfile2[numfile2.length-1];
        var idd3=numfile3[numfile3.length-1];
        var idd4=numfile4[numfile4.length-1];
        var idd5=numfile5[numfile5.length-1];
        var idd6=numfile6[numfile6.length-1];
        var idd7=numfile7[numfile7.length-1];
        var idd8=numfile8[numfile8.length-1];
        var img = new Image();
        //$(img).attr('info',idd);
        if(obj.attr("info")=='gphotos'){
            img.setAttribute('info',idd);
            img.setAttribute('infoin','gphotos');
        }else if(obj.attr("info")=='identcard'){
            img.setAttribute('info',idd1);
            img.setAttribute('infoin','identcard');
        }else if(obj.attr("info")=='house'){
            img.setAttribute('info',idd2);
            img.setAttribute('infoin','house');
        }else if(obj.attr("info")=='silvermaster'){
            img.setAttribute('info',idd3);
            img.setAttribute('infoin','silvermaster');
        }else if(obj.attr("info")=='housebook'){
            img.setAttribute('info',idd4);
            img.setAttribute('infoin','housebook');
        }else if(obj.attr("info")=='marriageinfo'){
            img.setAttribute('info',idd5);
            img.setAttribute('infoin','marriageinfo');
        }else if(obj.attr("info")=='notarization'){
            img.setAttribute('info',idd6);
            img.setAttribute('infoin','notarization');
        }else if(obj.attr("info")=='paymentinfo'){
            img.setAttribute('info',idd7);
            img.setAttribute('infoin','paymentinfo');
        }else if(obj.attr("info")=='drivingcards'){
            img.setAttribute('info',idd8);
            img.setAttribute('infoin','drivingcards');
        }

        // console.log(pengul);
        img.onload = function () {

            if(pengul.children('div').length == 1){
                var imgC = $('<div class="imgCC"></div>');
                imgC.append(img);
                var imgClose = $('<div class="ImgClose"></div>');
                imgC.append(imgClose);
                pengul.prepend(imgC);
                imgC.click(function(){
                    $('#imgfd').find('img').attr('src',src);
                    // $('#imgfd').css('padding-top',($('#imgfd').height()-$('#imgfd').find('img:eq(0)').height())/2);
                    $('#imgfd').css('display','block');
                    $('#imgfd').click(function(){
                        $('#imgfd').css('display','none');
                    })
                })
                // document.querySelector('#report').append(imgC);
                imgcl();
            }else if(pengul.children('div').length == 2){
                var imgC = $('<div class="imgCC"></div>');
                imgC.append(img);
                var imgClose = $('<div class="ImgClose"></div>');
                imgC.append(imgClose);
                pengul.prepend(imgC);
                imgC.click(function(){
                    $('#imgfd').find('img').attr('src',src);
                    // $('#imgfd').css('padding-top',($('#imgfd').height()-$('#imgfd').find('img:eq(0)').height())/2);
                    $('#imgfd').css('display','block');
                    $('#imgfd').click(function(){
                        $('#imgfd').css('display','none');
                    })
                })
                imgcl();
            }else if(pengul.children('div').length == 3){
                var imgC = $('<div class="imgCC"></div>');
                imgC.append(img);
                var imgClose = $('<div class="ImgClose"></div>');
                imgC.append(imgClose);
                pengul.prepend(imgC);
                imgC.click(function(){
                    $('#imgfd').find('img').attr('src',src);
                    // $('#imgfd').css('padding-top',($('#imgfd').height()-$('#imgfd').find('img:eq(0)').height())/2);
                    $('#imgfd').css('display','block');
                    $('#imgfd').click(function(){
                        $('#imgfd').css('display','none');
                    })
                })
                imgcl();
            }else if(pengul.children('div').length == 4){
                var imgC = $('<div class="imgCC"></div>');
                imgC.append(img);
                var imgClose = $('<div class="ImgClose"></div>');
                imgC.append(imgClose);
                pengul.prepend(imgC);
                imgC.click(function(){
                    $('#imgfd').find('img').attr('src',src);
                    // $('#imgfd').css('padding-top',($('#imgfd').height()-$('#imgfd').find('img:eq(0)').height())/2);
                    $('#imgfd').css('display','block');
                    $('#imgfd').click(function(){
                        $('#imgfd').css('display','none');
                    })
                })
                imgcl();
            }else if(pengul.children('div').length == 5){
                var imgC = $('<div class="imgCC"></div>');
                imgC.append(img);
                var imgClose = $('<div class="ImgClose"></div>');
                imgC.append(imgClose);
                pengul.prepend(imgC);
                imgC.click(function(){
                    $('#imgfd').find('img').attr('src',src);
                    // $('#imgfd').css('padding-top',($('#imgfd').height()-$('#imgfd').find('img:eq(0)').height())/2);
                    $('#imgfd').css('display','block');
                    $('#imgfd').click(function(){
                        $('#imgfd').css('display','none');
                    })
                })
                imgcl();
            }else{
                var imgC = $('<div class="imgCC"></div>');
                imgC.append(img);
                var imgClose = $('<div class="ImgClose"></div>');
                imgC.append(imgClose);
                pengul.prepend(imgC);
                imgC.click(function(){
                    $('#imgfd').find('img').attr('src',src);
                    // $('#imgfd').css('padding-top',($('#imgfd').height()-$('#imgfd').find('img:eq(0)').height())/2);
                    $('#imgfd').css('display','block');
                    $('#imgfd').click(function(){
                        $('#imgfd').css('display','none');
                    })
                })
                imgcl();
            }

        };

        img.src = src;
        // console.log(img.src);
    }

    // 演示用服务器太慢，做个延缓加载
    // window.onload = function () {
    //     input.style.display = 'block';
    // }
    $('#file_input').val('');

    imgcl = function(){
        $('.ImgClose').unbind('click').bind('click',function(){
            // info = '';
            if($(this).prev().attr("infoin")=="gphotos"){
                allfile[$(this).prev().attr('info')]='';
            }else if($(this).prev().attr("infoin")=="identcard"){
                allfile1[$(this).prev().prev().attr('info')]='';
            }else if($(this).prev().attr("infoin")=="house"){
                allfile2[$(this).prev().attr('info')]='';
            }else if($(this).prev().attr("infoin")=="silvermaster"){
                allfile3[$(this).prev().prev().attr('info')]='';
            }else if($(this).prev().attr("infoin")=="housebook"){
                allfile4[$(this).prev().attr('info')]='';
            }else if($(this).prev().attr("infoin")=="marriageinfo"){
                allfile5[$(this).prev().prev().attr('info')]='';
            }else if($(this).prev().attr("infoin")=="notarization"){
                allfile6[$(this).prev().attr('info')]='';
            }else if($(this).prev().attr("infoin")=="paymentinfo"){
                allfile7[$(this).prev().prev().attr('info')]='';
            }else if($(this).prev().attr("infoin")=="drivingcards"){
                allfile8[$(this).prev().attr('info')]='';
            }
            $(this).parent('.imgCC').remove();
            // alert('1');
        });
    }

})();