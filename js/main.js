//开门效果 start
(function($,document){
	$(function(){
		var oC=$('#circle_load').get(0);
		var gd=oC.getContext('2d');
		var s1=-135,s2=-135,s3=-135;
		var e1=-45,e2=-45,e3=-45;
		var aImgSource=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','android.png','bg-01.jpg','bg-02.jpg','bg-03.jpg','bg-04.jpg','button_downr.png','contact_bg.png','home_bg.png','ios.png','main_logo.png','other.png','service_bg.png','sprite.png','work_bg.png'];
		function imageLoad(arr,fn){
			var count=0;
			for(var i=0; i<arr.length; i++){
				var oImg=new Image();
				oImg.src='img/'+arr[i];
				oImg.onload=function(){
					count++;
					if(count==arr.length-1){
						fn&&fn();
					}
				}
			}
		}
		function d2r(n){
			return n*Math.PI/180;
		}
		oC.timer=setInterval(function(){
			gd.clearRect(0,0,oC.width,oC.height);
			gd.beginPath();
			gd.arc(100,100,70,d2r(s1+=5),d2r(e1+=5),false);
			gd.strokeStyle='#f9c922';
			gd.lineWidth=3;
			gd.stroke();
			gd.beginPath();
			gd.arc(100,100,80,d2r(s2+=4),d2r(e2+=4),false);
			gd.strokeStyle='#e64c3c';
			gd.lineWidth=3;
			gd.stroke();
			gd.beginPath();
			gd.arc(100,100,90,d2r(s3+=3),d2r(e3+=3),false);
			gd.strokeStyle='#3498db';
			gd.lineWidth=3;
			gd.stroke();
		},16);
		//setTimeout(function(){
		//	$(oC).fadeOut('300',function(){
		//		clearInterval(oC.timer);
		//		$('.left-door').animate({'width':0});
		//		$('.right-door').animate({'width':0},{'complete':function(){
		//			$('.main-container').addClass('swing');
		//			$('.nav-container').addClass('flash');
		//		}});
		//	});
		//},100);
		imageLoad(aImgSource,function(){
			$(oC).fadeOut('300',function(){
				clearInterval(oC.timer);
				$('.left-door').animate({'width':0});
				$('.right-door').animate({'width':0},{'complete':function(){
					$('.main-container').addClass('swing');
					$('.nav-container').addClass('flash');
				}});
			});
		})
	});
})(jQuery,document);
//开门效果 end

//HOME start
(function($){
	$(function(){
		var aNav=$('.nav-bar li a');
		aNav.eq(0).on('click',function(){
			$('html,body').animate({'scrollTop':'0px'});
		});
		$('.header-bar').on('click',function(){
			$('html,body').animate({'scrollTop':'0px'});
		});
		aNav.eq(1).on('click',function(){
			$('html,body').animate({'scrollTop':'630px'});
		});
		$('.nav-container').on('click',function(){
			$('html,body').animate({'scrollTop':'630px'});
		});
		aNav.eq(2).on('click',function(){
			$('html,body').animate({'scrollTop':'1310px'});
		});
		aNav.eq(3).on('click',function(){
			$('html,body').animate({'scrollTop':'2010px'});
		});
	});
})(jQuery);
//HOME end

//SERVICES start
(function($,document){
	$(function(){
		$(document).on('scroll',function(){
			if($(document).scrollTop()>=200){
				$('.service-header').addClass('bounceInRight');
			}
			if($(document).scrollTop()>=400){
				$('.tab-container').addClass('bounceInLeft');
				setTimeout(function(){
					$('.service-title').addClass('bounceInLeft');
				},300);
				setTimeout(function(){
					$('.service-text').addClass('bounceInLeft');
				},600);

			}
		});
		var oTab=$('.tab-container');
		var oUl=$('.tab-main');
		var aBtn=$('.tab-tip li');
		var aLi=$('.tab-main li');
		var n=1;
		var m=aLi.length;
		var x=-n*aLi.outerWidth();
		var bOk=true;
		oUl.css({'transform':'translateX('+x+'px)','-webkit-transform':'translateX('+x+'px)'});
		function tab(){
			x=-n*aLi.outerWidth();
			oUl.css({'transition':'0.5s all ease','transform':'translateX('+x+'px)','-webkit-transform':'translateX('+x+'px)'});
			oUl.on('transitionend',function(){
				bOk=true;
				if(n==m-1){
					n=1;
				}
				if(n==0){
					n=m-2;
				}
				x=-n*aLi.outerWidth();
				oUl.css({'transition':'none','transform':'translateX('+x+'px)','-webkit-transform':'translateX('+x+'px)'});
				aBtn.eq(n-1).addClass('on').siblings().removeClass('on');
			});
		}
		function clock(){
			n++;
			if(n==m){
				n=0;
			}
			tab();
		}
		aBtn.on('click',function(){
			n=$(this).index()+1;
			tab();
		});
		$('.tab-prev').on('click',function(){
			if(!bOk)return;
			bOk=false;
			n--;
			tab();
		});
		$('.tab-next').on('click',function(){
			if(!bOk)return;
			bOk=false;
			n++;
			tab();
		});
		oTab.timer=setInterval(clock,2500);
		oTab.on('mouseover',function(){
			clearInterval(oTab.timer);
		});
		oTab.on('mouseout',function(){
			oTab.timer=setInterval(clock,2500);
		});
	});
})(jQuery,document);
//SERVICES end

//WORK start
(function($,document){
	$(function(){
		$(document).on('click',function(){
			console.log($(document).scrollTop());
		});
		$(document).on('scroll',function(){
			var oType=$('.work-type');
			var aLi=$('.work-list li');
			if($(document).scrollTop()>=900){
				$('.work-header').addClass('bounceInRight');
			}
			if($(document).scrollTop()>=1000){
				var n=$('.work-type li').length;
				oType.timer=setInterval(function(){
					n--;
					$('.work-type li').eq(n).addClass('bounceInLeft');
					if(n==0){clearInterval(oType.timer)}
				},100);
			}
			if($(document).scrollTop()>=1100){
				var m=0;
				oType.timer2=setInterval(function(){
					aLi.eq(m).addClass('zoomIn').css('opacity',1);
					m++;
					if(m==aLi.size()){clearInterval(oType.timer2)}
				},200);
			}
			aLi.on('mouseenter',function(){
				$(this).find('span').stop().animate({'bottom':0});
			});
			aLi.on('mouseleave',function(){
				$(this).find('span').stop().animate({'bottom':'-195px'});
			});
		});
	});
})(jQuery,document);
//WORK end

//CONTACT start
(function($,document){
	$(function(){
		var aLi=$('.contact-app li');
		var oCon=$('.contact-page');
		var n=0;
		$(document).on('scroll',function(){
			if($(document).scrollTop()>=1700){
				oCon.timer=setInterval(function(){
					aLi.eq(n).addClass('bounceInDown');
					n++;
				},200);
			}
		});
	});
})(jQuery,document);
//CONTACT end