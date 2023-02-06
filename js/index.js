// 页面加载后执行
window.onload = function(){
	// 1.找到页面中当前高亮的导航块
	var a = document.querySelector(".active");


	// 2.获取滚动条到页面顶部距离
	var l = document.querySelector(".guidebar");
	// var stop = document.documentElement.scrollTop || document.body.scrollTop;
	// 3.获取导航块到页面顶端距离
	var activeTop = a.offsetTop;
	
	l.scrollTop = activeTop-200;
	// console.log(l.scrollTop);
}