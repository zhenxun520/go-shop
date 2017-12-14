/**
 * Created by w on 2017/12/10.
 */



$(function(){
    var a;
    var brandTitleid = Tools.getparam("brandTitleid");
    var brandTitle = Tools.getparam("brandTitle");
    $(".hot-p p").text(brandTitle+"哪个好");
    $(".hot-pl p").text(brandTitle+"产品销量");
    $(".hot-plun").text(brandTitle+"最新评论")

    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getbrand",
        data:{
                brandtitleid:brandTitleid
        },
        success:function(data){
            console.log(data);
            $(".pp-ph ul").html(template("pp-ds",data));
            var lis = $(".pp-ph ul li .box");

                lis.each(function(i,e){
                    if(i==0){
                        $(e).css("backgroundColor","red");
                    }else if(i==1){
                        $(e).css("backgroundColor","#ff9112");
                    }else if(i==2){
                        $(e).css("backgroundColor","#8bdf5c");
                    }

                });

            var brandTitleid;

            brandTitleid = $(".pp-ph ul li .box").next().data("titleid");
            console.log(brandTitleid);
            var page = 4
            $.ajax({
                type:"get",
                url:"http://127.0.0.1:9090/api/getbrandproductlist",
                data:{
                    brandtitleid:brandTitleid,
                    pagesize:page
                },
                success:function(data){
                    console.log(data);
                    $(".shop-box ul").html(template("pj-xl",data));
                    a = data.result[0].productName;
                    console.log(a);
                    var productid;
                    var imglg;
                    var textname;
                        productid = $(".shop-box ul li a").data("productd");
                        imglg = $(".shop-box ul li a .img-lg img").eq(0);
                        textname = $(".shop-box ul li a .title-name-info").eq(0).text();


                    $.ajax({
                        type:"get",
                        url:"http://127.0.0.1:9090/api/getproductcom",
                        data:{
                            productid:productid
                        },
                        success:function(data){
                            console.log(data);
                            $(".new-p").html(template("zxpl",data));


                        }
                    })


                }
            })









        }
    })

});
