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

$(document).ready(function () {
    let mainimgsrc;
    let mainimgclass = $('.main_big_img');
    let leftimg = $('.left_black_box').find('img');
    leftimg.on('mouseover', function () {
        let src = $(this).attr('src');
        mainimgsrc = mainimgclass.attr('src');
        mainimgclass.attr('src', src);

    });



    const all = ele => document.querySelectorAll(ele)
    const one = ele => document.querySelector(ele)
    const slide = _ => {
        const wrap = one('.slide') // .slide 선택
        const target = wrap.children[0] // .slide ul 선택
        const len = target.children.length // .slide li 갯수
        // .slide ul의 너비 조정
        target.style.cssText = `width:calc(100% * ${len});display:flex;transition:1s;`
        // .slide li의 너비 조정
        Array.from(target.children)
            .forEach(ele => ele.style.cssText = `width:calc(100% / ${len});`)

        let pos = 0
        setInterval(() => {
            pos = (pos + 1) % len // 장면 선택
            target.style.marginLeft = `${-pos * 100}%` // 장면 전환
        }, 4000) // 1500 = 1500ms = 1.5sec. 즉, 1.5초 마다 실행

    }
    window.onload = function () {
        slide()
    }





    //
    //    leftimg.on('mouseout',function(){
    //        mainimgclass.attr('src',mainimgsrc);
    //    })
    //    leftimg.on('mouseout',function(){
    //        mainimgclass.attr('src',mainimgsrc);
    //    })
});
