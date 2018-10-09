$(function() {
	var nowdate = new Date();
	setInterval(updatetime, 900);
	// $('.daraggable').each(function(index){
	// 	direction:'all'
	// 	});
	daraggable('.daraggable')
})
$(".buff-start-btn").on("click",function(){
	$(".buff-start").show();
})
$(".buff-message_clean_all").on("click",function(){
	$(".msgs .am-alert").alert('close');
})
$(".buff-start").on("mouseleave",function(){
	$(".buff-start").hide();
})
/**
 * 实时更新时间
 */
function updatetime() {
	var nowdate = new Date();
	var Hours = nowdate.getHours();
	if(Hours.toString().length == 1) {
		Hours = "0" + Hours;
	}
	var Minutes = nowdate.getMinutes();
	if(Minutes.toString().length == 1) {
		Minutes = "0" + Minutes;
	}
	var FullYear = nowdate.getFullYear();
	var Month = nowdate.getMonth();
	if(Month.toString().length == 1) {
		Month = "0" + (Month + 1);
	}
	var Dates = nowdate.getDate();
	if(Dates.toString().length == 1) {
		Dates = "0" + Dates;
	}
	var stringtime = Hours + ":" + Minutes + "<br>" + FullYear + "/" + Month + "/" + Dates;
	$(".buff-start-time").html(stringtime);
}
function daraggable (this){
	//获取元素
var dv = document.getElementById(this);
var x = 0;
var y = 0;
var l = 0;
var t = 0;
var isDown = false;
//鼠标按下事件
dv.onmousedown = function(e) {
    //获取x坐标和y坐标
    x = e.clientX;
    y = e.clientY;

    //获取左部和顶部的偏移量
    l = dv.offsetLeft;
    t = dv.offsetTop;
    //开关打开
    isDown = true;
    //设置样式  
    dv.style.cursor = 'move';
}
//鼠标移动
window.onmousemove = function(e) {
    if (isDown == false) {
        return;
    }
    //获取x和y
    var nx = e.clientX;
    var ny = e.clientY;
    //计算移动后的左偏移量和顶部的偏移量
    var nl = nx - (x - l);
    var nt = ny - (y - t);

    dv.style.left = nl + 'px';
    dv.style.top = nt + 'px';
}
//鼠标抬起事件
dv.onmouseup = function() {
    //开关关闭
    isDown = false;
    dv.style.cursor = 'default';
}
}