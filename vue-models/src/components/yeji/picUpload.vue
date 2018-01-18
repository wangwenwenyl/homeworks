<template>
    <div>
        <div class="iterms-list" style="margin-top:5px;">
            <div class="left-name">
                {{title}}:
            </div>
            <div class="right-num fileBtn">
                <input type="file" hidden @change="getFile">
                <span  @click="fileChoose($event)">选择文件</span>
                <span  @click="fileUpLoad($event)">开始上传</span>
            </div>
        </div>
        <ul class="yulan-box" :class="{
                    'yulan-box-fukuan': !imgBase64Arr[0] && title === '付款凭证',
                    'yulan-box-shoukuan': !imgBase64Arr[0] && title === '收款凭证',
                    'yulan-box-zhichudan': !imgBase64Arr[0] && title === '支出单附件'
         }">
            <li v-for="(imgPath, idx) in imgBase64Arr">
                <img :src="imgPath" alt="">
                <span class="imgUploaded" v-if="uploadFinished"></span>
                <span class="imgRemove" v-else @click="imgRemove(idx)"></span>
            </li>
        </ul>
    </div>
</template>

<script>
    import deptselect from '@/components/search-select';
    export default {
        data(){
            return {
                // 用于存储选中图片的所有信息
                filesMessageArr: [],
                // 用于存储转化为base64后的图片
                imgBase64Arr: [],
                // 用于显示各个图片是否已经上传成功，此处需要针对每个文件的上传情况单独分析
                uploadFinished: false
            }
        },
        props: [ "title" ],
        mounted:function(){

        },
        methods:{
            // 模拟触发文件选择功能
            fileChoose(e){
                e.target.parentNode.querySelector("input").click();
            },
            // 获取到选中的图片，并回显
            getFile(e){
                this.filesMessageArr.unshift( e.target.files[0] );
                this.imgShow( e.target.files[0] );  // 回显
                e.target.value = '';    // 清除已经选中的文件，便于下次选择同一文件
            },
            // 选中图片的显示
            imgShow( fileMsg ){
                let _this = this;
                // 看支持不支持FileReader
                if (!fileMsg || !window.FileReader) return;
                if (/^image/.test(fileMsg.type)) {
                     // 创建一个reader
                    let reader = new FileReader();
                    // 将图片2将转成 base64 格式
                    reader.readAsDataURL( fileMsg );
                    // 读取成功后的回调
                    reader.onloadend = async function () {
                        _this.imgBase64Arr.unshift( this.result );
                    }
                }
            },
            // 移除选中图片
            imgRemove( idx ){
                this.imgBase64Arr.splice( idx, 1 );
            },
            // 向后台传输文件
            fileUpLoad(e){
                this.uploadFinished = true;
            },
        },
        components:{

        }
    }
</script>
<style scoped>
    ul,li{
        margin:0;
        padding:0;
        list-style:none;
    }
    .left-name{float:left;font-size:14px;color:#666;}
    .right-num{float:right;font-size:14px;color:#333;}
    .iterms-list{height:30px;line-height:30px;}
    .iterms-list:after{display:table;content:"";clear:both;}
    .yulan-box{
        width:100%;
        height:150px;
        border:1px solid #ddd;
        margin-top:10px;
        padding:10px;
        overflow:scroll;
    }
    .yulan-box li{
        width:48%;
        height:100%;
        float:left;
     }
    .yulan-box li:nth-of-type(2n-1){
        margin: 0 10px 10px 0;
    }
    .yulan-box li img{
        height:100%;
        width:100%;
        vertical-align: top;
    }
    .yulan-box-fukuan{
        background:url("../../assets/img/pic-preview-fukuan@2x.png") no-repeat center center;
    }
    .yulan-box-shoukuan{
        background:url("../../assets/img/pic-preview-shoukuan@2x.png") no-repeat center center;
    }
    .yulan-box-zhichudan{
        background:url("../../assets/img/pic-preview-zhichudan@2x.png") no-repeat center center;
    }
    .fileBtn span{
        font-size:12px;
        display:inline-block;
        padding:0 10px;
        border:1px solid #fbaf37;
        border-radius:10px;
    }
    ul>li{
        position:relative;
    }
    ul>li>span{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 34px;
        height: 34px;
        color: red;
    }
    .imgRemove{
        border-radius: 50%;
        background: url('../../assets/image/imgRemove.png') no-repeat center center;
        background-color: #fff;
        margin: 0 3px 3px 0;
    }
    .imgUploaded{
        background: url('../../assets/image/imgUploaded.png') no-repeat center center;
    }
</style>
