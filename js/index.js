$(function(){

    $.ajax({
        url:"http://127.0.0.1:9090/api/getindexmenu",
        type:"get",
        dataType:"json",
        success:function(info){
            console.log(info);
            $(".m-nav .clearfix").html(template("tpl",info));
            var lis;
            lis =  $(".m-nav .clearfix li");
            console.log(lis);

            lis.each(function(i,e){
                if(i===7){
                    $(e).addClass("now");
                } else if(i>7){
                    $(e).addClass("none");
                }
            });

            $(".m-nav").on("click",".now",function(e){
                e.preventDefault();
                lis.each(function(i,e){
                    if(i>7){
                        $(e).toggleClass("none");
                    }
                });
            })
        }
    });

    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        dataType:"json",
        success:function(data){
            //console.log(data);
            $(".m-content-info").html(template("tpl-content",data));
        }
    })



});