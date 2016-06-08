jQuery(document).ready(function () {
    stickyHeader();

});
function stickyHeader() {
    jQuery(window).scroll(function () {
        if (jQuery(document).scrollTop() > 0) {
            jQuery('#navbar').addClass('sticky');
        } else {
            jQuery('#navbar').removeClass('sticky');
        }
    });
}
jQuery(function () {
    var reposition = function (el, after) {
        jQuery(el).detach().insertAfter(jQuery(after));
    };
    reposition(".sm-number", "#block-coachhire-help-logo");
    jQuery(".navbar-toggle").click(function () {
        jQuery(this).toggleClass("collapsed");
    })

});