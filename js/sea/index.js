/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-14 15:06:47
 * @version $Id$
 */

     // top
// $("body").append('<a href="tel:021-60520217" class="bt-free-top"></a>');

window.onscroll=function(){
    if($(window).scrollTop()>100){
         $('.bt-free-top').show();
    }else{
         $('.bt-free-top').hide();
    }
};


//alertx
function alertx (t) {
     if ($(".alert").length == 0 ) {
                 $("body").append('<div class="alert">'+t+'</div>');
                 setTimeout(function () {
                    $(".alert").remove();
                }, 3000);
                 
             };
};
//搜索展开
 $("#sous").on('focus', function() {
        $(".search-input").css('width', '60%');
        $(".span-r").show();
    });
    $("#sous").on('blur', function() {
        $(".search-input").css('width', '86px');
        $(".span-r").hide();
    });
    $(".span-r").on('click',function(event) {
       var input = document.getElementById("sous");
       input.blur();
    });

      
  
 //预约
 $("#tap-show").on('tap', function() {
     $(".header-show").addClass('mohu');
     $(".yuyue").css('bottom', '0px');
     $('.iptPopPre').focus();//获取焦点
 });
 $(".icon-rem").on('tap', function() {
     $(".header-show").removeClass('mohu')
     $(".yuyue").css('bottom', '-100%');
     $('.iptPopPre').blur();//离开焦点

 });
 //收藏
    $("#house_collet").on('tap', function() {
        var text = $(this).text();
        console.log(text);
        if (text=="收藏") {
            $(this).html('<i class="icon-attention icon-attention-ok"></i>已收藏');
            alertx("已收藏"); 
        }else{
           alertx("不要重复收藏"); 
        }
    });

// 文字展开收缩

       $(".swiper-wrapper1 a").on('click', function() {
           $.each($('.swiper-wrapper1 a'), function(i, o){
                    if($(this).hasClass('cur')){
                       $(this).removeClass('cur');
                    }
            });
                $(this).addClass('cur');
    });
 // ========================

    $(function () {
        var h1 = $(".mod-text p").height();
        var h2 = $(".mod-text div").first().height();
        var domain = 'sh';
        if (h2 >= h1) {
            $("div.switch").hide();
        } else {
            $("div.switch").show();
        }
        //展开
        $(".switch").click(function () {
            var flag = $(this).parents(".mod-text").attr('class');
            var h1 = $(".mod-text p").height();
            var h2 = $(".mod-text div").first().height();
            if (h2 >= h1) {
                $(this).parents(".mod-text").removeClass('active');
                $(".mod-text div").first().css('height', '84px');
            } else {
                $(this).parents(".mod-text").addClass('active');
                $(".mod-text div").first().css('height', 'auto');
            }
        });
    });


//文字隐藏
 setTimeout(function () {
    $('.total-wrap').fadeOut(1500);
    }, 3000);
//点击提示旋转
$(".swiper-container-horizontal").click(function() {
   $(".phonex").css('display', 'block');
   //旋转屏幕隐藏
   setTimeout(function () {
    $(".phonex").css('display', 'none');
   },3500)

});
