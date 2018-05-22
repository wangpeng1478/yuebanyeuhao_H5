/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-07-13 16:36:33
 * @version $Id$
 */
var paramsData = {
  "domain": "sh",
  "district": "zuxiezilou",
  "street": null,
  "subway_line": null,
  "station": null,
  "house_type": null,
  "area": null,
  "price": null,
  "avg_price": null,
  "work_station": null,
  "price_unit": 2,
  "area_station": 1,
  "house_is_register": null,
  "house_zhuangxiu": null,
  "listorder": null,
  "barea": null,
  "earea": null,
  "bprice": null,
  "eprice": null,
  "bavg_price": null,
  "eavg_price": null,
  "house_house_type": null,
  "nearby_type": null,
  "tag": null,
  "page": 1,
  "keyword": null,
  "building_id": null,
  "bid": null,
  "city_id": "13",
  "orderFields": {
    "building_weight": "DESC"
  },
  "houseNum": 1
};
var priceData = {
  "totalPrice": [{
    "val": "不限",
    "url": "javascript:alert('1')",
  }, {
    "val": "0-0.5万元\/月",
    "url": "javascript:DataS('0-0.5万元\/月')",
    "selected": 0
  }, {
    "val": "0.5-1.5万元\/月",
    "url": "javascript:DataS('0.5-1.5万元\/月')",
    "selected": 0
  }, {
    "val": "1.5-3万元\/月",
    "url": "javascript:DataS('1.5-3万元\/月')",
    "selected": 0
  }, {
    "val": "3-5万元\/月",
    "url": "javascript:DataS('3-5万元\/月')",
    "selected": 0
  }, {
    "val": "5-10万元\/月",
    "url": "javascript:DataS('5-10万元\/月')",
    "selected": 0
  }, {
    "val": "10万元\/月以上",
    "url": "javascript:DataS('10万元\/月以上')",
    "selected": 0
  }],
  "unitPrice": [{
    "val": "不限",
    "url": "javascript:DataS('不限')",
  }, {
    "val": "0-3元\/m²·天",
    "url": "javascript:DataS('0-3元\/m²·天')",
    "selected": 0
  }, {
    "val": "3-4元\/m²·天",
    "url": "javascript:DataS('3-4元\/m²·天')",
    "selected": 0
  }, {
    "val": "4-5元\/m²·天",
    "url": "javascript:DataS('4-5元\/m²·天')",
    "selected": 0
  }, {
    "val": "5-7元\/m²·天",
    "url": "javascript:DataS('5-7元\/m²·天')",
    "selected": 0
  }, {
    "val": "7-9元\/m²·天",
    "url": "javascript:DataS('7-9元\/m²·天')",
    "selected": 0
  }, {
    "val": "9-12元\/m²·天",
    "url": "javascript:DataS('9-12元\/m²·天')",
    "selected": 0
  }, {
    "val": "12元\/m²·天以上",
    "url": "javascript:DataS('12元\/m²·天以上')",
    "selected": 0
  }]
};
var areaData = {
  "area": [{
    "val": "全部面积",
    "url": "javascript:DataS('全部面积')",
  }, {
    "val": "0-100m²",
    "url": "javascript:DataS('0-100')",
    "selected": 0
  }, {
    "val": "100-300m²",
    "url": "javascript:DataS('100-300m²')",
    "selected": 0
  }, {
    "val": "300-500m²",
    "url": "javascript:DataS('300-500m²')",
    "selected": 0
  }, {
    "val": "500-1000m²",
    "url": "javascript:DataS('500-1000m²')",
    "selected": 0
  }, {
    "val": "1000m²以上",
    "url": "javascript:DataS('1000m²以上')",
    "selected": 0
  }]
};
var subwayData = [{
  "url": "javascript:DataS('全部线路')",
  "val": "全部线路",
  "selected": 0
}, {
  "val": "1号线",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('1号线沿线')",
    "val": "1号线沿线",
    "selected": 0
  }, {
    "val": "富锦路",
    "url": "javascript:DataS('富锦路')",
    "selected": 0
  }, {
    "val": "友谊西路",
    "url": "javascript:DataS('友谊西路')",
    "selected": 0
  }, {
    "val": "宝安公路",
    "url": "javascript:DataS('宝安公路')",
    "selected": 0
  }, {
    "val": "共富新村",
    "url": "javascript:DataS('共富新村')",
    "selected": 0
  }, {
    "val": "呼兰路",
    "url": "javascript:DataS('呼兰路')",
    "selected": 0
  }, {
    "val": "通河新村",
    "url": "javascript:DataS('通河新村')",
    "selected": 0
  }, {
    "val": "共康路",
    "url": "javascript:DataS('共康路')",
    "selected": 0
  }, {
    "val": "彭浦新村",
    "url": "javascript:DataS('彭浦新村')",
    "selected": 0
  }, {
    "val": "汶水路",
    "url": "javascript:DataS('汶水路')",
    "selected": 0
  }, {
    "val": "上海马戏城",
    "url": "javascript:DataS('上海马戏城')",
    "selected": 0
  }, {
    "val": "延长路",
    "url": "javascript:DataS('延长路')",
    "selected": 0
  }, {
    "val": "中山北路",
    "url": "javascript:DataS('中山北路')",
    "selected": 0
  }, {
    "val": "上海火车站",
    "url": "javascript:DataS('上海火车站')",
    "selected": 0
  }, {
    "val": "汉中路",
    "url": "javascript:DataS('汉中路')",
    "selected": 0
  }, {
    "val": "新闸路",
    "url": "javascript:DataS('新闸路')",
    "selected": 0
  }, {
    "val": "人民广场",
    "url": "javascript:DataS('人民广场')",
    "selected": 0
  }, {
    "val": "黄陂南路",
    "url": "javascript:DataS('黄陂南路')",
    "selected": 0
  }, {
    "val": "陕西南路",
    "url": "javascript:DataS('陕西南路')",
    "selected": 0
  }, {
    "val": "常熟路",
    "url": "javascript:DataS('常熟路')",
    "selected": 0
  }, {
    "val": "衡山路",
    "url": "javascript:DataS('衡山路')",
    "selected": 0
  }, {
    "val": "徐家汇",
    "url": "javascript:DataS('徐家汇')",
    "selected": 0
  }, {
    "val": "上海体育馆",
    "url": "javascript:DataS('上海体育馆')",
    "selected": 0
  }, {
    "val": "漕宝路",
    "url": "javascript:DataS('漕宝路')",
    "selected": 0
  }, {
    "val": "上海南站",
    "url": "javascript:DataS('上海南站')",
    "selected": 0
  }, {
    "val": "锦江乐园",
    "url": "javascript:DataS('锦江乐园')",
    "selected": 0
  }, {
    "val": "莲花路",
    "url": "javascript:DataS('莲花路')",
    "selected": 0
  }, {
    "val": "外环路",
    "url": "javascript:DataS('外环路')",
    "selected": 0
  }, {
    "val": "莘庄",
    "url": "javascript:DataS('莘庄')",
    "selected": 0
  }]
}, {
  "val": "2号线",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('2号线沿线')",
    "val": "2号线沿线",
    "selected": 0
  }, {
    "val": "浦东国际机场",
    "url": "javascript:DataS('浦东国际机场')",
    "selected": 0
  }, {
    "val": "海天三路",
    "url": "javascript:DataS('海天三路')",
    "selected": 0
  }, {
    "val": "远东大道",
    "url": "javascript:DataS('远东大道')",
    "selected": 0
  }, {
    "val": "凌空路",
    "url": "javascript:DataS('凌空路')",
    "selected": 0
  }, {
    "val": "川沙",
    "url": "javascript:DataS('川沙')",
    "selected": 0
  }, {
    "val": "华夏东路",
    "url": "javascript:DataS('华夏东路')",
    "selected": 0
  }, {
    "val": "创新中路",
    "url": "javascript:DataS('创新中路')",
    "selected": 0
  }, {
    "val": "唐镇",
    "url": "javascript:DataS('唐镇')",
    "selected": 0
  }, {
    "val": "广兰路",
    "url": "javascript:DataS('广兰路')",
    "selected": 0
  }, {
    "val": "金科路",
    "url": "javascript:DataS('金科路')",
    "selected": 0
  }, {
    "val": "张江高科",
    "url": "javascript:DataS('张江高科')",
    "selected": 0
  }, {
    "val": "龙阳路",
    "url": "javascript:DataS('龙阳路')",
    "selected": 0
  }, {
    "val": "世纪公园",
    "url": "javascript:DataS('世纪公园')",
    "selected": 0
  }, {
    "val": "上海科技馆",
    "url": "javascript:DataS('上海科技馆')",
    "selected": 0
  }, {
    "val": "世纪大道",
    "url": "javascript:DataS('世纪大道')",
    "selected": 0
  }, {
    "val": "东昌路",
    "url": "javascript:DataS('东昌路')",
    "selected": 0
  }, {
    "val": "陆家嘴",
    "url": "javascript:DataS('陆家嘴')",
    "selected": 0
  }, {
    "val": "南京东路",
    "url": "javascript:DataS('南京东路')",
    "selected": 0
  }, {
    "val": "人民广场",
    "url": "javascript:DataS('人民广场')",
    "selected": 0
  }, {
    "val": "南京西路",
    "url": "javascript:DataS('南京西路')",
    "selected": 0
  }, {
    "val": "静安寺",
    "url": "javascript:DataS('静安寺')",
    "selected": 0
  }, {
    "val": "江苏路",
    "url": "javascript:DataS('江苏路')",
    "selected": 0
  }, {
    "val": "中山公园",
    "url": "javascript:DataS('中山公园')",
    "selected": 0
  }, {
    "val": "娄山关路",
    "url": "javascript:DataS('娄山关路')",
    "selected": 0
  }, {
    "val": "威宁路",
    "url": "javascript:DataS('威宁路')",
    "selected": 0
  }, {
    "val": "北新泾",
    "url": "javascript:DataS('北新泾')",
    "selected": 0
  }, {
    "val": "淞虹路",
    "url": "javascript:DataS('淞虹路')",
    "selected": 0
  }, {
    "val": "虹桥2号航站楼",
    "url": "javascript:DataS('虹桥2号航站楼')",
    "selected": 0
  }, {
    "val": "虹桥火车站",
    "url": "javascript:DataS('虹桥火车站')",
    "selected": 0
  }, {
    "val": "徐泾东",
    "url": "javascript:DataS('徐泾东')",
    "selected": 0
  }]
}, {
  "val": "3号线",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('3号线沿线')",
    "val": "3号线沿线",
    "selected": 0
  }, {
    "val": "上海南站",
    "url": "javascript:DataS('上海南站')",
    "selected": 0
  }, {
    "val": "石龙路",
    "url": "javascript:DataS('石龙路')",
    "selected": 0
  }, {
    "val": "龙漕路",
    "url": "javascript:DataS('龙漕路')",
    "selected": 0
  }, {
    "val": "漕溪路",
    "url": "javascript:DataS('漕溪路')",
    "selected": 0
  }, {
    "val": "宜山路",
    "url": "javascript:DataS('宜山路')",
    "selected": 0
  }, {
    "val": "虹桥路",
    "url": "javascript:DataS('虹桥路')",
    "selected": 0
  }, {
    "val": "延安西路",
    "url": "javascript:DataS('延安西路')",
    "selected": 0
  }, {
    "val": "中山公园",
    "url": "javascript:DataS('中山公园')",
    "selected": 0
  }, {
    "val": "金沙江路",
    "url": "javascript:DataS('金沙江路')",
    "selected": 0
  }, {
    "val": "曹杨路",
    "url": "javascript:DataS('曹杨路')",
    "selected": 0
  }, {
    "val": "镇坪路",
    "url": "javascript:DataS('镇坪路')",
    "selected": 0
  }, {
    "val": "中潭路",
    "url": "javascript:DataS('中潭路')",
    "selected": 0
  }, {
    "val": "上海火车站",
    "url": "javascript:DataS('上海火车站')",
    "selected": 0
  }, {
    "val": "宝山路",
    "url": "javascript:DataS('宝山路')",
    "selected": 0
  }, {
    "val": "东宝兴路",
    "url": "javascript:DataS('东宝兴路')",
    "selected": 0
  }, {
    "val": "虹口足球场",
    "url": "javascript:DataS('虹口足球场')",
    "selected": 0
  }, {
    "val": "赤峰路",
    "url": "javascript:DataS('赤峰路')",
    "selected": 0
  }, {
    "val": "大柏树",
    "url": "javascript:DataS('大柏树')",
    "selected": 0
  }, {
    "val": "江湾镇",
    "url": "javascript:DataS('江湾镇')",
    "selected": 0
  }, {
    "val": "殷高西路",
    "url": "javascript:DataS('殷高西路')",
    "selected": 0
  }, {
    "val": "长江南路",
    "url": "javascript:DataS('长江南路')",
    "selected": 0
  }, {
    "val": "淞发路",
    "url": "javascript:DataS('淞发路')",
    "selected": 0
  }, {
    "val": "张华浜",
    "url": "javascript:DataS('张华浜')",
    "selected": 0
  }, {
    "val": "淞滨路",
    "url": "javascript:DataS('淞滨路')",
    "selected": 0
  }, {
    "val": "水产路",
    "url": "javascript:DataS('水产路')",
    "selected": 0
  }, {
    "val": "宝杨路",
    "url": "javascript:DataS('宝杨路')",
    "selected": 0
  }, {
    "val": "友谊路",
    "url": "javascript:DataS('友谊路')",
    "selected": 0
  }, {
    "val": "铁力路",
    "url": "javascript:DataS('铁力路')",
    "selected": 0
  }, {
    "val": "江杨北路",
    "url": "javascript:DataS('江杨北路')",
    "selected": 0
  }]
}, {
  "val": "4号线",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('4号线沿线')",
    "val": "4号线沿线",
    "selected": 0
  }, {
    "val": "宜山路",
    "url": "javascript:DataS('宜山路')",
    "selected": 0
  }, {
    "val": "上海体育馆",
    "url": "javascript:DataS('上海体育馆')",
    "selected": 0
  }, {
    "val": "上海体育场",
    "url": "javascript:DataS('上海体育场')",
    "selected": 0
  }, {
    "val": "东安路",
    "url": "javascript:DataS('东安路')",
    "selected": 0
  }, {
    "val": "大木桥路",
    "url": "javascript:DataS('大木桥路')",
    "selected": 0
  }, {
    "val": "鲁班路",
    "url": "javascript:DataS('鲁班路')",
    "selected": 0
  }, {
    "val": "西藏南路",
    "url": "javascript:DataS('西藏南路')",
    "selected": 0
  }, {
    "val": "南浦大桥",
    "url": "javascript:DataS('南浦大桥')",
    "selected": 0
  }, {
    "val": "塘桥",
    "url": "javascript:DataS('塘桥')",
    "selected": 0
  }, {
    "val": "蓝村路",
    "url": "javascript:DataS('蓝村路')",
    "selected": 0
  }, {
    "val": "浦电路(4号线)",
    "url": "javascript:DataS('浦电路(4号线)')",
    "selected": 0
  }, {
    "val": "世纪大道",
    "url": "javascript:DataS('世纪大道')",
    "selected": 0
  }, {
    "val": "浦东大道",
    "url": "javascript:DataS('浦东大道')",
    "selected": 0
  }, {
    "val": "杨树浦路",
    "url": "javascript:DataS('杨树浦路')",
    "selected": 0
  }, {
    "val": "大连路",
    "url": "javascript:DataS('大连路')",
    "selected": 0
  }, {
    "val": "临平路",
    "url": "javascript:DataS('临平路')",
    "selected": 0
  }, {
    "val": "海伦路",
    "url": "javascript:DataS('海伦路')",
    "selected": 0
  }, {
    "val": "宝山路",
    "url": "javascript:DataS('宝山路')",
    "selected": 0
  }, {
    "val": "上海火车站",
    "url": "javascript:DataS('上海火车站')",
    "selected": 0
  }, {
    "val": "中潭路",
    "url": "javascript:DataS('中潭路')",
    "selected": 0
  }, {
    "val": "镇坪路",
    "url": "javascript:DataS('镇坪路')",
    "selected": 0
  }, {
    "val": "曹杨路",
    "url": "javascript:DataS('曹杨路')",
    "selected": 0
  }, {
    "val": "金沙江路",
    "url": "javascript:DataS('金沙江路')",
    "selected": 0
  }, {
    "val": "中山公园",
    "url": "javascript:DataS('中山公园')",
    "selected": 0
  }, {
    "val": "延安西路",
    "url": "javascript:DataS('延安西路')",
    "selected": 0
  }, {
    "val": "虹桥路",
    "url": "javascript:DataS('虹桥路')",
    "selected": 0
  }]
}, {
  "val": "5号线",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('5号线沿线')",
    "val": "5号线沿线",
    "selected": 0
  }, {
    "val": "莘庄",
    "url": "javascript:DataS('莘庄')",
    "selected": 0
  }, {
    "val": "春申路",
    "url": "javascript:DataS('春申路')",
    "selected": 0
  }, {
    "val": "银都路",
    "url": "javascript:DataS('银都路')",
    "selected": 0
  }, {
    "val": "颛桥",
    "url": "javascript:DataS('颛桥')",
    "selected": 0
  }, {
    "val": "北桥",
    "url": "javascript:DataS('北桥')",
    "selected": 0
  }, {
    "val": "剑川路",
    "url": "javascript:DataS('剑川路')",
    "selected": 0
  }, {
    "val": "东川路",
    "url": "javascript:DataS('东川路')",
    "selected": 0
  }, {
    "val": "金平路",
    "url": "javascript:DataS('金平路')",
    "selected": 0
  }, {
    "val": "华宁路",
    "url": "javascript:DataS('华宁路')",
    "selected": 0
  }, {
    "val": "文井路",
    "url": "javascript:DataS('文井路')",
    "selected": 0
  }, {
    "val": "闵行开发区",
    "url": "javascript:DataS('闵行开发区')",
    "selected": 0
  }]
}, {
  "val": "6号线",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('6号线沿线')",
    "val": "6号线沿线",
    "selected": 0
  }, {
    "val": "港城路",
    "url": "javascript:DataS('港城路')",
    "selected": 0
  }, {
    "val": "外高桥保税区北",
    "url": "javascript:DataS('外高桥保税区北')",
    "selected": 0
  }, {
    "val": "航津路",
    "url": "javascript:DataS('航津路')",
    "selected": 0
  }, {
    "val": "外高桥保税区南",
    "url": "javascript:DataS('外高桥保税区南')",
    "selected": 0
  }, {
    "val": "洲海路",
    "url": "javascript:DataS('洲海路')",
    "selected": 0
  }, {
    "val": "五洲大道",
    "url": "javascript:DataS('五洲大道')",
    "selected": 0
  }, {
    "val": "东靖路",
    "url": "javascript:DataS('东靖路')",
    "selected": 0
  }, {
    "val": "巨峰路",
    "url": "javascript:DataS('巨峰路')",
    "selected": 0
  }, {
    "val": "五莲路",
    "url": "javascript:DataS('五莲路')",
    "selected": 0
  }, {
    "val": "博兴路",
    "url": "javascript:DataS('博兴路')",
    "selected": 0
  }, {
    "val": "金桥路",
    "url": "javascript:DataS('金桥路')",
    "selected": 0
  }, {
    "val": "云山路",
    "url": "javascript:DataS('云山路')",
    "selected": 0
  }, {
    "val": "德平路",
    "url": "javascript:DataS('德平路')",
    "selected": 0
  }, {
    "val": "北洋泾路",
    "url": "javascript:DataS('北洋泾路')",
    "selected": 0
  }, {
    "val": "民生路",
    "url": "javascript:DataS('民生路')",
    "selected": 0
  }, {
    "val": "源深体育中心",
    "url": "javascript:DataS('源深体育中心')",
    "selected": 0
  }, {
    "val": "世纪大道",
    "url": "javascript:DataS('世纪大道')",
    "selected": 0
  }, {
    "val": "浦电路(6号线)",
    "url": "javascript:DataS('浦电路(6号线)')",
    "selected": 0
  }, {
    "val": "蓝村路",
    "url": "javascript:DataS('蓝村路')",
    "selected": 0
  }, {
    "val": "上海儿童医学中心",
    "url": "javascript:DataS('上海儿童医学中心')",
    "selected": 0
  }, {
    "val": "临沂新村",
    "url": "javascript:DataS('临沂新村')",
    "selected": 0
  }, {
    "val": "高科西路",
    "url": "javascript:DataS('高科西路')",
    "selected": 0
  }, {
    "val": "东明路",
    "url": "javascript:DataS('东明路')",
    "selected": 0
  }, {
    "val": "高青路",
    "url": "javascript:DataS('高青路')",
    "selected": 0
  }, {
    "val": "华夏西路",
    "url": "javascript:DataS('华夏西路')",
    "selected": 0
  }, {
    "val": "上南路",
    "url": "javascript:DataS('上南路')",
    "selected": 0
  }, {
    "val": "灵岩南路",
    "url": "javascript:DataS('灵岩南路')",
    "selected": 0
  }, {
    "val": "东方体育中心",
    "url": "javascript:DataS('东方体育中心')",
    "selected": 0
  }]
}, {
  "val": "7号线",
  "selected": 0,
  "children": {
    "0": {
      "url": "javascript:DataS('7号线沿线')",
      "val": "7号线沿线",
      "selected": 0
    },
    "1": {
      "val": "花木路",
      "url": "javascript:DataS('花木路')",
      "selected": 0
    },
    "2": {
      "val": "龙阳路",
      "url": "javascript:DataS('龙阳路')",
      "selected": 0
    },
    "3": {
      "val": "芳华路",
      "url": "javascript:DataS('芳华路')",
      "selected": 0
    },
    "4": {
      "val": "锦绣路",
      "url": "javascript:DataS('锦绣路')",
      "selected": 0
    },
    "5": {
      "val": "杨高南路",
      "url": "javascript:DataS('杨高南路')",
      "selected": 0
    },
    "6": {
      "val": "高科西路",
      "url": "javascript:DataS('高科西路')",
      "selected": 0
    },
    "7": {
      "val": "云台路",
      "url": "javascript:DataS('云台路')",
      "selected": 0
    },
    "8": {
      "val": "耀华路",
      "url": "javascript:DataS('耀华路')",
      "selected": 0
    },
    "9": {
      "val": "长清路",
      "url": "javascript:DataS('长清路')",
      "selected": 0
    },
    "10": {
      "val": "后滩",
      "url": "javascript:DataS('后滩')",
      "selected": 0
    },
    "11": {
      "val": "中华艺术",
      "url": "javascript:DataS('中华艺术')",
      "selected": 0
    },
    "12": {
      "val": "东安路",
      "url": "javascript:DataS('东安路')",
      "selected": 0
    },
    "13": {
      "val": "肇嘉浜路",
      "url": "javascript:DataS('肇嘉浜路')",
      "selected": 0
    },
    "14": {
      "val": "常熟路",
      "url": "javascript:DataS('常熟路')",
      "selected": 0
    },
    "15": {
      "val": "静安寺",
      "url": "javascript:DataS('静安寺')",
      "selected": 0
    },
    "16": {
      "val": "昌平路",
      "url": "javascript:DataS('昌平路')",
      "selected": 0
    },
    "17": {
      "val": "长寿路",
      "url": "javascript:DataS('长寿路')",
      "selected": 0
    },
    "18": {
      "val": "镇坪路",
      "url": "javascript:DataS('镇坪路')",
      "selected": 0
    },
    "19": {
      "val": "岚皋路",
      "url": "javascript:DataS('岚皋路')",
      "selected": 0
    },
    "20": {
      "val": "新村路",
      "url": "javascript:DataS('新村路')",
      "selected": 0
    },
    "21": {
      "val": "大华三路",
      "url": "javascript:DataS('大华三路')",
      "selected": 0
    },
    "22": {
      "val": "行知路",
      "url": "javascript:DataS('行知路')",
      "selected": 0
    },
    "23": {
      "val": "大场镇",
      "url": "javascript:DataS('大场镇')",
      "selected": 0
    },
    "24": {
      "val": "场中路",
      "url": "javascript:DataS('场中路')",
      "selected": 0
    },
    "25": {
      "val": "上大路",
      "url": "javascript:DataS('上大路')",
      "selected": 0
    },
    "26": {
      "val": "南陈路",
      "url": "javascript:DataS('南陈路')",
      "selected": 0
    },
    "27": {
      "val": "上海大学",
      "url": "javascript:DataS('上海大学')",
      "selected": 0
    },
    "33": {
      "val": "祁华路",
      "url": "javascript:DataS('祁华路')",
      "selected": 0
    },
    "28": {
      "val": "顾村公园",
      "url": "javascript:DataS('顾村公园')",
      "selected": 0
    },
    "29": {
      "val": "刘行",
      "url": "javascript:DataS('刘行')",
      "selected": 0
    },
    "30": {
      "val": "潘广路",
      "url": "javascript:DataS('潘广路')",
      "selected": 0
    },
    "31": {
      "val": "罗南新村",
      "url": "javascript:DataS('罗南新村')",
      "selected": 0
    },
    "32": {
      "val": "美兰湖",
      "url": "javascript:DataS('美兰湖')",
      "selected": 0
    }
  }
}, {
  "val": "8号线",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('8号线沿线')",
    "val": "8号线沿线",
    "selected": 0
  }, {
    "val": "沈杜公路",
    "url": "javascript:DataS('沈杜公路')",
    "selected": 0
  }, {
    "val": "联航路",
    "url": "javascript:DataS('联航路')",
    "selected": 0
  }, {
    "val": "江月路",
    "url": "javascript:DataS('江月路')",
    "selected": 0
  }, {
    "val": "浦江镇",
    "url": "javascript:DataS('浦江镇')",
    "selected": 0
  }, {
    "val": "芦恒路",
    "url": "javascript:DataS('芦恒路')",
    "selected": 0
  }, {
    "val": "凌兆新村",
    "url": "javascript:DataS('凌兆新村')",
    "selected": 0
  }, {
    "val": "东方体育中心",
    "url": "javascript:DataS('东方体育中心')",
    "selected": 0
  }, {
    "val": "杨思",
    "url": "javascript:DataS('杨思')",
    "selected": 0
  }, {
    "val": "成山路",
    "url": "javascript:DataS('成山路')",
    "selected": 0
  }, {
    "val": "耀华路",
    "url": "javascript:DataS('耀华路')",
    "selected": 0
  }, {
    "val": "中华艺术宫",
    "url": "javascript:DataS('中华艺术宫')",
    "selected": 0
  }, {
    "val": "西藏南路",
    "url": "javascript:DataS('西藏南路')",
    "selected": 0
  }, {
    "val": "陆家浜路",
    "url": "javascript:DataS('陆家浜路')",
    "selected": 0
  }, {
    "val": "老西门",
    "url": "javascript:DataS('老西门')",
    "selected": 0
  }, {
    "val": "大世界",
    "url": "javascript:DataS('大世界')",
    "selected": 0
  }, {
    "val": "人民广场",
    "url": "javascript:DataS('人民广场')",
    "selected": 0
  }, {
    "val": "曲阜路",
    "url": "javascript:DataS('曲阜路')",
    "selected": 0
  }, {
    "val": "中兴路",
    "url": "javascript:DataS('中兴路')",
    "selected": 0
  }, {
    "val": "西藏北路",
    "url": "javascript:DataS('西藏北路')",
    "selected": 0
  }, {
    "val": "虹口足球场",
    "url": "javascript:DataS('虹口足球场')",
    "selected": 0
  }, {
    "val": "曲阳路",
    "url": "javascript:DataS('曲阳路')",
    "selected": 0
  }, {
    "val": "四平路",
    "url": "javascript:DataS('四平路')",
    "selected": 0
  }, {
    "val": "鞍山新村",
    "url": "javascript:DataS('鞍山新村')",
    "selected": 0
  }, {
    "val": "江浦路",
    "url": "javascript:DataS('江浦路')",
    "selected": 0
  }, {
    "val": "黄兴路",
    "url": "javascript:DataS('黄兴路')",
    "selected": 0
  }, {
    "val": "延吉中路",
    "url": "javascript:DataS('延吉中路')",
    "selected": 0
  }, {
    "val": "黄兴公园",
    "url": "javascript:DataS('黄兴公园')",
    "selected": 0
  }, {
    "val": "翔殷路",
    "url": "javascript:DataS('翔殷路')",
    "selected": 0
  }, {
    "val": "嫩江路",
    "url": "javascript:DataS('嫩江路')",
    "selected": 0
  }, {
    "val": "市光路",
    "url": "javascript:DataS('市光路')",
    "selected": 0
  }]
}, {
  "val": "9号线",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('9号线沿线')",
    "val": "9号线沿线",
    "selected": 0
  }, {
    "val": "杨高中路",
    "url": "javascript:DataS('杨高中路')",
    "selected": 0
  }, {
    "val": "世纪大道",
    "url": "javascript:DataS('世纪大道')",
    "selected": 0
  }, {
    "val": "商城路",
    "url": "javascript:DataS('商城路')",
    "selected": 0
  }, {
    "val": "小南门",
    "url": "javascript:DataS('小南门')",
    "selected": 0
  }, {
    "val": "陆家浜路",
    "url": "javascript:DataS('陆家浜路')",
    "selected": 0
  }, {
    "val": "马当路",
    "url": "javascript:DataS('马当路')",
    "selected": 0
  }, {
    "val": "打浦桥",
    "url": "javascript:DataS('打浦桥')",
    "selected": 0
  }, {
    "val": "嘉善路",
    "url": "javascript:DataS('嘉善路')",
    "selected": 0
  }, {
    "val": "肇嘉浜路",
    "url": "javascript:DataS('肇嘉浜路')",
    "selected": 0
  }, {
    "val": "徐家汇",
    "url": "javascript:DataS('徐家汇')",
    "selected": 0
  }, {
    "val": "宜山路",
    "url": "javascript:DataS('宜山路')",
    "selected": 0
  }, {
    "val": "桂林路",
    "url": "javascript:DataS('桂林路')",
    "selected": 0
  }, {
    "val": "漕河泾开发区",
    "url": "javascript:DataS('漕河泾开发区')",
    "selected": 0
  }, {
    "val": "合川路",
    "url": "javascript:DataS('合川路')",
    "selected": 0
  }, {
    "val": "星中路",
    "url": "javascript:DataS('星中路')",
    "selected": 0
  }, {
    "val": "七宝",
    "url": "javascript:DataS('七宝')",
    "selected": 0
  }, {
    "val": "中春路",
    "url": "javascript:DataS('中春路')",
    "selected": 0
  }, {
    "val": "九亭",
    "url": "javascript:DataS('九亭')",
    "selected": 0
  }, {
    "val": "泗泾",
    "url": "javascript:DataS('泗泾')",
    "selected": 0
  }, {
    "val": "佘山",
    "url": "javascript:DataS('佘山')",
    "selected": 0
  }, {
    "val": "洞泾",
    "url": "javascript:DataS('洞泾')",
    "selected": 0
  }, {
    "val": "松江大学城",
    "url": "javascript:DataS('松江大学城')",
    "selected": 0
  }, {
    "val": "松江新城",
    "url": "javascript:DataS('松江新城')",
    "selected": 0
  }, {
    "val": "松江体育中心",
    "url": "javascript:DataS('松江体育中心')",
    "selected": 0
  }, {
    "val": "醉白池",
    "url": "javascript:DataS('醉白池')",
    "selected": 0
  }, {
    "val": "松江南站",
    "url": "javascript:DataS('松江南站')",
    "selected": 0
  }]
}, {
  "val": "10号线支线",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('10号线支线沿线')",
    "val": "10号线支线沿线",
    "selected": 0
  }, {
    "val": "新江湾城",
    "url": "javascript:DataS('新江湾城')",
    "selected": 0
  }, {
    "val": "殷高东路",
    "url": "javascript:DataS('殷高东路')",
    "selected": 0
  }, {
    "val": "三门路",
    "url": "javascript:DataS('三门路')",
    "selected": 0
  }, {
    "val": "江湾体育场",
    "url": "javascript:DataS('江湾体育场')",
    "selected": 0
  }, {
    "val": "五角场",
    "url": "javascript:DataS('五角场')",
    "selected": 0
  }, {
    "val": "国权路",
    "url": "javascript:DataS('国权路')",
    "selected": 0
  }, {
    "val": "同济大学",
    "url": "javascript:DataS('同济大学')",
    "selected": 0
  }, {
    "val": "四平路",
    "url": "javascript:DataS('四平路')",
    "selected": 0
  }, {
    "val": "邮电新村",
    "url": "javascript:DataS('邮电新村')",
    "selected": 0
  }, {
    "val": "海伦路",
    "url": "javascript:DataS('海伦路')",
    "selected": 0
  }, {
    "val": "四川北路",
    "url": "javascript:DataS('四川北路')",
    "selected": 0
  }, {
    "val": "天潼路",
    "url": "javascript:DataS('天潼路')",
    "selected": 0
  }, {
    "val": "南京东路",
    "url": "javascript:DataS('南京东路')",
    "selected": 0
  }, {
    "val": "豫园",
    "url": "javascript:DataS('豫园')",
    "selected": 0
  }, {
    "val": "老西门",
    "url": "javascript:DataS('老西门')",
    "selected": 0
  }, {
    "val": "新天地",
    "url": "javascript:DataS('新天地')",
    "selected": 0
  }, {
    "val": "陕西南路",
    "url": "javascript:DataS('陕西南路')",
    "selected": 0
  }, {
    "val": "上海图书馆",
    "url": "javascript:DataS('上海图书馆')",
    "selected": 0
  }, {
    "val": "交通大学",
    "url": "javascript:DataS('交通大学')",
    "selected": 0
  }, {
    "val": "虹桥路",
    "url": "javascript:DataS('虹桥路')",
    "selected": 0
  }, {
    "val": "宋园路",
    "url": "javascript:DataS('宋园路')",
    "selected": 0
  }, {
    "val": "伊犁路",
    "url": "javascript:DataS('伊犁路')",
    "selected": 0
  }, {
    "val": "水城路",
    "url": "javascript:DataS('水城路')",
    "selected": 0
  }, {
    "val": "龙溪路",
    "url": "javascript:DataS('龙溪路')",
    "selected": 0
  }, {
    "val": "龙柏新村",
    "url": "javascript:DataS('龙柏新村')",
    "selected": 0
  }, {
    "val": "紫藤路",
    "url": "javascript:DataS('紫藤路')",
    "selected": 0
  }, {
    "val": "航中路",
    "url": "javascript:DataS('航中路')",
    "selected": 0
  }]
}, {
  "val": "10号线主线",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('10号线主线沿线')",
    "val": "10号线主线沿线",
    "selected": 0
  }, {
    "val": "新江湾城",
    "url": "javascript:DataS('新江湾城')",
    "selected": 0
  }, {
    "val": "殷高东路",
    "url": "javascript:DataS('殷高东路')",
    "selected": 0
  }, {
    "val": "三门路",
    "url": "javascript:DataS('三门路')",
    "selected": 0
  }, {
    "val": "江湾体育场",
    "url": "javascript:DataS('江湾体育场')",
    "selected": 0
  }, {
    "val": "五角场",
    "url": "javascript:DataS('五角场')",
    "selected": 0
  }, {
    "val": "国权路",
    "url": "javascript:DataS('国权路')",
    "selected": 0
  }, {
    "val": "同济大学",
    "url": "javascript:DataS('同济大学')",
    "selected": 0
  }, {
    "val": "四平路",
    "url": "javascript:DataS('四平路')",
    "selected": 0
  }, {
    "val": "邮电新村",
    "url": "javascript:DataS('邮电新村')",
    "selected": 0
  }, {
    "val": "海伦路",
    "url": "javascript:DataS('海伦路')",
    "selected": 0
  }, {
    "val": "四川北路",
    "url": "javascript:DataS('四川北路')",
    "selected": 0
  }, {
    "val": "天潼路",
    "url": "javascript:DataS('天潼路')",
    "selected": 0
  }, {
    "val": "南京东路",
    "url": "javascript:DataS('南京东路')",
    "selected": 0
  }, {
    "val": "豫园",
    "url": "javascript:DataS('豫园')",
    "selected": 0
  }, {
    "val": "老西门",
    "url": "javascript:DataS('老西门')",
    "selected": 0
  }, {
    "val": "新天地",
    "url": "javascript:DataS('新天地')",
    "selected": 0
  }, {
    "val": "陕西南路",
    "url": "javascript:DataS('陕西南路')",
    "selected": 0
  }, {
    "val": "上海图书馆",
    "url": "javascript:DataS('上海图书馆')",
    "selected": 0
  }, {
    "val": "交通大学",
    "url": "javascript:DataS('交通大学')",
    "selected": 0
  }, {
    "val": "虹桥路",
    "url": "javascript:DataS('虹桥路')",
    "selected": 0
  }, {
    "val": "宋园路",
    "url": "javascript:DataS('宋园路')",
    "selected": 0
  }, {
    "val": "伊犁路",
    "url": "javascript:DataS('伊犁路')",
    "selected": 0
  }, {
    "val": "水城路",
    "url": "javascript:DataS('水城路')",
    "selected": 0
  }, {
    "val": "龙溪路",
    "url": "javascript:DataS('龙溪路')",
    "selected": 0
  }, {
    "val": "上海动物园",
    "url": "javascript:DataS('上海动物园')",
    "selected": 0
  }, {
    "val": "虹桥1号航站楼",
    "url": "javascript:DataS('虹桥1号航站楼')",
    "selected": 0
  }, {
    "val": "虹桥2号航站楼",
    "url": "javascript:DataS('虹桥2号航站楼')",
    "selected": 0
  }, {
    "val": "虹桥火车站",
    "url": "javascript:DataS('虹桥火车站')",
    "selected": 0
  }]
}, {
  "val": "11号线主线",
  "selected": 0,
  "children": {
    "0": {
      "url": "javascript:DataS('11号线主线沿线')",
      "val": "11号线主线沿线",
      "selected": 0
    },
    "31": {
      "val": "迪士尼",
      "url": "javascript:DataS('迪士尼')",
      "selected": 0
    },
    "30": {
      "val": "康新公路",
      "url": "javascript:DataS('康新公路')",
      "selected": 0
    },
    "29": {
      "val": "秀沿路",
      "url": "javascript:DataS('秀沿路')",
      "selected": 0
    },
    "1": {
      "val": "罗山路",
      "url": "javascript:DataS('罗山路')",
      "selected": 0
    },
    "2": {
      "val": "御桥",
      "url": "javascript:DataS('御桥')",
      "selected": 0
    },
    "3": {
      "val": "浦三路",
      "url": "javascript:DataS('浦三路')",
      "selected": 0
    },
    "4": {
      "val": "三林东",
      "url": "javascript:DataS('三林东')",
      "selected": 0
    },
    "5": {
      "val": "三林",
      "url": "javascript:DataS('三林')",
      "selected": 0
    },
    "6": {
      "val": "东方体育中心",
      "url": "javascript:DataS('东方体育中心')",
      "selected": 0
    },
    "7": {
      "val": "龙耀",
      "url": "javascript:DataS('龙耀')",
      "selected": 0
    },
    "8": {
      "val": "云锦路",
      "url": "javascript:DataS('云锦路')",
      "selected": 0
    },
    "9": {
      "val": "龙华",
      "url": "javascript:DataS('龙华')",
      "selected": 0
    },
    "10": {
      "val": "上海游泳馆",
      "url": "javascript:DataS('上海游泳馆')",
      "selected": 0
    },
    "11": {
      "val": "徐家汇",
      "url": "javascript:DataS('徐家汇')",
      "selected": 0
    },
    "12": {
      "val": "交通大学",
      "url": "javascript:DataS('交通大学')",
      "selected": 0
    },
    "13": {
      "val": "江苏路",
      "url": "javascript:DataS('江苏路')",
      "selected": 0
    },
    "14": {
      "val": "隆德路",
      "url": "javascript:DataS('隆德路')",
      "selected": 0
    },
    "15": {
      "val": "曹杨路",
      "url": "javascript:DataS('曹杨路')",
      "selected": 0
    },
    "16": {
      "val": "枫桥路",
      "url": "javascript:DataS('枫桥路')",
      "selected": 0
    },
    "17": {
      "val": "真如",
      "url": "javascript:DataS('真如')",
      "selected": 0
    },
    "18": {
      "val": "上海西站",
      "url": "javascript:DataS('上海西站')",
      "selected": 0
    },
    "19": {
      "val": "李子园",
      "url": "javascript:DataS('李子园')",
      "selected": 0
    },
    "20": {
      "val": "祁连山路",
      "url": "javascript:DataS('祁连山路')",
      "selected": 0
    },
    "21": {
      "val": "武威路",
      "url": "javascript:DataS('武威路')",
      "selected": 0
    },
    "22": {
      "val": "桃浦新村",
      "url": "javascript:DataS('桃浦新村')",
      "selected": 0
    },
    "23": {
      "val": "南翔",
      "url": "javascript:DataS('南翔')",
      "selected": 0
    },
    "24": {
      "val": "马陆",
      "url": "javascript:DataS('马陆')",
      "selected": 0
    },
    "25": {
      "val": "嘉定新城",
      "url": "javascript:DataS('嘉定新城')",
      "selected": 0
    },
    "26": {
      "val": "白银路",
      "url": "javascript:DataS('白银路')",
      "selected": 0
    },
    "27": {
      "val": "嘉定西",
      "url": "javascript:DataS('嘉定西')",
      "selected": 0
    },
    "28": {
      "val": "嘉定北",
      "url": "javascript:DataS('嘉定北')",
      "selected": 0
    }
  }
}, {
  "val": "11号线支线",
  "selected": 0,
  "children": {
    "0": {
      "url": "javascript:DataS('11号线支线沿线')",
      "val": "11号线支线沿线",
      "selected": 0
    },
    "35": {
      "val": "迪士尼",
      "url": "javascript:DataS('迪士尼')",
      "selected": 0
    },
    "34": {
      "val": "康新公路",
      "url": "javascript:DataS('康新公路')",
      "selected": 0
    },
    "33": {
      "val": "秀沿路",
      "url": "javascript:DataS('秀沿路')",
      "selected": 0
    },
    "1": {
      "val": "罗山路",
      "url": "javascript:DataS('罗山路')",
      "selected": 0
    },
    "2": {
      "val": "御桥",
      "url": "javascript:DataS('御桥')",
      "selected": 0
    },
    "3": {
      "val": "浦三路",
      "url": "javascript:DataS('浦三路')",
      "selected": 0
    },
    "4": {
      "val": "三林东",
      "url": "javascript:DataS('三林东')",
      "selected": 0
    },
    "5": {
      "val": "三林",
      "url": "javascript:DataS('三林')",
      "selected": 0
    },
    "6": {
      "val": "东方体育中心",
      "url": "javascript:DataS('东方体育中心')",
      "selected": 0
    },
    "7": {
      "val": "龙耀",
      "url": "javascript:DataS('龙耀')",
      "selected": 0
    },
    "8": {
      "val": "云锦路",
      "url": "javascript:DataS('云锦路')",
      "selected": 0
    },
    "9": {
      "val": "龙华",
      "url": "javascript:DataS('龙华')",
      "selected": 0
    },
    "10": {
      "val": "上海游泳馆",
      "url": "javascript:DataS('上海游泳馆')",
      "selected": 0
    },
    "11": {
      "val": "徐家汇",
      "url": "javascript:DataS('徐家汇')",
      "selected": 0
    },
    "12": {
      "val": "交通大学",
      "url": "javascript:DataS('交通大学')",
      "selected": 0
    },
    "13": {
      "val": "江苏路",
      "url": "javascript:DataS('江苏路')",
      "selected": 0
    },
    "14": {
      "val": "隆德路",
      "url": "javascript:DataS('隆德路')",
      "selected": 0
    },
    "15": {
      "val": "曹杨路",
      "url": "javascript:DataS('曹杨路')",
      "selected": 0
    },
    "16": {
      "val": "枫桥路",
      "url": "javascript:DataS('枫桥路')",
      "selected": 0
    },
    "17": {
      "val": "真如",
      "url": "javascript:DataS('真如')",
      "selected": 0
    },
    "18": {
      "val": "上海西站",
      "url": "javascript:DataS('上海西站')",
      "selected": 0
    },
    "19": {
      "val": "李子园",
      "url": "javascript:DataS('李子园')",
      "selected": 0
    },
    "20": {
      "val": "祁连山路",
      "url": "javascript:DataS('祁连山路')",
      "selected": 0
    },
    "21": {
      "val": "武威路",
      "url": "javascript:DataS('武威路')",
      "selected": 0
    },
    "22": {
      "val": "桃浦新村",
      "url": "javascript:DataS('桃浦新村')",
      "selected": 0
    },
    "23": {
      "val": "南翔",
      "url": "javascript:DataS('南翔')",
      "selected": 0
    },
    "24": {
      "val": "马陆",
      "url": "javascript:DataS('马陆')",
      "selected": 0
    },
    "25": {
      "val": "嘉定新城",
      "url": "javascript:DataS('嘉定新城')",
      "selected": 0
    },
    "26": {
      "val": "上海赛车场",
      "url": "javascript:DataS('上海赛车场')",
      "selected": 0
    },
    "27": {
      "val": "昌吉东路",
      "url": "javascript:DataS('昌吉东路')",
      "selected": 0
    },
    "28": {
      "val": "上海汽车城",
      "url": "javascript:DataS('上海汽车城')",
      "selected": 0
    },
    "29": {
      "val": "安亭",
      "url": "javascript:DataS('安亭')",
      "selected": 0
    },
    "30": {
      "val": "兆丰路",
      "url": "javascript:DataS('兆丰路')",
      "selected": 0
    },
    "31": {
      "val": "光明路",
      "url": "javascript:DataS('光明路')",
      "selected": 0
    },
    "32": {
      "val": "花桥",
      "url": "javascript:DataS('花桥')",
      "selected": 0
    }
  }
}, {
  "val": "12号线",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('12号线沿线')",
    "val": "12号线沿线",
    "selected": 0
  }, {
    "val": "七莘路",
    "url": "javascript:DataS('七莘路')",
    "selected": 0
  }, {
    "val": "虹莘路",
    "url": "javascript:DataS('虹莘路')",
    "selected": 0
  }, {
    "val": "顾戴路",
    "url": "javascript:DataS('顾戴路')",
    "selected": 0
  }, {
    "val": "东兰路",
    "url": "javascript:DataS('东兰路')",
    "selected": 0
  }, {
    "val": "虹梅路",
    "url": "javascript:DataS('虹梅路')",
    "selected": 0
  }, {
    "val": "虹漕路",
    "url": "javascript:DataS('虹漕路')",
    "selected": 0
  }, {
    "val": "桂林公园",
    "url": "javascript:DataS('桂林公园')",
    "selected": 0
  }, {
    "val": "漕宝路",
    "url": "javascript:DataS('漕宝路')",
    "selected": 0
  }, {
    "val": "龙漕路",
    "url": "javascript:DataS('龙漕路')",
    "selected": 0
  }, {
    "val": "龙华",
    "url": "javascript:DataS('龙华')",
    "selected": 0
  }, {
    "val": "中华艺术",
    "url": "javascript:DataS('中华艺术')",
    "selected": 0
  }, {
    "val": "大木桥路",
    "url": "javascript:DataS('大木桥路')",
    "selected": 0
  }, {
    "val": "嘉善路",
    "url": "javascript:DataS('嘉善路')",
    "selected": 0
  }, {
    "val": "陕西南路",
    "url": "javascript:DataS('陕西南路')",
    "selected": 0
  }, {
    "val": "南京西路",
    "url": "javascript:DataS('南京西路')",
    "selected": 0
  }, {
    "val": "汉中路",
    "url": "javascript:DataS('汉中路')",
    "selected": 0
  }, {
    "val": "曲阜路",
    "url": "javascript:DataS('曲阜路')",
    "selected": 0
  }, {
    "val": "天潼路",
    "url": "javascript:DataS('天潼路')",
    "selected": 0
  }, {
    "val": "国际客运中心",
    "url": "javascript:DataS('国际客运中心')",
    "selected": 0
  }, {
    "val": "提篮桥",
    "url": "javascript:DataS('提篮桥')",
    "selected": 0
  }, {
    "val": "大连路",
    "url": "javascript:DataS('大连路')",
    "selected": 0
  }, {
    "val": "江浦公园",
    "url": "javascript:DataS('江浦公园')",
    "selected": 0
  }, {
    "val": "宁国路",
    "url": "javascript:DataS('宁国路')",
    "selected": 0
  }, {
    "val": "隆昌路",
    "url": "javascript:DataS('隆昌路')",
    "selected": 0
  }, {
    "val": "爱国路",
    "url": "javascript:DataS('爱国路')",
    "selected": 0
  }, {
    "val": "复兴岛",
    "url": "javascript:DataS('复兴岛')",
    "selected": 0
  }, {
    "val": "东陆路",
    "url": "javascript:DataS('东陆路')",
    "selected": 0
  }, {
    "val": "巨峰路",
    "url": "javascript:DataS('巨峰路')",
    "selected": 0
  }, {
    "val": "杨高北路",
    "url": "javascript:DataS('杨高北路')",
    "selected": 0
  }, {
    "val": "金京路",
    "url": "javascript:DataS('金京路')",
    "selected": 0
  }, {
    "val": "申江路",
    "url": "javascript:DataS('申江路')",
    "selected": 0
  }, {
    "val": "金海路",
    "url": "javascript:DataS('金海路')",
    "selected": 0
  }]
}, {
  "val": "13号线",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('13号线沿线')",
    "val": "13号线沿线",
    "selected": 0
  }, {
    "val": "金运路",
    "url": "javascript:DataS('金运路')",
    "selected": 0
  }, {
    "val": "金沙江西路",
    "url": "javascript:DataS('金沙江西路')",
    "selected": 0
  }, {
    "val": "丰庄",
    "url": "javascript:DataS('丰庄')",
    "selected": 0
  }, {
    "val": "祁连山南路",
    "url": "javascript:DataS('祁连山南路')",
    "selected": 0
  }, {
    "val": "真北路",
    "url": "javascript:DataS('真北路')",
    "selected": 0
  }, {
    "val": "大渡河路",
    "url": "javascript:DataS('大渡河路')",
    "selected": 0
  }, {
    "val": "金沙江路",
    "url": "javascript:DataS('金沙江路')",
    "selected": 0
  }, {
    "val": "隆德路",
    "url": "javascript:DataS('隆德路')",
    "selected": 0
  }, {
    "val": "武宁路",
    "url": "javascript:DataS('武宁路')",
    "selected": 0
  }, {
    "val": "长寿路",
    "url": "javascript:DataS('长寿路')",
    "selected": 0
  }, {
    "val": "江宁路",
    "url": "javascript:DataS('江宁路')",
    "selected": 0
  }, {
    "val": "汉中路",
    "url": "javascript:DataS('汉中路')",
    "selected": 0
  }, {
    "val": "自然博物馆",
    "url": "javascript:DataS('自然博物馆')",
    "selected": 0
  }, {
    "val": "南京西路",
    "url": "javascript:DataS('南京西路')",
    "selected": 0
  }, {
    "val": "淮海中路",
    "url": "javascript:DataS('淮海中路')",
    "selected": 0
  }, {
    "val": "新天地",
    "url": "javascript:DataS('新天地')",
    "selected": 0
  }, {
    "val": "马当路",
    "url": "javascript:DataS('马当路')",
    "selected": 0
  }, {
    "val": "世博会博物馆",
    "url": "javascript:DataS('世博会博物馆')",
    "selected": 0
  }, {
    "val": "世博大道",
    "url": "javascript:DataS('世博大道')",
    "selected": 0
  }]
}, {
  "val": "16号线",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('16号线沿线')",
    "val": "16号线沿线",
    "selected": 0
  }, {
    "val": "龙阳路",
    "url": "javascript:DataS('龙阳路')",
    "selected": 0
  }, {
    "val": "华夏中路",
    "url": "javascript:DataS('华夏中路')",
    "selected": 0
  }, {
    "val": "罗山路",
    "url": "javascript:DataS('罗山路')",
    "selected": 0
  }, {
    "val": "周浦东",
    "url": "javascript:DataS('周浦东')",
    "selected": 0
  }, {
    "val": "鹤沙航城",
    "url": "javascript:DataS('鹤沙航城')",
    "selected": 0
  }, {
    "val": "航头东",
    "url": "javascript:DataS('航头东')",
    "selected": 0
  }, {
    "val": "新场",
    "url": "javascript:DataS('新场')",
    "selected": 0
  }, {
    "val": "野生动物园",
    "url": "javascript:DataS('野生动物园')",
    "selected": 0
  }, {
    "val": "惠南",
    "url": "javascript:DataS('惠南')",
    "selected": 0
  }, {
    "val": "惠南东",
    "url": "javascript:DataS('惠南东')",
    "selected": 0
  }, {
    "val": "书院",
    "url": "javascript:DataS('书院')",
    "selected": 0
  }, {
    "val": "临港大道",
    "url": "javascript:DataS('临港大道')",
    "selected": 0
  }, {
    "val": "滴水湖",
    "url": "javascript:DataS('滴水湖')",
    "selected": 0
  }]
}, {
  "val": "磁悬浮",
  "selected": 0,
  "children": [{
    "url": "javascript:DataS('磁悬浮沿线')",
    "val": "磁悬浮沿线",
    "selected": 0
  }, {
    "val": "龙阳路",
    "url": "javascript:DataS('龙阳路')",
    "selected": 0
  }, {
    "val": "浦东国际机场",
    "url": "javascript:DataS('浦东国际机场')",
    "selected": 0
  }]
}];
var districtData = [{
  "val": "全上海",
  "url": "javascript:DataS('全上海')",
  "selected": 0
}, {
  "val": "浦东",
  "selected": "0",
  "children": [{
    "val": "全浦东",
    "url": "javascript:DataS('全浦东')",
    "selected": "0"
  }, {
    "val": "八佰伴",
    "url": "javascript:DataS('八佰伴')",
    "selected": "0"
  }, {
    "val": "北蔡\/塘桥",
    "url": "javascript:DataS('北蔡\/塘桥')",
    "selected": "0"
  }, {
    "val": "川沙",
    "url": "javascript:DataS('川沙')",
    "selected": "0"
  }, {
    "val": "金桥开发区",
    "url": "javascript:DataS('金桥开发区')",
    "selected": "0"
  }, {
    "val": "陆家嘴",
    "url": "javascript:DataS('陆家嘴')",
    "selected": "0"
  }, {
    "val": "南码头",
    "url": "javascript:DataS('南码头')",
    "selected": "0"
  }, {
    "val": "浦东外环",
    "url": "javascript:DataS('浦东外环')",
    "selected": "0"
  }, {
    "val": "三林",
    "url": "javascript:DataS('三林')",
    "selected": "0"
  }, {
    "val": "上南地区",
    "url": "javascript:DataS('上南地区')",
    "selected": "0"
  }, {
    "val": "世博滨江",
    "url": "javascript:DataS('世博滨江')",
    "selected": "0"
  }, {
    "val": "世纪公园",
    "url": "javascript:DataS('世纪公园')",
    "selected": "0"
  }, {
    "val": "外高桥",
    "url": "javascript:DataS('外高桥')",
    "selected": "0"
  }, {
    "val": "洋泾",
    "url": "javascript:DataS('洋泾')",
    "selected": "0"
  }, {
    "val": "御桥",
    "url": "javascript:DataS('御桥')",
    "selected": "0"
  }, {
    "val": "张江高科",
    "url": "javascript:DataS('张江高科')",
    "selected": "0"
  }, {
    "val": "竹园商贸区",
    "url": "javascript:DataS('竹园商贸区')",
    "selected": "0"
  }]
}, {
  "val": "黄浦",
  "selected": "0",
  "children": [{
    "val": "全黄浦",
    "url": "javascript:DataS('全黄浦')",
    "selected": "0"
  }, {
    "val": "董家渡",
    "url": "javascript:DataS('董家渡')",
    "selected": "0"
  }, {
    "val": "老西门",
    "url": "javascript:DataS('老西门')",
    "selected": "0"
  }, {
    "val": "南京东路",
    "url": "javascript:DataS('南京东路')",
    "selected": "0"
  }, {
    "val": "人民广场",
    "url": "javascript:DataS('人民广场')",
    "selected": "0"
  }, {
    "val": "外滩",
    "url": "javascript:DataS('外滩')",
    "selected": "0"
  }]
}, {
  "val": "卢湾",
  "selected": "0",
  "children": [{
    "val": "全卢湾",
    "url": "javascript:DataS('全卢湾')",
    "selected": "0"
  }, {
    "val": "打浦桥",
    "url": "javascript:DataS('打浦桥')",
    "selected": "0"
  }, {
    "val": "淮海中路",
    "url": "javascript:DataS('淮海中路')",
    "selected": "0"
  }, {
    "val": "五里桥\/鲁班路",
    "url": "javascript:DataS('五里桥\/鲁班路')",
    "selected": "0"
  }, {
    "val": "新天地",
    "url": "javascript:DataS('新天地')",
    "selected": "0"
  }]
}, {
  "val": "徐汇",
  "selected": "0",
  "children": [{
    "val": "全徐汇",
    "url": "javascript:DataS('全徐汇')",
    "selected": "0"
  }, {
    "val": "漕河泾",
    "url": "javascript:DataS('漕河泾')",
    "selected": "0"
  }, {
    "val": "淮海西路",
    "url": "javascript:DataS('淮海西路')",
    "selected": "0"
  }, {
    "val": "龙华",
    "url": "javascript:DataS('龙华')",
    "selected": "0"
  }, {
    "val": "上海南站",
    "url": "javascript:DataS('上海南站')",
    "selected": "0"
  }, {
    "val": "万体馆",
    "url": "javascript:DataS('万体馆')",
    "selected": "0"
  }, {
    "val": "徐家汇",
    "url": "javascript:DataS('徐家汇')",
    "selected": "0"
  }]
}, {
  "val": "长宁",
  "selected": "0",
  "children": [{
    "val": "全长宁",
    "url": "javascript:DataS('全长宁')",
    "selected": "0"
  }, {
    "val": "北新泾",
    "url": "javascript:DataS('北新泾')",
    "selected": "0"
  }, {
    "val": "虹桥火车站",
    "url": "javascript:DataS('虹桥火车站')",
    "selected": "0"
  }, {
    "val": "虹桥开发区\/古北",
    "url": "javascript:DataS('虹桥开发区\/古北')",
    "selected": "0"
  }, {
    "val": "天山路",
    "url": "javascript:DataS('天山路')",
    "selected": "0"
  }, {
    "val": "延安西路",
    "url": "javascript:DataS('延安西路')",
    "selected": "0"
  }, {
    "val": "中山公园",
    "url": "javascript:DataS('中山公园')",
    "selected": "0"
  }]
}, {
  "val": "静安",
  "selected": "0",
  "children": [{
    "val": "全静安",
    "url": "javascript:DataS('全静安')",
    "selected": "0"
  }, {
    "val": "北京西路",
    "url": "javascript:DataS('北京西路')",
    "selected": "0"
  }, {
    "val": "曹家渡",
    "url": "javascript:DataS('曹家渡')",
    "selected": "0"
  }, {
    "val": "静安寺",
    "url": "javascript:DataS('静安寺')",
    "selected": "0"
  }, {
    "val": "南京西路\/江宁路",
    "url": "javascript:DataS('南京西路\/江宁路')",
    "selected": "0"
  }]
}, {
  "val": "普陀",
  "selected": "0",
  "children": [{
    "val": "全普陀",
    "url": "javascript:DataS('全普陀')",
    "selected": "0"
  }, {
    "val": "甘泉宜川",
    "url": "javascript:DataS('甘泉宜川')",
    "selected": "0"
  }, {
    "val": "中远两湾城",
    "url": "javascript:DataS('中远两湾城')",
    "selected": "0"
  }, {
    "val": "中山北路",
    "url": "javascript:DataS('中山北路')",
    "selected": "0"
  }, {
    "val": "长风商务区",
    "url": "javascript:DataS('长风商务区')",
    "selected": "0"
  }, {
    "val": "长寿路",
    "url": "javascript:DataS('长寿路')",
    "selected": "0"
  }, {
    "val": "真如\/李子园",
    "url": "javascript:DataS('真如\/李子园')",
    "selected": "0"
  }]
}, {
  "val": "闸北",
  "selected": "0",
  "children": [{
    "val": "全闸北",
    "url": "javascript:DataS('全闸北')",
    "selected": "0"
  }, {
    "val": "大宁 \/延长路",
    "url": "javascript:DataS('大宁 \/延长路')",
    "selected": "0"
  }, {
    "val": "火车站",
    "url": "javascript:DataS('火车站')",
    "selected": "0"
  }, {
    "val": "汶水路\/共和新路",
    "url": "javascript:DataS('汶水路\/共和新路')",
    "selected": "0"
  }, {
    "val": "彭浦",
    "url": "javascript:DataS('彭浦')",
    "selected": "0"
  }, {
    "val": "闸北公园",
    "url": "javascript:DataS('闸北公园')",
    "selected": "0"
  }]
}, {
  "val": "虹口",
  "selected": "0",
  "children": [{
    "val": "全虹口",
    "url": "javascript:DataS('全虹口')",
    "selected": "0"
  }, {
    "val": "北外滩",
    "url": "javascript:DataS('北外滩')",
    "selected": "0"
  }, {
    "val": "大柏树",
    "url": "javascript:DataS('大柏树')",
    "selected": "0"
  }, {
    "val": "凉城路\/虹口足球场",
    "url": "javascript:DataS('凉城路\/虹口足球场')",
    "selected": "0"
  }, {
    "val": "临平\/和平公园",
    "url": "javascript:DataS('临平\/和平公园')",
    "selected": "0"
  }, {
    "val": "曲阳",
    "url": "javascript:DataS('曲阳')",
    "selected": "0"
  }, {
    "val": "四川北路",
    "url": "javascript:DataS('四川北路')",
    "selected": "0"
  }, {
    "val": "四平路",
    "url": "javascript:DataS('四平路')",
    "selected": "0"
  }]
}, {
  "val": "杨浦",
  "selected": "0",
  "children": [{
    "val": "全杨浦",
    "url": "javascript:DataS('全杨浦')",
    "selected": "0"
  }, {
    "val": "四平路",
    "url": "javascript:DataS('四平路')",
    "selected": "0"
  }, {
    "val": "鞍山",
    "url": "javascript:DataS('鞍山')",
    "selected": "0"
  }, {
    "val": "控江路",
    "url": "javascript:DataS('控江路')",
    "selected": "0"
  }, {
    "val": "周家嘴",
    "url": "javascript:DataS('周家嘴')",
    "selected": "0"
  }, {
    "val": "东外滩",
    "url": "javascript:DataS('东外滩')",
    "selected": "0"
  }, {
    "val": "平凉",
    "url": "javascript:DataS('平凉')",
    "selected": "0"
  }, {
    "val": "长阳路",
    "url": "javascript:DataS('长阳路')",
    "selected": "0"
  }, {
    "val": "五角场",
    "url": "javascript:DataS('五角场')",
    "selected": "0"
  }, {
    "val": "新江湾城",
    "url": "javascript:DataS('新江湾城')",
    "selected": "0"
  }, {
    "val": "中原",
    "url": "javascript:DataS('中原')",
    "selected": "0"
  }]
}, {
  "val": "闵行",
  "selected": "0",
  "children": [{
    "val": "全闵行",
    "url": "javascript:DataS('全闵行')",
    "selected": "0"
  }, {
    "val": "七宝",
    "url": "javascript:DataS('七宝')",
    "selected": "0"
  }, {
    "val": "七莘路",
    "url": "javascript:DataS('七莘路')",
    "selected": "0"
  }, {
    "val": "莘庄",
    "url": "javascript:DataS('莘庄')",
    "selected": "0"
  }, {
    "val": "颛桥\/老闵行",
    "url": "javascript:DataS('颛桥\/老闵行')",
    "selected": "0"
  }, {
    "val": "春申",
    "url": "javascript:DataS('春申')",
    "selected": "0"
  }, {
    "val": "虹桥镇",
    "url": "javascript:DataS('虹桥镇')",
    "selected": "0"
  }, {
    "val": "华漕",
    "url": "javascript:DataS('华漕')",
    "selected": "0"
  }, {
    "val": "南方商城",
    "url": "javascript:DataS('南方商城')",
    "selected": "0"
  }, {
    "val": "浦江",
    "url": "javascript:DataS('浦江')",
    "selected": "0"
  }, {
    "val": "龙柏金汇",
    "url": "javascript:DataS('龙柏金汇')",
    "selected": "0"
  }, {
    "val": "其他",
    "url": "javascript:DataS('其他')",
    "selected": "0"
  }]
}, {
  "val": "宝山",
  "selected": "0",
  "children": [{
    "val": "全宝山",
    "url": "javascript:DataS('全宝山')",
    "selected": "0"
  }, {
    "val": "淞南高境",
    "url": "javascript:DataS('淞南高境')",
    "selected": "0"
  }, {
    "val": "其他",
    "url": "javascript:DataS('其他')",
    "selected": "0"
  }, {
    "val": "顾村",
    "url": "javascript:DataS('顾村')",
    "selected": "0"
  }, {
    "val": "共康",
    "url": "javascript:DataS('共康')",
    "selected": "0"
  }, {
    "val": "共富",
    "url": "javascript:DataS('共富')",
    "selected": "0"
  }, {
    "val": "大华",
    "url": "javascript:DataS('大华')",
    "selected": "0"
  }]
}, {
  "val": "嘉定",
  "selected": "0",
  "children": [{
    "val": "全嘉定",
    "url": "javascript:DataS('全嘉定')",
    "selected": "0"
  }, {
    "val": "安亭",
    "url": "javascript:DataS('安亭')",
    "selected": "0"
  }, {
    "val": "丰庄",
    "url": "javascript:DataS('丰庄')",
    "selected": "0"
  }, {
    "val": "嘉定城区",
    "url": "javascript:DataS('嘉定城区')",
    "selected": "0"
  }, {
    "val": "江桥",
    "url": "javascript:DataS('江桥')",
    "selected": "0"
  }, {
    "val": "南翔",
    "url": "javascript:DataS('南翔')",
    "selected": "0"
  }, {
    "val": "其他",
    "url": "javascript:DataS('其他')",
    "selected": "0"
  }]
}, {
  "val": "松江",
  "selected": "0",
  "children": [{
    "val": "全松江",
    "url": "javascript:DataS('全松江')",
    "selected": "0"
  }, {
    "val": "九亭\/新桥",
    "url": "javascript:DataS('九亭\/新桥')",
    "selected": "0"
  }, {
    "val": "其他",
    "url": "javascript:DataS('其他')",
    "selected": "0"
  }, {
    "val": "泗泾",
    "url": "javascript:DataS('泗泾')",
    "selected": "0"
  }, {
    "val": "松江新城\/松江大学城",
    "url": "javascript:DataS('松江新城\/松江大学城')",
    "selected": "0"
  }]
}, {
  "val": "青浦",
  "selected": "0",
  "children": [{
    "val": "全青浦",
    "url": "javascript:DataS('全青浦')",
    "selected": "0"
  }, {
    "val": "其他",
    "url": "javascript:DataS('其他')",
    "selected": "0"
  }, {
    "val": "青浦",
    "url": "javascript:DataS('青浦')",
    "selected": "0"
  }]
}, {
  "val": "奉贤",
  "selected": "0",
  "children": [{
    "val": "全奉贤",
    "url": "javascript:DataS('全奉贤')",
    "selected": "0"
  }, {
    "val": "南桥",
    "url": "javascript:DataS('南桥')",
    "selected": "0"
  }]
}, {
  "val": "上海周边",
  "selected": "0",
  "url": "javascript:DataS('上海周边')",
}];
var zhuangxiuData = [{
  "selected": 1,
  "id": 0,
  "val": "全部",
  "url": "javascript:DataS('全部')",
}, {
  "selected": 0,
  "id": 1,
  "val": "豪华装修",
  "url": "javascript:DataS('豪华装修')",
}, {
  "selected": 0,
  "id": 2,
  "val": "精装修",
  "url": "javascript:DataS('精装修')",
}, {
  "selected": 0,
  "id": 3,
  "val": "中等装修",
  "url": "javascript:DataS('中等装修')",
}, {
  "selected": 0,
  "id": 4,
  "val": "简装修",
  "url": "javascript:DataS('简装修')",
}, {
  "selected": 0,
  "id": 5,
  "val": "毛坯",
  "url": "javascript:DataS('毛坯')",
}];
var registerData = {
  "selected": 0,
  "url": "javascript:DataS('xx')",
};
var houseTypeData = [{
  "selected": 1,
  "id": 0,
  "val": "全部",
  "url": "javascript:DataS('全部')",
}, {
  "selected": 0,
  "id": 1,
  "val": "普通办公",
  "url": "javascript:DataS('普通办公')",
}, {
  "selected": 0,
  "id": 2,
  "val": "共享办公",
  "url": "javascript:DataS('共享办公')",
}, {
  "selected": 0,
  "id": 3,
  "val": "创意园区",
  "url": "javascript:DataS('创意园区')",
}];
// var houseHouseTpyeData = {
//   "3": {
//     "selected": 0,
//     "id": 3,
//     "val": "整栋",
//     "url": "javascript:DataS('全浦东')",
//   }
// };
// var nearbyTypeData = {
//   "1": {
//     "selected": 0,
//     "url": "javascript:DataS('全浦东')",
//     "val": "1公里内"
//   },
//   "2": {
//     "selected": 0,
//     "url": "javascript:DataS('全浦东')",
//     "val": "2公里内"
//   },
//   "3": {
//     "selected": 0,
//     "url": "javascript:DataS('全浦东')",
//     "val": "3公里内"
//   },
//   "5": {
//     "selected": 0,
//     "url": "javascript:DataS('全浦东')",
//     "val": "5公里内"
//   }
// };
var globalData = { districtData: districtData, priceData: priceData, areaData: areaData, subwayData: subwayData };
//定义跳转的地址 ,点击更多加载
var pageUrl = '/sh/zuxiezilou/';
//搜索的条件地址
var searchUrl = '/sh/zuxiezilou/';
//当前城市
var this_city = 'sh';
var price_unit = '元/m²&sdot;天';

