/**
 * Created by kfc-qoodit on 2017/3/15.
 */


var validation = {};
var city = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
}

validation.checkParam = function (params) {
    var mgsObj1 = {};
    mgsObj1.statuscode = true;

    mui.each(params.split(","), function (index, item) {
        if(checkNull(item)){}else{
            var tmp = item.split(":");
            var _this = document.getElementById(tmp[0]);
            switch (_this.alt) {
                case 'phone':
                    if (!checkPhone(_this.value)) {
                        mgsObj1.msg = tmp[1] + '[ 手机号格式不正确 ]';
                        mgsObj1.statuscode = false;
                        return mgsObj.statuscode;
                    }
                    break;
                case 'i18d':
                    if (checkCardID(_this.value)) {
                        mgsObj1.msg = tmp[1] + '[ ' + txg + ' ]';
                        mgsObj1.statuscode = false;
                        return mgsObj1.statuscode;
                    }
                    break;
                case 'email':
                    if (!checkEmail(_this.value)) {
                        mgsObj1.msg = tmp[1] + '[ 电子邮箱不正确 ]';
                        mgsObj1.statuscode = false;
                        return mgsObj1.statuscode;
                    }
                    break;
                case 'number':
                    if (!checkNumber(_this.value)) {
                        mgsObj1.msg = tmp[1] + '[ 数字格式不正确 ]';
                        mgsObj1.statuscode = false;
                        return mgsObj1.statuscode;
                    }
                    break;
                case 'money':
                    if (!checkMoney(_this.value)) {
                        mgsObj1.msg = tmp[1] + '[ 金钱格式不正确 ]';
                        mgsObj1.statuscode = false;
                        return mgsObj1.statuscode;
                    }
                    break;
                case 'number1': //输入可能为空的数字
                    if (!checkNullNumber(_this.value)) {
                        mgsObj1.msg = tmp[1] + '[ 数字格式不正确 ]';
                        mgsObj1.statuscode = false;
                        return mgsObj1.statuscode;
                    }
                    break;
                case 'money1':
                    if (!checkNullMoney(_this.value)) {
                        mgsObj1.msg = tmp[1] + '[ 金钱格式不正确 ]';
                        mgsObj1.statuscode = false;
                        return mgsObj1.statuscode;
                    }
                    break;
                case 'positive': //正整数
                    if (!checkPositiveNum(_this.value)) {
                        mgsObj1.msg = tmp[1] + '[ 输入正整数 ]';
                        mgsObj1.statuscode = false;
                        return mgsObj1.statuscode;
                    }
                    break;
                case 'chinese': //汉字
                    if (!checkChinese(_this.value)) {
                        mgsObj1.msg = tmp[1] + '[ 输入中文 ]';
                        mgsObj1.statuscode = false;
                        return mgsObj1.statuscode;
                    }
                    break;
                default:
                    if (checkNull(_this.value)) {
                        mgsObj1.msg = '[ 输入甲方信息 ]';
                        mgsObj1.statuscode = false;
                        return mgsObj1.statuscode;
                    }
                    break;
            }
        }

    });

    return mgsObj1;
}

