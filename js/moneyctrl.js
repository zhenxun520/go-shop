/**
 * Created by w on 2017/12/7.
 */

$(function(){
    render();
    function render(pageid){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        data:{
            pageid:pageid
        },
        success:function(data){
            console.log(data);
            $(".m-content-info").html(template("tpl-content",data));
                Toolp.pageLoad(data,render,pageid);
        }
    })

    }






});