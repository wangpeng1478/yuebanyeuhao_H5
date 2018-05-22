$(document).ready(function() {
  
  $('a').each(function() {
    $(this).on('touchstart', function() {
      $(this).addClass('touch');
    });
    $(this).on('touchend touchmove touchcancel', function() {
      $(this).removeClass('touch');
    });
  });

  // cookie
  // $(document).delegate(".delete>div", "click", function() {
  //   $("#idNumber1").val($(this).text());
  // });

  /*搜索记录相关*/
  //从localStorage获取搜索时间的数组
  var hisTime;
  //从localStorage获取搜索内容的数组
  var hisItem;
  //从localStorage获取最早的1个搜索时间
  var firstKey;

  function init() {
    //每次执行都把2个数组置空
    hisTime = [];
    hisItem = [];
    //模拟localStorage本来有的记录
    //localStorage.setItem("a",12333);
    //本函数内的两个for循环用到的变量
    var i = 0
    for (; i < localStorage.length; i++) {
      if (!isNaN(localStorage.key(i))) {
        hisItem.push(localStorage.getItem(localStorage.key(i)));
        hisTime.push(localStorage.key(i));
      }
    }
    i = 0;
    //执行init(),每次清空之前添加的节点
    $(".delete").html("");
    for (; i < hisItem.length; i++) {
      //alert(hisItem);
      $(".delete").prepend('<a href="#" class="word-break">' + hisItem[i] + '</a>')
    }
  }
  init();

  // $("#search").click(function() {

  // });
  $("#form1").submit(function() {
    var value = $("#idNumber1").val();
    var time = (new Date()).getTime();
    $("#idNumber1").val("");
    if (!value) {
      //提示
      alert('输入框不能为空');
      return false;
    }
    //输入的内容localStorage有记录
    if ($.inArray(value, hisItem) >= 0) {
      for (var j = 0; j < localStorage.length; j++) {
        if (value == localStorage.getItem(localStorage.key(j))) {
          localStorage.removeItem(localStorage.key(j));
        }
      }
      localStorage.setItem(time, value);
    }
    //输入的内容localStorage没有记录
    else {
      //由于限制了只能有6条记录，所以这里进行判断
      if (hisItem.length > 10) {
        firstKey = hisTime[0]
        localStorage.removeItem(firstKey);
        localStorage.setItem(time, value);
      } else {
        localStorage.setItem(time, value)
      }
    }
    init();
    //正式的时候要提交的！！！
    //$("#form1").submit()
  })
  //清除记录功能
  $("#his-dele").on('touchstart', function() {
    var f = 0;
    for (; f < hisTime.length; f++) {
      localStorage.removeItem(hisTime[f]);
    }
    init();
  });
  //苹果手机不兼容出现input无法取值以下是解决方法
  $(function() {
    $('.word-break').on('touchstart', function() {
      var div = $(this).text();
      $('#idNumber1').val(div);
      $("#form1").submit();
    })
    //取到值以后button存储无法取值，这里强迫浏览器强行刷新可解决
    $('#search').on('touchstart', function() {
      var div = $(this).text();
      window.location.reload();
    })

  })
  // cookie


  // $(".search-index").on('touchstart', function() {
  //   $(".index-search").show(100, function() {
  //     $("#idNumber1").focus();
  //   });
  // });


  $(window).scroll(function() {
    $('.mobile-inner-header-icon-click').click();
    var a = $(this).scrollTop(),
      t = $("body")[0].scrollHeight,
      e = $(this).height();
    // a + e + 80 >= t && (g());
    // a + e + 0 >= t && (c());
    // console.log(a);
    if (a > 100) {
      $('.bt-free-top').show();
    } else {
      $('.bt-free-top').hide();
    }
    // g = function() {
    //   console.log('%c离底部小于80 ', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
    // };
    // c = function() {
    //   console.log('%c到底了 ', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
    // };
  });




}); //





// function remiveshan() {
//   $(".index-search").hide();
// }

$(window).load(function() {

  $(".mobile-inner-header-icon").click(function() {
    $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
    $(".mobile-inner-nav").slideToggle(250);
  });
  $(".mobile-inner-nav a").each(function(index) {
    $(this).css({ 'animation-delay': (index / 10) + 's' });
  });
});












function goTop(acceleration, time) {
  acceleration = acceleration || 0.1;
  time = time || 16;
  var x1 = 0;
  var y1 = 0;
  var x2 = 0;
  var y2 = 0;
  var x3 = 0;
  var y3 = 0;
  if (document.documentElement) {
    x1 = document.documentElement.scrollLeft || 0;
    y1 = document.documentElement.scrollTop || 0;
  }
  if (document.body) {
    x2 = document.body.scrollLeft || 0;
    y2 = document.body.scrollTop || 0;
  }
  var x3 = window.scrollX || 0;
  var y3 = window.scrollY || 0;
  // 滚动条到页面顶部的水平距离
  var x = Math.max(x1, Math.max(x2, x3));
  // 滚动条到页面顶部的垂直距离
  var y = Math.max(y1, Math.max(y2, y3));
  // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
  var speed = 1 + acceleration;
  window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
  // 如果距离不为零, 继续调用迭代本函数
  if (x > 0 || y > 0) {
    var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
    window.setTimeout(invokeFunction, time);
  }
}

function mytop() {
  goTop();
}
