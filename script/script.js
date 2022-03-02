/*네브제이쿼리*/
$(function(){
  $(".navbar_nav> li").hover(function(){
      $(this).toggleClass("show").siblings().removeClass("show");
  });    
});

/*네브클릭시백그라운드고정제이쿼리*/
$(function(){	
	$('.tabnav a').click(function () {	
		$('.tabnav a').removeClass('active');
		$(this).addClass('active');	
	})
  });

/*AOS제이쿼리*/
AOS.init({
  duration: 2000 //aos 나타나는 속도
})

/*슬라이드제이쿼리*/
$(function(){
  var swiper = new Swiper('.slide ', {
     speed: 2000,// 슬라이드가 넘어가는 시간
       autoplay: {
         delay: 3500,//자동으로 넘어가기 전 머무르는 시간
         disableOnInteraction: false,
       },
       loop: true,//슬라이드 무한반복
       navigation: {//화살표 버튼
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
         pagination: {//블릿 버튼
         el: '.swiper-pagination',
         clickable: true,
       },
     });
 });

 /*슬라이드 제이쿼리*/
$(document).on('ready', function() {
  $(".slider").slick({
    //설정 값을 원하지 않는 경우 true값을 false로 바꿔주세요.
    speed: 2000, //다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간
    autoplay: false, //자동 갤러리 구문
    autoplaySpeed:5000, //자동 갤러리가 넘어가는 시간
    slidesToShow: 4,//보여지는 갤러리 수
    slidesToScroll: 1,//넘어가는 갤러리 수
    pauseOnHover:true, // 마우스 호버시 슬라이드 이동 멈춤
    arrows: true, //화살표 버튼
    dots: true, //슬라이드 밑에 동그라미 버튼
    infinite: true //무한반복
  });
});

