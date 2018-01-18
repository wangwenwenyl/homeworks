<template>

  <div id="appLiucheng" style="text-align: center;overflow-Y:scroll;">
          <select v-if="isFanhetong==1?true:false" id="zyfhtsel"  style="height:35px;width:90%;" @change="changeSelect">
                <option>-----------------请选择上传资料类型 ▼-----------------</option>
                <option v-bind:selected="(contracttype==5?true:false) || (contracttypeall==5?true:false)" value="0">银主返合同资料</option>
                <option v-bind:selected="(contracttype==6?true:false) || (contracttypeall==6?true:false)" value="1">机构返合同资料</option>
                <option v-bind:selected="(contracttype==7?true:false) || (contracttypeall==7?true:false)" value="2">垫资返合同资料</option>
                <option v-bind:selected="(contracttype==8?true:false) || (contracttypeall==8?true:false)" value="3">车返合同资料</option>
            </select>
    <div id="zyfhtdiv" v-if="((isFanhetong==2?true:false)&&((contracttype==5)||(contracttypeall==5)))">银主返合同资料</div>
    <div id="zyfhtdiv" v-if="((isFanhetong==2?true:false)&&((contracttype==6)||(contracttypeall==6)))">机构返合同资料</div>
    <div id="zyfhtdiv" v-if="((isFanhetong==2?true:false)&&((contracttype==7)||(contracttypeall==7)))">垫资返合同资料</div>
    <div id="zyfhtdiv" v-if="((isFanhetong==2?true:false)&&((contracttype==8)||(contracttypeall==8)))">车返合同资料</div>
    <div v-show="this.imgshow" style="position:fixed;background:rgba(0,0,0,0.6);z-index: 2147483646;width: 100%;height:100%;text-align: center;line-height: 100%;"
         id="imgfd" @click="imgclose">
      <img :src="this.imgpath" style="max-width:80%;max-height: 90%;position: relative;top:50%;transform:translateY(-50%);">
    </div>
			<form id="liucheng" action="" style="">
			<div class="iterm">
				<div class="imgUpload">
					<div class="groupPhoto" v-show="((contracttype==2)||(contracttype==1)||(contracttype==5)||(contracttype==6)||(contracttype==7)||(contracttype==8)||((contracttypeall==2)||(contracttypeall==1)||(contracttypeall==5)||(contracttypeall==6)||(contracttypeall==7)||(contracttypeall==8)))">
						<div class="groupPhotoC">
							<p class="Phototit">合影照片</p>
							<!--照片上传div-->
							<div id='box' class="imgupBox">
								<!-- 上传按钮 -->
								<ul id="report1" class="rep report">
									<div class="imgCC" v-for="(srcone,index) in srcallone" v-if="srcone!=''">
                                        <div class="ImgClose"  v-bind:num="index" @click="deleteImg(index,'one')"></div>
										 <img :src="srcone" @click="imgshowsone(srcone)">
									</div>
                                    <div class="imgCC" v-for="(srcone,index) in ssone" v-if="srcone!=''">
										 <img :src="srcone" @click="imgshowsone(srcone)">
									</div>
									<div class="imgCC" v-for="itemgph in liuchengall.gphotoslist" @click="imgshows(itemgph)">
										 <img :src="itemgph.path">
									</div>
									<div v-show="showsave" class="imgurl" >
										<input type="file"  id="file_input1" info="gphotos" class='file_input' style="opacity:0;
										filter:alpha(opacity=0);
										height: 100%;
										width: 100%;
										/*position: absolute;*/
										top: 0;
										left: 0;
										z-index: 9;" @change="upload"/>
									</div>
								</ul>
							</div>
						</div>
					</div>
					<div class="IDPhoto" v-show="((contracttype==2) ||(contracttype==1)||(contracttype==5)||(contracttype==6)||(contracttype==7)||(contracttype==8)||((contracttypeall==2) ||(contracttypeall==1)||(contracttypeall==5)||(contracttypeall==6)||(contracttypeall==7)||(contracttypeall==8)))">
						<div class="IDPhotoC">
							<p class="Phototit">身份证</p>
							<!--身份证上传div-->
							<div id='box1' class="imgupBox">
								<!-- 上传按钮 -->
								<ul id="report2" class="rep report">
                                    <div class="imgCC" v-for="(srcone,index) in srcalltwo" v-if="srcone!=''">
                                        <div class="ImgClose"  v-bind:num="index" @click="deleteImg(index,'two')"></div>
										 <img :src="srcone" @click="imgshowsone(srcone)">
									</div>
                                    <div class="imgCC" v-for="(srcone,index) in sstwo" v-if="srcone!=''">
										 <img :src="srcone" @click="imgshowsone(srcone)">
									</div>
									<div class="imgCC" v-for="itemid in liuchengall.identitylist" @click="imgshows(itemid)">
										<img :src="itemid.path">
									</div>
                                    <div v-show="showsave" class="imgurl">
										<input type="file"  id="file_input2" info="gphotos" class='file_input' style="opacity:0;
										filter:alpha(opacity=0);
										height: 100%;
										width: 100%;
										/*position: absolute;*/
										top: 0;
										left: 0;
										z-index: 9;" @change="upload1"/>
									</div>
								</ul>
							</div>
						</div>
					</div>
					<div class="itPhoto" v-show="((contracttype==1) ||(contracttype==3)||(contracttype==5)||(fanhetong==1)||((contracttypeall==1) ||(contracttypeall==3)||(contracttypeall==5)))">
						<div class="itPhotoC">
							<p class="Phototit">房产证</p>
							<!--其他上传div-->
							<div id='box2' class="imgupBox">
								<!-- 上传按钮 -->
								<ul id="report3" class="rep report">
                                    <div class="imgCC" v-for="(srcone,index) in srcallthree" v-if="srcone!=''">
                                        <div class="ImgClose"  v-bind:num="index" @click="deleteImg(index,'three')"></div>
										 <img :src="srcone" @click="imgshowsone(srcone)">
									</div>
                                      <div class="imgCC" v-for="(srcone,index) in ssthree" v-if="srcone!=''">
										 <img :src="srcone" @click="imgshowsone(srcone)">
									</div>
									<div class="imgCC" v-for="itemfcz in liuchengall.houseprolist">
										<img :src="itemfcz.path">
									</div>
                                     <div v-show="showsave" class="imgurl">
										<input type="file"  id="file_input3" info="gphotos" class='file_input' style="opacity:0;
										filter:alpha(opacity=0);
										height: 100%;
										width: 100%;
										/*position: absolute;*/
										top: 0;
										left: 0;
										z-index: 9;" @change="upload2"/>
									</div>
								</ul>
							</div>
						</div>
					</div>
                    <div class="itPhoto" v-show="((contracttype==5)||(contracttype==6)||(contracttype==7)||((contracttypeall==5)||(contracttypeall==6)||(contracttypeall==7)))">
						<div class="itPhotoC">
							<p class="Phototit">户口本</p>
							<!--其他上传div-->
							<div id='box5' class="imgupBox">
								<!-- 上传按钮 -->
								<ul id="report8" class="rep report">
                                    <div class="imgCC" v-for="(srcone,index) in srcallfour" v-if="srcone!=''">
                                        <div class="ImgClose"  v-bind:num="index" @click="deleteImg(index,'four')"></div>
										 <img :src="srcone" @click="imgshowsone(srcone)">
									</div>
                                      <div class="imgCC" v-for="(srcone,index) in ssfour" v-if="srcone!=''">
										 <img :src="srcone" @click="imgshowsone(srcone)">
									</div>
									<div class="imgCC" v-for="itemgyrid in liuchengall.housebooklist" @click="imgshows(itemgyrid)">
										<img :src="itemgyrid.path">
									</div>
                                    <div v-show="showsave" class="imgurl">
										<input type="file"  id="file_input4" info="gphotos" class='file_input' style="opacity:0;
										filter:alpha(opacity=0);
										height: 100%;
										width: 100%;
										/*position: absolute;*/
										top: 0;
										left: 0;
										z-index: 9;" @change="upload3"/>
									</div>
								</ul>
							</div>
						</div>
					</div>
					<div class="itPhoto" v-show="((contracttype==1)||(contracttype==5)||(contracttype==6)||(contracttype==7)||((contracttypeall==1)||(contracttypeall==5)||(contracttypeall==6)||(contracttypeall==7)))">
						<div class="itPhotoC">

							<p class="Phototit">婚姻证明</p>
							<!--其他上传div-->
							<div id='box3' class="imgupBox">
								<!-- 上传按钮 -->
								<ul id="report4" class="rep report">
                                     <div class="imgCC" v-for="(srcone,index) in srcallfive" v-if="srcone!=''">
                                        <div class="ImgClose"  v-bind:num="index" @click="deleteImg(index,'five')"></div>
										 <img :src="srcone" @click="imgshowsone(srcone)">
									</div>
                                    <div class="imgCC" v-for="(srcone,index) in ssfive" v-if="srcone!=''">
										 <img :src="srcone" @click="imgshowsone(srcone)">
									</div>
										<div class="imgCC" v-for="itemhyzm in liuchengall.marriagelist" @click="imgshows(itemhyzm)">
										<img :src="itemhyzm.path">
										</div>
                                      <div v-show="showsave" class="imgurl">
										<input type="file"  id="file_input5" info="gphotos" class='file_input' style="opacity:0;
										filter:alpha(opacity=0);
										height: 100%;
										width: 100%;
										/*position: absolute;*/
										top: 0;
										left: 0;
										z-index: 9;" @change="upload4"/>
									</div>
								</ul>
							</div>
						</div>
					</div>
                    <div class="itPhoto" v-show="((contracttype==5)||(contracttype==7)||((contracttypeall==5)||(contracttypeall==7)))">
						<div class="itPhotoC">

							<p class="Phototit">公证书</p>
							<!--其他上传div-->
							<div id='box3' class="imgupBox">
								<!-- 上传按钮 -->
								<ul id="report8" class="rep report">
                                        <div class="imgCC" v-for="(srcone,index) in srcallsix" v-if="srcone!=''">
                                            <div class="ImgClose"  v-bind:num="index" @click="deleteImg(index,'six')"></div>
                                            <img :src="srcone" @click="imgshowsone(srcone)">
                                        </div>
                                        <div class="imgCC" v-for="(srcone,index) in sssix" v-if="srcone!=''">
										 <img :src="srcone" @click="imgshowsone(srcone)">
									    </div>
										<div class="imgCC" v-for="itemhyzm in liuchengall.notarizationlist" @click="imgshows(itemhyzm)">
										<img :src="itemhyzm.path">
										</div>
                                        <div v-show="showsave" class="imgurl">
										<input type="file"  id="file_input6" info="gphotos" class='file_input' style="opacity:0;
										filter:alpha(opacity=0);
										height: 100%;
										width: 100%;
										/*position: absolute;*/
										top: 0;
										left: 0;
										z-index: 9;" @change="upload5"/>
									</div>
								</ul>
							</div>
						</div>
					</div>
                     <div class="itPhoto" v-show="((contracttype==4)||(contracttype==8)||(fanhetong==2)||((contracttypeall==4)||(contracttypeall==8)))">
						<div class="itPhotoC">

							<p class="Phototit">行驶证</p>
							<!--其他上传div-->
							<div id='box3' class="imgupBox">
								<!-- 上传按钮 -->
								<ul id="report9" class="rep report">
                                     <div class="imgCC" v-for="(srcone,index) in srcallseven" v-if="srcone!=''">
                                            <div class="ImgClose"  v-bind:num="index" @click="deleteImg(index,'seven')"></div>
                                            <img :src="srcone" @click="imgshowsone(srcone)">
                                        </div>
                                         <div class="imgCC" v-for="(srcone,index) in ssseven" v-if="srcone!=''">
										 <img :src="srcone" @click="imgshowsone(srcone)">
									    </div>
										<div v-show="showsave" class="imgCC" v-for="itemhyzm in liuchengall.drivinglist" @click="imgshows(itemhyzm)">
										<img :src="itemhyzm.path">
										</div>
                                        <div v-show="showsave" class="imgurl">
										<input type="file"  id="file_input7" info="gphotos" class='file_input' style="opacity:0;
										filter:alpha(opacity=0);
										height: 100%;
										width: 100%;
										/*position: absolute;*/
										top: 0;
										left: 0;
										z-index: 9;" @change="upload6"/>
									</div>
								</ul>
							</div>
						</div>
					</div>
                      <div class="itPhoto" v-show="((contracttype==5)||((contracttypeall==5)))">
						<div class="itPhotoC">

							<p class="Phototit">银主身份证</p>
							<!--其他上传div-->
							<div id='box10' class="imgupBox">
								<!-- 上传按钮 -->
								<ul id="report9" class="rep report">
                                     <div class="imgCC" v-for="(srcone,index) in srcalleight" v-if="srcone!=''">
                                            <div class="ImgClose"  v-bind:num="index" @click="deleteImg(index,'eight')"></div>
                                            <img :src="srcone" @click="imgshowsone(srcone)">
                                        </div>
                                        <div class="imgCC" v-for="(srcone,index) in sseight" v-if="srcone!=''">
										 <img :src="srcone" @click="imgshowsone(srcone)">
									    </div>
										<div  class="imgCC" v-for="itemhyzm in liuchengall.silvermasterlist" @click="imgshows(itemhyzm)">
										<img :src="itemhyzm.path">
										</div>
                                        <div v-show="showsave" class="imgurl">
										<input type="file"  id="file_input8" info="gphotos" class='file_input' style="opacity:0;
										filter:alpha(opacity=0);
										height: 100%;
										width: 100%;
										/*position: absolute;*/
										top: 0;
										left: 0;
										z-index: 9;" @change="upload7"/>
									</div>
								</ul>
							</div>
						</div>
					</div>
					<div class="itPhoto" v-show="contracttype==1 || contracttypeall==1">
						<div class="itPhotoC">

							<p class="Phototit">共有人关系证明</p>
							<!--其他上传div-->
							<div id='box4' class="imgupBox">
								<!-- 上传按钮 -->
								<ul id="report5" class="rep report">
                                     <div class="imgCC" v-for="(srcone,index) in srcallnine" v-if="srcone!=''">
                                            <div class="ImgClose"  v-bind:num="index" @click="deleteImg(index,'nine')"></div>
                                            <img :src="srcone" @click="imgshowsone(srcone)">
                                        </div>
                                     <div class="imgCC" v-for="(srcone,index) in ssnine" v-if="srcone!=''">
										 <img :src="srcone" @click="imgshowsone(srcone)">
									 </div>
									<div class="imgCC" v-for="itemgyr in liuchengall.relationinfolist" @click="imgshows(itemgyr)">
										<img :src="itemgyr.path">
									</div>
                                     <div v-show="showsave" class="imgurl">
										<input type="file"  id="file_input9" info="gphotos" class='file_input' style="opacity:0;
										filter:alpha(opacity=0);
										height: 100%;
										width: 100%;
										/*position: absolute;*/
										top: 0;
										left: 0;
										z-index: 9;" @change="upload8"/>
									</div>
								</ul>
							</div>
						</div>
					</div>
					<div class="itPhoto" v-show="contracttype==1 || contracttypeall==1">
						<div class="itPhotoC">

							<p class="Phototit">共有人身份证</p>
							<!--其他上传div-->
							<div id='box5' class="imgupBox">
								<!-- 上传按钮 -->
								<ul id="report6" class="rep report">
                                       <div class="imgCC" v-for="(srcone,index) in srcallten" v-if="srcone!=''">
                                            <div class="ImgClose"  v-bind:num="index" @click="deleteImg(index,'ten')"></div>
                                            <img :src="srcone" @click="imgshowsone(srcone)">
                                        </div>
                                      <div class="imgCC" v-for="(srcone,index) in ssten" v-if="srcone!=''">
										 <img :src="srcone" @click="imgshowsone(srcone)">
									 </div>
									<div class="imgCC" v-for="itemgyrid in liuchengall.relationcardlist" @click="imgshows(itemgyrid)">
										<img :src="itemgyrid.path">
									</div>
                                     <div v-show="showsave" class="imgurl">
										<input type="file"  id="file_input10" info="gphotos" class='file_input' style="opacity:0;
										filter:alpha(opacity=0);
										height: 100%;
										width: 100%;
										/*position: absolute;*/
										top: 0;
										left: 0;
										z-index: 9;" @change="upload9"/>
									</div>
								</ul>
							</div>
						</div>
					</div>
          <div class="itPhoto" v-show="((contracttype==5)||(contracttype==6) ||((contracttypeall==5)||(contracttypeall==6)))">
            <div class="itPhotoC">
              <p class="Phototit">抵押登记回执单</p>
              <!--其他上传div-->
              <div id='box5' class="imgupBox">
                <!-- 上传按钮 -->
                <ul id="report11" class="rep report">
                    <div class="imgCC" v-for="(srcone,index) in srcalleleven" v-if="srcone!=''">
                                            <div class="ImgClose"  v-bind:num="index" @click="deleteImg(index,'eleven')"></div>
                                            <img :src="srcone" @click="imgshowsone(srcone)">
                                        </div>
                     <div class="imgCC" v-for="(srcone,index) in sseleven" v-if="srcone!=''">
										 <img :src="srcone" @click="imgshowsone(srcone)">
									 </div>
                  <div class="imgCC" v-for="itemgyrid in liuchengall.paymentinfolist" @click="imgshows(itemgyrid)">
                    <img :src="itemgyrid.path">
                  </div>
                    <div v-show="showsave" class="imgurl">
										<input type="file"  id="file_input11" info="gphotos" class='file_input' style="opacity:0;
										filter:alpha(opacity=0);
										height: 100%;
										width: 100%;
										/*position: absolute;*/
										top: 0;
										left: 0;
										z-index: 9;" @change="upload10"/>
									</div>
                </ul>
              </div>
            </div>
        </div>
          <div class="itPhoto" v-show="contracttype==2 || contracttypeall==2 ">
						<div class="itPhotoC">
							<p class="Phototit">其他</p>
							<!--其他上传div-->
							<div id='box5' class="imgupBox">
								<!-- 上传按钮 -->
								<ul id="report7" class="rep report">
                                       <div class="imgCC" v-for="(srcone,index) in srcalltwelve" v-if="srcone!=''">
                                            <div class="ImgClose"  v-bind:num="index" @click="deleteImg(index,'twelve')"></div>
                                            <img  :src="srcone" @click="imgshowsone(srcone)">
                                        </div>
                                    <div class="imgCC" v-for="(srcone,index) in sstwelve" v-if="srcone!=''">
										 <img :src="srcone" @click="imgshowsone(srcone)">
									 </div>
									<div class="imgCC" v-for="itemqt in liuchengall.otherslist" @click="imgshows(itemqt)">
										<img :src="itemqt.path">
									</div>
                                     <div v-show="showsave" class="imgurl">
										<input type="file"  id="file_input12" info="gphotos" class='file_input' style="opacity:0;
										filter:alpha(opacity=0);
										height: 100%;
										width: 100%;
										/*position: absolute;*/
										top: 0;
										left: 0;
										z-index: 9;" @change="upload11"/>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<!--流程结束-->
			</div>
			<div class="big-save" id="formPromise-submit" v-show="showsave" @click="postImg">
       			保存
    		</div>
		</form>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
 import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
