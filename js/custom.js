jQuery(function () {
    jQuery(window).scroll(function () {
        var hh = jQuery("#navbar .container-fluid").outerHeight();
        if (jQuery(this).scrollTop() > 50) {
            jQuery('#navbar').css({
                'position' :'fixed',
                'width': '100%',
                'top' : 0
            });

            jQuery("#navbar").addClass("sticky");
            jQuery("#header_placeholder").removeClass("hidden").css("height", hh);
            jQuery(".logo .content .img-purple").addClass("hidden");
            jQuery(".logo .content .img-white").removeClass("hidden");

        } else if (jQuery(this).scrollTop() <= 50) {
            jQuery('#navbar').css('position', 'relative');
            // jQuery('#navbar').slideUp();
            jQuery("#navbar").removeClass("sticky");
            jQuery("#header_placeholder").addClass("hidden");
            jQuery(".logo .content .img-white").addClass("hidden");
            jQuery(".logo .content .img-purple").removeClass("hidden");


        }
    });



});