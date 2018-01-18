//找贷款顾问轮播效果
$(document).ready(
    function() {
        var interval;
        interval = setInterval(function() {
            $(".next").triggerHandler("click");
            $(".no4").find(".info").fadeIn(1000).find("input[type='text']").val("");
        }, 3000);
        //
        //$("#adviser").hover(function(){
        //    clearInterval(interval);
        //} , function(){
        //    interval = setInterval(function() {
        //        $(".next").triggerHandler("click");
        //        $(".no4").find(".info").fadeIn(1000).find("input[type='text']").val("");
        //    }, 3000);
        //});


        var json0 = {
            "width": "17.4%",
            "height": "100%",
            "top":"33.24%",
            "left":"-29.3%"
        }
        var json1 = {
            "width": "17.4%",
            "height": "100%",
            "top":"33.24%",
            "left":"3.2%"
        }

        var json4 = {
            "width": "53.6%",
            "height":"100%",
            "top":"20.24%",
            "left":"23.4%"
        }

        var json7 = {
            "width": "17.4%",
            "height":"100%",
            "top":"33.24%",
            "left":"80%"
        }
        //var json8 = {
        //    "width": "17.4%",
        //    "height":"100%",
        //    "top":"33.24%",
        //    "left":"100.5%"
        //}
        $(".next").click(
            function() {
                if (!$("#adviser li").is(":animated")) {
                    //先交换位置
                    $(".no1").animate(json0, 400);
                    //$(".no2").animate(json1, 400);
                    //$(".no3").animate(json2, 400);
                    $(".no4").animate(json1, 400 );
                    //$(".no5").animate(json4, 400);
                    //$(".no6").animate(json5, 400);
                    $(".no7").animate(json4, 400);
                    //$(".no8").animate(json7, 400);
                    $(".no0").css(json4);
                    //再交换身份
                    $(".no0").attr("class", "wait");
                    $(".no1").attr("class", "no0").find(".info").hide();
                    //$(".no2").attr("class", "no1").find(".info").hide();
                    //$(".no3").attr("class", "no2").find(".info").hide();
                    $(".no4").attr("class", "no1").find(".info").hide();
                    //$(".no5").attr("class", "no4").find(".info").fadeIn(1000).find("input[type='text']").val("");
                    //$(".no6").attr("class", "no5").find(".info").hide();
                    $(".no7").attr("class", "no4").find(".info").hide();
                    //$(".no8").attr("class", "no7").find(".info").hide();
                    //$(".no3").next().find(".info").fadeIn(20000).find("input[type='text']").val("");
                    //上面的交换身份，把no0搞没了！所以，我们让no1前面那个人改名为no0
                    if ($(".no4").next().length != 0) {
                        //如果no5后面有人，那么改变这个人的姓名为no6
                        $(".no4").next().attr("class", "no7");
                    } else {
                        //no5前面没人，那么改变此时队列最开头的那个人的名字为no0
                        $("#adviser li:first").attr("class", "no7");
                    }
                    //发现写完上面的程序之后，no6的行内样式还是json0的位置，所以强制：
                    $(".no7").css(json7);
                }
            }
        );
    }
);