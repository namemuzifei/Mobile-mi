//页面加载事件
mui(function(){
	//底部导航栏
	//由于在mui中会使在底部导航栏中a标签中的href属性无效，因此需要利用window.location跳转页面
	//点击底部导航栏容器下的某个子元素，可以跳转至相应的页面
	//可以使用事件委托
	mui('#bottom_nav').on( 'tap','a',function(){
		//console.log(this);
		window.location = this.getAttribute( 'location' );
	} );
});
