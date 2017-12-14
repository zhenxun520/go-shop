/**
 * Created by w on 2017/12/6.
 */
$(function(){

    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getcategorytitle",
        dataType:"json",
        success:function(data){
            //console.log(data);
            $(".m-main ul").html(template("category-tpl",data));
        }
    });



    $(".m-main ul").on("click","li",function(){
       var id = $(this).data("id");

        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getcategory",
            dataType:"json",
            data:{
                titleid:id
            },
            success:function(data){
                console.log(data);
                $(".wrap ul").html(template("category-more",data));

            }

        });

    });
    $(".m-main ul").on("click",".mian-li",function(){
        $(this).find(".wrap").stop().slideToggle();
    });








});