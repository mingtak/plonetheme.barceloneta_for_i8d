(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        // Sticky menu
        jQuery(window).scroll(function () {
            var mainmenu = jQuery("#header_menu.header_is_sticky", "#header");
            if (parseInt(mainmenu.attr("rel"),10) <= Math.abs(parseInt(jQuery(window).scrollTop()),10)) {
                mainmenu.addClass("fixed");
            } else {
                mainmenu.removeClass("fixed");
            }
        });

        // Sticky sidebar
        jQuery(".sidebar_area").theiaStickySidebar({
            additionalMarginTop: 65
        });


    });

})(jQuery);
