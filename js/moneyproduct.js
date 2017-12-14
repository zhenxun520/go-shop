/**
 * Created by w on 2017/12/8.
 */
$(function(){

    var productid = Tools.getparam("productid");

    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
        data:{
            productid:productid
        },
        success:function(data){
            console.log(data);
            $(".adress").html(template("tpl-c",data));
            $(".content").html(template("tpl-tk",data));
            $(".m-pl-sj").html(template("tpl-pl",data));
        }
    })
});