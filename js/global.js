/**=========================================**  
 | 异步延时加载js/css文件  
 | @example loadasync("http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js");  
 | @author liuensong@gmail.com  
 | @param string url js/css链接地址  
 | @return 新生成element对象/null  
 **=========================================**/
function loadasync(url) {
  var elt = null,
    head = null,
    type = null;
  if (url) {
    head = document.getElementsByTagName("head")[0];
    switch (url.split(".").pop()) {
      case "css":
        elt = document.createElement("link");
        elt.rel = "stylesheet";
        elt.href = url;
        break;
      case "js":
        elt = document.createElement("script");
        elt.type = "text/javascript";
        elt.src = url;
        break;
      default:
        //something...  
    }
    if (elt != null && (typeof elt) == "object") {
      head.appendChild(elt);
    }
  }
  return elt;
}
/**=========================================**  
 | 判断js/css文件是否已加载  
 | @example isload("jquery.min.js");  
 | @author liuensong@gmail.com  
 | @param string fname js/css文件名  
 | @return bool true/false  
 **=========================================**/
function isload(fname) {
  var isload = false;
  var tags = { "js": "script", "css": "link" };
  var tagname = tags[fname.split(".").pop()];
  if (tagname != undefined) {
    var elts = document.getElementsByTagName(tagname);
    for (i in elts) {
      if ((elts[i].href && elts[i].href.toString().indexOf(fname) != "-1") ||
        (elts[i].src && elts[i].src.toString().indexOf(fname) != "-1")) {
        isload = true;
      }
    }
  }
  return isload;
}

// window.onload = function() {
//   loadasync('http://at.alicdn.com/t/font_518482_m11b42m743ac3di.css');
//   console.log('图标加载css ' + isload("font_518482_m11b42m743ac3di.css"));
// }
document.write('<link rel="stylesheet" href="http://at.alicdn.com/t/font_518482_rj2aeqrdfe0zfr.css">');


$("#searchaa").each(function() {

  $(this).on('tap', function() {
    $("#index-page").hide();
    $("#news-page").show(100, function() {
      $("#idNumber1").focus();
    });
  });
})

$("#sidebarr").each(function() {

  $(this).on('tap', function() {
    $("#index-page").show();
    $("#news-page").hide();
    $("#idNumber1").blur();

  });
})

$("body").append('<a href="javascript:mytop()" class="bt-free-top"><span class="iconfont icon-less"></span></a><a href="tel:021-60520217" class="bt-free-phoen"><span class="iconfont icon-iconfontdianhua"></span></a>');

//alertx
function alertx(t) {
  if ($(".alert").length == 0) {
    $("body").append('<div class="alert">' + t + '</div>');
    setTimeout(function() {
      $(".alert").remove();
    }, 3000);
  };
};

/*校验电话码格式 */
function isPhoen(str) {
  var reg = /^1[34578][0-9]{9}$/;
  return reg.test(str);
}

// $('#mszf-T').submit(function() {

// });

$('#mszf-T').each(function() {
  $(this).on('submit', function() {
    var verasd = $("#mszf-T input[type='text']").val();
    if (isPhoen(verasd)) {
      $.ajax({
        url: 'https://www.baidu.com',
        type: 'GET',
        dataType: 'json'
      })
      .done(function() {
        console.log("success");
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
      
      alertx('预约成功');
    } else {
      alertx('号码不正确');
    }
    return false;
  })
})