import Exif from 'exif-js';
  import axios from 'axios';
  import qs from 'qs';
export default {
  data () {
  return {
      contracttypeall:'',
      fanhetongloantypeall:'',
    contractallType:'',
    imgpath:"",
    imgshow:false,
    srcallone:[],
    fileallone:[],
    srcalltwo:[],
    filealltwo:[],
    srcallthree:[],
    fileallthree:[],
    srcallfour:[],
    fileallfour:[],
    srcallfive:[],
    fileallfive:[],
    srcallsix:[],
    fileallsix:[],
    srcallseven:[],
    fileallseven:[],
    srcalleight:[],
    filealleight:[],
    srcallnine:[],
    fileallnine:[],
    srcallten:[],
    fileallten:[],
    srcalleleven:[],
    filealleleven:[],
    srcalltwelve:[],
    filealltwelve:[],
    flagone:false,
    flagtwp:false,
    flagthree:false,
    flagfour:false,
    flagfive:false,
    flagsix:false,
    flagseven:false,
    flageight:false,
    flagnine:false,
    flagten:false,
    flageleven:false,
    flagtwelve:false,
    ssone:[],
    sstwo:[],
    ssthree:[],
    ssfour:[],
    ssfive:[],
    sssix:[],
    ssseven:[],
    sseight:[],
    ssnine:[],
    ssten:[],
    sseleven:[],
    sstwelve:[],
    }
  },
  created:function(){

  },
  mounted:function(){
      this.userid=this.$cookie.get("uid");
      this.uuid=this.$cookie.get("uuid");
      document.getElementById( "liucheng" ).style.height = document.documentElement.clientHeight + "px";
         if(this.$cookie.get("'"+this.contractid+"'")){
              if(this.contracttypeall==''||this.contracttypeall==null){
          if(this.$cookie.get("'"+this.contractid+"'")==0){
               this.contracttypeall=5;
          }else if(this.$cookie.get("'"+this.contractid+"'")==1){
               this.contracttypeall=6;
          }else if(this.$cookie.get("'"+this.contractid+"'")==2){
               this.contracttypeall=7;
          }else if(this.$cookie.get("'"+this.contractid+"'")==3){
              this.contracttypeall=8;
          }
      }else{
            if(this.$cookie.get('utype')==1){
                if(this.$cookie.get("'"+this.contractid+"'")==0){
                this.contracttypeall=5;
            }else if(this.$cookie.get("'"+this.contractid+"'")==1){
                this.contracttypeall=6;
            }else if(this.$cookie.get("'"+this.contractid+"'")==2){
                this.contracttypeall=7;
            }else if(this.$cookie.get("'"+this.contractid+"'")==3){
                this.contracttypeall=8;
            }
          }
      }
         }
         if(this.contracttype==5){
             this.fanhetongloantypeall=0;
         }else if(this.contracttype==6){
             this.fanhetongloantypeall=1;
         }else if(this.contracttype==7){
             this.fanhetongloantypeall=2;
         }else if(this.contracttype==8){
             this.fanhetongloantypeall=3;
         }

  },
  methods:{
      changeSelect(){
          switch(document.getElementById("zyfhtsel").value){
              case "0":
                    this.contracttypeall=5;
                    this.fanhetongloantypeall=0;
                    this.$cookie.set("'"+this.contractid+"'",0,365);
                    break;
              case "1":
                     this.contracttypeall=6;
                      this.fanhetongloantypeall=1;
                     this.$cookie.set("'"+this.contractid+"'",1,365);
                    break;
              case "2":
                     this.contracttypeall=7;
                      this.fanhetongloantypeall=2;
                     this.$cookie.set("'"+this.contractid+"'",2,365);
                    break;
              case "3":
                     this.contracttypeall=8;
                      this.fanhetongloantypeall=3;
                     this.$cookie.set("'"+this.contractid+"'",3,365);
                    break;
              default:
                    alert("请选择正确的资料类型");
          }
      },
      imgshows(itemgph){
        this.imgshow=true;
        this.imgpath=itemgph.path.substr(0,itemgph.path.length-4);
      },
      imgshowsone(itemgph){
        this.imgshow=true;
        this.imgpath=itemgph.substr(0,itemgph.length-4);
      },
      imgclose(){
        this.imgshow=false;
	  },
	  upload (e) {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length) return;
		this.picValue = files[0];
        this.fileallone.unshift(this.picValue);
        this.imgPreview(this.picValue,"one");
        document.getElementById('file_input1').value="";

 },
   upload1 (e) {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length) return;
		this.picValue = files[0];
        this.filealltwo.unshift(this.picValue);
         this.imgPreview(this.picValue,"two");
        document.getElementById('file_input2').value="";

 },
   upload2 (e) {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length) return;
		this.picValue = files[0];
        this.fileallthree.unshift(this.picValue);
        this.imgPreview(this.picValue,"three");
        document.getElementById('file_input3').value="";

 },
   upload3(e) {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length) return;
		this.picValue = files[0];
        this.fileallfour.unshift(this.picValue);
        this.imgPreview(this.picValue,"four");
        document.getElementById('file_input4').value="";

 },
   upload4 (e) {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length) return;
		this.picValue = files[0];
        this.fileallfive.unshift(this.picValue);
        this.imgPreview(this.picValue,"five");
        document.getElementById('file_input5').value="";

 },
   upload5 (e) {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length) return;
		this.picValue = files[0];
        this.fileallsix.unshift(this.picValue);
        this.imgPreview(this.picValue,"six");
        document.getElementById('file_input6').value="";

 },
   upload6 (e) {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length) return;
		this.picValue = files[0];
        this.fileallseven.unshift(this.picValue);
        this.imgPreview(this.picValue,"seven");
        document.getElementById('file_input7').value="";

 },
   upload7 (e) {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length) return;
		this.picValue = files[0];
        this.filealleight.unshift(this.picValue);
        this.imgPreview(this.picValue,"eight");
        document.getElementById('file_input8').value="";

 },
   upload8 (e) {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length) return;
		this.picValue = files[0];
        this.fileallnine.unshift(this.picValue);
        this.imgPreview(this.picValue,"nine");
        document.getElementById('file_input9').value="";

 },
   upload9 (e) {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length) return;
		this.picValue = files[0];
        this.fileallten.unshift(this.picValue);
        this.imgPreview(this.picValue,"ten");
        document.getElementById('file_input10').value="";

 },
   upload10 (e) {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length) return;
		this.picValue = files[0];
        this.filealleleven.unshift(this.picValue);
        this.imgPreview(this.picValue,"eleven");
        document.getElementById('file_input11').value="";

 },
   upload11 (e) {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length) return;
		this.picValue = files[0];
        this.filealltwelve.unshift(this.picValue);
        this.imgPreview(this.picValue,"twelve");
        document.getElementById('file_input12').value="";

 },
 imgPreview (file,index) {
 let self = this;
 let Orientation;
 //去获取拍照时的信息，解决拍出来的照片旋转问题
 Exif.getData(file, function(){
  Orientation = Exif.getTag(this, 'Orientation');
 });
 // 看支持不支持FileReader
 if (!file || !window.FileReader) return;
 if (/^image/.test(file.type)) {
  // 创建一个reader
  let reader = new FileReader();
  // 将图片2将转成 base64 格式
  reader.readAsDataURL(file);
  // 读取成功后的回调
  reader.onloadend = async function () {
  let result = this.result;
  let img = new Image();
  img.src = result;
  //判断图片是否大于100K,是就直接上传，反之压缩图片
  if (this.result.length <= (100 * 1024)) {
      switch(index){
          case "one":
                self.srcallone.unshift(this.result);
                break;
          case "two":
                self.srcalltwo.unshift(this.result);
                break;
          case "three":
                self.srcallthree.unshift(this.result);
                break;
          case "four":
                self.srcallfour.unshift(this.result);
                break;
          case "five":
                self.srcallfive.unshift(this.result);
                break;
          case "six":
                self.srcallsix.unshift(this.result);
                break;
          case "seven":
                self.srcallseven.unshift(this.result);
                break;
          case "eight":
                self.srcalleight.unshift(this.result);
                break;
          case "nine":
                self.srcallnine.unshift(this.result);
                break;
          case "ten":
                self.srcallten.unshift(this.result);
                break;
          case "eleven":
                self.srcalleleven.unshift(this.result);
                break;
          case "twelve":
                self.srcalltwelve.unshift(this.result);
                break;
      }

  }else {
	img.onload = function () {
	let data = self.compress(img,Orientation);
	 //self.srcallone.unshift(data);
    // self.headerImage = data;
     switch(index){
          case "one":
                self.srcallone.unshift(data);
                break;
          case "two":
                self.srcalltwo.unshift(data);
                break;
          case "three":
                self.srcallthree.unshift(data);
                break;
          case "four":
                self.srcallfour.unshift(data);
                break;
          case "five":
                self.srcallfive.unshift(data);
                break;
          case "six":
                self.srcallsix.unshift(data);
                break;
          case "seven":
                self.srcallseven.unshift(data);
                break;
          case "eight":
                self.srcalleight.unshift(data);
                break;
          case "nine":
                self.srcallnine.unshift(data);
                break;
          case "ten":
                self.srcallten.unshift(data);
                break;
          case "eleven":
                self.srcalleleven.unshift(data);
                break;
          case "twelve":
                self.srcalltwelve.unshift(data);
                break;
      }
	}
  }
  }
 }
 },
 postHoutai(obj,itype,contractnum,contractid,userid,uuid,num,inum){
                    var formData=new FormData();
                    for(var j=0;j<obj.length;j++){
                        if(!(obj[j]=='')){
                            formData.append('file[]',obj[j]);
                        }
                    }
                    formData.append('contractnum',contractnum);
                    formData.append('contractid',contractid);
                    formData.append('filetype',itype);
                    formData.append('userid',userid);
                    formData.append('uuid',uuid);
                    axios.post(host+'/uploads',formData, {
                        headers: {
                        "Content-Type": "multipart/form-data"
                        }
                 }).then(response=>{
                        if(response.data.data.code==200){
                            switch(inum){
                             case 1:
                                this.ssone=this.ssone.concat(this.srcallone);
                                this.fileallone=[];
                                this.srcallone=[];
                                this.flagone=true;
                                break;
                            case 2:
                                this.sstwo=this.sstwo.concat(this.srcalltwo);
                                this.filealltwo=[];
                                this.srcalltwo=[];
                                this.flagtwo=true;
                                break;
                            case 3:
                                this.ssthree=this.ssthree.concat(this.srcallthree);
                                this.fileallthree=[];
                                this.srcallthree=[];
                                this.flagthree=true;
                                break;
                            case 4:
                                this.ssfour=this.ssfour.concat(this.srcallfour);
                                this.fileallfour=[];
                                this.srcallfour=[];
                                this.flagfour=true;
                                break;
                            case 5:
                                this.ssfive=this.ssfive.concat(this.srcallfive);
                                this.fileallfive=[];
                                this.srcallfive=[];
                                this.flagfive=true;
                                break;
                            case 6:
                                 this.sssix=this.sssix.concat(this.srcallsix);
                                this.fileallsix=[];
                                this.srcallsix=[];
                                this.flagsix=true;
                                break;
                            case 7:
                                this.ssseven=this.ssseven.concat(this.srcallseven);
                                this.fileallseven=[];
                                this.srcallseven=[];
                                this.flagseven=true;
                                break;
                            case 8:
                                this.sseight=this.sseight.concat(this.srcalleight);
                                this.filealleight=[];
                                this.srcalleight=[];
                                this.flageight=true;
                                break;
                            case 9:
                                 this.ssnine=this.ssnine.concat(this.srcallnine);
                                this.fileallnine=[];
                                this.srcallnine=[];
                                this.flagnine=true;
                                break;
                            case 10:
                                 this.ssten=this.ssten.concat(this.srcallten);
                                this.fileallten=[];
                                this.srcallten=[];
                                this.flagten=true;
                                break;
                            case 11:
                                  this.sseleven=this.sseleven.concat(this.srcalleleven);
                                this.filealleleven=[];
                                this.srcalleleven=[];
                                this.flageleven=true;
                                break;
                            case 12:
                                  this.sstwelve=this.sseleven.concat(this.srcalltwelve);
                                this.filealltwelve=[];
                                this.srcalltwelve=[];
                                this.flagtwelve=true;
                                break;
                        }
                            switch(num){
                                case 1:
                                if((this.flagone)&&(this.flagtwo)&&(this.flagthree)&&(this.flagfive)&&(this.flagnine)&&(this.flagten)){
                                        Indicator.close();
                                        MessageBox('提示', '上传附件成功');
                                        this.$emit('liuchengflag','');
                                    }
                                    break;
                                case 2:
                                if((this.flagone)&&(this.flagtwo)&&(this.flagtwelve)){
                                        Indicator.close();
                                        MessageBox('提示', '上传附件成功');
                                        this.$emit('liuchengflag','');
                                    }
                                    break;
                                case 3:
                                if((this.flagthree)){
                                        Indicator.close();
                                        MessageBox('提示', '上传附件成功');
                                        this.$emit('liuchengflag','');
                                    }
                                    break;
                                case 4:
                                    if((this.flagseven)){
                                        Indicator.close();
                                        MessageBox('提示', '上传附件成功');
                                        this.$emit('liuchengflag','');
                                    }
                                    break;
                                case 5:
                                      if((this.flagone)&&(this.flagtwo)&&(this.flagthree)&&(this.flagfour)&&(this.flagfive)&&(this.flagsix)&&(this.flageight)&&(this.flageleven)){
                                        Indicator.close();
                                        MessageBox('提示', '上传附件成功');
                                        this.$emit('liuchengflag','');
                                        this.$emit("fanhetongloantype",this.fanhetongloantypeall);
                                        }
                                    break;
                                case 6:
                                     if((this.flagone)&&(this.flagtwo)&&(this.flagthree)&&(this.flagfour)&&(this.flagfive)&&(this.flageleven)){
                                         Indicator.close();
                                        MessageBox('提示', '上传附件成功');
                                        this.$emit('liuchengflag','');
                                        this.$emit("fanhetongloantype",this.fanhetongloantypeall);
                                     }
                                    break;
                                case 7:
                                    if((this.flagone)&&(this.flagtwo)&&(this.flagthree)&&(this.flagfour)&&(this.flagfive)&&(this.flagsix)){
                                         Indicator.close();
                                        MessageBox('提示', '上传附件成功');
                                        this.$emit('liuchengflag','');
                                        this.$emit("fanhetongloantype",this.fanhetongloantypeall);
                                     }
                                    break;
                                case 8:
                                     if((this.flagone)&&(this.flagtwo)&&(this.flagthree)&&(this.flagseven)){
                                         Indicator.close();
                                        MessageBox('提示', '上传附件成功');
                                        this.$emit('liuchengflag','');
                                        this.$emit("fanhetongloantype",this.fanhetongloantypeall);
                                     }
                                    break;
                                case 9:
                                    if((this.flagone)&&(this.flagtwo)&&(this.flagthree)&&(this.flagfour)&&(this.flagfive)&&(this.flagsix)&&(this.flageight)&&(this.flageleven)&&(this.flagseven)){
                                        Indicator.close();
                                        MessageBox('提示', '上传附件成功');
                                        this.$emit('liuchengflag','');
                                        this.$emit("fanhetongloantype",this.fanhetongloantypeall);
                                        }
                                    break;
                                case 10:
                                     if((this.flagone)&&(this.flagtwo)&&(this.flagseven)&&(this.flagfour)&&(this.flagfive)&&(this.flageleven)){
                                         Indicator.close();
                                        MessageBox('提示', '上传附件成功');
                                        this.$emit('liuchengflag','');
                                        this.$emit("fanhetongloantype",this.fanhetongloantypeall);
                                     }
                                    break;
                                case 11:
                                     if((this.flagone)&&(this.flagtwo)&&(this.flagseven)&&(this.flagfour)&&(this.flagfive)&&(this.flagsix)){
                                        Indicator.close();
                                        MessageBox('提示', '上传附件成功');
                                        this.$emit('liuchengflag','');
                                        this.$emit("fanhetongloantype",this.fanhetongloantypeall);
                                     }
                                    break;
                                case 12:
                                    if((this.flagone)&&(this.flagtwo)&&(this.flagseven)){
                                         Indicator.close();
                                        MessageBox('提示', '上传附件成功');
                                        this.$emit('liuchengflag','');
                                        this.$emit("fanhetongloantype",this.fanhetongloantypeall);
                                     }
                                    break;
                            }
                        }
                    }).catch(function(err){
                        Indicator.close();
                        MessageBox('提示', '上传附件失败');
                    });
 },
 postImg () {
     if((this.contracttype!=3)&&(this.contracttype!=4)){
         if(document.getElementById("report1").children.length<=1){
              MessageBox('提示', '合影照片不能为空');
              return false;
         }
     }
      Indicator.open("上传中");
     if(this.fanhetong==1){
         if(this.contracttypeall==5){
              this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,5,1);
                  this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,5,2);
                  this.postHoutai(this.fileallthree,"house",this.contractnum,this.contractid,this.userid,this.uuid,5,3);
                  this.postHoutai(this.fileallfour,"housebook",this.contractnum,this.contractid,this.userid,this.uuid,5,4);
                  this.postHoutai(this.fileallfive,"marriageinfo",this.contractnum,this.contractid,this.userid,this.uuid,5,5);
                  this.postHoutai(this.fileallsix,"notarization",this.contractnum,this.contractid,this.userid,this.uuid,5,6);
                  this.postHoutai(this.filealleight,"silvermaster",this.contractnum,this.contractid,this.userid,this.uuid,5,8);
                  this.postHoutai(this.filealleleven,"paymentinfo",this.contractnum,this.contractid,this.userid,this.uuid,5,11);
         }else if(this.contracttypeall==6){
                  this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,6,1);
                  this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,6,2);
                  this.postHoutai(this.fileallthree,"house",this.contractnum,this.contractid,this.userid,this.uuid,6,3);
                  this.postHoutai(this.fileallfour,"housebook",this.contractnum,this.contractid,this.userid,this.uuid,6,4);
                  this.postHoutai(this.fileallfive,"marriageinfo",this.contractnum,this.contractid,this.userid,this.uuid,6,5);
                  this.postHoutai(this.filealleleven,"paymentinfo",this.contractnum,this.contractid,this.userid,this.uuid,6,11);
         }else if(this.contracttypeall==7){
                 this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,7,1);
                  this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,7,2);
                  this.postHoutai(this.fileallthree,"house",this.contractnum,this.contractid,this.userid,this.uuid,7,3);
                  this.postHoutai(this.fileallfour,"housebook",this.contractnum,this.contractid,this.userid,this.uuid,7,4);
                  this.postHoutai(this.fileallfive,"marriageinfo",this.contractnum,this.contractid,this.userid,this.uuid,7,5);
                  this.postHoutai(this.fileallsix,"notarization",this.contractnum,this.contractid,this.userid,this.uuid,7,6);
         }else if(this.contracttypeall==8){
                       this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,8,1);
                  this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,8,2);
                  this.postHoutai(this.fileallthree,"house",this.contractnum,this.contractid,this.userid,this.uuid,8,3);
                   this.postHoutai(this.fileallseven,"drivingcards",this.contractnum,this.contractid,this.userid,this.uuid,8,7);
         }
        // switch(this.contracttypeall){
        //     case 5:
        //           this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,5,1);
        //           this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,5,2);
        //           this.postHoutai(this.fileallthree,"house",this.contractnum,this.contractid,this.userid,this.uuid,5,3);
        //           this.postHoutai(this.fileallfour,"housebook",this.contractnum,this.contractid,this.userid,this.uuid,5,4);
        //           this.postHoutai(this.fileallfive,"marriageinfo",this.contractnum,this.contractid,this.userid,this.uuid,5,5);
        //           this.postHoutai(this.fileallsix,"notarization",this.contractnum,this.contractid,this.userid,this.uuid,5,6);
        //           this.postHoutai(this.filealleight,"silvermaster",this.contractnum,this.contractid,this.userid,this.uuid,5,8);
        //           this.postHoutai(this.filealleleven,"paymentinfo",this.contractnum,this.contractid,this.userid,this.uuid,5,11);
        //         break;
        //     case 6:
        //          this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,6,1);
        //           this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,6,2);
        //           this.postHoutai(this.fileallthree,"house",this.contractnum,this.contractid,this.userid,this.uuid,6,3);
        //           this.postHoutai(this.fileallfour,"housebook",this.contractnum,this.contractid,this.userid,this.uuid,6,4);
        //           this.postHoutai(this.fileallfive,"marriageinfo",this.contractnum,this.contractid,this.userid,this.uuid,6,5);
        //           this.postHoutai(this.filealleleven,"paymentinfo",this.contractnum,this.contractid,this.userid,this.uuid,6,11);
        //         break;
        //     case 7:
        //         this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,7,1);
        //           this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,7,2);
        //           this.postHoutai(this.fileallthree,"house",this.contractnum,this.contractid,this.userid,this.uuid,7,3);
        //           this.postHoutai(this.fileallfour,"housebook",this.contractnum,this.contractid,this.userid,this.uuid,7,4);
        //           this.postHoutai(this.fileallfive,"marriageinfo",this.contractnum,this.contractid,this.userid,this.uuid,7,5);
        //           this.postHoutai(this.fileallsix,"notarization",this.contractnum,this.contractid,this.userid,this.uuid,7,6);
        //         break;
        //     case 8:
        //     alert(2);
        //            this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,8,1);
        //           this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,8,2);
        //           this.postHoutai(this.fileallthree,"house",this.contractnum,this.contractid,this.userid,this.uuid,8,3);
        //            this.postHoutai(this.fileallseven,"drivingcards",this.contractnum,this.contractid,this.userid,this.uuid,8,7);
        //         break;
        // }
     }else if(this.fanhetong==2){
         if(this.contracttypeall==5){
              this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,9,1);
            this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,9,2);
            this.postHoutai(this.fileallthree,"house",this.contractnum,this.contractid,this.userid,this.uuid,9,3);
            this.postHoutai(this.fileallfour,"housebook",this.contractnum,this.contractid,this.userid,this.uuid,9,4);
            this.postHoutai(this.fileallfive,"marriageinfo",this.contractnum,this.contractid,this.userid,this.uuid,9,5);
            this.postHoutai(this.fileallsix,"notarization",this.contractnum,this.contractid,this.userid,this.uuid,9,6);
            this.postHoutai(this.filealleight,"silvermaster",this.contractnum,this.contractid,this.userid,this.uuid,9,8);
            this.postHoutai(this.filealleleven,"paymentinfo",this.contractnum,this.contractid,this.userid,this.uuid,9,11);
             this.postHoutai(this.fileallseven,"drivingcards",this.contractnum,this.contractid,this.userid,this.uuid,9,7);
         }else if(this.contracttypeall==6){
                 this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,10,1);
            this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,10,2);
            this.postHoutai(this.fileallfour,"housebook",this.contractnum,this.contractid,this.userid,this.uuid,10,4);
            this.postHoutai(this.fileallfive,"marriageinfo",this.contractnum,this.contractid,this.userid,this.uuid,10,5);
            this.postHoutai(this.filealleleven,"paymentinfo",this.contractnum,this.contractid,this.userid,this.uuid,10,11);
            this.postHoutai(this.fileallseven,"drivingcards",this.contractnum,this.contractid,this.userid,this.uuid,10,7);
         }else if(this.contracttypeall==7){
                  this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,11,1);
            this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,11,2);
            this.postHoutai(this.fileallfour,"housebook",this.contractnum,this.contractid,this.userid,this.uuid,11,4);
            this.postHoutai(this.fileallfive,"marriageinfo",this.contractnum,this.contractid,this.userid,this.uuid,11,5);
            this.postHoutai(this.fileallsix,"notarization",this.contractnum,this.contractid,this.userid,this.uuid,11,6);
            this.postHoutai(this.fileallseven,"drivingcards",this.contractnum,this.contractid,this.userid,this.uuid,11,7);
         }else if(this.contracttypeall==8){
                        this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,12,1);
            this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,12,2);
            this.postHoutai(this.fileallseven,"drivingcards",this.contractnum,this.contractid,this.userid,this.uuid,12,7);
         }
        // switch(this.contracttypeall){
        // case 5:
        //       this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,9,1);
        //     this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,9,2);
        //     this.postHoutai(this.fileallthree,"house",this.contractnum,this.contractid,this.userid,this.uuid,9,3);
        //     this.postHoutai(this.fileallfour,"housebook",this.contractnum,this.contractid,this.userid,this.uuid,9,4);
        //     this.postHoutai(this.fileallfive,"marriageinfo",this.contractnum,this.contractid,this.userid,this.uuid,9,5);
        //     this.postHoutai(this.fileallsix,"notarization",this.contractnum,this.contractid,this.userid,this.uuid,9,6);
        //     this.postHoutai(this.filealleight,"silvermaster",this.contractnum,this.contractid,this.userid,this.uuid,9,8);
        //     this.postHoutai(this.filealleleven,"paymentinfo",this.contractnum,this.contractid,this.userid,this.uuid,9,11);
        //      this.postHoutai(this.fileallseven,"drivingcards",this.contractnum,this.contractid,this.userid,this.uuid,9,7);
        //     break;
        // case 6:
        //      this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,10,1);
        //     this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,10,2);
        //     this.postHoutai(this.fileallfour,"housebook",this.contractnum,this.contractid,this.userid,this.uuid,10,4);
        //     this.postHoutai(this.fileallfive,"marriageinfo",this.contractnum,this.contractid,this.userid,this.uuid,10,5);
        //     this.postHoutai(this.filealleleven,"paymentinfo",this.contractnum,this.contractid,this.userid,this.uuid,10,11);
        //     this.postHoutai(this.fileallseven,"drivingcards",this.contractnum,this.contractid,this.userid,this.uuid,10,7);
        //     break;
        // case 7:
        //     this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,11,1);
        //     this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,11,2);
        //     this.postHoutai(this.fileallfour,"housebook",this.contractnum,this.contractid,this.userid,this.uuid,11,4);
        //     this.postHoutai(this.fileallfive,"marriageinfo",this.contractnum,this.contractid,this.userid,this.uuid,11,5);
        //     this.postHoutai(this.fileallsix,"notarization",this.contractnum,this.contractid,this.userid,this.uuid,11,6);
        //     this.postHoutai(this.fileallseven,"drivingcards",this.contractnum,this.contractid,this.userid,this.uuid,11,7);
        //     break;
        // case 8:
        //       this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,12,1);
        //     this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,12,2);
        //     this.postHoutai(this.fileallseven,"drivingcards",this.contractnum,this.contractid,this.userid,this.uuid,12,7);
        //     break;
        //      }
     }else{
           switch(this.contracttype){
               case 1:
                    this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,1,1);
                    this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,1,2);
                    this.postHoutai(this.fileallthree,"house",this.contractnum,this.contractid,this.userid,this.uuid,1,3);
                    this.postHoutai(this.fileallfive,"marriageinfo",this.contractnum,this.contractid,this.userid,this.uuid,1,5);
                    this.postHoutai(this.fileallnine,"relationinfo",this.contractnum,this.contractid,this.userid,this.uuid,1,9);
                    this.postHoutai(this.fileallten,"relationcard",this.contractnum,this.contractid,this.userid,this.uuid,1,10);
                    break;
               case 2:
                   this.postHoutai(this.fileallone,"gphotos",this.contractnum,this.contractid,this.userid,this.uuid,2,1);
                   this.postHoutai(this.filealltwo,"identcard",this.contractnum,this.contractid,this.userid,this.uuid,2,2);
                   this.postHoutai(this.filealltwelve,"others",this.contractnum,this.contractid,this.userid,this.uuid,2,12);
                   break;
               case 3:
                   this.postHoutai(this.fileallthree,"house",this.contractnum,this.contractid,this.userid,this.uuid,3,3);
                   break;
               case 4:
                   this.postHoutai(this.fileallseven,"drivingcards",this.contractnum,this.contractid,this.userid,this.uuid,4,7);
                   break;

        }
     }

 },
 rotateImg (img, direction,canvas) {
 //最小与最大旋转方向，图片旋转4次后回到原方向
 const min_step = 0;
 const max_step = 3;
 if (img == null)return;
 //img的高度和宽度不能在img元素隐藏后获取，否则会出错
 let height = img.height;
 let width = img.width;
 let step = 2;
 if (step == null) {
  step = min_step;
 }
 if (direction == 'right') {
  step++;
  //旋转到原位置，即超过最大值
  step > max_step && (step = min_step);
 } else {
  step--;
  step < min_step && (step = max_step);
 }
 //旋转角度以弧度值为参数
 let degree = step * 90 * Math.PI / 180;
 let ctx = canvas.getContext('2d');
 switch (step) {
  case 0:
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0);
  break;
  case 1:
  canvas.width = height;
  canvas.height = width;
  ctx.rotate(degree);
  ctx.drawImage(img, 0, -height);
  break;
  case 2:
  canvas.width = width;
  canvas.height = height;
  ctx.rotate(degree);
  ctx.drawImage(img, -width, -height);
  break;
  case 3:
  canvas.width = height;
  canvas.height = width;
  ctx.rotate(degree);
  ctx.drawImage(img, -width, 0);
  break;
 }
 },
 compress(img,Orientation) {
 let canvas = document.createElement("canvas");
 let ctx = canvas.getContext('2d');
 //瓦片canvas
 let tCanvas = document.createElement("canvas");
 let tctx = tCanvas.getContext("2d");
 let initSize = img.src.length;
 let width = img.width;
 let height = img.height;
 //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
 let ratio;
 if ((ratio = width * height / 4000000) > 1) {
 console.log("大于400万像素")
 ratio = Math.sqrt(ratio);
 width /= ratio;
 height /= ratio;
 } else {
 ratio = 1;
 }
 canvas.width = width;
 canvas.height = height;
 // 铺底色
 ctx.fillStyle = "#fff";
 ctx.fillRect(0, 0, canvas.width, canvas.height);
 //如果图片像素大于100万则使用瓦片绘制
 let count;
 if ((count = width * height / 1000000) > 1) {
 console.log("超过100W像素");
 count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
 //  计算每块瓦片的宽和高
 let nw = ~~(width / count);
 let nh = ~~(height / count);
 tCanvas.width = nw;
 tCanvas.height = nh;
 for (let i = 0; i < count; i++) {
  for (let j = 0; j < count; j++) {
  tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
  ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
  }
 }
 } else {
 ctx.drawImage(img, 0, 0, width, height);
 }
 //修复ios上传图片的时候 被旋转的问题
 if(Orientation != "" && Orientation != 1){
 switch(Orientation){
  case 6://需要顺时针（向左）90度旋转
  this.rotateImg(img,'left',canvas);
  break;
  case 8://需要逆时针（向右）90度旋转
  this.rotateImg(img,'right',canvas);
  break;
  case 3://需要180度旋转
  this.rotateImg(img,'right',canvas);//转两次
  this.rotateImg(img,'right',canvas);
  break;
 }
 }
 //进行最小压缩
 let ndata = canvas.toDataURL('image/jpeg', 0.1);
 console.log('压缩前：' + initSize);
 console.log('压缩后：' + ndata.length);
 console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
 tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
 return ndata;
 },
    deleteImg(index,indexnum){
        switch(indexnum){
          case "one":
                this.srcallone.splice(index, 1, "");
                this.fileallone[index]="";
                break;
          case "two":
                this.srcalltwo.splice(index, 1, "");
                this.filealltwo[index]="";
                break;
          case "three":
                this.srcallthree.splice(index, 1, "");
                this.fileallthree[index]="";
                break;
          case "four":
                this.srcallfour.splice(index, 1, "");
                this.fileallfour[index]="";
                break;
          case "five":
                this.srcallfive.splice(index, 1, "");
                this.fileallfive[index]="";
                break;
          case "six":
                this.srcallsix.splice(index, 1, "");
                this.fileallsix[index]="";
                break;
          case "seven":
                this.srcallseven.splice(index, 1, "");
                this.fileallseven[index]="";
                break;
          case "eight":
                this.srcalleight.splice(index, 1, "");
                this.filealleight[index]="";
                break;
          case "nine":
                this.srcallnine.splice(index, 1, "");
                this.fileallnine[index]="";
                break;
          case "ten":
                this.srcallten.splice(index, 1, "");
                this.fileallten[index]="";
                break;
          case "eleven":
                this.srcalleleven.splice(index, 1, "");
                this.filealleleven[index]="";
                break;
          case "twelve":
                this.srcalltwelve.splice(index, 1, "");
                this.filealltwelve[index]="";
                break;
      }
  },
  },
  props:["liuchengall","contracttype",'showsave','fanhetong','contractid','contractnum','isFanhetong','fanhetongloantyp'],
	created(){

	}
}
</script>
 <style scoped>
		@import "../../assets/css/contract.css";
        *{color:#333;}
        input{color:#666;}
        .big-save{color:#fff;}
        input[disabled],input:disabled{
            /*border:1px solid #;*/
            background-color:#fff;
            color:#666;
            opacity:1 !important;
            -webkit-opacity:1 !important;
        }
        textarea[disabled],textarea:disabled{
            background-color:#fff;
            color:#666;
            opacity:1 !important;
            -webkit-opacity:1 !important;
        }
        .ret:before{
            height: 16px;
            width: 9px;
            display: inline-block;
            float: left;
            vertical-align: middle;
            position: absolute;
            margin: auto 0;
            left:2%;
            top:9px;
        }
        /*流程css 模块：附件上传 彭*/
        .imgupBox{
            margin-bottom: 18px;
            overflow: hidden;
        }
        .groupPhotoC,.IDPhotoC,.itPhotoC{
            padding: 0px 15px;
        }
        .groupPhoto,.IDPhoto,.itPhoto{
            border-top:9px solid #f5f5f5;
            overflow: hidden;
        }
        .Phototit{
            font-size: 14px;
            color: #666;
            line-height: 35px;
        }
        /*上传按钮*/
        .imgupbtn{
            border: 1px dashed #dadada;
            width: 29%;
            height:82px;
            position:relative;
            float: left;
        }
        .imgupbtnInp{
            opacity:0;
            filter:alpha(opacity=0);
            height: 82px;
            width: 100px;
            position: absolute;
            /*position:relative;*/
            top: 0;
            /*top: -64px;*/
            left: 0;
            z-index: 9;
        }
        .rep{
            padding: 0px 0px;
            margin: 0px 0px;
            overflow: hidden;
        }
        .rep>div{
            width: 28%;
            height: 84px;
            float: left;
            margin-right: 2.09%;
            margin-left: 2.09%;
            margin-top: 12px;
        }
        .imgCC{
            position:relative;
        }
        .imgCC>img{
            height: 100%;
            width: 100%;
        }
        .ImgClose{
            width: 20px;
            height:20px;
            background-color:#fff;
            background:url("../../assets/img/cancel.png") no-repeat;
            background-size:100% 100%;
            position:absolute;
            right:-8%;
            top:-8%;
        }
        /*流程css结束*/
        .hide{display: none;}
        .imgurl{border: 1px solid #dadada;background: url('../../assets/img/imgadd.png') no-repeat center center;}
    </style>
