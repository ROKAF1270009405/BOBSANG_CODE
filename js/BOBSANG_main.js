/*window.onload=function(){
            document.getElementsByClassName('left_mini_img')[0].addEventListener('mouseover',function(){
                document.getElementsByClassName('main_big_img').setAttribute('src','img/discount-1015446_1280.jpg');
                this.setAttribute('alt','세일');
            });
             document.getElementsByClassName('left_mini_img')[0].addEventListener('focus',function(){
                document.getElementsByClassName('main_big_img').setAttribute('src','img/discount-1015446_1280.jpg');
                this.setAttribute('alt','세일');
            });

            document.getElementsByClassName('left_mini_img')[1].addEventListener('mouseover',function(){
                document.getElementsByClassName('main_big_img').setAttribute('src','img/holiday-shopping-1921658_1280.jpg');
                this.setAttribute('alt','모바일쇼핑');
            });
            document.getElementsByClassName('left_mini_img')[1].addEventListener('focus',function(){
                document.getElementsByClassName('main_big_img').setAttribute('src','img/holiday-shopping-1921658_1280.jpg');
                this.setAttribute('alt','모바일쇼핑');
            });

            document.getElementsByClassName('left_mini_img')[2].addEventListener('mouseover',function(){
                document.getElementsByClassName('main_big_img').setAttribute('src','img/farmer-3431359_1280.jpg');
                this.setAttribute('alt','농사');
            });

             document.getElementsByClassName('left_mini_img')[2].addEventListener('focus',function(){
                document.getElementsByClassName('main_big_img').setAttribute('src','img/farmer-3431359_1280.jpg');
                this.setAttribute('alt','농사');
            });
}*/

$(document).ready(function(){
    let mainimgsrc;
    let mainimgclass = $('.main_big_img');
   let leftimg=$('.left_black_box').find('img');
    leftimg.on('mouseover',function(){
       let src = $(this).attr('src');
        mainimgsrc = mainimgclass.attr('src');
        mainimgclass.attr('src',src);
    });

    leftimg.on('mouseout',function(){
        mainimgclass.attr('src',mainimgsrc);
    })
});
