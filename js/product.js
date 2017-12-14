/**
 * Created by w on 2017/12/7.
 */
$(function(){
    var productId = Tools.getparam("productId");
    var categoryId = Tools.getparam("categoryid");
    var productName = Tools.getparam("productName");
    var name =productName.split(" ")[0];




    //导航栏的加载
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getcategorybyid",
        data:{
            categoryid:categoryId
        },
        dataType:"json",
        success:function(data){
            //console.log(data);
           $(".nav").html(template("tpl1",data));
            $('.nav .pname').text(name);
        }

    });

    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getproduct",
        dataType:"json",
        data:{
            productid:productId
        },
        success:function(data){
            //console.log(data);
            $('.bj-box').html(template("tpl-title",data));
            var productId =  $('.bj-box .bj-title').data("productId");
            console.log(productId);
        }
    });

    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getproductcom",
        data:{
            productid:productId
        },
        success:function(data){
            console.log(data);
            $(".wypj-title .sj").html(template("tpl-wypj",data));

        }

    });



});
