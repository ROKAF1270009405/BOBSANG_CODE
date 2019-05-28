$(document).ready(function () {
    $('.allergylist').find('td').on('click', function () {
        let list_this = this;
        let searchname = $(list_this).text();
        let color;
        if ($(list_this).css('background-color') == 'rgb(255, 0, 0)') {
            color = 'rgba(0, 0, 0, 0)';
        } else {
            color = 'rgb(255, 0, 0)';
        }
        $('#allergy').find('td').each(function (index, element) {
            let tmpname = $(element).text();
            if (tmpname.indexOf(searchname) >= 0) {
                this.style.backgroundColor = color;
            }
        });
    });
});
