var num_year = prompt("請輸入年份"); //詢問年份
var num_mouth = prompt("請輸入月份");  //詢問月份

var days = new Date(num_year , num_mouth , 0).getDate();  //取得月份有幾天
var weeks = new Date(num_year + "/" + num_mouth + "/1").getDay();  //取得該月一號是星期幾

//開始計算
if(days == 31 && weeks == 5){  //偵測該月是否有31天 且 第一天是星期五
    var answer = true;  //是的話，回傳是
}
else if(days != 31 || weeks != 5){  //偵測是否不成立
    var answer = false;  //若不成立，回傳否
}

//回傳結果
if(answer == true){  //如果是財富月
    alert("這個月是財富月！");  //告訴使用者是
    document.write(num_year+"年"+num_mouth+"月"+"是財富月！")
}
else if(answer == false){  //如果不是財富月
    alert("這個月不是財富月 ~");  //告訴使用者不是
    document.write(num_year+"年"+num_mouth+"月"+"不是財富月 ~")
}
