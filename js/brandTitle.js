/**
 * Created by w on 2017/12/10.
 */
$(function(){

    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getbrandtitle",
        success:function(data){
            console.log(data);
            $(".pp-ph ul").html(template("title-pp",data));

        }
    });

});
