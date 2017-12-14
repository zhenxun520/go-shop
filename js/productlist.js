/**
 * Created by w on 2017/12/7.
 */
$(function(){
    var categoryId = Tools.getparam("categoryid");
   console.log(categoryId);


    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getcategorybyid",
        data:{
            categoryid:categoryId
        },
        dataType:"json",
        success:function(data){
            //console.log(data);
            $(".nav").html(template("tpl-title",data));

        }

    });

    reander();
    function reander(pageid){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getproductlist",
        data:{
            categoryid:categoryId,
            pageid:pageid
        },
        dataType:"json",
        success:function(data){
            console.log(data);
            $(".m-content-info").html(template("tpl-content",data));
            Toolp.pageLoad(data,reander,pageid);

        }

    });

    };

    //页数的加载与点击
    //function pageload(data,pageid){
    //    //当前页
    //    var index = pageid ||1;
    //    //总页数
    //    var totalCount = Math.ceil(data.totalCount/data.pagesize);
    //
    //    var pageobj = {};
    //    pageobj.index = index;
    //    pageobj.totalCount = totalCount;
    //    $('#selectpage').html(template("tpl-index",pageobj));
    //
    //    $('#selectpage').off().on("change",function(){
    //
    //        var opt = $(this).val();
    //        console.log($("option"));
    //        reander(opt);
    //    });
    //    //点击
    //    $('.p-prve').off().on("click",function(){
    //       var index = $('#selectpage option').data("index");
    //        if(index>1){
    //            reander(index-1);
    //        }
    //
    //    });
    //
    //    $('.p-next').off().on("click",function(){
    //        var index = $('#selectpage option').data("index");
    //        var totalCount = $('#selectpage option').data("total");
    //        if(index<totalCount){
    //            reander(index+1);
    //        }
    //
    //    })
    //
    //
    //
    //
    //}



});