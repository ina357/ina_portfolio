
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
      function readMore() {
        var expandInfo = document.getElementById("more-info-js");
        var mainHeadings = document.getElementById("main-headings-js");
        
        mainHeadings.style.transform = "scale(0.7)";
        expandInfo.style.height = "500px";
      
      }
      $(".toggle").click(function() {
        console.log("clicked");
        $(".expandable_content").toggleClass("active");
        $(".toggle").toggleClass("active");
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
       //console.log(offTop1);
       //console.log(offTop2);
       if(sct >offTop1.top-200){
            $('.web-t>span').addClass('web-small');
            $('.wicon>ul').addClass('textTop');
            $('.wline').addClass('w-line');
            $('.wline1').addClass('w-line1');
            $('.web-s-t>span').addClass('web-s-t-a');
            $('.line').addClass('line-t');
            $('.line1').addClass('line-t1');
            $('.text-effect>span').addClass('text-e');
            $('.wand>span').addClass('text-ee');
            $('.content-name').addClass('cn');
            $('.nline').addClass('cn-line');
            $('.content-btn').addClass('cn-btn');
        }else{
         $('.web-t>span').removeClass('web-small');
         $('.wicon>ul').removeClass('textTop');
         $('.wline').removeClass('w-line');
         $('.wline1').removeClass('w-line1');
         $('.web-s-t>span').removeClass('web-s-t-a');
         $('.line').removeClass('line-t');
         $('.line1').removeClass('line-t1');
         $('.text-effect>span').removeClass('text-e');
         $('.wand>span').removeClass('text-ee');
         $('.content-name').removeClass('cn');
         $('.nline').removeClass('cn-line');
         $('.content-btn').removeClass('cn-btn');
       }
       $('.js-tilt').tilt({
        glare: true,
        maxGlare: .3
    })
    });/* if(sct >offTop.top-200){
        $('#header').addClass('on');
        $('#section1>p>.leftP').css('left','-100%').stop().animate({'left':'0'},500)
        $('#section1>p>.rightP').css('right','-100%').stop().delay(500).animate({'right':'0'},500)
    }else{
     $('#header').removeClass('on');
    } */

      
      
     
    },
    main1: function(){},
    main2: function(){},
    main3: function(){},
    main4: function(){},
    footer: function(){},
  };
  wrap.init();
})(jQuery);





