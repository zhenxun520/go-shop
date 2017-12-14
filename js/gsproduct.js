/**
 * Created by w on 2017/12/11.
 */
$(function(){

            var shopid;
            var areaid;
    $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getgsshop",
            success:function(data){
                console.log(data);
                $(".sj").html(template("shop-name",data));
                shopid = $(".sj .shop-content").data("shopid");

                $.ajax({
                    type:"get",
                    url:"http://127.0.0.1:9090/api/getgsshoparea",
                    success:function(data){
                        console.log(data);
                        $('.diqu').html(template("shop-region",data));
                        areaid = $(".diqu .region-content").data("areaid");
                            render(shopid,areaid);



                    }
                })



            }
    })

             function render(shopid,areaid){
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getgsproduct",
            data:{
                shopid:shopid,
                areaid:areaid
            },
            success:function(data){
                console.log(data);
                $(".shop-mmm").html(template("shop-ppp",data));
            }
        });
    }

            $(".store").on("click",function(){
                    $(".sj").toggle();
                    $(".shop-content").off().on("click",function(){
                        shopid= $(this).data("shopid");
                        render(shopid,areaid);
                        $(".store").text($(this).text());
                        $(this).find("span").css("display","block").css("display","none");
                        $(this).parent().hide();


                    })


            });

            $(".region").on("click",function(){
                $(".diqu").toggle();
                $(".diqu").off().on("click",'.region-content',function(){
                    areaid = $(this).data("areaid");
                    var txt;
                    txt =  ($(this).text().trim()).slice(0,2);
                    $(".region").text(txt);
                    render(shopid,areaid);
                    $(this).find("span").toggle();
                    $(this).parent().hide();

                })
            });

            $(".All-prices").on("click",function(){
                $(".all-pic").toggleClass("none");

            });





});
