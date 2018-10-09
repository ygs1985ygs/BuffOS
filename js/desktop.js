$(function() {
	var nowdate = new Date();
	setInterval(updatetime, 900);
	//  $('.daraggable').each(function(index){
	//  	$(this).myDrag({
	//  		direction:'all',
	//  		handler:'.buff-open-iframe-title'
	//  	  });
	//  	});
	//$('.daraggable').draggable();
	layer.open({
		type: 1, 
		content: '传入任意的文本或html' //这里content是一个普通的String
	  });
})
$(".buff-start-btn").on("click", function() {
	$(".buff-start").show();
})
$(".buff-message_clean_all").on("click", function() {
	$(".msgs .am-alert").alert('close');
})
$(".buff-start").on("mouseleave", function() {
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
	var Month = nowdate.getMonth()+ 1;
	if(Month.toString().length == 1) {
		Month = "0" + Month ;
	}
	var Dates = nowdate.getDate();
	if(Dates.toString().length == 1) {
		Dates = "0" + Dates;
	}
	var stringtime = Hours + ":" + Minutes + "<br>" + FullYear + "/" + Month + "/" + Dates;
	$(".buff-start-time").html(stringtime);
}

