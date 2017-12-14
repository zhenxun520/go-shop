/**
 * Created by w on 2017/12/9.
 */

$(function(){

    mui(".mui-scroll-wrapper").scroll({
        scrollX: true, //是否横向滚动
        scrollY: false,
        indicators: false, //是否显示滚动条
    });


    var titleid ;

    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
        success:function(data){
            console.log(data);
            $(".mui-scroll").html(template("top-title",data));
            var liswidth = 0;
            var lis = $(".mui-scroll li");
            lis.each(function(i,e){
               liswidth+= $(e).outerWidth();
            });
            $(".mui-scroll").width(liswidth);

            titleid = $(".fl").data("titleid");
            console.log(titleid);
            render(0);
            var id = 0;
            lis.each(function(i,e){
                $(e).on("click",function(){
                    $(e).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
                  id =  $(e).data("titleid");
                    render(id);
                    console.log(id);
                });


            })

        }




    });





    function render(titleid){
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
            data:{
                titleid:titleid
            },
            success:function(data){
                console.log(data);
                $(".ul-box").html(template("tpl-content",data));

            }
        })
    }










});
