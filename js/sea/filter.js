function inArray(a, t) {
    for (var e = 0; e < t.length; e++) if (a == t[e]) return !0;
    return !1
}
$(function() {
    function a(a, t) {
        "" != a && $(a).removeClass("active"), "" != t && $(t).addClass("active")
    }
    $(".listing").addClass("active");
    var t = $(".filter-nav"),
        e = t.find("li"),
        i = (globalData.districtData, $(".filter-cont")),
        s = i.find(".filter-box");
    e.on("click", function(t) {
        t.stopPropagation(), a(".city,search");
        var n = $(this),
            o = n.attr("data-id"),
            r = n.attr("data-checked"),
            l = i.find('.filter-box[id="' + o + '"]');
        e.removeClass("touch"), i.removeClass("active"), s.removeClass("active"), "false" == r ? (n.addClass("touch"), $("#filtermask").addClass("filter-mask"), l.addClass("active"), i.addClass("active"), n.attr("data-checked", !0).siblings().attr("data-checked", !1)) : (n.removeClass("touch"), $("#filtermask").removeClass("filter-mask"), l.removeClass("active"), i.removeClass("active"), n.attr("data-checked", !1))
    }), $("#filtermask").click(function() {
        $(this).removeClass("filter-mask"), i.removeClass("active"), i.find(".filter-box").each(function() {
            $(this).removeClass("active")
        }), e.each(function() {
            $(this).removeClass("touch"), $(this).attr("data-checked", !1)
        })
    }), e.each(function() {
        $(this).on("touchstart", function() {
            $(this).addClass("touch")
        })
    }), e.each(function() {
        $(this).on("touchend touchmove touchcancel", function() {
            $(this).removeClass("touch")
        })
    }), $("a,button").each(function() {
        $(this).on("touchstart", function() {
            $(this).addClass("touch")
        })
    }), $("a,button").each(function() {
        $(this).on("touchend touchmove touchcancel", function() {
            $(this).removeClass("touch")
        })
    });
    var n, o = function(a, t, e) {
            var i = "",
                s = "";
            for (var n in a) {
                var o = null == a[n].url || void 0 == a[n].url ? "javascript:void(0);" : a[n].url;
                if (i += '<li class="js-touch-state' + (void 0 != a[n].children ? " has-children" : "") + (1 == a[n].selected ? " active" : "") + '" data-id="' + n + '"><a href="' + o + '">' + a[n].val + "</a></li>", e && e.length > 0 && 1 == a[n].selected && void 0 != a[n].children) {
                    var r = a[n].children;
                    for (var l in r) s += '<li class="js-touch-state ' + (1 == r[l].selected ? "active" : "") + '" data-id="' + l + '"><a href="' + r[l].url + '">' + r[l].val + "</a></li>"
                }
            }
            i.length > 0 && ($("#" + t).html('<ul class="filter-menu">' + i + "</ul>").addClass("active"), $("#" + t).find("a").each(function() {
                var t = $(this).parent().attr("data-id");
                $(this).click(function() {
                    if ($(this).parent().addClass("active").siblings().removeClass("active"), t > 0 && void 0 != a[t].children) {
                        s = "";
                        var i = a[t].children;
                        for (var n in i) s += '<li class="js-touch-state' + (1 == i[n].selected ? " active" : "") + '" data-id="' + n + '"><a href="' + i[n].url + '">' + i[n].val + "</a></li>";
                        s.length > 0 && $("#" + e).html('<ul class="filter-menu">' + s + "</ul>").addClass("active").show()
                    }
                })
            })), s.length > 0 && $("#" + e).html('<ul class="filter-menu">' + s + "</ul>").addClass("active").show()
        };
    if (paramsData.nearby_type) n = globalData.nearbyTypeData;
    else {
        var r = paramsData.subway_line;
        n = parseInt(r) ? globalData.subwayData : globalData.districtData
    }
    o(n, "locationItems", "childItems"), $("#filter_region").find("li").each(function() {





        $($("#filterLocation div")[0]).addClass("active"), $(this).click(function() {
            !$(this).hasClass("active") && $(this).hasClass("has-children") && $("#childItems").hide(), $(this).addClass("active").siblings().removeClass("active");
            var a = parseInt($(this).attr("data-flag"));
            switch (a) {
            case 1:
                o(globalData.districtData, "locationItems", "childItems");
                break;
            case 2:
                o(globalData.subwayData, "locationItems", "childItems");
                break;
            case 3:
                $("#geo").length < 1 && ($(window).on("message", function(a) {
                    var t = a.data;
                    (a.origin = "*") && "error" == t && alert("当前位置获取失败")
                }), $('<iframe  width="0" height="0" id="geo"  style="display: none"frameborder="no"marginheight="0"marginwidth="0"onload="document.getElementById(\'geo\').contentWindow.postMessage(\'pleaceReturnGeo\', \'*\')"src="//m.haozu.com/static/build/templet/geo.html"allowTransparency="true"></iframe>').prependTo("body")), o(globalData.nearbyTypeData, "locationItems", "childItems")
            }





        })
    }), $(".bt-clear-history").click(function() {
        var a = "?";
        searchUrl.indexOf("?") > -1 && (a = "&"), $.post(searchUrl + a + "data_type=clearHistory", function() {
            $(".bt-clear-history").hide(), $(".seach-your-his").hide()
        })
    });
    var l, c = paramsData.area_station;
    1 == c && (l = globalData.areaData.area), 2 == c && (l = globalData.areaData.station), o(l, "areaItems"), $("#filterArea").find("li").each(function() {
        $($("#filter_acreage div")[0]).addClass("active"), $(this).click(function() {
            $(this).addClass("active").siblings().removeClass("active"), 1 == $(this).attr("data-flag") && o(globalData.areaData.area, "areaItems"), 2 == $(this).attr("data-flag") && o(globalData.areaData.station, "areaItems")
        })
    });
    var d, h = paramsData.price_unit;
    1 == h && (d = globalData.priceData.totalPrice), 2 == h && (d = globalData.priceData.unitPrice), o(d, "priceItems"), $("#filterPrice").find("li").each(function() {
        $($("#filter_price div")[0]).addClass("active"), $(this).click(function() {
            $(this).addClass("active").siblings().removeClass("active"), 1 == $(this).attr("data-flag") && o(globalData.priceData.totalPrice, "priceItems"), 2 == $(this).attr("data-flag") && o(globalData.priceData.unitPrice, "priceItems")
        })
    });
    var u = {
        zx: 0,
        type: 0,
        more: {
            register: 0,
            htype: 0
        }
    },
        f = function() {
            var a = '<dl data-type="zx" class="filter-more filter-normal"><dt>装修</dt>';
            for (var t in zhuangxiuData) {
                1 == zhuangxiuData[t].selected && (u.zx = zhuangxiuData[t].id);
                var e = 1 == zhuangxiuData[t].selected ? ' class="on"' : "";
                a += "<dd><a" + e + ' href="javascript:void(0);" data-id="' + zhuangxiuData[t].id + '">' + zhuangxiuData[t].val + "</a></dd>"
            }
            a += "</dl>";
            var i = '<dl data-type="type" class="filter-more filter-normal"><dt>类型</dt>';
            for (var s in houseTypeData) {
                1 == houseTypeData[s].selected && (u.type = houseTypeData[s].id);
                var e = 1 == houseTypeData[s].selected ? ' class="on"' : "";
                i += "<dd><a" + e + ' href="javascript:void(0);" data-id="' + houseTypeData[s].id + '">' + houseTypeData[s].val + "</a></dd>"
            }
            i += "</dl>";
            // var n = 2 == u.type ? ' style="display:none;"' : "",
            //     o = "",
            //     r = !1;
            // for (var l in houseHouseTpyeData) {
            //     1 == houseHouseTpyeData[l].selected && (u.more.htype = houseHouseTpyeData[l].id, r = !0);
            //     var e = 1 == houseHouseTpyeData[l].selected ? ' class="on"' : "";
            //     o += "<dd><a" + e + n + ' data-type="htype" href="javascript:void(0);" data-id="' + houseHouseTpyeData[l].id + '">' + houseHouseTpyeData[l].val + "</a></dd>"
            // }
            u.more.register = 1 == registerData.selected ? 1 : 0;
            var c = '<dl data-type="htype" class="filter-more"><dt>更多</dt><dd><a' + (1 == registerData.selected || r ? "" : ' class="on"') + ' id="btnMoreAll" href="javascript:void(0);" data-id="0">全部</a></dd><dd><a' + (1 == registerData.selected ? ' class="on"' : "") + ' id="btnRegister" href="javascript:void(0);" data-id="1">可注册</a></dd> <dd> <a data-type="htype" href="javascript:void(0);" data-id="2">全1部</a></dd>';
            c += o + "</dl>", $(".bt-clear-all").before(a + i + c), $("#moreItems dl.filter-normal a").each(function() {
                $(this).tap(function() {
                    $(this).addClass("on").parent().siblings().children("a").removeClass("on");
                    // var a = $(this).parent().parent().attr("data-type"),
                    //     t = $(this).attr("data-id");
                    // "zx" == a ? u.zx = t : "type" == a && (u.type = t, 2 == t ? (u.more.htype = 0, $("a[data-type=htype]").hide().removeClass("on")) : $("a[data-type=htype]").show())
                })
            }), 
            $("a[data-type=htype]").each(function() {
                $(this).tap(function() {
                    u.more.htype = $(this).attr("data-id"), $(this).addClass("on").parent().siblings().children("a").each(function() {
                        "btnRegister" != $(this).attr("id") && $(this).removeClass("on")
                    })
                })
            }), $("#btnRegister").tap(function() {
                $(this).addClass("on"), $("#btnMoreAll").removeClass("on"), u.more.register = 1
            }), $("#btnMoreAll").tap(function() {
                $(this).addClass("on").parent().siblings().children("a").removeClass("on"), u.more.register = 0, u.more.htype = 0
            })
        };
    f(), $(".bt-clear-all").tap(function() {
        u.zx = 0, u.type = 0, u.more.register = 0, u.more.htype = 0, $("#moreItems dl a").each(function() {
            0 == $(this).attr("data-id") ? $(this).addClass("on") : $(this).removeClass("on")
        })
    })
    var p = 2,
        v = 0,
        m = !1;
   
    // var g = function() {
    //         var a = "?";
    //         pageUrl.indexOf("?") > -1 && (a = "&"), m = !0, $(".mod-end").text("加载中...");
    //         var t = $.trim($("#search_input").val()),
    //             e = pageUrl + a,
    //             i = location.href;
    //         if (i += i.indexOf("?") > -1 ? "&" : "?", t.length > 0) {
    //             var s = "";
    //             if (i.indexOf("bid") > -1) {
    //                 var n = new RegExp("(^|&)bid=([^&]*)(&|$)"),
    //                     o = window.location.search.substr(1).match(n);
    //                 s = o[2]
    //             }
    //             e = e + "bid=" + s + "&keyword=" + encodeURIComponent(t) + "&page=" + p + "&data_type=json&ver=" + new Date
    //         } else e = i + "page=" + p + "&data_type=json&ver=" + new Date;
    //         $.ajax({
    //             url: e,
    //             dataType: "json",
    //             timeout: 5e3,
    //             success: function(a) {
    //                 v = 0;
    //                 var t = a.hasMore,
    //                     a = a.data;
    //                 str = "", t ? (y(a), p++, m = !1) : (m = !0, $(".mod-end").text("全部加载完毕")), b(p)
    //             },
    //             error: function() {
    //                 v++, v < 3 && (m = !1, g())
    //             }
    //         })
    //     },
        y = function(a) {
            var t = "";
            for (var e in a) {
                var i = "";
                a[e].building_info.distance <= 1e3 && a[e].building_info.distance > 0 && (i = '<span class="how-distance">与该楼盘相距' + a[e].building_info.distance + "米</span>"), t += "<li><a onclick=\"_hmt.push(['_trackEvent', 'wap_list_click', 'click']);_hmt.push(['_trackEvent', 'wap_list_verB_toDetail', 'click']);\" href=\"" + a[e].building_info.detail_url + '"><img class="pic-list-left" src="' + a[e].building_info.thumb_image + '" alt=""><div class="result-right"><h3>' + a[e].building_info.name + i + '</h3><div><span class="price-list-new">' + a[e].building_info.price + a[e].building_info.price_unit + "</span>", 1 != a[e].building_info.isOnlyStation && 0 != a[e].building_info.showArea.length && (t += '<i class="icon icon-measure"></i>' + a[e].building_info.showArea), t += '</div><div><i class="icon icon-coordinate"></i>' + a[e].building_info.district_name + " - " + a[e].building_info.street_name + "</div>", void 0 == a[e].building_info.withMeDistance ? t += void 0 != a[e].building_info.subway_display && "" != a[e].building_info.subway_display ? '<div><i class="icon icon-subway"></i>' + a[e].building_info.subway_display + "</div>" : "" : void 0 != a[e].building_info.withMeDistance && "" != a[e].building_info.withMeDistance && (t += '<div><i class="icon icon-subway"></i>' + a[e].building_info.withMeDistance + "</div>"), t += "</div></a></li>"
            }
            $(".result-list").append(t)
        },
        b = function(a) {
            $('img[loadpage="' + a + '"]').each(function() {
                var a = $(this).attr("realsrc"),
                    t = new Image;
                t.src = a;
                var e = $(this);
                t.onload = function() {
                    e.attr("src", a)
                }
            })
        };
    $(".icon-pic-txt").click(function() {
        var a = 31536e3;
        setCookie("listVer", "B", a, "/", "m.haozu.com"), location.reload()
    }), $(".icon-all-size").click(function() {
        var a = 31536e3;
        setCookie("listVer", "A", a, "/", "m.haozu.com"), location.reload()
    }), $(".search-widget").bind("click", function(t) {
        t.stopPropagation(), a(".listing,.mask,.city", ".header,.search"), $(".list-style-wrap").hide(), $("#search_input").focus()
    }), $("#search_input").focus(function(a) {
        $(this).attr("autocomplete", "off");
        var t = $(this).val();
        if ("搜索" != t) {
            $(this).val(t);
            var e = a.keyCode;
            C(t, e)
        }
    }), $("#exit_search").bind("click", function(t) {
        t.stopPropagation(), a(".header,.search,.city,.location", ".listing"), $(".list-style-wrap").show()
    });
    var D = "",
        C = function(a, t) {
            if (D == a || 0 == a.length) return void(D = a);
            D = a, console.log(searchUrl);
            var e = "?";
            searchUrl.indexOf("?") > -1 && (e = "&");
            var i = "//m.haozu.com/" + this_city + "/suggestion/?keyword=" + encodeURIComponent(a) + "&ver=" + new Date;
            if (13 == t) {
                var s = searchUrl + e + "keyword=" + encodeURIComponent(a);
                location.href = s
            } else $.ajax({
                url: i,
                dataType: "json",
                timeout: 5e3,
                success: function(t) {
                    var e = t,
                        i = "";
                    if (e) {
                        var s = new RegExp("^(" + a + ")([\\s\\S]*)$", "i");
                        $.each(e, function(t, e) {
                            var n = null != e.district_name && e.district_name.length > 0 && "请选择" != e.district_name ? " (" + e.district_name + " - " + e.street_name + ")" : "";
                            i += '<li class="list-item"><a href="/' + this_city + "/zuxiezilou?bid=" + e.id + "&keyword=" + a + '">' + e.name.replace(s, '$1<b style="font-weight: 600;">$2</b>') + '<span style="color:gray;font-size: 12px;">' + n + "</span></a></li>"
                        })
                    }
                    $("#search_list").html(i)
                },
                error: function() {}
            })
        };
    $("#search_input").on("keyup", function(a) {
        var t = a.keyCode,
            e = $.trim($(this).val());
        e || $("#search_list").html(""), C(e, t)
    }), $(".location").bind("click", function(t) {
        $(this).hasClass("active") ? a(".city,.mask,.location", ".listing") : a(".mask,.listing,.search", ".location,.city")
    }), $(".city-list ul li").bind("click", function() {
        $(".location").text($(this).text())
    }), $(".mask").bind("click", function() {
        a(".mask,.js-touch-state,.filter-cont,.filter-box", ""), $(".js-touch-state").attr("data-checked", !1)
    }), $(".bar-list-comm").click(function() {
        "bar-links" != $(this).attr("id") && $(this).find("h3").toggleClass("active")
    })
});
var getCookie = function(a) {
        var t, e = document,
            i = null;
        return e.cookie && (t = e.cookie.match(new RegExp("(^| )" + a + "=([^;]*)(;|$)")), null != t && (i = decodeURIComponent(t[2]))), i
    },
    setCookie = function(a, t, e, i, s, n) {
        if (void 0 === document.cookie) return !1;
        e = "number" == typeof e && isFinite(e) ? parseInt(e) : 0, e < 0 && (t = "");
        var o = new Date;
        return o.setTime(o.getTime() + 1e3 * e), document.cookie = a + "=" + encodeURIComponent(t) + (e ? "; expires=" + o.toGMTString() : "") + "; path=" + (i || "/") + "; domain=" + s + (n ? "; secure" : ""), !0
    };
String.prototype.Trim = function(s) {
    return this.replace(eval("/^[" + s + "]*|[" + s + "]*$/g"), "")
};