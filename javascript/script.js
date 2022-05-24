
(function($){
  let wrap = {
    init:function(){
      this.scrolls();
      this.header();
      this.centerLine();
    },
    scrolls: function(){
      $(window).scroll(function(){
        let sct=$(window).scrollTop();  
        //console.log(sct);
        const sections=$('.container-large > div');
        sections.each(function(){
          const tops=Math.floor($(this).offset());
          //console.log(tops)
          if(sct >=tops){
            $('.content-name').addClass('cn');
            $('.nline').addClass('cn-line');
            $('.content-btn').addClass('cn-btn');
            
          }else{
            $('.content-name').removeClass('cn');
            $('.nline').removeClass('cn-line');
            $('.content-btn').removeClass('cn-btn');
        
          }
        });
      });
    },
    header: function(){
      const menu1=$('.link-About');//메뉴 
      const contents1=$('.About')//컨텐츠
      
      menu1.click(function(e){
        e.preventDefault();
        let tg=$(this);//클릭한 대상
        let i=tg.index();//클릭한 대상의 순번
        let section=contents1.eq(i);//클릭한 대상의 컨텐츠의 순번
        let st=section.offset().top;//offset은 대상의 위치값을 나타낸다.
        $('html, body').stop().animate({scrollTop:st});//scrollTop은 현재 스크롤의 위치값을 나타낸다.

      });

      const menu=$('.nav>ul>li');//메뉴 
      const contents=$('.container-large > div')//컨텐츠
      
      menu.click(function(e){
        e.preventDefault();
        let tg=$(this);//클릭한 대상
        let i=tg.index();//클릭한 대상의 순번
        let section=contents.eq(i);//클릭한 대상의 컨텐츠의 순번
        let st=section.offset().top;//offset은 대상의 위치값을 나타낸다.
        $('html, body').stop().animate({scrollTop:st});//scrollTop은 현재 스크롤의 위치값을 나타낸다.

      });
    },
    centerLine: function(){
      $(window).scroll(function(){
        let sct=$(window).scrollTop();
       // console.log(sct);
        const offTop1=$('#scroll1').offset();
       console.log(offTop1);
       if(sct >offTop1.top-200){
            $('.web-t>span').addClass('web-small');
            $('.wicon>ul').addClass('textTop');
            $('.wline').addClass('w-line');
            $('.wline1').addClass('w-line1');
            $('.web-s-t>span').addClass('web-s-t-a');
            $('.A_main').addClass('about-ani');
            $('.web2-effect').addClass('web2-ani');
            $('.web3-effect').addClass('web3-ani');
            $('.line').addClass('line-ani');
            $('.line1').addClass('line1-ani');
            $('.content-name').addClass('cn');
            $('.nline').addClass('cn-line');
            $('.content-btn').addClass('cn-btn');
            
        }else{
         $('.web-t>span').removeClass('web-small');
         $('.wicon>ul').removeClass('textTop');
         $('.wline').removeClass('w-line');
         $('.wline1').removeClass('w-line1');
         $('.web-s-t>span').removeClass('web-s-t-a');
         $('.A_main').removeClass('about-ani');
         $('.web2-effect').removeClass('web2-ani');
         $('.web3-effect').removeClass('web3-ani');
         $('.line').removeClass('line-ani');
         $('.line1').removeClass('line1-ani');
         $('.content-name').removeClass('cn');
         $('.nline').removeClass('cn-line');
         $('.content-btn').removeClass('cn-btn');
       
       }
       
       $('.js-tilt').tilt({
        glare: true,
        maxGlare: .3
    })
    });
    },
  };
  wrap.init();
})(jQuery);





