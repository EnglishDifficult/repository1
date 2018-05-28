function byId(id){
	return document.getElementById(id)	 
}

function byCl(classs){
	return document.getElementsByClassName(classs)
}
var bfjg=byId("bfjg");
var bfrh=byId("bfrh");
var a=byCl("bg1");
var b=null;
var c=0;
var x=0;
var g=1;
var d=a.length;
var e=byCl("main");
var f=byCl("dot");
var left=byCl("left");
var right=byCl("right");
var mod=byCl("mod");
var mod1=byCl("mod1")
var shudu=bfjg.value;
var qian=0;
var hou=1;
var huanchong=bfrh.value;
// 监听shudu和huanchong
bfjg.addEventListener('click',function(){
	shudu = bfjg.value;
	stop();
	autoplay();
	console.log(shudu)
})
bfrh.addEventListener("click",function(){
	huanchong = bfrh.value;
	stop();
	autoplay();
	console.log(huanchong)
})
function stop(){
	clearInterval(b);
}
	
for (var z = mod1.length - 1; z >= 0; z--) {
		mod1[z].abc=z
		mod1[z].onclick=function(){
			g=this.abc
		}
	}
			// console.log(g)
function cansu(){
			switch(g){
		case 0:
	c=c+1;
	if (c>=d) {
		c=c-d;
	}
	// 简单的012012循环
		break;
		case 1:
	if(hou>qian){
			qian=c
			c=c+1
			hou=c
		}
		else{
		qian=c
		c=c-1
		hou=c
		}		
		if (c==d) {
				qian=c
				c=c-1
				hou=c
				cansu()
			}
		if (c==-1) {
			qian=c
			c=c+1
			hou=c
			cansu()
		}
		// 01210循环
		break;
		case 2:
	if(hou>qian){
			qian=c
			c=c+1
			hou=c
		}
		else{
		qian=c
		c=c-1
		hou=c
		}		
		if (c==d) {
				qian=c
				c=c-1
				hou=c
			}
		if (c==-1) {
			qian=c
			c=c+1
			hou=c
		}
	// 复杂的0012345432100循环

		break;
		default:
	c=c+1;
	if (c>=d) {
		c=c-d;
	}
	// 简单的012012循环
	}
}
// js中对应的图片页码
function shuru1(){
	for (var i = a.length - 1; i >= 0; i--) {
	f[i].style.border="1px solid white";
	f[i].style.background="#A19F9F";
	}
	f[c].style.border="1px solid #727272";
	f[c].style.background="white";
}
// 不变设定
function chongzi(){
	for (var k = a.length - 1; k >= 0; k--) {
				a[k].style.opacity="1";
				a[k].style.left="0";
				a[k].style.transform="scale(1) rotate(0)";
				a[k].style.transition=huanchong+"s";
			}
}
// 重置状态
function shuru2(){
	switch(x){
		case 0:
		for (var k = a.length - 1; k >= 0; k--) {
				a[k].style.opacity="0";
			}
			a[c].style.opacity="1";
		break;
		case 1:
		for (var k = a.length - 1; k >= 0; k--) {
				a[k].style.left="1200px";
			}
			a[c].style.left="0";
		break;
		case 2:
		for (var k = a.length - 1; k >= 0; k--) {
				a[k].style.transform="scale(0)";
			}
			a[c].style.transform="scale(1)";
		break;
		case 3:
		for (var k = a.length - 1; k >= 0; k--) {
				a[k].style.transform="scale(0) rotate(180deg)";
			}
			a[c].style.transform="scale(1) rotate(0)";
		break;
		case 4:
		for (var k = a.length - 1; k >= 0; k--) {
				a[k].abc=k
				a[k].style.left=(a[k].abc-c)*"1200"+"px";		
			}
		break;
	}
}
// 图片切换方案
function modc(){
for (var u = mod.length - 1; u >= 0; u--) {
	mod[u].abc=u
	mod[u].onclick=function(){
		x=this.abc
		chongzi();
	}
}
}
modc();
// 模式选择器点击事件
function autoplay(){
	b=setInterval(function(){
		cansu();
		shuru1();
		shuru2();
		// console.log(c)
	},shudu)
}
window.onload=function(){
	chongzi();
	autoplay();
}
// 自动轮播
e[0].onmouseover=stop;
e[0].onmouseout=autoplay;
// 鼠标切入切出停留轮播停止开始

for (var j = f.length - 1; j >= 0; j--) {
	f[j].li=j;
	f[j].onclick=function dianji(){
		c=this.li;
		shuru1();
		shuru2();
		}
	}
// 点选页码
left[0].onclick=function lef(){
	c=c-1;
	if (c<0)
	 {c=c+d;}
	shuru1();
	shuru2();
}
// 上一页
right[0].onclick=function rig(){
	c=c+1;
	if (c>=d)
	 {c=c-d;}
	shuru1();
	shuru2();
}
// 下一页
