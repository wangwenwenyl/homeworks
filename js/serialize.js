/**
 * Created by zzyzmy on 2017/2/28.
*/
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
var DataParams = {
//将从form中通过$('#form').serialize()获取的值转成json
    formToJson: function (data) {
        data=data.replace(/&/g,"\",\"");
        data=data.replace(/=/g,"\":\"");
        data="{\""+data+"\"}";
        return data;
    }

};

$.fn.setForm = function (form,jsonValue) {
    $.each(form.elements, function (index,item) {
        if("INPUT"==item.tagName||"TEXTAREA"==item.tagName){
            if('null'!=item.getAttribute("name") && null!=item.getAttribute("name")){
                //form.elements[index].value= decodeURI(jsonValue[item.getAttribute("id")]);
                form.elements[index].value= jsonValue[item.getAttribute("name")];
                //console.log(index+" == => "+item.getAttribute("id")+ form.elements[index].value);
            }
        }
    });
};
$.fn.setFormDiv = function (div,jsonValue) {
    $.each(div.find("input"), function (index,item) {
        if("INPUT"==item.tagName||"TEXTAREA"==item.tagName){
            if('null'!=item.getAttribute("name") && null!=item.getAttribute("name")){
                div.find("input")[index].value= jsonValue[item.getAttribute("name")];
            }
        }
    });
};
$.fn.getForm = function (jsonValue,form) {
    $.each(form.elements, function (index,item) {
        if("INPUT"==item.tagName){
            if('null'!=item.getAttribute("name") && null!=item.getAttribute("name")){
                jsonValue[item.getAttribute("name")] = form.elements[index].value;
            }
        }
    });
    return jsonValue;
};
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

