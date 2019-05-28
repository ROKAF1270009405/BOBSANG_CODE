$(document).ready(function () {
    $('.allergylist').find('td').on('click', function () {
        let list_this = this;
        let searchname = $(list_this).text();
        let color;
        let fontweight;
        let fontsize;
        if ($(list_this).css('background-color') == 'rgba(0, 191, 255, 0.5)') {
            color = 'rgba(0, 0, 0, 0)';
            fontweight = 'lighter';
            fontsize = '20px';
        } else {
            color = 'rgba(0, 191, 255, 0.5)';
            fontweight = 'bold';
            fontsize = '30px';
        }
        $('#allergy').find('td').each(function (index, element) {
            let tmpname = $(element).text();
            if (tmpname.indexOf(searchname) >= 0) {
                this.style.backgroundColor = color;
                this.style.fontWeight = fontweight;
                this.style.fontSize = fontsize;
            }
        });
    });
});
