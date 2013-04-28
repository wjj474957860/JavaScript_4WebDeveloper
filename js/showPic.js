//显示指定图片
function showPic(whichpic){
	//首先获得该指定图片的href的字符串型字符串
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
}