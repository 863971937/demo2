$(function(){
			$(".main").click(function(){
				var $none=$(".main").siblings().children(".none");
				if($none.is(":visible")){
					$none.slideUp(500);
					$(this).html("加 载 更 多");
				}else{
					$none.slideDown(500);
					$(this).html("关闭")
				}
			})
})

$(function(){
			    $(".parent").toggleClass("sele")
				$(".parent").click(function(){
					$(this).toggleClass('selected')
					.siblings(".child_"+this.id).stop(true,true).slideToggle(800); 

				})
			})
	
	$(function(){
		$(".child_row_01").find("li:last").addClass("Active")
		$(".left .gg li").click(function(){
			$(this).addClass("Active").siblings().removeClass("Active")
			.parent("ul").siblings().children("li").removeClass("Active");
		})
		
	})
	
	
	//01 新闻滚动 
		$(function(){
        var $this = $(".child_row_04");
		var scrollTimer;   //计时器
		$this.hover(function(){
			  clearInterval(scrollTimer);
		 },function(){
		   scrollTimer = setInterval(function(){
						 scrollNews( $this );
					}, 3000 );
		}).trigger("mouseleave");
      });

		function scrollNews(obj){
		   var $this = $(".child_row_04");
		   $this.animate({ "marginTop" : 0+"px" }, 600 , function(){
		         $this.css({marginTop:0}).find("li:first").appendTo($this); //appendTo能直接移动元素
		   })
		}
		

		
