$(function(){
    var couponid = Tools.getparam("couponid");
    var title = Tools.getparam("couponTitle");

    $('.zk-center h3').text(title+"优惠券");


    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getcouponproduct",
        data:{
            couponid:couponid
        },
        success:function(data){
            console.log(data);
            $(".yhq").html(template("title-id",data));
            $(".mui-backdrop").html(template("big-img",data));
            $(".mui-backdrop").hide();
        }

    });

    $(".yhq").on("click",".yh-content",function(){

        $(".mui-backdrop").show();

    });

    $(".mui-backdrop").on("click",function(){

        $(".mui-backdrop").hide();

    });


});