function search_form() {
  var joinSbl = '?',
    keyword = $('#search_input').val();
  if (searchUrl.indexOf('?') > -1) {
    joinSbl = '&';
  }
  var l_url = searchUrl + joinSbl + 'keyword=' + keyword;
  location.href = l_url;
  return false;
}



$('a,#exit_search,.search-guide,.input-text').each(function() {
  $(this).on('touchstart', function() {
    $(this).addClass('touch');
  });
  $(this).on('touchend touchmove touchcancel', function() {
    $(this).removeClass('touch');
  });
});






var isData = true;
var loading = false;
// false
// ===滚动加载
$(window).scroll(function() {
  var a = $(this).scrollTop(),
    t = $("body")[0].scrollHeight,
    e = $(this).height();
  a + e + 80 >= t && (g());
  a + e + 0 >= t && (c());
  // console.log(a);
  if (a > 150) {
    $("#index-page").addClass('slideup').removeClass('slidedown')
  }
  if (a < 150) {
    $("#index-page").removeClass('slideup').addClass('slidedown')
  }
  if (a > 100) {
    $('.bt-free-top').show();
  } else {
    $('.bt-free-top').hide();
  }
  // slideup
  g = function() {
      if(!loading){
       push();
     }
    // console.log('%c离底部小于80 ', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
  };
  c = function() {
    console.log('%c到底了 ', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
  };

});


function push() {
  //ajax添加数据相关
  loading = true;
   $.ajax({
       url: 'http://www.yuebanyuehao.com/laravel/public/search_ajax1',
       type: 'POST',
       dataType: 'jsonp'
   })
   .done(function(data) {
       console.log(data);
       loading = false;
   })
   .fail(function() {
       console.log("error");
   })
   .always(function() {
       console.log("complete");
   });
   
}







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
    $(".delete").prepend('<a href="javascript:void(0)" class="word-break">' + hisItem[i] + '</a>')
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


function DataS(a) {
  console.log(a);

  $("#filtermask").click();

  $('#total-wrap').remove();
  $("#container").prepend('<div style="z-index: 10" id="total-wrap" class="total-wrap">共有 <b>888</b> 个楼盘满足筛选条件</div>');
    setTimeout(function() {
      $('#total-wrap').fadeOut(1000);
      $('#total-wrap').remove();
    }, 2500);


  
  $("#listCondition").show().append('<li class="remov1"><a href="javascript:void(0);">' + a + '<i class="iconfont icon-guanbi2"></i></a></li>');



//删除
$("#listCondition .remov1").each(function() {
  $(this).on('tap', function() {
    var a = $("#listCondition .remov1").length;
    if (a == 1) {
      $('#listCondition').hide();
    } else {
      $(this).remove();
    }
  });
})
}


//删除全部
$("#listCondition .remov").on('tap', function() {
  $("#listCondition .remov1").remove();
  $('#listCondition').hide();
});
