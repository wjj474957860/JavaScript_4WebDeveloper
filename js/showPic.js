//显示指定图片
function showPic(whichpic){
	//首先获得该指定图片的href的字符串型字符串
	var source = whichpic.getAttribute("href");
	//获得指定图片的title属性的字符串
	var title = whichpic.getAttribute("title");
	var placeholder = document.getElementById("placeholder");
	//以下是追加相对应的属性值
	placeholder.setAttribute("src",source);
	placeholder.setAttribute("title",title);
}