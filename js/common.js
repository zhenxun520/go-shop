/**
 * Created by w on 2017/12/6.
 */
/**
 * Created by w on 2017/12/6.
 */

$(function(){


    var html = document.documentElement;

    var scrrenWidth = html.clientWidth;

    var uiWidth = 750;
    var fonts = 40;
    var bili = uiWidth/fonts;
    var timer = null;

    //html.style.fontSize = scrrenWidth/bili + "px";
    resize();
    window.onresize = resize;

    function resize(){
        var scrrenWidth = html.clientWidth;
        clearInterval(timer);

        timer = setInterval(function(){
            if(scrrenWidth <= 320){
                html.style.fontSize = 320/bili + "px";
            }else if(scrrenWidth>=640){
                html.style.fontSize = 640/bili + "px";

            }else {
                html.style.fontSize = scrrenWidth / bili + "px";

            }

        },100)


    }






});

$(function(){

    $(".m-footer .m-footer-r").on("click",function(){


        $("html,body").animate({
            scrollTop:0
        },1000);

    });


});

$(function(){
   window.Tools = {
        getsite:function(){
            var search = location.search;
            search =  decodeURI(search);
            //?categoryid=0&category=电视
            search = search.slice(1);
            //categoryid=0&category=电视
            arr = search.split("&");
            //(2) ["categoryid=0", "category=电视"]
            var obj = {};
            arr.forEach(function(e){
                var key = e.split("=")[0];
                var value = e.split("=")[1];
                obj[key] = value;

            });
            //console.log(obj);
            return obj;
        },
        getparam:function(key){
            return this.getsite()[key];
        }
    }
});

$(function(){
    window.Toolp = {
        //1ajax的数据 , 2回调函数,3pageid
        pageLoad:function(data,automod,pageid){
                //获得当前页
                var index = pageid || 1;
                //获得总页数
                var totalCount = Math.ceil((data.totalCount/data.pagesize));

                var objpage = {};
                objpage.index = index;
                objpage.total = totalCount;
                console.log(objpage);
                $("#selectpage").html(template("tplpage",objpage));

                //点击切换页面
                $("#selectpage").off().on("change",function(){
                    var opt = $(this).val();
                    automod(opt);
                });

                //上一页
                $(".p-prve").off().on("click",function(){
                    var index = $("#selectpage option").data("index");
                    if(1<index){
                        automod(index-1);
                    }

                });
                //下一页
                $(".p-next").off().on("click",function(){
                    var index = $("#selectpage option").data("index");
                    var total = $("#selectpage option").data("total");
                    console.log(index,total);
                    if(index<total){
                        automod(index+1);
                    }
                })
        }
    }
});






