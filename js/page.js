window.onload = function() {
  var Swiper2 = new Swiper('.swiper-container-page2')
  var Swiper1 = new Swiper('.swiper-container-page1', {
    controller: {
      control: Swiper2,
      by: 'container',
    },
    pagination: {
      el: '.swiper-pagination-page1',
      type: 'fraction'
    }
  })
  var Swiper2 = new Swiper('.swiper-container-page2', {
    controller: {
      control: Swiper1,
      by: 'container',
    },
    pagination: {
      el: '.swiper-pagination-page2',
      type: 'fraction'
    }
  })


  // 文字滑动
  var swiper = new Swiper('.swiper-container-pagestext', {
    // scrollbar: '.swiper-scrollbar1',
    direction: 'horizontal',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true
  });



  $('.list-item').hide();
  $('.list-item:lt(5)').show();

  if ($('.list-item').length >= 5) {
    $("#mod-more").show();
  }

  $("#nevisible").html("(" + $('.list-item').length + ")");
  $(".swiper-container-pagestext a").click(function() {
    $.each($('.swiper-container-pagestext a'), function(i, o) {
      if ($(this).hasClass('on')) {
        $(this).removeClass('on');
      }
    });
    $(this).addClass('on');
    var max = parseInt($(this).attr('data-max'));
    var min = parseInt($(this).attr('data-min'));
    $(".list-item").hide();
    reda(min, max);
  });
  var th = $("#myText").height();
  console.log(th);
  if (th > 200) {
    $("#clcikshow").show();
    $("#myText").height(200)
  }



  $('.tForm input[type="text"]').keyup(function() {
    if (isPhoen($(this).val())) {
      $('#yu-submit').removeAttr('disabled')
    } else {
      $('#yu-submit').attr('disabled', 'disabled');
    }
  })

  $(".tForm").submit(function() {
    alertx('预约成功');
    setTimeout(function() {
      $('#yuyeu').css('top', '-120%')
    }, 2000);
    return false;
  })

  $(window).scroll(function() {

    var a = $(this).scrollTop();
    var b = $("#uniqueList").offset().top;
    if (a > b) {
      console.log('da');
      $(".pos-fix").show();
      $(".header").hide();
    } else {
      $(".header").show();
      $(".pos-fix").hide();
    }

  });


}




$("#reolook").each(function() {
  $(this).on('tap', function() {
    $("#swiper-look").css('top', '-120%');
  });
});

$("#swiper-container-page1").each(function() {
  $(this).on('click', function() {
    $("#swiper-look").css('top', '0');
  });
});

function isRangeIn(target, min, max) {
  var num = parseFloat(target);
  if (num < min || num > max) {
    return false;
  }
  return true;
}


function reda(min, max) {

  $(".list-item .mianji b").each(function() {
    var num = parseInt($(this).text());
    // console.log(num);
    if (num < max || num > min) {
      // console.log('false');
      $(this).parent().parent().parent().parent().hide();
      $("#nevisible").html("(" + $('.list-item:visible').length + ")");
    } else {
      // console.log('true');
      $(this).parent().parent().parent().parent().show();
      $("#nevisible").html("(" + $('.list-item:visible').length + ")");
    }
  })
  if ($('.list-item:visible').length >= 5) {
    $("#mod-more").show();
  } else {
    $("#mod-more").hide();
  }
}



$("#mod-more").each(function() {
  $(this).on('tap', function() {
    $('.list-item').show();
    $(this).hide();
  })
})


$("#clcikshow").each(function() {
  $(this).on('tap', function() {
    $(this).hide();
    $(".myText").height("auto")
  });
});


$(".yue-but").each(function() {
  $(this).on('tap', function() {
    $('#yuyeu').css('top', '0');
     $("#yu-text").focus();

  });
});
$("#offYuyeu").each(function() {
  $(this).on('tap', function() {
    $('#yuyeu').css('top', '-120%');
     $("#yu-text").blur();
  });
});
