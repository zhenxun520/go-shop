/**
 * Created by w on 2017/12/9.
 */
$(function(){

    var productid = Tools.getparam("productid");

    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getdiscountproduct",
        data:{
            productid:productid
        },
        success:function(data){
            console.log(data);
            $(".xq-content").html(template("tpl-xq",data));
        }
    })


});
