
//1.数据定义，每个图片的定义
var data=[
	{img:1,h1:'Creative',h2:'DEUT'},
	{img:2,h1:'Friendly',h2:'DEVIL'},
	{img:3,h1:'Tranquilent',h2:'COMPATRAIOT'},
	{img:4,h1:'Insecure',h2:'HUSSLER'},
	{img:5,h1:'Loving',h2:'REBEL'},
	{img:6,h1:'Passionate',h2:'SEEKER'},
	{img:7,h1:'Crazy',h2:'FRIEND'}
];

//2. 通用函数
var g=function (id) {
	if (id.substr(0,1)=='.') {
		return document.getElementsByClassName(id.substr(1));
	}
	return document.getElementById(id);
}

//3.添加幻灯片的操作（所有幻灯片和对应的按钮）
function addSliders() {
	//3.1 获取模版
	var tpl_main = g('template_main').innerHTML
				   .replace(/^\s*/,'')	 // 正则表达式 g表示全局
				   .replace(/\s*$/,'');

    var tpl_ctrl = g('template_ctrl').innerHTML
				   .replace(/^\s*/,'')
				   .replace(/\s*$/,'');

	//3.2 定义最终输出HTML的变量
	var out_main = [];
	var out_ctrl = [];

	//3.3 遍历所有数据，构建最终输出的HTML
	 for(i in data){
		var _html_main = tpl_main
		.replace(/{{index}}/g,data[i].img)
		.replace(/{{h2}}/g,data[i].h1)
		.replace(/{{h3}}/g,data[i].h2)
		.replace(/css/g,['','main-i_right'][i%2]);
		
		var _html_ctrl = tpl_ctrl
		.replace(/{{index}}/g,data[i].img);//正则表达式
		
		out_main.push(_html_main);
		out_ctrl.push(_html_ctrl);
	}

	//3.4 把HTML 回写到对应的DOM里面
		g('template_main').innerHTML = out_main.join('');
		g('template_ctrl').innerHTML = out_ctrl.join('');
		g('template_main').innerHTML += tpl_main
			.replace(/index/g,'index')
			.replace(/h2/g,data[i].h1)
			.replace(/h3/g,data[i].h2);
		// g('main_index').id = 'main_background'
}
//幻灯片切换
function switchSlider(n){
	//获取要控制的幻灯片和按钮的DOM
	var main = g('main_'+n);
	var ctrl = g('ctrl_'+n);
	//获取所有幻灯片和可控制按钮
	var clear_main = g('.main-i');
	var clear_ctrl = g('.ctrl-i');

 	//清除他们的active样式
 	for(i=0;i<clear_ctrl.length;i++){
		clear_main[i].className = clear_main[i].className
		.replace('main-i_active','');
		clear_ctrl[i].className = clear_ctrl[i].className
		.replace('ctrl-i_active','');
 	}

 	main.className += ' main-i_active';
	ctrl.className += ' ctrl-i_active';
	
}

function movePictures(){
	var pictures = g('.picture');
	for(i=0;i<pictures.length;i++){
		pictures[i].style.marginTop = (-1 * pictures[i].clientHeight/2) + 'px';
	}
}
//4.定义合适处理幻灯片输出，确保DOM tree已经渲染完成
window.onload=function () {
	addSliders();
		switchSlider(1);
}

setTimeout(function(){
		movePictures();
	},100)
