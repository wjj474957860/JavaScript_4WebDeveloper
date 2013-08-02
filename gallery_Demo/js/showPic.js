//显示指定图片
function showPic(whichpic) {
	//首先获得该指定图片的href的字符串型字符串
	var source = whichpic.getAttribute("href");
	//获得指定图片的title属性的字符串
	var title = whichpic.getAttribute("title");
	var placeholder = document.getElementById("placeholder");
	//以下是追加相对应的属性值
	placeholder.setAttribute("src", source);
	placeholder.setAttribute("title", title);

	var description = document.getElementById("description");
	//涉及firstChild,lastChild,nodeValue的基本概念
	description.firstChild.nodeValue = title;
}

function prepareGallery(){
	//对浏览器的DOM方法getElementsByTagName是否支持检测
	if (!document.getElementsByTagName) {
		return false;
	}
	//对浏览器的DOM方法getElementById是否支持检测
	if (!document.getElementById) {
		return false;
	}
	//检测该元素是否存在
	if (!document.getElementById("imageGallery")) {
		return false;
	}
	
	
	var gallery = document.getElementById("imageGallery");
	var links = gallery.getElementsByTagName("a");
	//遍历元素，添加onclick函数
	for (var i = 0, i < links.length; i++) {
		links[i].onclick = function () {
			showPic(this);
			return false;
		}
	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function () {
			oldonload();
			func();
		}
	}
}
window.onload = prepareGallery;
//addLoadEvent(prepareGallery);
