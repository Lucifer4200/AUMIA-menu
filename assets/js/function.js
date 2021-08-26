(function ($) {
    'use strict';

    $(document).ready(function() {
        $('button.site-header__navigation').click(function() {
            $('.menu-item').toggleClass('active')
            $('.item-list li').toggleClass('fade_all')
            $('button.btn--clear').toggleClass('show_icon')
        })
    })

    // jquery ui accordion
    $(document).ready(function() {
        $("#menu").accordion({collapsible: true, active: false});
    });
    $(document).ready(function() {
        $("#menuOne").accordion({collapsible: true, active: false});
    });

})(jQuery);
