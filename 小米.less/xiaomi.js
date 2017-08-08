window.onload=function(){
//	轮播图开始
var imgs=document.getElementById("lbt").getElementsByTagName("img");
var lis=document.getElementById("lbt").getElementsByTagName("li");
var left=document.getElementById("left");
var right=document.getElementById("right");
var box=document.getElementById("lbt");

var num=0;
function xianyin(){
	for (var xy=0;xy<imgs.length;xy++) {
		imgs[xy].style.display="none";
	}
	imgs[num].style.display="block";
}
function xiaodian(){
	for (var xd=0;xd<lis.length;xd++) {
		lis[xd].style.background="#8D8D8D";
	}
	lis[num].style.background="white";
}
function lbt(){
	num++;
	if (num>5) {
		num=0
	}
	xianyin();
	xiaodian();
}

var ds=setInterval(lbt,1000);

box.onmouseover=function(){
	clearInterval(ds);
}

box.onmouseout=function(){
	ds=setInterval(lbt,1000);
}

left.onclick=function(){
	num--;
	if (num==-1) {
		num=5;
	}
	xianyin();
	xiaodian();
}

right.onclick=function(){
	num++;
	if (num==6) {
		num=0;
	}
	xianyin();
	xiaodian();
}

for (var qh=0;qh<lis.length;qh++) {
	lis[qh].xvhao=qh;
	lis[qh].onclick=function(){
		num=this.xvhao;
		xianyin();
		xiaodian();
	}
}
//轮播图结束
}
