$(document).ready(function() {
            $('.allergylist').find('td').on('dblclick', function() {
                var searchname = $(this).text();
                $('#allergy').find('td').each(function(index, element) {
                    let tmpname = $(element).text();
                    if (tmpname.indexOf(searchname) >= 0) {
                        this.style.backgroundColor = 'red';
                    }
                });
            });

            $('.allergylist').find('td').on('click', function() {
                var searchname = $(this).text();
                $('#allergy').find('td').each(function(index, element) {
                    let tmpname = $(element).text();
                    if (tmpname.indexOf(searchname) >= 0) {
                        this.style.backgroundColor = 'rgb(229, 220, 203)';
                    }
                });
            })
        });