validation.checkData = function (params, values) {
    var mapPool = {};
    var mgsObj = {};
    mgsObj.statuscode = true;
    mui.each(values.split("&"), function (index, item) {
        var tmp = item.split("=");
        mapPool[tmp[0]] = tmp[1];
    });
    mui.each(params.split(","), function (index, item) {
        var tmp = item.split(":");
        var _this = document.getElementById(tmp[0]);
        if (checkNull(mapPool[tmp[0]])) {
            mgsObj.msg = '请输入[ ' + tmp[1] + ' ]信息';
            mgsObj.statuscode = false;
            return mgsObj.statuscode;
        } else {
            switch (_this.alt) {
                case 'phone':
                    console.log("switch-phone：" + checkPhone(mapPool[tmp[0]]) + "  ===> " + mapPool[tmp[0]]);
                    if (!checkPhone(mapPool[tmp[0]])) {
                        mgsObj.msg = tmp[1] + '[ 手机号格式不正确 ]';
                        mgsObj.statuscode = false;
                        return mgsObj.statuscode;
                    }
                    break;
                case 'i18d':
                    var txg = checkCardID(mapPool[tmp[0]]);
                    console.log("switch-i18d：" + txg + "  ===> " + mapPool[tmp[0]]);
                    if (txg === true) {
                    } else {
                        mgsObj.msg = tmp[1] + '[ ' + txg + ' ]';
                        mgsObj.statuscode = false;
                        return mgsObj.statuscode;
                    }
                    break;
                case 'email':
                    if (!checkEmail(mapPool[tmp[0]])) {
                        mgsObj.msg = tmp[1] + '[ 电子邮箱不正确 ]';
                        mgsObj.statuscode = false;
                        return mgsObj.statuscode;
                    }
                    break;
                case 'number':
                    if (!checkNumber(mapPool[tmp[0]])) {
                        mgsObj.msg = tmp[1] + '[ 数字格式不正确 ]';
                        mgsObj.statuscode = false;
                        return mgsObj.statuscode;
                    }
                    break;
                case 'money':
                    if (!checkMoney(mapPool[tmp[0]])) {
                        mgsObj.msg = tmp[1] + '[ 金钱格式不正确 ]';
                        mgsObj.statuscode = false;
                        return mgsObj.statuscode;
                    }
                    break;
                case 'number1':  //输入可能为空的数字
                    if (!checkNullNumber(mapPool[tmp[0]])) {
                        mgsObj.msg = tmp[1] + '[ 数字格式不正确 ]';
                        mgsObj.statuscode = false;
                        return mgsObj.statuscode;
                    }
                    break;
                case 'money1':
                    if (!checkNullMoney(mapPool[tmp[0]])) {
                        mgsObj.msg = tmp[1] + '[ 金钱格式不正确 ]';
                        mgsObj.statuscode = false;
                        return mgsObj.statuscode;
                    }
                    break;
                case 'positive': //正整数
                    if (!checkPositiveNum(mapPool[tmp[0]])) {
                        mgsObj.msg = tmp[1] + '[ 输入正整数 ]';
                        mgsObj.statuscode = false;
                        return mgsObj.statuscode;
                    }
                    break;
                case 'chinese': //正整数
                    if (!checkChinese(mapPool[tmp[0]])) {
                        mgsObj.msg = tmp[1] + '[ 输入中文 ]';
                        mgsObj.statuscode = false;
                        return mgsObj.statuscode;
                    }
                    break;
                default:
                    if (checkNull(_this.value)) {
                        mgsObj.msg = tmp[1] +'[ 不能为空 ]';
                        mgsObj.statuscode = false;
                        return mgsObj.statuscode;
                    }
                    break;
            }
        }
    });

    return mgsObj;
};

function spaceTrim(val) {
    return val.replace(/(^\s*)|(\s*$)/g,"");
}

function checkNull(val) {
    return spaceTrim(val).length == 0;
}

function checkPhone(val) {
    return (/^1[34578]\d{9}$/.test(val));
}

function checkCardID(sId) {
    var iSum = 0;
    if (!/^\d{17}(\d|x)$/i.test(sId)) return "身份证长度或格式错误";
    sId = sId.replace(/x$/i, "a");
    if (city[parseInt(sId.substr(0, 2))] == null) return "身份证地区不存在";
    sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
    var d = new Date(sBirthday.replace(/-/g, "/"));
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()))return "身份证中出生日期不正确";
    for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
    if (iSum % 11 != 1) return "身份证号不正确";
    return true;
}

function checkChinese(val) {
    return (/^[\u4E00-\u9FA5]+$/.test(val));
}

function checkEmail(val) {
    return (/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/.test(val));
}

function checkNumber(val) {
    return (/^[-\+]?\d+(\.\d+)?$/.test(val));
}
function checkMoney(val) {
    return (/^[0-9]+(.[0-9]{2})?$/.test(val));
}

function checkNullNumber(val) {
    if (spaceTrim(val).length == 0) {
        return true;
    } else {
        return (/^[-\+]?\d+(\.\d+)?$/.test(val));
    }
}

function checkNullMoney(val) {
    if (spaceTrim(val).length == 0) {
        return true;
    } else {
        return (/^[0-9]+(.[0-9]{2})?$/.test(val));
    }
}

function checkPositiveNum(val) {
    return (/^[0-9]*[1-9][0-9]*$/.test(val));
}