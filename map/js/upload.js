/**
 * Created by Administrator on 2017/6/12.
 */
var input = document.getElementById("file_input");

// if(typeof FileReader==='undefined'){
//     result.innerHTML = "抱歉，不支持 FileReader";
//     input.setAttribute('disabled','disabled');
// }else{
//     input.addEventListener('change',readFile,false);
// }


input.addEventListener('change',readFile,false);



// $('input').bind("click", function(){
//   readFile();
// });

function readFile(){

    var file = this.files[0]; //读取文件

    if(!/image\/\w+/.test(file.type)){
        alert("文件必须为图片！");
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);  //实现图片的本地预览

    reader.onload = function(e){ //回显

        if($('#box').children('div').length == 1){
            var boardDiv1 = '<div id="result1" class="resultC" style="height: 82px;width: 29%;float: left;margin-right: 2.4%;margin-bottom: 12px"></div>';
            $('#box').prepend(boardDiv1); //prepend
            var result = this.result;
            img = new Image();
            img.src = result;
            // console.log(img);
            // console.log(img.src);
            console.log(img.width);
            // compress(img);
            var data = compress(img);
            // var data = sb(img);

            result1.innerHTML = '<img src="'+ data +'" alt=""/ class="r">' //this.result为data url的形式
            console.log(ctx);
            function compress(imgs) {
                var canvas = document.createElement('canvas');
                console.log(canvas);
                ctx = canvas.getContext('2d');
                console.log(imgs.width);
                // ctx.width = 1440;
                canvas.width = imgs.width;
                canvas.height = imgs.height;

                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);//绘图
                //利用canvas进行绘图
                //ctx.clearRect(0, 0, canvas.width, canvas.height); // canvas清屏
                //将原来图片的质量压缩到原先的0.2倍。
                var data = canvas.toDataURL('image/jpeg', 0.3); //data url的形式
                console.log(data);
                return data;
            }

        }else if($('#box').children('div').length == 2){
            var boardDiv2 = '<div id="result2" class="resultC"></div>';
            $('#box').prepend(boardDiv2); //prepend
            result2.innerHTML = '<img src="'+this.result+'" alt=""/ class="r">'
        }
        else if($('#box').children('div').length == 3){
            var boardDiv3 = '<div id="result3" class="resultC"></div>';
            $('#box').prepend(boardDiv3); //prepend
            result3.innerHTML = '<img src="'+this.result+'" alt=""/ class="r">'
        }
        else if($('#box').children('div').length == 4){
            var boardDiv4 = '<div id="result4" class="resultC"></div>';
            $('#box').prepend(boardDiv4); //prepend
            result4.innerHTML = '<img src="'+this.result+'" alt=""/ class="r">'
        }
        else if($('#box').children('div').length == 5){
            var boardDiv5 = '<div id="result5" class="resultC"></div>';
            $('#box').prepend(boardDiv5); //prepend
            result5.innerHTML = '<img src="'+this.result+'" alt=""/ class="r">'
        }

        $('#file_input').val('');//这是一个问题 input里存放着一个图片对象 需要清空这个图片对象


    }

}