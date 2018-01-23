(function ($) {
    $.fn.extend({
             carrousel: function (width,s) {
                var i = 0;
                var stop = false;
                var onff = false;
                var wrap = $(this);
                var ul = $(this).find("ul").eq(0);
                var ul2 = $(this).find("ul").eq(1);
                var btn = $(this).find("div");
                var li = ul.find("li");
                var prev = btn.find("span").eq(0);
                var next = btn.find("span").eq(1);
                li.width(width);
                wrap.width(width);
                ul.width(width*li.length);
                for(var j =0;j<li.length;j++){
                    ul2.append("<li></li>");
                }
                var li2 = ul2.find("li");
                li2.eq(0).addClass("this");
                wrap.mouseover(function(){
                    btn.show();
                }).mouseout(function(){
                    btn.hide();
                });
                var fristimg =li.eq(0).clone();
                ul.append(fristimg);
                li = ul.find("li");
                ul.width(li.length*width);
                next.click(function(){
                   if(!onff){
                       onff = true;
                       i ++;
                       ul.animate({left:-i*width},300,function(){
                           onff = false;
                       });
                       if(i==li.length){
                           i = 1;
                           ul.css("left","0px");
                           ul.stop().animate({left:-i*width},300,function(){
                               onff = false;
                           })
                       }
                       if(i==li.length -1){
                           li2.eq(0).addClass("this").siblings().removeClass("this");
                       }else{
                           li2.eq(i).addClass("this").siblings().removeClass("this");
                       }
                   }
                });
                prev.click(function(){
                  if(!onff){
                      onff = true;
                      i--;
                      ul.animate({left:-i*width},300,function(){
                          onff = false;
                      });
                      if(i==-1){
                          i = li.length -2;
                          ul.css({left:-(li.length -1)*width});
                          ul.stop().animate({left:-i*width},300,function(){
                              onff = false;
                          });
                          li2.eq(i).addClass("this").siblings().removeClass("this");
                      }else{
                          li2.eq(i).addClass("this").siblings().removeClass("this");
                      }
                  }
                })
                li2.click(function(){
                    var index = $(this).index();
                    ul.stop().animate({left:-index*width},300);
                    li2.eq(index).addClass("this").siblings().removeClass("this");
                    i = index;
                });
                setInterval(function(){
                    if(!stop) {
                        i++;
                        if (i == li.length) {
                            i = 1;
                            ul.css("left", "0px");
                        }
                        ul.stop().animate({left: -i * width}, 300);
                        if (i == li.length - 1) {
                            li2.eq(0).addClass("this").siblings().removeClass("this");
                        } else {
                            li2.eq(i).addClass("this").siblings().removeClass("this");
                        }
                    }
                },s);
                wrap.mouseover(function(){
                    stop = true;
                }).mouseout(function(){
                    stop = false;
                });
          }
    })
})(jQuery);